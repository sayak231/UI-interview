const main = (listOfRestaurants) => {
  let tempListOfRestaurants = [
    ...listOfRestaurants.map((res) => ({ ...res, isSelected: false })),
  ];

  let current_page = 1;
  let records_per_page = 3;
  const prevButton = document.getElementById("button_prev");
  const nextButton = document.getElementById("button_next");

  //optional --> controls opacity of the page numbers
  const selectedPage = () => {
    let page_number = document
      .getElementById("page_number")
      .getElementsByClassName("clickPageNumber");
    for (let i = 0; i < page_number.length; i++) {
      if (i == current_page - 1) {
        page_number[i].style.opacity = "1.0";
      } else {
        page_number[i].style.opacity = "0.5";
      }
    }
  };

  // optional --> controls opacity of the prev and next button
  const checkButtonOpacity = () => {
    current_page == 1
      ? prevButton.classList.add("opacity")
      : prevButton.classList.remove("opacity");
    current_page == numPages()
      ? nextButton.classList.add("opacity")
      : nextButton.classList.remove("opacity");
  };

  // gets the page number and calculates the records for that page and generates the view.
  const changePage = (page) => {
    if (page < 1) {
      page = 1;
    }
    if (page > numPages() - 1) {
      page = numPages();
    }
    const temp = [];
    for (
      var i = (page - 1) * records_per_page;
      i < page * records_per_page && i < tempListOfRestaurants.length;
      i++
    ) {
      temp.push(tempListOfRestaurants[i]);
    }
    generateView(temp);
    checkButtonOpacity();
    selectedPage();
  };

  // on click of prev button currentpage is decremented
  const prevPage = () => {
    if (current_page > 1) {
      current_page--;
      changePage(current_page);
    }
  };

  // on click of next button currentpage is incremented
  const nextPage = () => {
    if (current_page < numPages()) {
      current_page++;
      changePage(current_page);
    }
  };

  // function to populate the page number based on no. of records.
  const pageNumbers = () => {
    let pageNumber = document.getElementById("page_number");
    pageNumber.innerHTML = "";

    for (let i = 1; i < numPages() + 1; i++) {
      pageNumber.innerHTML += "<span class='clickPageNumber'>" + i + "</span>";
    }
  };

  // function to call number of pages based on no. of records and records per page
  const numPages = () => {
    return Math.ceil(tempListOfRestaurants.length / records_per_page);
  };

  const search = (value) => {
    if (value === "") {
      changePage(1);
    } else {
      let searchedResults = tempListOfRestaurants.filter((res) => {
        return res.name.toLowerCase().includes(value.toLowerCase());
      });
      generateView(searchedResults);
    }
  };

  const debounce = (fn, delay) => {
    let timeout;
    return function () {
      clearTimeout(timeout);
      timeout = setTimeout(() => fn.apply(this, arguments), delay);
    };
  };

  const debouncedSearched = debounce(search, 300);

  const generateRow = (element) => {
    return `<tr id="${element.id}"><td class="table"><input type="checkbox" ${
      element.isSelected ? "checked" : ""
    } id="checkbox-${element.id}" /></td>
        <td class="table">${element.name}</td>
        <td class="table">${element.location}</td>
        <td class="table">${element.rating}</td>
        <td class="table">${element.eta}</td>
        <td class="table">${element.tags.join(", ")}</td>
        </tr>`;
  };

  const generateView = (list) => {
    let listTable = "";
    if (list.length) {
      listTable = `<table id='list'>
        <thead>
          <tr>
            <th class="table"></th>
            <th class="table">Name</th>
            <th class="table">Location</th>
            <th class="table">Rating</th>
            <th class="table">ETA</th>
            <th class="table">Tags</th>
          </tr>
        </thead>
        <tbody>`;
      list.map((res) => {
        listTable += generateRow(res);
      });
      listTable += `</tbody></table>`;
    } else listTable += "No restaurants available";
    document.getElementById("list-container").innerHTML = listTable;
  };

  const onSelect = (e) => {
    const index = tempListOfRestaurants.findIndex(
      (res) => res.id === parseInt(e.target.id.split("-")[1])
    );
    if (e.target.id.includes("checkbox") && e.target.checked) {
      tempListOfRestaurants[index].isSelected = true;
    } else if (e.target.id.includes("checkbox") && !e.target.checked) {
      tempListOfRestaurants[index].isSelected = false;
    }
    console.log(tempListOfRestaurants);
  };

  const deleteRestaurants = () => {
    tempListOfRestaurants = tempListOfRestaurants.filter(
      (res) => !res.isSelected
    );
    if (current_page > numPages()) current_page = numPages();
    changePage(current_page);
    pageNumbers();
    selectedPage();
  };

  const onSortBy = () => {
    const attribute = document.getElementById("sort-by").value;
    if (attribute === "Name") {
      tempListOfRestaurants.sort((a, b) => a.name.localeCompare(b.name));
    } else if (attribute === "Rating") {
      tempListOfRestaurants.sort((a, b) => b.rating - a.rating);
    } else tempListOfRestaurants.sort((a, b) => a.eta - b.eta);
    current_page = 1;
    changePage(current_page);
  };

  document.getElementById("search").addEventListener("keyup", () => {
    const val = document.getElementById("search").value;
    debouncedSearched(val);
  });
  document.getElementById("button_prev").addEventListener("click", prevPage);
  document.getElementById("button_next").addEventListener("click", nextPage);
  document.addEventListener("click", (e) => {
    if (
      e.target.nodeName == "SPAN" &&
      e.target.classList.contains("clickPageNumber")
    ) {
      current_page = e.target.textContent;
      changePage(current_page);
    }
  });
  document.getElementById("list-container").addEventListener("click", onSelect);
  document
    .getElementById("delete")
    .addEventListener("click", deleteRestaurants);
  document.getElementById("sort-by").addEventListener("change", onSortBy);

  changePage(1);
  pageNumbers();
  selectedPage();
};

const getData = async () => {
  const response = await fetch("../my-food-delivery/data.json");
  if (response) {
    const list = await response.json();
    main(list);
  } else {
    document.getElementById("list-container").innerHTML =
      "No response from API";
  }
};
getData();

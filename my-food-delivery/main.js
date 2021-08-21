const getCard = (cardObj) => {
  const { id, name, location, rating, eta, tags, photo, isFav } = cardObj;
  return `
        <div id="card-${id}" class="card">
        <img class="card-img" src="${photo}" />
        <div class="container">
          <h4><b>Name : - ${name}</b></h4>
          <p>Location :- ${location}</p>
          <p>Rating :- ${rating}</p>
          <p>ETA :- ${eta}</p>
          <p>Tags :- ${tags.join(", ")}</p>
        </div>
        <div id="${id}" class="fav fav-${isFav}">
            Fav
        </div>
      </div>
    `;
};

const generateView = (list, favourites) => {
  let cardContainer = "";
  if (list.length) {
    list.map((restaurant) => {
      if (favourites.includes(restaurant.id)) {
        restaurant.isFav = true;
      }
      cardContainer += getCard(restaurant);
    });
    document.querySelector(".cards-container").innerHTML = cardContainer;
  } else {
    document.querySelector(".cards-container").innerHTML =
      "No restaurants found";
  }
};

const searchRestaurants = (list, favourites) => {
  const searchValue = document.querySelector("#search-box").value;
  const searchedList = list.filter(({ name }) =>
    name.toLowerCase().includes(searchValue.toLowerCase())
  );
  generateView(searchedList, favourites);
};

function debounce(fn, wait) {
  let t;
  return function () {
    clearTimeout(t);
    t = setTimeout(() => fn.apply(this, arguments), wait);
  };
}

const debouncedSearch = debounce(searchRestaurants, 300);

const sortBy = (list, attribute) => {
  if (attribute === "name") {
    return list.sort((a, b) =>
      a[attribute].toLowerCase().localeCompare(b[attribute].toLowerCase())
    );
  }
  return list.sort((a, b) => a[attribute] - b[attribute]);
};

const generateFilterOptions = (tags) => {
  let element =
    "<option value='' selected disabled hidden>Choose here</option>";
  tags.forEach((tag) => {
    element += `<option value="${tag}">${tag}</option>`;
  });
  return element;
};

const generateTagsOptions = (list) => {
  let allTags = new Set();
  list.forEach((res) => {
    res.tags.forEach((tag) => {
      allTags.add(tag);
    });
  });
  allTags = [...allTags];
  document.getElementById("filter-by").innerHTML =
    generateFilterOptions(allTags);
};

const filterBy = (list, tag) => {
  return list.filter((res) => res.tags.includes(tag));
};

const reset = (id) => {
  const dropDown = document.getElementById(id);
  dropDown.selectedIndex = 0;
};

const main = (list) => {
  let listOfRestaurants = list.map((res) => ({ ...res, isFav: false }));

  let favourites = [],
    showAllFavourites = false;
  if (localStorage.getItem("favourites") !== null) {
    favourites = JSON.parse(localStorage.getItem("favourites"));
  }

  generateTagsOptions(listOfRestaurants);

  generateView(listOfRestaurants, favourites);

  let manipulatingListOfRestaurants = listOfRestaurants;

  document.querySelector("#search-box").addEventListener("keyup", () => {
    reset("filter-by");
    reset("sort-by");
    debouncedSearch(listOfRestaurants, favourites);
  });

  document.querySelector("#sort-by").addEventListener("change", () => {
    const filterAttribute = document.getElementById("filter-by").value;
    let filteredList = listOfRestaurants;
    if (filterAttribute.length) {
      filteredList = filterBy(listOfRestaurants, filterAttribute);
    }
    const sortAttribute = document.getElementById("sort-by").value;
    const sortedList = sortBy(filteredList, sortAttribute);
    manipulatingListOfRestaurants = sortedList;
    generateView(sortedList, favourites);
  });

  document.querySelector("#filter-by").addEventListener("change", () => {
    const sortAttribute = document.getElementById("sort-by").value;
    let sortedList = listOfRestaurants;
    if (sortAttribute.length) {
      sortedList = sortBy(listOfRestaurants, sortAttribute);
    }
    const filterAttribute = document.getElementById("filter-by").value;
    const filteredList = filterBy(sortedList, filterAttribute);
    manipulatingListOfRestaurants = filteredList;
    generateView(filteredList, favourites);
  });

  document.querySelector(".cards-container").addEventListener("click", (e) => {
    const index = manipulatingListOfRestaurants.findIndex(
      (res) => res.id === parseInt(e.target.id)
    );
    if (manipulatingListOfRestaurants[index].isFav === true) {
      favourites = favourites.filter((f) => f !== parseInt(e.target.id));
      manipulatingListOfRestaurants[index].isFav = false;
    } else {
      favourites.push(parseInt(e.target.id));
      manipulatingListOfRestaurants[index].isFav = true;
    }
    localStorage.setItem("favourites", JSON.stringify(favourites));
    generateView(manipulatingListOfRestaurants, favourites);
  });

  document.querySelector("#fav").addEventListener("click", () => {
    showAllFavourites = !showAllFavourites;
    if (showAllFavourites) {
      const favouriteCards = manipulatingListOfRestaurants.filter((card) =>
        favourites.includes(card.id)
      );
      generateView(favouriteCards, favourites);
    } else {
      generateView(manipulatingListOfRestaurants, favourites);
    }
    document.querySelector("#fav").classList.toggle("fav-true");
  });
};

//-----------------------------------------------------------------------------------------------------------------------------------

//-----------------------------------------------------------------------------------------------------------------------------------

const getData = async () => {
  const response = await fetch("./data.json");
  console.log(response);
  if (response) {
    const listOfRestaurants = await response.json();
    main(listOfRestaurants);
  } else {
    document.querySelector(".cards-container").innerHTML =
      "No restaurants found";
  }
};
getData();

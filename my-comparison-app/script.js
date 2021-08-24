const flatten = (obj, parent) => {
  const finalObj = {};
  const magic = (obj, parent, finalObj) => {
    for (let key in obj) {
      if (typeof obj[key] === "object") {
        magic(obj[key], parent + "_" + key, finalObj);
      } else {
        finalObj[parent + "_" + key] = obj[key];
      }
    }
  };
  magic(obj, parent, finalObj);
  return finalObj;
};

const main = (data) => {
  const select1 = document.getElementById("prod-1");
  const select2 = document.getElementById("prod-2");

  const { compareSummary, featuresList } = data;

  const flattenedCompareSummary = flatten(compareSummary, "prod");
  const flattenedFeaturesList = flatten(featuresList, "prod");
  const combinedProducts = {
    ...flattenedCompareSummary,
    ...flattenedFeaturesList,
  };

  const products = Object.keys(compareSummary?.titles);

  const populateDropdowns = () => {
    let list1 =
        "<option value='' selected disabled hidden>Choose here</option>",
      list2 = "<option value='' selected disabled hidden>Choose here</option>";

    for (let i = 0; i < products.length; i++) {
      if (i === 0) {
        list1 += `<option value="${products[i]}">${products[i]}</option>`;
      } else if (i === 1) {
        list2 += `<option value="${products[i]}">${products[i]}</option>`;
      } else {
        list1 += `<option value="${products[i]}">${products[i]}</option>`;
        list2 += `<option value="${products[i]}">${products[i]}</option>`;
      }
    }

    select1.innerHTML = list1;
    select2.innerHTML = list2;
    document.querySelector("#table-list").innerHTML =
      "Please choose two products from the above dropdown lists";
  };

  const onChangeDropdowns1 = (e) => {
    console.log("onChangeDropdowns", e.target.id, select1.value, select2.value);
    let list2 =
      "<option value='' selected disabled hidden>Choose here</option>";

    for (let i = 0; i < products.length; i++) {
      if (select1.value !== products[i]) {
        list2 += `<option value="${products[i]}">${products[i]}</option>`;
      }
    }
    select2.innerHTML = list2;
    document.querySelector("#table-list").innerHTML = "";
    document.querySelector("#table-list").innerHTML =
      "Please choose second product from second dropdown.";
  };

  const onChangeDropdowns2 = (e) => {
    console.log("onChangeDropdowns", e.target.id, select1.value, select2.value);
    renderFeatures();
  };

  const renderFeatures = () => {
    const selected1 = select1.value;
    const selected2 = select2.value;

    let tableList = `<thead>
            <tr>
              <th style="border: 1px solid black;" align="left"></th>
              <th style="border: 1px solid black;" align="center">
                <img
                  height="100"
                  width="100"
                  src="${combinedProducts[`prod_images_${selected1}`]}"
                />
              </th>
              <th style="border: 1px solid black;" align="center">
                <img
                  height="100"
                  width="100"
                  src="${combinedProducts[`prod_images_${selected2}`]}"
                />
              </th>
            </tr>
            <tr>
              <th style="border: 1px solid black;" align="left">Properties</th>
              <th style="border: 1px solid black;" align="left">
                <div style="display: flex; flex-direction: column">
                <span>Title :- ${
                  combinedProducts[`prod_titles_${selected1}_title`]
                }</span><br/>
                <span>Subtitle :- ${
                  combinedProducts[`prod_titles_${selected1}_subtitle`]
                    ? combinedProducts[`prod_titles_${selected1}_subtitle`]
                    : "No Subtitle"
                }</span><br/>
                  <span>Price :- ${
                    combinedProducts[
                      `prod_productPricingSummary_${selected1}_price`
                    ]
                  }</span><br/>
                  <span>Discount :- ${
                    combinedProducts[
                      `prod_productPricingSummary_${selected1}_totalDiscount`
                    ]
                  }%</span><br/>
                  <span>Final Price :- ${
                    combinedProducts[
                      `prod_productPricingSummary_${selected1}_finalPrice`
                    ]
                  }</span><br/>
                </div>
              </th>
              <th style="border: 1px solid black;" align="left">
                <div style="display: flex; flex-direction: column">
                <span>Title :- ${
                  combinedProducts[`prod_titles_${selected2}_title`]
                }</span><br/>
                <span>Subtitle :- ${
                  combinedProducts[`prod_titles_${selected2}_subtitle`]
                    ? combinedProducts[`prod_titles_${selected2}_subtitle`]
                    : "No Subtitle"
                }</span><br/>
                  <span>Price :- ${
                    combinedProducts[
                      `prod_productPricingSummary_${selected2}_price`
                    ]
                  }</span><br/>
                  <span>Discount :- ${
                    combinedProducts[
                      `prod_productPricingSummary_${selected2}_totalDiscount`
                    ]
                  }%</span><br/>
                  <span>Final Price :- ${
                    combinedProducts[
                      `prod_productPricingSummary_${selected2}_finalPrice`
                    ]
                  }</span><br/>
                </div>
              </th>
            </tr>
          </thead>`;

    tableList += "<tbody>";

    let i = 0,
      j = 0;
    while (combinedProducts[`prod_${i}_title`] !== undefined) {
      tableList += `<tr>
              <td style="border: 1px solid black; background-color: aliceblue;" align="center" colspan="3">${
                combinedProducts[`prod_${i}_title`]
              }</td>
            </tr>`;
      while (
        combinedProducts[`prod_${i}_features_${j}_featureName`] !== undefined
      ) {
        tableList += `<tr>
            <td style="border: 1px solid black;" align="left">${
              combinedProducts[`prod_${i}_features_${j}_featureName`]
            }</td>
            <td style="border: 1px solid black;" align="left">${
              combinedProducts[`prod_${i}_features_${j}_values_${selected1}`]
            }</td>
            <td style="border: 1px solid black;" align="left">${
              combinedProducts[`prod_${i}_features_${j}_values_${selected2}`]
            }</td>
          </tr>`;
        j++;
      }
      i++;
      j = 0;
    }
    tableList += "</tbody></table>";

    document.querySelector("#table-list").innerHTML = tableList;
  };

  populateDropdowns();

  select1.addEventListener("change", onChangeDropdowns1);
  select2.addEventListener("change", onChangeDropdowns2);

  console.log(combinedProducts, products);
};

const getData = async () => {
  const apiUrl = "https://demo2837922.mockable.io/flipkart-compare";
  const response = await fetch(apiUrl);
  if (response) {
    const data = await response.json();
    main(data?.products);
  } else {
    document.getElementsByTagName("body").innerHTML = "No data available";
  }
};
getData();

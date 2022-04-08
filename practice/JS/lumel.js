const input = {
  dimensions: [
    {
      id: "dimension_re",
      values: ["East", "East", "West", "SouthWest", "South", "NorthEast"],
    },
    {
      id: "dimension_cnt",
      values: ["London", "Italy", "Germany", "US"],
    },
  ],
  measures: [
    {
      id: "measure_sales",
      values: [100, 156, 432, 462, 25, 100],
    },
    {
      id: "measure_qty",
      values: [85, 34, 153, 434, 52, 43],
    },
    {
      id: "measure_profit",
      values: [123, 45, 421, 465, 451],
    },
  ],
  metadata: [
    {
      id: "measure_sales",
      label: "Sales",
      type: "number",
    },
    {
      id: "measure_qty",
      label: "Quantity",
      type: "number",
    },
    {
      id: "measure_profit",
      label: "Profit",
      type: "number",
    },
    {
      id: "dimension_re",
      label: "Region",
      type: "string",
    },
    {
      id: "dimension_cnt",
      label: "County",
      type: "string",
    },
  ],
};

const output = [
  {
    Region: "East",
    County: "London",
    Sales: 100,
    Quantity: 85,
    Profit: 123,
  },
  {
    Region: "East",
    County: "Italy",
    Sales: 156,
    Quantity: 34,
    Profit: 45,
  },
  {
    Region: "West",
    County: "Germany",
    Sales: 432,
    Quantity: 153,
    Profit: 421,
  },
  {
    Region: "SouthWest",
    County: "US",
    Sales: 462,
    Quantity: 434,
    Profit: 465,
  },
  {
    Region: "South",
    County: "Russia",
    Sales: 25,
    Quantity: 52,
    Profit: 451,
  },
  {
    Region: "NorthEast",
    County: "India",
    Sales: 100,
    Quantity: 43,
    Profit: 56,
  },
];

const flattenObj = (obj, parent) => {
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

const flattenedInput = flattenObj(input, "");
console.log(flattenedInput);

//-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------

function convertData(input) {
  const metaDataObj = {};
  const inputValueObj = {};
  const outputData = [];

  for (const meta of input.metadata) {
    metaDataObj[meta.id] = meta;
  }

  Object.keys(input).forEach((key) => {
    if (key !== "metadata") {
      for (const inputVal of input[key]) {
        inputValueObj[metaDataObj[inputVal.id].label] = inputVal.values;
      }
    }
  });

  for (const key in inputValueObj) {
    inputValueObj[key].forEach((item, index) => {
      outputData[index] = {
        ...outputData[index],
        [key]: item,
      };
    });
  }

  return outputData;
}
console.log(convertData(input));

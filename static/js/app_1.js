// import data from data.js
// const keeps tableData always linked to the data page. The variable cannot eb reassigned or reused in the rest of the program. 
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// function to build table
function buildTable(data) {
    // this clears the data by referncing the table in html and setting the table body to "" or empty. Using an empty string is the standard way to clear data.
    tbody.html("");

    // loop through data with forEach. forEach only works with arrays. forEach uses a callback function. Callback functions are applied to each of the items in your array [list]. Callbacks can be anonymous, arrow functions, or named functions. 
    // connect to data.js and loop through each row in the data.js file
    data.forEach(dataRow => {
        // add a row to the table body. Using let only sets the variable within this function or block of code. If you used row outside of this it would not return the same result. 
        // this line says "find the table body tag <tbody> within the html code and add a <tr> inside the <tbody>"
        let row = tbody.append("tr");
        
        // objects in JS are like dictionaries. Object.values tells js to reference a singel object from the data.js file. Passing dataRow says add the value as a dataRow and forEach says that we want one object per row. Essentially we are going to put one object {dictionary} into one row of the table we are creating. 
        Object.values(dataRow).forEach((val) => {
            // append the data into a cell within the row we set up in line 18 <td> is table data in html
            let cell = row.append("td");
            // set the text in the cell to the value we get from each object. Should be a value for the key? Keys will be column headers?
            cell.text(val);
            //might need to change where these brackets are
        });
    });
}


// function to handle clicks and filters
function handleClick() {

    // add variables for dates
    // select the element with ID datetime and get the value from that element
    let date = d3.select("#datetime").property("value");

    // set default filter for the updated table data based on the filter. We are starting with the original const table data that we set in the first line of the code. 
    let filteredData = tableData;

    // check if date has been set if not return all data
    if (date) { 
        
        // look at each datetime row in the data and if the date value matches keep that data 
        //'===' is strict equality which means the types have to match vs '==' which is loose equality so types do not have to match. 
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // create table from the filtered data
    // call buildTable() @NOTE: if no data entered, filteredData will be original table data
    buildTable(filteredData);
};

// listen for button click on filter button
d3.selectAll('#filter-btn').on("click", handleClick);

// build the original table on page load
buildTable(tableData);

 // console.log("The value is: " + d3.event.target.value) // this doesn't work
  // also if I provide a parameter and then reference the parameter I get undefined. 
  // I don't understand why this is different than what we were doing in 11-07

  var test_object = Object()

  function printValue() {
 
  let x = d3.select(this)
  let newValue = x.property("value") // this works to get the element - it returns an array
  let elementChanged = x.property("id") 
  // let x = this.value
  
  test_object[elementChanged] = newValue // whatever comes after the . becomes the key name so how can I reference the key name either directly or as a variable? - doing it this way the key = 'elementChanged' and not the value of the variable.

  console.log(test_object) // this works
  };

  //this function returns undefined
// function reviewChange() {
//   console.log(d3.event.target);
// }

// set variable for change to datetime - testing function
//let dateChanges = d3.select("#datetime");
// dateChanges.on("change", printValue);

// set variable for change to city - testing function
// let cityChanges = d3.select("#city");

// returns "cannot get value from undefined"
// cityChanges.on("change", function() {
//   console.log("input was changed");
//   var newCity = d3.event.target.value;
//   console.log(newCity);
// });

// date.on("change", printValue);
  // city.on("change", updateFilters);
  // state.on("change", updateFilters);
  // country.on("change", updateFilters);
  // shape.on("change", updateFilters);
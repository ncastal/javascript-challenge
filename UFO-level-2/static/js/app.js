// from data.js
var tableData = data;

var tbody=d3.select("tbody");
var button=d3.select(".btn-default");
var input=d3.select("#filters")


// YOUR CODE HERE!

tableData.forEach((ufoSighting) =>{
    var row = tbody.append('tr');
    Object.entries(ufoSighting).forEach(([key,value] )=> {
        var cell = row.append("td");
        cell.text(value);
    })
})
//filter function on multiple conditions
function date(data){
    //captures users input
    var filterProp={
        "datetime":d3.select("#datetime").property("value"),
        "city":d3.select("#city").property("value"),
        "state":d3.select("#state").property("value"),
        "country":d3.select("#country").property("value"),
        "shape":d3.select("#shape").property("value"),
    }
    //stores only the filters that have values
    var filters={}
    for(prop in filterProp){
        if (filterProp.hasOwnProperty(prop)){
            if (filterProp[prop]=== undefined || filterProp[prop]==="" || filterProp[prop]===null){
               console.log("no value")
            }
            else {
                filters[prop]=filterProp[prop];
            }
        }

    }
    //returns data that fits the user given filters
    const filterKeys = Object.keys(filters);
    return filterKeys.every(key => {
        return filters[key].includes(data[key])
    })
};
//if button is clicked
button.on("click", function() {

    var filteredData= tableData.filter(date)
    var tremove= d3.select("tbody").remove()
    var tbody = d3.select("table").append("tbody")
    
    filteredData.forEach((ufoSightingFiltered) =>{
        var row = tbody.append('tr');
        Object.entries(ufoSightingFiltered).forEach(([key,value] )=> {
            var cell = row.append("td");
            cell.text(value);
        })

    })
});

//if enter key is hit on input tag
input.on("keydown", function(){
    if (event.keyCode===13) {
        event.preventDefault();

        var filteredData = tableData.filter(date);
        var tremove = d3.select("tbody").remove();
        var tbody = d3.select("table").append("tbody");

        filteredData.forEach((ufoSightingFiltered) => {
            var row = tbody.append('tr');
            Object.entries(ufoSightingFiltered).forEach(([key,value]) =>{
                var cell = row.append("td");
                cell.text(value);
            })
        })
    
    }
})
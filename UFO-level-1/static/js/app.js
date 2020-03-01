// from data.js
var tableData = data;

var tbody=d3.select("tbody");
var button=d3.select(".btn-default");


// YOUR CODE HERE!

tableData.forEach((ufoSighting) =>{
    var row = tbody.append('tr');
    Object.entries(ufoSighting).forEach(([key,value] )=> {
        var cell = row.append("td");
        cell.text(value);
    })
})

button.on("click", function() {
    console.log("Filter Button Press");

    function date(data){    
        var inputElement=d3.select("#datetime");
        var inputValue = inputElement.property("value");
        console.log(inputValue)
        return data.datetime === inputValue
    };
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
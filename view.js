var margin = {top: 30, right: 20, bottom: 30, left: 50},
	width = 900 - margin.left - margin.right,
	height = 600 - margin.top - margin.bottom;

var svg = d3.select("body")
    .append("svg")
        .attr("width", width + margin.left + margin.right)
        .attr("height", height + margin.top + margin.bottom)
    .append("g")
        .attr("transform", 
              "translate(" + margin.left + "," + margin.top + ")");

var x = d3.time.scale().range([0, width]);
var y = d3.scale.linear().range([height, 0]);

// Define the axes
var xAxis = d3.svg.axis().scale(x)
	.orient("bottom").ticks(20);

var yAxis = d3.svg.axis().scale(y)
	.orient("left").ticks(20);

// Define the line
var valueline = d3.svg.line()
	.x(function(d) { return x(d.date); })
	.y(function(d) { return y(d.unemployment); });

function drawAxis(dataTX){
    // Scale the range of the data
x.domain(d3.extent(dataTX, function(d) { return d.date; }));
y.domain([0, d3.max(dataTX, function(d) { return d.unemployment; })]);
	
	    // Add the X Axis
svg.append("g")
    .attr("class", "x axis")
    .attr("transform", "translate(0," + height + ")")
    .call(xAxis);

    // Add the Y Axis
svg.append("g")
    .attr("class", "y axis")
    .call(yAxis);
}

function drawChart(dataTX){

//console.log(dataTX);
    // Add the valueline path.
svg.append("path")
    .attr("class", "line")
    .attr("d", valueline(dataTX));


    // Draw circles    
svg.append("g").selectAll("circle")
  .data(dataTX).enter()
//.data(dataTX)
  .append("circle") 
  .attr("stroke", "#000")
  .attr("fill", function(d,i){
    if (d.unemployment<5){
//      console.log("mothafuckah!");
      return "#0f0";}
    else if (d.unemployment>=5 && d.unemployment<8)
      return "#ff0";
    else
      return "#f00";
  })
  .attr("cx", function(d){
//    console.log("CX"+x(d.date));
    return x(d.date);
  })
  .attr("cy", function(d){
//    console.log("CY"+y(d.unemployment));
    return y(d.unemployment);
  })
  .attr("r", function(d){
//    console.log("R"+Math.pow(d.unemployment, 0.8));
    return Math.pow(d.unemployment, 0.8);
  });

svg.selectAll("circle")
.data(dataTX)
.append("title")
.text(function(d){
  return "Unemployment:"+d.unemployment+" State:"+d.State;
});


}

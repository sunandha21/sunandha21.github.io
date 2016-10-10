var parseDate = d3.time.format("%d-%b-%y").parse;
var parseDate2 = d3.time.format("%B-%Y").parse;

var csv_data = []
var statesData=[]
var uniqueStates= []
var selectedStates=[]
var filteredState=[]
var drawData=[]
console.log("hello");

Array.prototype.contains = function(v) {
    for(var i = 0; i < this.length; i++) {
        if(this[i] === v) return true;
    }
    return false;
};

Array.prototype.unique = function() {
    var arr = [];
    for(var i = 0; i < this.length; i++) {
        if(!arr.contains(this[i])) {
            arr.push(this[i]);
        }
    }
    return arr; 
}

function checkClick(index,box){
	setTimeout(function(){
		console.log(box.checked);
	},0);
	selectedStates.push(index);
//	console.log(selectedStates);
}

d3.csv("unemployment.csv", function(data) {
	data.forEach(function(d) {
		csv_data.push(d);
	});
	csv_data.forEach(function(d) {
		d.date = parseDate2(d.Month+"-"+d.Year);
		d.state = d.State;
		d.unemployment = +d["Unemployment_rate"];
	});
	for(var i=0;i<csv_data.length;i++){
		statesData.push(csv_data[i].state);
	}
	var temp = statesData.unique();
	for(var i=0;i<temp.length;i++){
		uniqueStates.push(temp[i]);
	}
	for(var i=0;i<uniqueStates.length;i++) {
//		var cbox = document.getElementById("checkbox");
//		cbox.innerHTML='<input type="checkbox" id = "chck" name="v" value="0" checked>';
//		var cboxinp = document.getElementById("chck");
//		cboxinp.innerHTML='<label id ="item" for="chck"></label>'
//		var cboxlbl = document.getElementById("item");
//		cboxlbl.innerHTML = uniqueStates[i];
//		console.log(cboxlbl);
		var container = document.getElementById("checkbox");
		var cbox = document.createElement('input');
		cbox.type = "checkbox";
		cbox.name = "name"+i.toString();
		cbox.id = "id" + i.toString();
		cbox.checked=false;
		cbox.onclick = function(){
			console.log(this.id);
			if((document.getElementById(this.id).checked)){
				document.getElementById(this.id).checked = true;
				console.log("reten");
				var temp=this.id.split("id");
				var index = +temp[1];
				selectedStates.push(uniqueStates[index]);
			}
			else if(!document.getElementById(this.id).checked){
				document.getElementById(this.id).checked = false;
				console.log("enter");
				var temp=this.id.split("id");
				var index = +temp[1];
				var del = selectedStates.indexOf(uniqueStates[index]);
				if (del > -1) {
					selectedStates.splice(del, 1);
				}
			}
				d3.selectAll("svg > g >*").remove();
			for(var j=0;j<selectedStates.length;j++){
				for(var k=0;k<csv_data.length;k++){
					if(csv_data[k].state == selectedStates[j]){
						drawData.push(csv_data[k]);
					}
				}
				drawData.sort(function(a,b){
					if (a.date<b.date)
						return -1;
					else if (a.date>b.date)
						return 1;
					else
						return 0;
				})
//				console.log(drawData);
				drawAxis(csv_data);
				drawChart(drawData);
				console.log("done drawing");
				drawData = [];
			}
//			console.log(selectedStates);
		};
//		document.addEventListener('DOMContentLoaded', function(){
//			document.getElementById(cbox.id).addEventListener('click', function(){checkClick(i,cbox)});
//		})
		var label = document.createElement('label');
		label.htmlFor = "id"+i.toString();
		label.appendChild(document.createTextNode(uniqueStates[i]));
		
		container.appendChild(cbox);
		container.appendChild(label);
	}
	
	
//	for(var i=0;i<uniqueStates.length;i++){
//		var temp = "id"+i.toString();
//		var cbox = document.getElementById(temp);
//		cbox.onclick = function(){
//			if(!cbox.id.checked){
//				console.log("enter");
//				selectedStates.push(this.id);
//			}
//			console.log(selectedStates);
//		};
////		console.log(cbox.id);
//	}
	
});
//function loading(){
//console.log(uniqueStates[1]);
//document.getElementById("item1").innerHTML = uniqueStates[1];
//}



//function getUnique(){
//	console.log(csv_data.length)
//	for(var i=0; i<csv_data.length; i++){
//		statesData.push(csv_data[i].state);
//	}
////	statesData.push(csv_data.forEach(function(d){
////		return d.state;
////	})
////	);
//}

//getUnique();



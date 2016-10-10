## DATA VISUALIZATION 
## Project 1-Visualizing Time Series Data

### OVERVIEW
In this project, the unemployment rate of all the states of US is visualized in many ways as per the mentioned requirements. The data is collected from this website http://www.bls.gov/. The data is preprocessed and put into aN unemployment.csv file and then used. The unemployment rate of all states from 1978 to 2016 is analyzed.
After extracting the unemployment data, we use d3 java script to implement line graphs, map , slider, zooming options, etc. All these different options enable us to find the relationship between the unemployment rates of different states over different time periods.

###IMPLEMENTATION AND DESIGN
First we implement a US map with name of the states displaying on the map. Then we integrate it with line graph.
The unemployment rate is displayed on Y-axis and the time period is displayed on X-axis.
![ScreenShot](https://github.com/sunandha21/sunandha21.github.io/blob/master/start.PNG)

When a state is selected on map its line graph is displayed with the color corresponding to the color of the map. In the same way there is an option available to select multiple states.
The different colors are given to the map using categorical20 in d3 js.
These state colors are linked with those on the graph by mapping state names of map with state names of the graph.
![ScreenShot](https://github.com/sunandha21/sunandha21.github.io/blob/master/state%20selection.PNG)
Also, when you deselect a state, the graph disappears.

The values on the line graph ie, the Unemployment rate, State name and Date are represented on any point on the graph using tool tip.
![ScreenShot](https://github.com/sunandha21/sunandha21.github.io/blob/master/tooltip.PNG)

A slider is given to to identify the unemployment rate over different periods. Also a Zooming option is provided to zoom over the graph at required points on the graph. For zooming a function named brush is used.
![ScreenShot](https://github.com/sunandha21/sunandha21.github.io/blob/master/zoom.PNG)

National Unemployment rate graph is also shown by providing a checkbox. When the checkbox is clicked the national unemployment rate is displayed. When it is deselected it disappears. National Unemployment rate is calculated by doing average of all the states. It uses a separate csv file. The line graph is displayed in black color.
![ScreenShot](https://github.com/sunandha21/sunandha21.github.io/blob/master/nationalrate.PNG)

Another checkbox of all states is provided to display the line graph of all the states.  When it is deselected all the graphs disappear.
![ScreenShot](https://github.com/sunandha21/sunandha21.github.io/blob/master/allstates%20(1).PNG)

### REFERENCES
Sonia’s data of unemployment rate is used.
D3 brush and tool tip - (https://bl.ocks.org/wrobstory/7612013).
Adding axis and labels to graph - (http://www.d3noob.org/2012/12/adding-axis-labels-to-d3js-graph.html).
Map-(http://bl.ocks.org/mbostock/2206590).
    (https://vida.io/gists/FLFFovRPbu2t5QwQC).
Line graph - (http://bl.ocks.org/mbostock/3883245).
Multi line series - (http://bl.ocks.org/mbostock/3884955).



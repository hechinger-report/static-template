var Plotly = require('plotly.js/lib/core');
var Plotlybar = require('plotly.js/lib/bar');

Plotly.register(Plotlybar);

var countyHomicides = annualTotals.homicides.map(a => a.homicides_total);
var harvardParkHomicides = annualTotals.homicides.map(a => a.homicides_harvard_park);
var years = annualTotals.homicides.map(a => a.year);

function createChart(x, y, element, title) {
    // The code that creates our chart will go here.
    var settings = [{
      x: x,
      y: y,
      type: 'bar',
      marker: {
        color: '#86c7df'
      }
    }];
    var layout = {
      title: title,
      xaxis: {
        title: 'Year',
        fixedrange: true
      },
      yaxis: {
        fixedrange: true
      },
      // Add the margin here
      margin: {
        l: 30,
        r: 15,
        t: 45,
        b: 30
      },
      height: 250
    };

    // Create the chart
    Plotly.newPlot(element, settings, layout, {displayModeBar: false});
}

createChart(years, countyHomicides, 'county-homicides', "County Homicides");
createChart(years, harvardParkHomicides, 'harvard-park-homicides', "Harvard Park Homicides");

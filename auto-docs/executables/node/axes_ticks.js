var plotly = require('plotly')('TestBot', 'r1neazxo9w')

var trace1 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [8, 7, 6, 5, 4, 3, 2, 1, 0], 
  type: "scatter"
};
var trace2 = {
  x: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  y: [0, 1, 2, 3, 4, 5, 6, 7, 8], 
  type: "scatter"
};
var data = [trace1, trace2];
var layout = {
  xaxis: {
    tick0: 0, 
    dtick: 0.25, 
    ticks: "outside", 
    ticklen: 8, 
    tickcolor: "#000", 
    tickwidth: 4, 
    autotick: false
  }, 
  yaxis: {
    tick0: 0, 
    dtick: 0.25, 
    ticks: "outside", 
    ticklen: 8, 
    tickcolor: "#000", 
    tickwidth: 4, 
    autotick: false
  }
};

var graph_options = {filename: "axes-ticks", fileopt: "overwrite", layout: layout, auto_open: "false"}
plotly.plot(data, graph_options, function (err, msg) {
    console.log(msg);
});
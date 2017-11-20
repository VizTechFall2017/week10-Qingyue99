

var width = document.getElementById('svg0').clientWidth;
var height = document.getElementById('svg0').clientHeight;

var marginTop = 40;
var marginLeft = 10;

console.log(width);





var svg0 = d3.select('#svg0')
.append('g');


var defs0 = svg0.append('defs');

defs0.append("pattern")
    .attr("id", "page0")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 0.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);

    //.attr('transform', 'translate('+marginLeft+','+marginTop+')');
var svg1 = d3.select('#svg1')
    .append('g');

var defs1 = svg1.append('defs');

defs1.append("pattern")
    .attr("id", "page1")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 1.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);


var svg2 = d3.select('#svg2')
    .append('g');
var defs2 = svg2.append('defs');

defs2.append("pattern")
    .attr("id", "page2")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 2.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);

var svg3 = d3.select('#svg3')
    .append('g');

var defs3 = svg3.append('defs');

defs3.append("pattern")
    .attr("id", "page3")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 3.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);




var svg4 = d3.select('#svg4')
    .append('g');

var defs4 = svg4.append('defs');

defs4.append("pattern")
    .attr("id", "page4")
    .attr("width", width)
    .attr("height", height)
    .attr("patternUnits", "userSpaceOnUse")
    .append("image")
    .attr("xlink:href", 'Within_Qingyue Li 4.png')
    .attr("width", width)
    .attr("height", height)
    .attr("x", 0)
    .attr("y", 0);



svg0.append('rect')
    .attr('width', width)
.attr('height', height-marginTop)
.attr('fill', 'url(#page0)')
.attr('stroke', 'black');

svg1.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'url(#page1)')
    .attr('stroke', 'black');

svg2.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'url(#page2)')
    .attr('stroke', 'black');

svg3.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'url(#page3)')
    .attr('stroke', 'black');

svg4.append('rect')
    .attr('width', width)
    .attr('height', height-marginTop)
    .attr('fill', 'url(#page4)')
    .attr('stroke', 'black');

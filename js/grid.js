// Get a reference to the <path>
var path = document.querySelector('#line1');
var path2 = document.querySelector('#line2');

var path3 = document.querySelector('#line3');
var path4 = document.querySelector('#line4');

var path5 = document.querySelector('#line5');
var path6 = document.querySelector('#line6');
;

// Get length of path... ~577px in this case
var pathLength = path.getTotalLength();

// Make very long dashes (the length of the path itself)
path.style.strokeDasharray = pathLength + ' ' + pathLength;
path2.style.strokeDasharray = pathLength + ' ' + pathLength;

path3.style.strokeDasharray = pathLength + ' ' + pathLength;
path4.style.strokeDasharray = pathLength + ' ' + pathLength;

path5.style.strokeDasharray = pathLength + ' ' + pathLength;
path6.style.strokeDasharray = pathLength + ' ' + pathLength;

// Offset the dashes so the it appears hidden entirely
path.style.strokeDashoffset = pathLength;
path2.style.strokeDashoffset = pathLength;

path3.style.strokeDashoffset = pathLength;
path4.style.strokeDashoffset = pathLength;

path5.style.strokeDashoffset = pathLength;
path6.style.strokeDashoffset = pathLength;

// Jake Archibald says so
// https://jakearchibald.com/2013/animated-line-drawing-svg/
path.getBoundingClientRect();

// When the page scrolls...
window.addEventListener("scroll", function(e) {

  // What % down is it?
  // https://stackoverflow.com/questions/2387136/cross-browser-method-to-determine-vertical-scroll-percentage-in-javascript/2387222#2387222
  // Had to try three or four differnet methods here. Kind of a cross-browser nightmare.
  var scrollPercentage = (document.documentElement.scrollTop + document.body.scrollTop) / (document.documentElement.scrollHeight - document.documentElement.clientHeight);

  // Length to offset the dashes
  var drawLength = pathLength * scrollPercentage;

  // Draw in reverse
  path.style.strokeDashoffset = pathLength - drawLength *3;
  path2.style.strokeDashoffset = pathLength - drawLength *3;

  path3.style.strokeDashoffset = pathLength - drawLength *4.52;
  path4.style.strokeDashoffset = pathLength - drawLength *4.52;

  path5.style.strokeDashoffset = pathLength - drawLength *5;
  path6.style.strokeDashoffset = pathLength - drawLength *5;


  // When complete, remove the dash array, otherwise shape isn't quite sharp
 // Accounts for fuzzy math
  if (scrollPercentage >= 0.99) {
    path.style.strokeDasharray = "none";

  } else {
    path.style.strokeDasharray = pathLength + ' ' + pathLength;
    path2.style.strokeDasharray = pathLength + ' ' + pathLength;

    path3.style.strokeDasharray = pathLength + ' ' + pathLength;
    path4.style.strokeDasharray = pathLength + ' ' + pathLength;

    path5.style.strokeDasharray = pathLength + ' ' + pathLength;
    path6.style.strokeDasharray = pathLength + ' ' + pathLength;
  }

});

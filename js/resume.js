//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////


/* Hides all sections using class name, except the given one. */
function hideOtherSections(exception) {
  var sections = document.getElementsByTagName('div');
  for (var i=0; i<sections.length; i=i+1) {
    if ((sections[i].className == 'section-show') &&
        (sections[i].id != exception)) {
      sections[i].className = 'section-hide';
    }
  }
}

/* Changes whether a section has visible or hidden style class. */
function changeSectionClass() {
  if (document.layers || document.all || document.getElementById) {
    var inc, endInc = arguments.length;
    // run through the args (objects) and set the visibility of each
    for (inc=0; inc<endInc; inc+=2) {
      // get a good object reference
      var elem = document.getElementById(arguments[inc]);
      var action = arguments[inc+1];
      if (action == 'hidden') {
        // hide the object
        elem.className = 'section-hide';
      } else if (action == 'visible') {
        // show the object
        elem.className = 'section-show';
      } else if (action == 'toggle') {
        // toggle the object's visibility
        if (elem.className == 'section-show') {
          elem.className = 'section-hide';
        } else if (elem.className == 'section-hide') {
          elem.className = 'section-show';
        } else {
          //assume hidden as default (IE bug?)
          elem.className = 'section-show';
        }
      }
    }
  }
}

/* Available, (mostly) web-safe colors for backgrounds. */
   var numColors = 6;
   var bgColors = new Array(numColors);
   bgColors[0] = "996633";   // Brown / Khaki
   bgColors[1] = "CC9933";   // Mustard
   bgColors[2] = "CC6633";   // Light Orange
   bgColors[3] = "999933";   // Light Olive
   //bgColors[4] = "336666";   // Teal
   bgColors[4] = "336699";   // Blue
   //bgColors[4] = "6699CC";   // Light Blue
   //bgColors[4] = "003366";   // Dark Blue
//   bgColors[5] = "993333";   // Other Red (strong)
   //bgColors[5] = "663333";   // Other Purple
   //bgColors[5] = "BB5555";   // Other Red-ish
   bgColors[5] = "992222";   // Other Red
   //bgColors[5] = "CC3333";   //Red
   //bgColors[5] = "996666";   //Sick Purple
   //bgColors[5] = "CC6699";   //Bright Purple
   //bgColors[5] = "996699";   //Lavender
   //bgColors[6] = "FF6666";   //Pink
   //bgColors[3] = "666633";   // Dark Olive
   //bgColors[2] = "993300";   // Dark Orange
   //bgColors[4] = "006600";   // Dark Green
   //bgColors[5] = "333333";   // Dark Slate Gray
   //bgColors[6] = "FFCC33";   // Yellow
   //bgColors[8] = "990000";   // Red

/*
 * Current random color pair value.
 * Set in getBgColor function.
 */
var rand = 1; //Default.

/* Get random background color. */
function getBgColor() {
   rand = Math.floor((Math.random() * numColors));
   return bgColors[rand];
}

/* Available font colors, ordered to complement backgrounds. */
   var fgColors = new Array(numColors);
   fgColors[0] = "CCCCCC";   // for with Brown / Khaki
   fgColors[1] = "000000";   // for with Mustard
   fgColors[2] = "000000";   // for with Light Orange
   fgColors[3] = "000000";   // for with Light Olive
   fgColors[4] = "000000";   // for with Blue
   fgColors[5] = "CCCCCC";   // for with Other Red

/* Get font color to correspond to the current background-color. */
function getFontColor() {
  return "000000"; //default.
  //return fgColors[rand];
}


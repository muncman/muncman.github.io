//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////

//////////
// Original source inspiration for portions of the code used in this page:
// Webmonkey Code Library:
// (http://www.hotwired.com/webmonkey/javascript/code_library/).
//////////


/* Set hidden/visible vars for Netscape 4 compatibility. */
var toggle = "toggle";
var hidden;
var visible;
if (document.all || document.getElementById) {
  hidden = "hidden";
  visible = "visible";
} else if (document.layers) {
  hidden = "hide";
  visible = "show";
}

/* Takes the ID of an HTML element and returns the object's style reference. */
function getStyleRef(id) {
  // Checks for DOM strategy.
  if (document.getElementById) {
    // W3C
    return document.getElementById(id).style;
  } else if (document.all) {
    // IE
    return document.all[id].style;
  } else if (document.layers) {
    // NS
    return document.layers[id];
  }
}

/* Changes whether a layer is visible or hidden. */
function changeVisibility() {
  if (document.layers || document.all || document.getElementById) {
    var inc, endInc = arguments.length;
    // run through the args (objects) and set the visibility of each
    for (inc=0; inc<endInc; inc+=2) {
      // get a good object reference
      var daObj = getStyleRef(arguments[inc]);
      var action = arguments[inc+1];
      if (action == hidden) {
        // hide the object
        daObj.visibility = hidden;
      } else if (action == visible) {
        // show the object
        daObj.visibility = visible;
      } else if (action == toggle) {
        // toggle the object's visibility
        if (daObj.visibility == visible) {
          daObj.visibility = hidden;
        } else if (daObj.visibility == hidden) {
          daObj.visibility = visible;
        } else {
          //assume (visibility == hidden) implicitly (IE bug?)
          daObj.visibility = visible;
        }
      }
    }
  }
}

/* Hides text sets. */
function hideText() {
  if (document.layers || document.all || document.getElementById) {
    var endInc = arguments.length;
    for (var inc=0; inc<endInc; ++inc) {
      var daObj = getStyleRef(arguments[inc]);
      daObj.visibility = hidden;
    }
  }
}

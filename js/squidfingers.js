/* From http://squidfingers.com/code/snippets/ */

// --------------------------------------------------
// Name: Get CSS Property
// Language: JavaScript
// Author: Travis Beckham | squidfingers.com
// Description: Retrieve a CSS property from inline and external sources
// Compatibility: IE4+, NS6+, Safari 1.3+
// --------------------------------------------------

function getCSSProp (element, prop) {
  if (element.style[prop]) {
    // inline style property
    return element.style[prop];
  } else if (element.currentStyle) {
    // external stylesheet for Explorer
    return element.currentStyle[prop];
  } else if (document.defaultView && document.defaultView.getComputedStyle) {
    // external stylesheet for Mozilla and Safari 1.3+
    prop = prop.replace(/([A-Z])/g,"-$1");
    prop = prop.toLowerCase();
    return document.defaultView.getComputedStyle(element,"").getPropertyValue(prop);
  } else {
    // Safari 1.2
    return null;
  }
}

// --------------------------------------------------
// Example/Usage:
// var element = document.getElementById ("someElement");
// var left = getCSSProp (element, "left");


/* There are more useful scripts there, as well. */

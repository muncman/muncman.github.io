//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////

/* Use with toggle.css, or equivalent styling. */

/* Hides all sections using class name, except the given one. */
function hideOtherSectionsViaStyle(exceptElem) {
  var sections = document.getElementsByTagName("div");
  for (var i=0; i<sections.length; ++i) {
    if ((sections[i].className == "section-show")
     && (sections[i].id != exceptElem)) {
      sections[i].className = "section-hide";
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
      if (action == "hidden") {
        // hide the object
        elem.className = "section-hide";
      } else if (action == "visible") {
        // show the object
        elem.className = "section-show";
      } else if (action == "toggle") {
        // toggle the object's visibility
        if (elem.className == "section-show") {
          elem.className = "section-hide";
        } else if (elem.className == "section-hide") {
          elem.className = "section-show";
        } else {
          //assume hidden as default (IE bug?)
          elem.className = "section-show";
        }
      }
    }
  }
}

//TODO: Not working properly yet...
/* Hides all sections using 'display', except the given one. */
//function hideOtherSectionsViaDisplay(exceptElem) {
//  var sections = document.getElementsByTagName("div");
//  for (var i=0; i<sections.length; ++i) {
//    if ((sections[i].style.display == "block")
//     && (sections[i].id != exceptElem)) {
//      sections[i].style.display = "none";
//    }
//  }
//}

/* Changes whether a section has visible or hidden 'display'. */
//function changeSectionVisibility() {
//  if (document.layers || document.all || document.getElementById) {
//    var inc, endInc = arguments.length;
//    // run through the args (objects) and set the visibility of each
//    for (inc=0; inc<endInc; inc+=2) {
//      // get a good object reference
//      var elem = document.getElementById(arguments[inc]);
//      var action = arguments[inc+1];
//      if (action == "hidden") {
//        // hide the object
//        elem.style.display = "none";
//      } else if (action == "visible") {
//        // show the object
//        elem.style.display = "block";
//      } else if (action == "toggle") {
//        // toggle the object's visibility
//        if (elem.style.display = "block") {
//          elem.style.display = "none";
//        } else if (elem.style.display = "none") {
//          elem.style.display = "block";
//        } else {
//          //assume hidden as default (IE bug?)
//          elem.style.display = "block";
//        }
//      }
//    }
//  }
//}


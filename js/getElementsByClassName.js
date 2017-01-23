/*
    Written by Jonathan Snook, http://www.snook.ca/jonathan
    Add-ons by Robert Nyman, http://www.robertnyman.com
*/

/*
 * Some ways to call it:
 * To get all a elements in the document with a "info-links" class.
 *     getElementsByClassName(document, "a", "info-links");
 * To get all div elements within the element named "container", with a "col" class.
 *     getElementsByClassName(document.getElementById("container"), "div", "col");
 * To get all elements within in the document with a "click-me" class.
 *     getElementsByClassName(document, "*", "click-me");
 */
function getElementsByClassName(oElm, strTagName, strClassName) {
    var arrElements = (strTagName == "*" && document.all)? document.all :
    oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    strClassName = strClassName.replace(/\-/g, "\\-");
    var oRegExp = new RegExp("(^|\\s)" + strClassName + "(\\s|$)");
    var oElement;
    for (var i=0; i<arrElements.length; i++) {
        oElement = arrElements[i];
        if (oRegExp.test(oElement.className)) {
            arrReturnElements.push(oElement);
        }
    }
    return (arrReturnElements)
}

/*
 * Ways of calling the function now are:
 * To get all a elements in the document with a "info-links" class.
 *     getElementsByClassName(document, "a", "info-links");
 * To get all div elements within the element named "container", with a "col" and a "left" class.
 *     getElementsByClassName(document.getElementById("container"), "div", ["col", "left"]);
 */
function getElementsByUnorderedClassNames(oElm, strTagName, oClassNames) {
    var arrElements = (strTagName == "*" && document.all)? document.all :
    oElm.getElementsByTagName(strTagName);
    var arrReturnElements = new Array();
    var arrRegExpClassNames = new Array();
    if (typeof oClassNames == "object") {
        for (var i=0; i<oClassNames.length; i++) {
            arrRegExpClassNames.push(new RegExp("(^|\\s)" +
            oClassNames[i].replace(/\-/g, "\\-") + "(\\s|$)"));
        }
    } else {
        arrRegExpClassNames.push(new RegExp("(^|\\s)" +
        oClassNames.replace(/\-/g, "\\-") + "(\\s|$)"));
    }
    var oElement;
    var bMatchesAll;
    for (var j=0; j<arrElements.length; j++) {
        oElement = arrElements[j];
        bMatchesAll = true;
        for (var k=0; k<arrRegExpClassNames.length; k++) {
            if (!arrRegExpClassNames[k].test(oElement.className)) {
                bMatchesAll = false;
                break;
            }
        }
        if (bMatchesAll) {
            arrReturnElements.push(oElement);
        }
    }
    return (arrReturnElements)
}

/* For IE 5 */
Array.prototype.push = ArrayPush;
function ArrayPush(value) {
    this[this.length] = value;
}

// From http://www.robertnyman.com/2005/11/07/the-ultimate-getelementsbyclassname/


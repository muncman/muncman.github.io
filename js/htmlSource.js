//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////

//ADD 'VIEW SOURCE' LINKS TO ANY PAGE!

/*
 * Returns any page's source markup.
 * Suggest using result with &lt;pre&gt; tags.
 */
function getSourceMarkup() {
  html = document.getElementsByTagName("html")[0];
  source = html.innerHTML;
  //lt = String.fromCharCode(60);
  //gt = String.fromCharCode(62);
  ltreg = /</g;
  gtreg = />/g;
  source = source.replace(ltreg, "&lt;");
  source = source.replace(gtreg, "&gt;");
  //TODO: Insert new lines with proper indentation...
  return "&lt;html&gt;" + source + "&lt;/html&gt;";
}

/* Present markup to the page. */
function presentMarkup() {
  span = document.createElement('span');
  span.id = "added";
  span.className = "page-markup";
  source = getSourceMarkup();
  span.innerHTML = "<br />" + source + "<br /><br />";
  output = document.getElementById("markup");
  //output.style.backgroundColor = "orange";
  //output.style.borderStyle = "solid";
  output.appendChild(span);
}

/* Remove markup from page. */
function retractMarkup() {
  output = document.getElementById("markup");
  child = document.getElementById("added");
  if (child) {
    output.removeChild(child);
    more = document.getElementById("added");
    /*if (!more) {
      output.style.borderStyle = "none";
    }*/
  } //else ignore silently.
  //Note how this works, even if markup was added more than once, with an invocation per addition.
}

var srcDiv;
/*
 * Add the links to the page.
 * Do this on load. (This could be more sophisticated.)
 * Should create this markup:
 * <div class="source-link-container" id="source-link-div">
 *   <p class="source-link-para" id="view-link-para"><a href="javascript:presentMarkup();" class="source-link" id="view-source">View Source</a></p>
 *   <p class="source-link-para" id="hide-link-para"><a href="javascript:retractMarkup();" class="source-link" id="hide-source">Hide Source</a></p>
 *   <div id="markup-container"><pre id="markup"></pre></div>
 * </div>
 */
function loadLinks() {
  srcDiv = document.createElement('div');
  srcDiv.id = "source-link-div";
  srcDiv.className = "source-link-container";
  p1 = document.createElement('p');
  p1.id = "view-link-para";
  p1.className = "source-link-para";
  viewLink = document.createElement('a');
  viewLink.id = "view-source";
  viewLink.className = "source-link";
  viewLink.href = "javascript:presentMarkup();"
  viewText = document.createTextNode("View Source");
  viewLink.appendChild(viewText);
  p1.appendChild(viewLink);
  srcDiv.appendChild(document.createTextNode("\n"));
  srcDiv.appendChild(p1);
  p2 = document.createElement('p');
  p2.id = "hide-link-para";
  p2.className = "source-link-para";
  hideLink = document.createElement('a');
  hideLink.id = "hide-source";
  hideLink.className = "source-link";
  hideLink.href = "javascript:retractMarkup();"
  hideText = document.createTextNode("Hide Source");
  hideLink.appendChild(hideText);
  p2.appendChild(hideLink);
  srcDiv.appendChild(document.createTextNode("\n"));
  srcDiv.appendChild(p2);
  markupDiv = document.createElement('div');
  markupDiv.id = "markup-container";
  markupPre = document.createElement('pre');
  markupPre.id = "markup"; //This id has to match methods above.
  markupDiv.appendChild(markupPre);
  srcDiv.appendChild(document.createTextNode("\n"));
  srcDiv.appendChild(markupDiv);
  theBody = document.getElementsByTagName('body')[0];
  //alert("body before: " + theBody.innerHTML);
  theBody.appendChild(srcDiv);
  //alert("body after: " + theBody.innerHTML);
}

// Originally by the amazing Scott Andrew.
function addEvent(obj, evType, fn) {
  if (obj.addEventListener) {
    obj.addEventListener(evType, fn, true);
    return true;
  } else if (obj.attachEvent) {
    var r = obj.attachEvent("on" + evType, fn);
    return r;
  } else {
    return false;
  }
}

addEvent(window, "load", loadLinks);


//Note: Click it again, and it appends again - INCLUDING THE ALREADY APPENDED SOURCE!
//Note how color style values are changed from #000000 format to rgb(0, 0, 0) IF the color style is inline.
//TODO: Add in showing included js file source, too.
//TODO: How about color coding and other styling?!
//Three alternatives to get a body reference, but must be done AFTER page has loaded for any to work.
//  theBody = document.body;
//  theBody = document.getElementsByTagName('body')[0];
//  theBody = document.getElementsByTagName('body').item(0);
//TODO: Is there a way to ask the document if it has been loaded?!? Like alert(document.loaded); ?
//document.write is not what we want here. It inserts at document beginning!
//Not working - see addEvent instead: window.onload = loadLinks;


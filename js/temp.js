/* For use with errorHandling.html */
  function handleErr(msg, url, line) {
    var txt = "There was an error on this page.<br /><br />";
    txt += "Error: '" + msg + "'<br />";
    txt += "URL: " + url + "<br />";
    txt += "Line: " + line
    output = document.getElementById("error");
    output.innerHTML = txt;
    output.style.borderStyle = "solid;";
    output.style.borderColor = "red";
    return true;
  }
  // add "onerror = handleErr;" to page where this is included.

  function throwError() {
    throw('an error occurred, cuz I wanted it to');
  }

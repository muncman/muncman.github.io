/* For use with errorHandling.html */
  function handleErr(msg, url, line) {
    var txt = "There was an error on this page.<br /><br />";
    txt += "Error: '" + msg + "'<br />";
    txt += "URL: " + url + "<br />"; //TODO: Why isn't this working in Firefox? (at least when not served up by a web server)
    txt += "Line: " + line + "<br />"; //TODO: Why isn't this working in Firefox? (at least when not served up by a web server)
    txt += "User-agent: " + navigator.userAgent + "<br />";
    txt += "Browser: " + navigator.appName + "<br />";
    txt += "Browser Version: " + parseFloat(navigator.appVersion) + "<br />";
    txt += "Last Modified: " + document.lastModified;
    updateOutput(txt);
    return true;
  }
  window.onerror = handleErr;

  function updateOutput(message) {
    output = document.getElementById("error");
    output.innerHTML = message;
    output.style.borderStyle = "solid;";
    output.style.borderColor = "red";
  }

  function throwError() {
    throw('an error occurred, cuz I wanted it to, punk');
  }

  function throwCatch() {
    try {
      throwError();
    } catch(err) {
      updateOutput("Caught: " + err);
      //TODO: More detail?!
    }
  }

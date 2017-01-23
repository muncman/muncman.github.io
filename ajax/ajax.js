/* Copyright 2005, Kevin Munc (kevin@munc.com) */
/* General Ajax functions. */

/* Get correct type of XMLHttpRequest. */
function getXMLHttpRequest() {
  if (window.XMLHttpRequest) {
    //Mozilla/Firefox, Safari, Opera...
    return new XMLHttpRequest();
  } else if (window.ActiveXObject) {
    //IE.
    req = new ActiveXObject("Microsoft.XMLHTTP");
    // "Microsoft.XMLHTTP" or "Msxml2.XMLHTTP" or "Msxml2.XMLHTTP.4.0" (or "MSXML2.ServerXMLHTTP")
    if (req != null) {
      return req;
    } else {
      alert("Could not acquire XML HTTP ActiveX Object.");
    }
  } else {
    alert("Could not acquire an XMLHttpRequest instance!");
  }
}

//Get global reference to XMLHttpRequest instance before using it.
//var http = getXMLHttpRequest();

/* Get updated page content. */
function requestUpdate(uri, method, callbackFunction) {
  http = getXMLHttpRequest(uri);
//NOT SUPPORTED IN IE:  http.overrideMimeType("application/xml");
  http.open(method, uri, true); //use escape(...) if appending to query string  //false means synchronous (bad)
  http.setRequestHeader("Ajax-Requested", "true");
//TODO: Update this - turn into separate method or param...
  http.setRequestHeader("Content-Type", "text/xml");
  //http.setContentType("text/xml");
  //TODO: separate method? Param? For form submissions: http.setRequestHeader("Content-Type", "application/x-www-form-urlencoded; charset=UTF-8");
//  http.onreadystatechange = callbackFunction;
  http.onreadystatechange = function() {
    callbackFunction(http);
  }
  http.send(null);
  return true;
}

/*
 * 0  Uninitialised
 * 1  Loading
 * 2  Loaded
 * 3  Interactive
 * 4  Completed
 */


/*
function message(element, classString, errorMessage)
{
 var messageDiv = document.createElement("div");

 element.parentNode.insertBefore(messageDiv, element);
 messageDiv.className = classString;
 messageDiv.appendChild(document.createTextNode(errorMessage));

 return true;
}
 */

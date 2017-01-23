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
    if (req) {
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
//values is a string with parameters to be submitted
//example: param1=value1&param2=value2&......
function requestUpdate(uri, callbackFunction, values) {
  http = getXMLHttpRequest(uri);
//NOT SUPPORTED IN IE:  http.overrideMimeType("application/xml");
  //uri += "?" + values;
//alert("Request update: URL: " + uri);
  http.open("POST", uri, true); //use escape(...) if appending to query string
  http.setRequestHeader("Ajax-Requested", "true");  //false means synchronous (bad)
  http.setRequestHeader("Content-Type","application/x-www-form-urlencoded; charset=UTF-8");

//  http.onreadystatechange = callbackFunction;
  http.onreadystatechange = function() {
    callbackFunction(http);
  }
  http.send(values);
  return true;
}

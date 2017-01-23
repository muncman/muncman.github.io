/* Copyright 2005, Kevin Munc (kevin-at-munc-dot-com) */
/*
  JavaScript for Ajax test page(s).
  Must be used in conjunction with ajax.js,
  or another file setting "http" to an instance of XMLHttpRequest,
  as well as errorHandling.js.
*/

/* Process the result of the first request. */
//function handleResponse1() {
function handleResponse1(http) {
  if (!http) {
    alert("Unable to complete processing without an instance of XMLHttpRequest.");
    return;
  }
  //alert("Callback invoked with:\n HTTP Status Code: " + http.status + " (" + http.statusText + ")\nreadyState: " + http.readyState + "\nresponse headers: " + http.getAllresponseHeaders + "\nXMLHttpRequest: " + http + "\nresponse: " + http.responseText);
  if (http.readyState == 4) {
    //Response loaded.
    if (http.status == 200) {
      //"OK" Status.
      try {
//alert(http.responseXML.text); //IE Only.
//alert(http.responseXML.xml); //IE Only.
//http.responseXML.validateOnParse = false;
//alert(http.responseXML.characterSet); //Mozilla Only.
        //Note: Either the contentType of the response must be XML
        //      or the mime type must be overridden on the XMLHttpRequest instance
        //      for responseXML to not be null.
        //      However, IE does not support the overrideMimeType function.
//        document.getElementById("extractedValue").innerHTML =
        document.getElementById("targetCell").innerHTML =
          "<strong>Chosen Fragment/Attribute:<br />" +
          http.responseText.length +
//          http.responseXML.getElementById("loads").innerHTML +
  //        http.responseXML.getElementsByTagName("span")[0].firstChild.data
 //         http.responseXML.getElementsByTagName("title").firstChild.data
   //       http.responseXML.getElementById("first").innerHTML +
   //       "&nbsp;" +
   //       http.responseXML.getElementById("last").innerHTML +
  //        " times</strong><br /><br />Nice resizing, eh?";
    //      http.responseText +
          "</strong>";
        //Note: explicit markup in inline script causes warnings,
        //      but is fine separate.
      } catch (ex) {
        alert("There was a problem accessing the response XML: " +
          getErrorInfo(ex));
      }
      try {
        document.getElementById("responseArea1").innerHTML = http.responseText;
      } catch (ex) {
        alert("There was a problem accessing the response text: " +
          getErrorInfo(ex));
      }
    } else {
      alert("There was a problem retrieving the data:\n" + http.statusText);
    }
  }
}

/* Process the result of the second request. */
function handleResponse2(http) {
  if (!http) {
    alert("Unable to complete processing without an instance of XMLHttpRequest.");
    return;
  }
  if (http.readyState == 4) {
    //Response loaded.
    if (http.status == 200) {
      //"OK" Status.
      try {
        document.getElementById("responseArea2").innerHTML = http.responseText;
      } catch (ex) {
        alert("There was a problem accessing the response text: " +
          getErrorInfo(ex));
      }
    } else {
      alert("There was a problem retrieving the data:\n" + http.statusText);
    }
  }
}

/* Process the result of a request for XML. */
function handleXmlResponse(http) {
  if (!http) {
    alert("Unable to complete processing without an instance of XMLHttpRequest.");
    return;
  }
  if (http.readyState == 4) {
    //Response loaded.
    if (http.status == 200) {
      //"OK" Status.
      try {
//!!!alert(http.statusText + " " + http.getResponseHeader("Content-Type"));
//!!!alert(http.responseText);
//!!!alert(http.responseXML);
alert(http.getAllResponseHeaders());
//alert(http.responseXML.documentElement.getElementsByTagName("section")[0].firstChild.data);
//alert(http.responseXML.getElementsByTagName("section").item(0));
//alert(http.responseXML.getElementsByTagName("section")[0].childNodes[0].nodeValue);
//alert(http.responseXML.documentElement.getElementsByTagName("section")[0].firstChild.nodeValue);
        document.getElementById("responseXmlArea").innerHTML =
            http.responseXML.documentElement.getElementsByTagName("strong")[0].firstChild.data;
//TODO: Freakin' figure out why DOM traversal of this stuff is so varied and uncertain!
//!!          http.responseXML.documentElement.getElementsByTagName("strong")[0].firstChild.data;
//            http.responseXML.documentElement.getElementsByTagName("div")[0];
//!           http.responseXML.documentElement.getElementById("main")...
//            http.responseXML.documentElement.getElementsByTagName("section")[0].firstChild.nodeValue;
//            http.responseXML.getElementById("main").innerHTML;
//            http.responseXML.documentElement.getElementsByTagName("section")[0].firstChild.data;
      } catch (ex) {
        alert("There was a problem accessing the response XML: " +
            getErrorInfo(ex));
      }
    } else {
      alert("There was a problem retrieving the data:\n" + http.statusText);
    }
  }
}

/* Set two areas at the same time. */
function requestMultiUpdates() {
  var method = "GET";
  var uri1 = "/priorWork.html";
  var uri2 = "/skills.html";
  var http1 = getXMLHttpRequest(uri1);
  var http2 = getXMLHttpRequest(uri2);
  http1.open(method, uri1, true);
  http2.open(method, uri2, true);
  http1.onreadystatechange = function() {
    callbackFunction1(http1);
  }
  http2.onreadystatechange = function() {
    callbackFunction2(http2);
  }
  http1.send(null);
  http2.send(null);
  return true;
}

/* Handle part one of multi-part request. */
function callbackFunction1(http) {
  callbackBase(http, "area1");
}

/* Handle part two of multi-part request. */
function callbackFunction2(http) {
  callbackBase(http, "area2");
}

/* Workhorse of multi-part callback functions. */
function callbackBase(http, id) {
  if (!http) {
    alert("Unable to complete processing without an instance of XMLHttpRequest.");
    return;
  }
  if (http.readyState == 4) {
    //Response loaded.
    if (http.status == 200) {
      //"OK" Status.
      try {
        document.getElementById(id).innerHTML =
          "Chosen Fragment:<br />" +
          escape(http.responseText.substr(150,50)).italics();
      } catch (ex) {
        alert("There was a problem accessing the response XML: " +
          getErrorInfo(ex));
      }
    } else {
      alert("There was a problem retrieving the data:\n" + http.statusText);
    }
  }
}


/* Set innerHTML. */
function setInnerHtml(id, value) {
  document.getElementById(id).innerHTML = value;
}

//TODO: Make a function to parse responseText into DOM-navigable.

/* Based heavily on http://developer.apple.com/internet/webcontent/iframe.html */

var IFrameObj; // our IFrame object

/* Triggers a call to the given URL from a hidden IFrame. */
function callToServer(URL) {
  if (!document.createElement) {
    return true;
  }
  var IFrameDoc;
  if (!IFrameObj && document.createElement) {
    // create the IFrame and assign a reference to the
    // object to our global variable IFrameObj.
    // this will only happen the first time
    // callToServer() is called
    try {
      var tempIFrame = document.createElement("iframe");
      tempIFrame.setAttribute("id", "RSIFrame");
      tempIFrame.style.border = "0px";
      tempIFrame.style.width = "0px";
      tempIFrame.style.height = "0px";
      IFrameObj = document.body.appendChild(tempIFrame);
      if (document.frames) {
        // this is for IE5 Mac, because it will only
        // allow access to the document object
        // of the IFrame if we access it through
        // the document.frames array
        IFrameObj = document.frames["RSIFrame"];
      }
    } catch (exception) {
      // This is for IE5 PC, which does not allow dynamic creation
      // and manipulation of an iframe object. Instead, we'll fake
      // it up by creating our own objects.
      iframeHTML = "<iframe id=\"RSIFrame\" style=\"";
      iframeHTML += "border: 0px;";
      iframeHTML += " width: 0px;";
      iframeHTML += " height: 0px;";
      iframeHTML += "\"></iframe>";
      document.body.innerHTML += iframeHTML;
      IFrameObj = new Object();
      IFrameObj.document = new Object();
      IFrameObj.document.location = new Object();
      IFrameObj.document.location.iframe = document.getElementById("RSIFrame");
      IFrameObj.document.location.replace = function (location) {
        this.iframe.src = location;
      };
    }
  }
  if (navigator.userAgent.indexOf("Gecko") != -1 && !IFrameObj.contentDocument) {
      // we have to give NS6 a fraction of a second
      // to recognize the new IFrame
      //TODO: test with Opera, Safari, NS6...
    setTimeout("callToServer(" + URL + ")", 10);
    return false;
  }
  if (IFrameObj.contentDocument) {
      // For NS6
    IFrameDoc = IFrameObj.contentDocument;
  } else {
    if (IFrameObj.contentWindow) {
      // For IE5.5 and IE6
      IFrameDoc = IFrameObj.contentWindow.document;
    } else {
      if (IFrameObj.document) {
        // For IE5
        IFrameDoc = IFrameObj.document;
      } else {
        return true;
      }
    }
  }
  IFrameDoc.location.replace(URL);
  //Note: Returning false is important to avoid a new window popping open.
  return false;
}

//TODO: Why isn't back button working!!!!

/*
 * Constructs a properly formatted and escaped query string
 * using the given HTML form's elements.
 */
function buildQueryString(theFormName) {
  var theForm = document.forms[theFormName];
  var queryString = "";
  for (var elemIndex = 0; elemIndex < theForm.elements.length; elemIndex++) {
    if (theForm.elements[elemIndex].name != "") {
      queryString += (queryString.length == 0) ? "?" : "&";
      queryString += theForm.elements[elemIndex].name + "="
                  + escape(theForm.elements[elemIndex].value);
    }
  }
  return queryString;
}


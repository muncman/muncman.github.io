//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////

// ErrorHandler that reports on JavaScript errors
// and provides the user a way alert admin of the error.

/* Workhorse function. */
function reportError(msg, url, line) {
  debug = window.open("", "debugWin", "toolbar=0,location=0,directories=0,status=1,menubar=1,scrollbars=1,resizable=1,width=715,height=465,left=5,top=5");
  debug.document.write("<html><head><title>Error Report</title></head><body>");
  debug.document.write("<p><hr size='5' /><center><h1>SORRY! A JavaScript Error has Occurred.</h1>");
  debug.document.write("<form name='errorForm' id='errorForm' action='mailto:webmaster@munc.com?subject=JavaScript Error' method='post' enctype='text/plain'>");
  debug.document.write("<input type='hidden' name='theMsg' id='theMsg' value=\"" + msg + "\" />");
  debug.document.write("<input type='hidden' name='theUrl' id='theUrl' value=\"" + url + "\" />");
  debug.document.write("<input type='hidden' name='theLine' id='theLine' value=\"" + line + "\" />");
  debug.document.write("<input type='hidden' name='modDate' id='modDate' value=\"" + document.lastModified + "\" />");
  debug.document.write("Please help us debug this site by clicking here to send an email of the error information:&nbsp;&nbsp;");
  debug.document.write("<input type='submit' value='Report Error' /></div><div align='right'>");
  debug.document.write("<br />Your name (optional):&nbsp;&nbsp;<input type='text' size='65' name='name' id='name' value='' />");
  debug.document.write("<br />Browser Version:&nbsp;&nbsp;<input type='text' size='65' name='version' id='version' value=\"" + navigator.userAgent + "\" />");
  debug.document.write("<br />Message:&nbsp;&nbsp;<input type='text' size='65' name='msg' id='msg' value=\"" + msg + "\" />");
  debug.document.write("<br />URL:&nbsp;&nbsp;<input type='text' size='65' name='url' id='url' value=\"" + url + "\" />");
  debug.document.write("<br />Line Number:&nbsp;&nbsp;<input type='text' size='65' name='line' id='line' value=\"" + line + "\" />");
  debug.document.write("<br />Information:&nbsp;&nbsp;<textarea name='userMsg' id='userMsg' rows='5' cols='60' wrap='hard'>");
  debug.document.write("Place any other information you think may help in debugging this error here.</textarea>");
  debug.document.write("</center><h5>Thanks for your help!</h5>");
  debug.document.write("</form><hr size='5' /></p></body></html>");
  debug.status = "A JAVASCRIPT ERROR OCCURRED !";
  debug.document.close();
  return true;
}
window.onerror = reportError;

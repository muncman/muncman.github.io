/* Copyright 2005, Kevin Munc (kevin@munc.com) */
/* General-purpose exception handling functions. */

/*
 * Handler method for the onerror event.
 * Usage (inline):
 * <script type="text/javascript">
 *   <!--// <![CDATA[
 *     onerror = handleErrors;
 *   // ]]>-->
 * </script>
 */
function handleErrors(message, url, line) {
   msg = "There was an error on this page.<br />";
   msg += "An internal programming error may keep this page from displaying properly.<br />";
   msg += "Click OK to continue.<br />";
   msg += "Error message:&nbsp;&nbsp;&nbsp;" + message + "<br />";
   msg += "URL:&nbsp;&nbsp;&nbsp;" + url + "<br />";
   msg += "Line number:&nbsp;&nbsp;&nbsp;" + line + "<br />";
   msg += "<a href=\"javascript:void(0);\" onclick=\"javascript:clearErrorMessage();\">Click here to clear this message.</a>";
  try {
     document.getElementById("scriptErrorMessage").innerHTML = "<h1 id=\"message-here\" style=\"color: #FF0000\">" + msg + "</h1>";
   } catch (e) {
     alert("There was an error on this page.\n\n" + getErrorInfo(e));
   }
   return true
}

/*
 * Returns verbose exception information.
 * Does not determine error 'type'.
 */
function getErrorInfo(exception) {
  info = exception.name + ": " + exception.message;
         //exception.message = exception.description
         //Also available: exception.number
  return info;
}

/* TODO: */
function clearErrorMessage() {
  document.getElementById("message-here").innerHTML = "";
}

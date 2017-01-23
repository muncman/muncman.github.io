//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////

/*
 * Stop the space bar from shifting the page down.
 * TODO: Tabs are still problematic in some contexts.
 */
function wasNonShifterPressed(e) {
  var keyCode = document.all ? window.event.keyCode : e.which;
  var spaceBarCode = 32;
  return (keyCode != spaceBarCode);
}

//Register default event handler.
document.onkeypress = wasNonShifterPressed;
//For old Netscape.
if (document.layers) {
  document.captureEvents(Event.KEYPRESS);
}

/* Give feedback on what keys were pressed. */
function whatWasPressed(e) {
  var keyCode = document.all ? window.event.keyCode : e.which;
  var keyChar = String.fromCharCode(keyCode);
  alert("keyCode for '" + escape(keyChar) + "' is '" + keyCode + "'");
  return wasNonShifterPressed(e);
}

/* Register feedback event handler. */
function registerKeyCatcher() {
  document.onkeypress = whatWasPressed;
  elem = document.getElementById('keyCatchEnabled');
  if (elem) {
    elem.innerHTML = "ON";
  }
}

/* Un-register feedback event hander. */
function deregisterKeyCatcher() {
  document.onkeypress = wasNonShifterPressed;
  elem = document.getElementById('keyCatchEnabled');
  if (elem) {
    elem.innerHTML = "OFF";
  }
}

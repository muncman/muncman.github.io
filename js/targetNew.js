//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////

/*
 * Since <a target="..."> is not valid under the Strict DTD, we do this instead.
 * This implementation relies on Prototype.
 */
function handleNewWindowLinks() {
  var newWindowLinks = document.getElementsByClassName('target-blank');
  for (var i=0; i<newWindowLinks.length; i=i+1) {
    newWindowLinks[i].target = "_blank";
  }
}

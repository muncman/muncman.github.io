/*
 * For use with onDemandJs.html
 * This relies on the addMessage function
 * already being present in the loaded context.
 */

function extraFunction() {
  addMessage("Running extraFunction!");
}

addMessage("extra.js loaded! (message from extra.js itself)");

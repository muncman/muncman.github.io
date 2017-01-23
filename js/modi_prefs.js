
/******
//		-- EXAMPLE --
// 		This example show ALL of the preferences that can be defined.
*******/

// change this value to false to not show the attribute list by default
	pref_showAttr = true;
// change this value to false to not show the dimension list by default
	pref_showDim = true;
// change this value to false to not show the parent structure list by default
	pref_showParents = true;
// change this value to false to not show the children list by default
	pref_showChildren = true;
// can be one of three values:
// 0 for gray background highlights
// 1 for red outlines
// 2 for no highlights
	pref_highlights = 0;
// change to false to *not* start the favelet in freeze mode. The data window will follow the cursor around as with v1.x of MODI
	pref_freeze = true;
// change to a valid hex color to change the default highlight color
	pref_backgroundHighlightColor = "#c0c0c0";
// change to a valid hex color to change the default outline color
	pref_outlineColor = "#0000FF";
	pref_outlineWidth = "2px";
// change this to false to start MODI with the data window invisible.
	pref_visible = true;
// change to true/false to effect the transparency mode that the favelet starts up in
	pref_alwaysTransparent = false;
// change to a value between 0 and 99 to define the transparency value the data window should be in when pref_alwaysTransparent is true
	pref_alwaysTransparentValue = 60;
// change to a color value of your choosing to define the background-color for child node hightlights
	pref_childHighlightColor = "#FAFAFA";	
	
	
/***********
// 		-- EXAMPLE --
// 		The following is an example preference setup that would instantiate the favelet to operate similarly to the aardvark firefox extension.
************/
/*
pref_highlights = 1;
pref_outlineColor = "#FF0000";
pref_outlineWidth = "2px";
var pref_visible = false;
*/


/************
// -- EXAMPLE --
// This example will instantiate the favelet with the Data Window in follow mode with white background-color highlights
************/
/*
pref_backgroundHighlightColor = "#FFF";
pref_highlights = 0;
pref_freeze = false;
pref_visible=true;
*/
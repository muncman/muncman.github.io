 /*//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////*/


var uagt = navigator.userAgent.toLowerCase();

var IE_GENERIC = false;
var NS_GENERIC = false;
var W3C_DOM = false;
if (document.all) {
   IE_GENERIC = true;
} else if (document.layers) {
   NS_GENERIC = true;
} else if (document.getElementById) {
   W3C_DOM = true;
}

var is_major = parseInt(navigator.appVersion);
var is_minor = parseFloat(navigator.appVersion);
var is_nav  = ((uagt.indexOf('mozilla')!=-1) && (uagt.indexOf('spoofer')==-1)
            && (uagt.indexOf('compatible') == -1) && (uagt.indexOf('opera')==-1)
            && (uagt.indexOf('webtv')==-1));
var is_nav2 = (is_nav && (is_major == 2));
var is_nav3 = (is_nav && (is_major == 3));
var is_nav4 = (is_nav && (is_major == 4));
var is_nav4up = (is_nav && (is_major >= 4));
var is_navonly      = (is_nav && ((uagt.indexOf(";nav") != -1) ||
                      (uagt.indexOf("; nav") != -1)) );
var is_nav5 = (is_nav && (is_major == 5));
var is_nav5up = (is_nav && (is_major >= 5));
var is_ie   = (uagt.indexOf("msie") != -1);
var is_ie3  = (is_ie && (is_major < 4));
var is_ie4  = (is_ie && (is_major == 4) && (uagt.indexOf("msie 5.0")==-1) );
var is_ie4up  = (is_ie  && (is_major >= 4));
var is_ie5  = (is_ie && (is_major == 4) && (uagt.indexOf("msie 5.0")!=-1) );
var is_ie5up  = (is_ie  && !is_ie3 && !is_ie4);
//NS4 = is_nav4;
//IE4 = is_ie4;
//NS6 = is_nav5up;
//ver4 = (NS4 || IE4) ? 1 : 0;
//DOM = is_ie5up || NS6;

var SAFARI = (uagt.indexOf("safari") > 0);
var OPERA = (uagt.indexOf("opera") > 0);
var OMNI = (uagt.indexOf("omni") > 0); // OmniWeb
var iCAB = (uagt.indexOf("icab") > 0);
var KONQUEROR = (uagt.indexOf("konqueror/") > 0);
var MOZ_BASED = (uagt.indexOf("mozilla") != -1);
var GECKO = (uagt.indexOf("gecko") > 0);
//   var LYNX = no javascript support... 8-]
var MAC = ( (navigator.platform.indexOf("ppc") > 0) || (uagt.indexOf("mac") > 0) );
var WIN = (navigator.platform == "win32");
var SOL = (navigator.platform == "solaris"); // TODO: verify
//var LINUX = (navigator.platform == "TODO"); // Special for Red Hat?
//var BEOS = (navigator.platform == "TODO");

var IE6, IE5_6, IE5_5, IE5, IE4, MAC_IE5;
var N4, N5, NS6, NS6_1, NS7, MOZ, CAMINO;
var OP5, OP6, OP7;
// IE3, NS2, NS3, OP4, et cetera
if (!SAFARI && !OPERA && !OMNI && !iCAB) {
   IE6 = (uagt.indexOf("msie 6") > 0);
   // IE 5.5 and IE 5.6 are similar. IE 5.6 is released on WindowsXP
   IE5_6 = (uagt.indexOf("msie 5.6") > 0);
   IE5_5 = (uagt.indexOf("msie 5.5") > 0 || IE5_6);
   // IE5 is true for IE5.5, IE5.6, and IE6.
   IE5 = (uagt.indexOf("msie 5") > 0  || IE6);
   IE4 = (uagt.indexOf("msie 4") > 0);
//   IE3 = (uagt.indexOf("msie 3") > 0); // TODO: verify
//   NS2 = (uagt.indexOf("TODO") > 0);
//   NS3 = (uagt.indexOf("TODO") > 0);
   N4 = (document.layers);
   NS6 = GECKO;
   N5 = GECKO;
   NS6_1 = (N5 && uagt.indexOf("6.1") != -1);
   MOZ = (N5 && !(uagt.indexOf("netscape") > 0));
   MAC_IE5 = (MAC && IE5);
   // Camino was formerly Chimera; Gecko-based.
   CAMINO = ( (uagt.indexOf("camino") > 0) || (uagt.indexOf("chimera") > 0) );
} else {
//   OP4 = (uagt.indexOf("TODO") > 0);
   OP5 = ( (uagt.indexOf("opera 5") >= 0) || (uagt.indexOf("opera 6") >= 0) );
   OP6 = (OPERA && (uagt.indexOf("6") > 0));
   OP7 = (uagt.indexOf("opera 7") >= 0);
}

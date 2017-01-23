//////////
// Copyright Heidi Munc (munc at mac dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////


//window.onerror = null;

/*
 * Replace the main portfolio content with the body contents of the named page.
 * Relies on the prototype.js library.
 */
function swapContent(pageName) {
  var url = pageName + '.html';
  new Ajax.Request(url, {
    asynchronous: true,
    method: 'get',
    onSuccess: function(request) {
      trimContent(request.responseText);
    },
    onFailure: function(request) {
      //insertContent('<br /><span style="text-align: center; color: red;">We apologize. There was a problem. Please try again.</span>');
      insertContent('<div id="content-header"></div><div id="content-body"><img id="home-bkgrnd" src="../img/heidi/home-bkgrnd.gif" /></div>');
    }
  });
  //Note: onFailure could stand more testing.
  adjustNavigationState(url);
  //Re-trigger for newly loaded content. (from targetNew.js)
  handleNewWindowLinks();
}

/*
 * Extracts the body content, passing it on to an insertion function.
 */
function trimContent(fullContent) {
//  var preRegex = /[\s\S]*<body.*>/;
//  var postRegex = /<\/body>[\s\S]*/;
//  var tempContent = fullContent.replace(preRegex, '');
//  var targetContent = tempContent.replace(postRegex, '');
  var regex = /<div id=\"content-header\"[\s\S]*<div id=\"content-body\"[\s\S]*<\/div>/;
  var content = regex.exec(fullContent);
  insertContent(content);
}

/*
 * Inserts the given content into the desired element(s)
 * in the main portfolio page.
 */
function insertContent(content) {
  $('content').innerHTML = content;
  try {
    //Reset any other "active" link images.
    $('head-contact').src = '../img/heidi/header-contact.gif';
    //Make sure "Portfolio" link image is "active".
    $('head-portfolio').src = '../img/heidi/header-portfolio-a.gif';
    //Currently, "Resume" "active" image is never used.
  } catch(err) {
    //Ignoring. Occurs for the standalone pages,
    //since the above elements are not present in them.
  }
  //Reset Lightbox, after a slight pause (to allow for image loading, parsing).
  setTimeout("initLightbox()", 200);
}

/*
 * Generate the markup for email address and other contact information.
 * Mixing JavaScript, character entities and ISO-Latin-1 values
 * to avoid spambots.
 */
function getContactMarkup() {
	var user = "h&#101;&#105&#100;i";
	var ampersand = "&#64;";
	var domain = "m&#117;&#110;&#99;&#46;&#99;&#111;m";
	//document.write doesn't execute when loaded via Ajax and innerHTML,
  // so it's here.
	var markup = '<div id="content-header"></div><div id="content-body" class="bg-ready"><div id="contact-container"><p class="contact">';
  markup += String.fromCharCode(60,97,32,104,114,101,102,61,34,109,97,105,108,116,111,58) + user + ampersand + domain + '\"><span class="contactLabel">Email:</span> ' + user + ampersand + domain + '<\/a>';
  markup += '</p><p class="contact"><span class="contactLabel">cell:</span> 614.371.2644</p></div></div>';
  return markup;
}

/*
 * Do everything needed to integrate the "Contact" header link.
 */
function processContactLink() {
  $('content').innerHTML = getContactMarkup();
  $('head-contact').src = '../img/heidi/header-contact-a.gif';
  $('head-portfolio').src = '../img/heidi/header-portfolio.gif';
  //Currently, "Resume" "active" image is never used.
  adjustNavigationState('contactHeidi.html');
  Element.hide('nav');
}

/*
 * Make sure unrelated navigation sections are closed
 * and the associated one is open.
 */
function adjustNavigationState(fileName) {
// 1) find the relevant section
// 2) check its state, open it if necessary
// 3) close others
  var identifiedSection = false;
  var sectionName = '';
  var ARRAYS = new Array(BRANDING_LINKS, WEB_DESIGN_LINKS, PRINT_LINKS, PERSONAL_LINKS);
  var ARRAY_KEYS = new Array('branding', 'webdesign', 'print', 'personal');
  for (var j=0; j<ARRAYS.length; j=j+1) {
    for (var i=0; i<ARRAYS[j].length; i=i+1) {
      if (fileName == ARRAYS[j][i]) {
        identifiedSection = true;
        sectionName = ARRAY_KEYS[j];
        break;
      }
    }
  }
  try {
    if (identifiedSection) {
      var activeSectionHidden = ($(sectionName).style.display == 'none');
      if (activeSectionHidden) {
        new Effect.BlindDown(sectionName);
      }
    }
    for (var k=0; k<ARRAY_KEYS.length; k=k+1) {
      if (ARRAY_KEYS[k] != sectionName) {
        var otherSectionHidden = ($(ARRAY_KEYS[k]).style.display == 'none');
        if (!otherSectionHidden) {
          //If don't do this test,
          // it seems to mess up the nav of non-active sections.
          new Effect.BlindUp(ARRAY_KEYS[k]);
        }
      }
    }
  } catch(err) {
    //alert(err.message);
    //Ignoring. Occurs for the standalone pages,
    //since the above elements are not present in them.
  }
}

/* Ordered array of links within the "Branding" section. */
var BRANDING_LINKS = new Array();
BRANDING_LINKS[0] = "aimGames.html";
BRANDING_LINKS[1] = "nsBroadband1Brand.html";
BRANDING_LINKS[2] = "nsBroadband2Brand.html";
BRANDING_LINKS[3] = "netscapeIsp.html";
BRANDING_LINKS[4] = "nsUserIcons.html";

/* Ordered array of links within the "Web Design" section. */
var WEB_DESIGN_LINKS = new Array();
WEB_DESIGN_LINKS[0] = "navigator.html";
WEB_DESIGN_LINKS[1] = "nsBroadband1Web.html";
WEB_DESIGN_LINKS[2] = "sportsIllustrated.html";
WEB_DESIGN_LINKS[3] = "apple.html";
WEB_DESIGN_LINKS[4] = "aim.html";
WEB_DESIGN_LINKS[5] = "aim2.html"; //no longer used, but... (was aim1 before)
WEB_DESIGN_LINKS[6] = "aim3.html"; //no longer used, but...
WEB_DESIGN_LINKS[7] = "aim4.html";
WEB_DESIGN_LINKS[8] = "aim5.html"; //no longer used, but...
WEB_DESIGN_LINKS[9] = "aim6.html"; //no longer used, but...
WEB_DESIGN_LINKS[10] = "aim7.html"; //no longer used, but...
WEB_DESIGN_LINKS[11] = "aim8.html";
WEB_DESIGN_LINKS[12] = "aim9.html";
WEB_DESIGN_LINKS[13] = "aim10.html";
WEB_DESIGN_LINKS[14] = "aim11.html"; //no longer used, but...
WEB_DESIGN_LINKS[15] = "aim12.html";
WEB_DESIGN_LINKS[16] = "browser8Ads.html";
WEB_DESIGN_LINKS[17] = "browser8Ads2.html";
WEB_DESIGN_LINKS[18] = "browser8Ads3.html";
WEB_DESIGN_LINKS[19] = "browser8Ads4.html";
WEB_DESIGN_LINKS[20] = "nsBroadband2Web.html";
WEB_DESIGN_LINKS[21] = "nsChannels.html";
WEB_DESIGN_LINKS[22] = "nsChannels2.html";
WEB_DESIGN_LINKS[23] = "nsChannels3.html";
WEB_DESIGN_LINKS[24] = "nsChannels4.html";
WEB_DESIGN_LINKS[25] = "nsHome2003.html"; //no longer used, but...
WEB_DESIGN_LINKS[26] = "nsHome2005.html";

/* Ordered array of links within the "Print" section. */
var PRINT_LINKS = new Array();
PRINT_LINKS[0] = "ibmBrochure.html";
PRINT_LINKS[1] = "youngIsaac.html";
PRINT_LINKS[2] = "cbusMuseum.html";
PRINT_LINKS[3] = "cbusMuseum2.html";

/* Ordered array of links within the "Personal" section. */
var PERSONAL_LINKS = new Array();
PERSONAL_LINKS[0] = "digitalMarquetryScreen.html";
PERSONAL_LINKS[1] = "kipsBayCabinet.html";
PERSONAL_LINKS[2] = "kipsBayDoors.html";
PERSONAL_LINKS[3] = "wallHanging.html";
PERSONAL_LINKS[4] = "invitation.html";
PERSONAL_LINKS[5] = "photography.html";
PERSONAL_LINKS[6] = "photography2.html";
PERSONAL_LINKS[7] = "photography3.html";
PERSONAL_LINKS[8] = "photography4.html";
PERSONAL_LINKS[9] = "photography5.html";
PERSONAL_LINKS[10] = "photography6.html";

//NOTE: The above arrays could easily be used to genericize the "arrow" links.
//      Something like prev(document.location) and next(document.location)
//      could easily be parsed to the portion after the last forward slash (/),
//      and the page before and after could be determined.
//      However, this was not done because of the goal for the standalone pages
//      to work when JavaScript is disabled.


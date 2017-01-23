// ================================================================
//  jkl-floating.js ---- JavaScript Kantan Library for Floating Element
//  Copyright 2005 Kawasaki Yusuke <u-suke@kawa.net>
// ================================================================
//  v0.02  2005/06/26  first release
//  v0.03  2005/06/27  moveCenter moveLeft moveRight moveTop moveBottom
// ================================================================

/******************************************************************

    var float1 = new JKL.Floating("messbody","messhead");
    float1.opacity( 1.0, 0.9 );
    float1.moveTo(50,50);
    float1.start();

******************************************************************/

if ( typeof(JKL) == 'undefined' ) JKL = function() {};

//  constructor 

JKL.Floating = function( bodyid, headid ){
    this.__bodyId = bodyid;       // body area id
    this.__headId = headid || bodyid;
    this.__bodyElem = null;       // body area element
    this.__headElem = null;       // head area element
    this.posX = null;
    this.posY = null;
    this.curX = null;          // previous clientX
    this.curY = null;
    this.opacityDefault  = null;
    this.opacityFloating = null;
    this.onDrag = false;        // draging=true, released=false
    this.saveEvents = [];       // backup event on dragging
    this.setAbsolute = false;
    return this;
};

//  class variables

JKL.Floating.VERSION = "0.03";
JKL.Floating.SAVE_EVENTS = [ 
    "onmousedown", "onmousemove", 
    "onmouseout", "onmouseover", 
    "onmouseup", "onselect"
];

//  methods

JKL.Floating.prototype.opacity = function (opa1,opa2) {
    this.opacityDefault = opa1;
    this.opacityFloating  = opa2;
    this.setOpacity( opa1 );
}

JKL.Floating.prototype.setOpacity = function ( opac ) {
    if ( ! opac ) return;
    var elemF = this.getBodyElement();
    elemF.style.filter = "Alpha(opacity:"+(opac*100)+")";   // IE6
    elemF.style.KhtmlOpacity = opac;        // Safari
    elemF.style.MozOpacity = opac;          // Firefox
    elemF.style.opacity = opac;             // CSS2
}

//  move to edge of window

JKL.Floating.prototype.moveLeft = function ( x ) {
    if ( ! x ) x = 0;
    x += document.body.scrollLeft;
    this.moveTo( x, null );
}
JKL.Floating.prototype.moveRight = function ( x ) {
    if ( ! x ) x = 0;
    var elemF = this.getBodyElement();
    if ( ! elemF ) return;    // no such element
    var x = document.body.scrollLeft + document.body.clientWidth 
            - elemF.offsetWidth - x;
    this.moveTo( x, null );
}
JKL.Floating.prototype.moveTop = function ( y ) {
    if ( ! y ) y = 0;
    y += document.body.scrollTop;
    this.moveTo( null, y );
}
JKL.Floating.prototype.moveBottom = function ( y ) {
    if ( ! y ) y = 0;
    var elemF = this.getBodyElement();
    if ( ! elemF ) return;    // no such element
    var y = document.body.scrollTop + document.body.clientHeight 
            - elemF.offsetHeight - y;
    this.moveTo( null, y );
}

//  move to center of window

JKL.Floating.prototype.moveCenter = function () {
    var elemF = this.getBodyElement();
    if ( ! elemF ) return;    // no such element
    var x = document.body.clientWidth  / 2 - elemF.offsetWidth  / 2;
    var y = document.body.clientHeight / 2 - elemF.offsetHeight / 2;
    this.moveTo( x, y );
}

//  move (relative)

JKL.Floating.prototype.moveBy = function (x,y) {
    var elemF = this.getBodyElement();
    if ( ! elemF ) return;    // no such element
    x += elemF.offsetLeft;
    y += elemF.offsetTop;
    this.moveTo( x, y );
}

//  move (absolute)

JKL.Floating.prototype.moveTo = function (x,y) {
    var elemF = this.getBodyElement();
    if ( ! elemF ) return;    // no such element
    if ( typeof(x) == "number" || x ) {
        this.posX = x;
        elemF.style.left = this.posX+"px";
    }
    if ( typeof(y) == "number" || y ) {
        this.posY = y;
        elemF.style.top  = this.posY+"px";
    }
    elemF.style.right = "";
    elemF.style.bottom = "";
}

JKL.Floating.prototype.start = function () {
    var elemH = this.getHeadElement();
    if ( ! elemH ) return;    // no such element
    this.moveBy( 0, 0 );
    var copy = this;
    elemH.onmousedown = function(ev) { copy.dragStart(ev); };
};

JKL.Floating.prototype.stop = function () {
    var elemH = this.getHeadElement();
    if ( ! elemH ) return;    // no such element
    elemH.onmousedown = null;
};

JKL.Floating.prototype.dragStart = function (ev) {
    if ( document.all && ! ev ) ev = window.event;
    if ( this.onDrag ) return;

    this.moveBy( 0, 0 );
    this.setOpacity( this.opacityFloating );

    this.curX = ev.clientX;                 // current cursor
    this.curY = ev.clientY;
    this.onDrag = true;                     // begin drag mode
    this.backupEvent();                     // backup events and cursor style

    var copy = this;
    document.onmousemove = function(ev){ copy.dragMoving( ev ); };
    document.onmouseup   = function(ev){ copy.dragReleased( ev ); };
};

JKL.Floating.prototype.dragMoving = function (ev) {
    if ( document.all && ! ev ) ev = window.event;
    if ( ! this.onDrag ) return;

    this.posX = this.posX + ev.clientX - this.curX;
    this.posY = this.posY + ev.clientY - this.curY;
    this.curX = ev.clientX;                 // current cursor
    this.curY = ev.clientY;

    var elemF = this.getBodyElement();
    elemF.style.left = this.posX+"px";
    elemF.style.top  = this.posY+"px";
};

JKL.Floating.prototype.dragReleased = function (ev) {
    if ( ! this.onDrag ) return;
    this.setOpacity( this.opacityDefault );
    this.restoreEvent();
    this.onDrag = false;                    // released
};

JKL.Floating.prototype.backupEvent = function () {
    for ( var i=0; i<JKL.Floating.SAVE_EVENTS.length; i++ ) {
        var key = JKL.Floating.SAVE_EVENTS[i];
        this.saveEvents[key] = document[key];
        document[key] = null;
    }
};

JKL.Floating.prototype.restoreEvent = function () {
    for ( var i=0; i<JKL.Floating.SAVE_EVENTS.length; i++ ) {
        var key = JKL.Floating.SAVE_EVENTS[i];
        document[key] = this.saveEvents[key];
    }
    this.saveEvents.length = 0;
};

JKL.Floating.prototype.getBodyElement = function () {
    if ( ! this.__bodyElem ) {
        if ( typeof(this.__bodyId) == "object" && this.__bodyId.parentNode ) {
            this.__bodyElem = this.__bodyId;
            this.__bodyId = this.__bodyElem.id;
        } else { 
            this.__bodyElem = document.getElementById( this.__bodyId );
        }
    }
    if ( ! this.setAbsolute ) {
        this.__bodyElem.style.position = "absolute";    // once
        this.setAbsolute = true;
    }
    return this.__bodyElem;
};

JKL.Floating.prototype.getHeadElement = function () {
    if ( ! this.__headElem ) {
        if ( typeof(this.__headId) == "object" && this.__headId.parentNode ) {
            this.__headElem = this.__headId;
            this.__headId = this.__headElem.id;
        } else { 
            this.__headElem = document.getElementById( this.__headId );
        }
    }
    return this.__headElem;
};

// ================================================================

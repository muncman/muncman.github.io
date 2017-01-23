/*jslint white: false, onevar: true, browser: true, devel: true, undef: true, nomen: true, eqeqeq: true, plusplus: true, bitwise: true, regexp: true, strict: false, newcap: true, immed: true, laxbreak: true */
/*global jQuery, $, Raphael */


var symbols = {
  paths: ['M 297.29747,550.86823 C 283.52243,535.43191 249.1268,505.33855 220.86277,483.99412 C 137.11867,420.75228 125.72108,411.5999 91.719238,380.29088 C 29.03471,322.57071 2.413622,264.58086 2.5048478,185.95124 C 2.5493594,147.56739 5.1656152,132.77929 15.914734,110.15398 C 34.151433,71.768267 61.014996,43.244667 95.360052,25.799457 C 119.68545,13.443675 131.6827,7.9542046 172.30448,7.7296236 C 214.79777,7.4947896 223.74311,12.449347 248.73919,26.181459 C 279.1637,42.895777 310.47909,78.617167 316.95242,103.99205 L 320.95052,119.66445 L 330.81015,98.079942 C 386.52632,-23.892986 564.40851,-22.06811 626.31244,101.11153 C 645.95011,140.18758 648.10608,223.6247 630.69256,270.6244 C 607.97729,331.93377 565.31255,378.67493 466.68622,450.30098 C 402.0054,497.27462 328.80148,568.34684 323.70555,578.32901 C 317.79007,589.91654 323.42339,580.14491 297.29747,550.86823 z',
    'm 127.32058,42.840494 c 13.47607,0.211639 23.87427,8.134284 29.56002,19.269461 13.94143,-9.766967 30.38964,-11.657151 40.61766,-4.157359 8.33743,5.503318 12.88697,15.630229 15.2257,26.254859 3.14286,17.664325 -3.98366,41.131465 -20.17439,56.976645 -26.54353,27.72114 -58.3527,46.65456 -88.21782,68.40517 -3.51925,3.02976 -9.600886,5.88747 -10.274086,0.7985 -1.3227,-16.22861 -3.42094,-32.34008 -10.48201,-45.31478 -6.8961,-15.40251 -18.506092,-27.46409 -21.82271,-45.321 C 59.065346,99.978695 71.619006,75.023445 89.291524,59.365097 100.80601,49.249139 114.84882,42.399347 127.32058,42.840494 z',
    'M390.574,184.277c-2.134-6.021-1.86-4.98-3.722-10.071 c-12.698-31.909-45.655-45.34-76.7-39.93c-29.4,5.123-50.815,31.75-55.317,50.001c-0.01,0-0.018,0-0.028,0l0,0h-6.979v-0.018 h-0.001c-4.502-18.25-25.917-44.879-55.317-50.001c-31.044-5.409-64.001,8.021-76.7,39.93c-1.861,5.091-1.587,4.051-3.722,10.071 c-32.622,122.603,87.136,105.635,139.243,196.603v-0.045l0,0.064C303.438,289.914,423.195,306.882,390.574,184.277z',
    'M 263.41570,235.14588 C 197.17570,235.14588 143.41575,288.90587 143.41575,355.14588 C 143.41575,489.90139 279.34890,525.23318 371.97820,658.45392 C 459.55244,526.05056 600.54070,485.59932 600.54070,355.14588 C 600.54070,288.90588 546.78080,235.14587 480.54070,235.14588 C 432.49280,235.14588 391.13910,263.51631 371.97820,304.33338 C 352.81740,263.51630 311.46370,235.14587 263.41570,235.14588 z ',
    'M 351.59375,310.15625 C 334.03711,310.25945 314.83081,319.94266 298.25,342.78125 C 250.39157,277.23884 180.82103,320.94613 192.09375,387.96875 C 194.93003,404.83205 200.57286,419.63136 206.75,431.78125 L 206.59375,431.75 C 207.04032,432.52348 207.20954,433.21047 207.65625,433.96875 C 208.54066,435.46999 209.42805,436.93244 210.3125,438.375 C 210.38208,438.48848 210.43042,438.60563 210.5,438.71875 C 210.5108,438.73774 210.52045,438.76228 210.53125,438.78125 C 210.5682,438.84129 210.6193,438.90881 210.65625,438.96875 C 210.69063,439.02896 210.71562,439.09621 210.75,439.15625 C 219.7588,454.88742 228.86423,464.91713 231.4375,467.625 C 231.49355,467.68398 231.54397,467.76052 231.59375,467.8125 C 231.60832,467.8292 231.61043,467.85832 231.625,467.875 C 231.67794,467.93014 231.73631,467.98483 231.78125,468.03125 C 231.80017,468.05286 231.82483,468.07217 231.84375,468.09375 C 231.87567,468.12658 231.91067,468.16009 231.9375,468.1875 C 232.3707,468.68079 232.78602,469.17524 233.21875,469.65625 C 294.58486,537.86979 351.08212,483.22729 364.53125,468.125 C 364.53125,468.125 396.37102,436.60741 404.59375,387.71875 C 411.97145,343.85417 384.7183,309.96153 351.59375,310.15625 z ',
    'M 58,17 C 52,7 42,0 30,0 C 13,0 0,13 0,30 C 0,63 18,68 58,106 C 98,68 116,63 116,30 C 116,13 103,0 86,0 C 74,0 64,7 58,17 z '],
  colors: ['#ff0707', '#ee42c5', '#db5c0f', '#ff0707', '#ee42c5', '#db5c0f']
}

function Heart(paper) {

  if ( !(this instanceof arguments.callee) ) {
    return new arguments.callee(arguments);
  }

  var self = this,
      heartDimension = 300,
      theHeart;

  self.init = function(paper) {
    var index = Math.floor(Math.random() * 6),
        x = Math.floor(Math.random() * 800) - 200,
        y = Math.floor(Math.random() * 600) - 200,
        thePath = symbols.paths[index],
        heartPath = paper.path(thePath);
        // labelPath;
    self.theHeart = heartPath;
    // self.theLabel = labelPath;
    heartPath.attr({fill: symbols.colors[index], stroke: "none", scale: 0.1});
    heartPath.translate(x,y);
    heartPath.animate({scale: 0.3}, 500);
    heartPath.toFront();
    // if (index != 1 && index != 5) {
    //   // not a smaller heart
    //   labelPath = paper.text(0, 0, 'K\n+\nH');
    //   labelPath.attr({
    //       'fill': '#ccc',
    //       'font-size': 8,
    //       'font-family': "'League Gothic', 'Futura-CondensedMedium', 'Gill Sans MT Condensed', 'Arial Narrow', sans-serif"
    //   });
    //   var bbox = heartPath.getBBox();
    //   labelPath.translate(bbox.x + (bbox.width/2), bbox.y + (bbox.height/2));
    //   labelPath.toFront();
    // }
    heartPath.hover(
      function() {
        this.animate({scale: 0.5}, 300, 'backOut');
      }, 
      function() {
        this.animate({scale: 0.3}, 200, 'backIn');
      }
    );
    heartPath.click(function() { 
        this.animate({scale: 0.0}, 250, function() {
          this.remove(); 
        });
      }
    );    
  };

  self.fadeAway = function() {
    // if (self.theLabel != null) {
    //   self.theLabel.remove();
    //   self.theLabel = null;
    // }
    self.theHeart.animate({scale: 0.0}, 250, function() {
        self.theHeart.remove();
        self.theHeart = null;
      }
    );
  };
  
  self.init(paper);
}

jQuery(function () {

  var paper = new Raphael('stage', 800, 600);

  setInterval(function() { 
    var heart = new Heart(paper);
    setTimeout(function() { heart.fadeAway(); }, 3000);
  }, 200);

});
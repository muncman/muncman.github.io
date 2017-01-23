//////////
// Copyright Kevin Munc (kevin at munc dot com)
// License:  http://creativecommons.org/licenses/by/2.5/
//////////

    /* Display output. */
    function display(message) {
      document.getElementById("output").innerHTML = message;
    }

    /*
     * Perform the requested conversion.
     * See http://ostermiller.org/calc/ascii.html to verify results.
     */
    function convert() {
      var outValue = "";
      var convType = "asciiToHex";
      inValue = document.forms["conversionForm"].elements["toConvert"].value;
      for (i=0; i<document.forms["conversionForm"].conversionType.length; i++) {
        if (document.forms["conversionForm"].conversionType[i].checked) {
          convType = document.forms["conversionForm"].conversionType[i].value;
        }
      }
      if (convType == "asciiToHex") {
        outValue = translateFromAscii(inValue, 16);
      } else if (convType == "hexToAscii") {
        outValue = unescape(inValue);
      } else if (convType == "asciiToOctal") {
        outValue = translateFromAscii(inValue, 8);
      } else if (convType == "octalToAscii") {
        outValue = translateToAscii(inValue, 8);
      } else if (convType == "asciiToBin") {
        outValue = translateFromAscii(inValue, 2);
      } else if (convType == "binToAscii") {
        outValue = translateToAscii(inValue, 2);
      } else if (convType == "asciiToHttp") {
        outValue = escape(inValue);
      } else if (convType == "httpToAscii") {
        outValue = unescape(inValue);
      } else {
        outValue = "Unknown Conversion Request: " + convType;
      }
      outValue = breakItUp(outValue);
      display(outValue);
    }

    /* Perform common translation. */
    function translateFromAscii(input, base) {
      var output = "";
      for (i=0; i<input.length; i++) {
        output += '%' + input.charCodeAt(i).toString(base);
      }
      return output
    }

    /* Translate to ascii from the given base type. */
    function translateToAscii(input, exponent) {
      var temp = "";
      var result = "";
      //append a percent sign to trigger the final evaluation
      input = input + "%";
      for (i=0; i<input.length; i++) {
        if (input.charAt(i) != '%') {
          temp += input.charAt(i);
        } else if (temp != "") {
          var running = 0;
          var notMatchedYet = true;
          for (j=0,k=temp.length-1; k>=0; j++,k--) {
            if ((temp.match("\\n")) && (notMatchedYet)) {
              k--;
              notMatchedYet = false;
            }
            partial = temp.charAt(j) * Math.pow(exponent,k);
            running += partial;
          }
          result += String.fromCharCode(running);
//          alert("result: '" + result + "'");
          //reset for new token
          temp = "";
        } //else initial '%' or line feed
      }
/*TODO:
alert(result);
var regex = /(.*)(\n|\cr|\r)(.*)/g;
var replace = "$1<br />$3";
result = result.replace(regex, replace);
alert(result);
*/
      return result;
    }

    /* Insert breaks to force wrapping of the result. */
    function breakItUp(input) {
      var result = "";
      //hex
      result = input.replace(/%20%/g, "%20<br />%");
      //octal
      result = result.replace(/%40%/g, "%40<br />%");
      //bin
      result = result.replace(/%100000%/g, "%100000<br />%");
      return result;
    }


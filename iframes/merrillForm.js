/**
 * Returns the markup for the HTML Form as a string.
 * Note that the markup must have any single quotes escaped
 * (or possibly replaced with &apos;, where appropriate).
 */
function getMerrillForm() {
  return '' +
'    <!-- Start Merrill Connect Form Body Content. -->' +
'    <!-- TODO: move size attributes to CSS (control on our side) -->' +
'    <table width="584" border="0" align="center" cellpadding="3" cellspacing="0">' +
'      <tr>' +
'        <td align="left" colspan="2" width="100%" class="ActionHead2">' +
'          &nbsp;' +
'        </td>' +
'      </tr>' +
'      <tr align="left" valign="middle" class="centobjBody">' +
'        <td width="100">' +
'          Distribution:' +
'        </td>' +
'        <td width="335">' +
'          <select name="attribute(distAbbr)">' +
'            <option value="ID">' +
'              Investment Dealer' +
'            </option>' +
'            <option value="FI">' +
'              Financial Institution' +
'            </option>' +
'            <option value="WH">' +
'              Wirehouse' +
'            </option>' +
'            <option value="EA">' +
'              Exclusive Agent' +
'            </option>' +
'          </select>' +
'        </td>' +
'      </tr>' +
'      <tr align="left" valign="middle" class="centobjBody">' +
'        <td width="100">' +
'          State:' +
'        </td>' +
'        <td width="335">' +
'          <!-- Note: List out only the states for which the current user is licensed. -->' +
'          <select name="attribute(stateAbbr)">' +
'            <option value="AK">' +
'              AK' +
'            </option>' +
'            <option value="AL">' +
'              AL' +
'            </option>' +
'            <option value="AR">' +
'              AR' +
'            </option>' +
'            <option value="AZ">' +
'              AZ' +
'            </option>' +
'            <option value="CA">' +
'              CA' +
'            </option>' +
'            <option value="CO">' +
'              CO' +
'            </option>' +
'            <option value="CT">' +
'              CT' +
'            </option>' +
'            <option value="DC">' +
'              DC' +
'            </option>' +
'            <option value="DE">' +
'              DE' +
'            </option>' +
'            <option value="FL">' +
'              FL' +
'            </option>' +
'            <option value="GA">' +
'              GA' +
'            </option>' +
'            <option value="GU">' +
'              GU' +
'            </option>' +
'            <option value="HI">' +
'              HI' +
'            </option>' +
'            <option value="IA">' +
'              IA' +
'            </option>' +
'            <option value="ID">' +
'              ID' +
'            </option>' +
'            <option value="IL">' +
'              IL' +
'            </option>' +
'            <option value="IN">' +
'              IN' +
'            </option>' +
'            <option value="KS">' +
'              KS' +
'            </option>' +
'            <option value="KY">' +
'              KY' +
'            </option>' +
'            <option value="LA">' +
'              LA' +
'            </option>' +
'            <option value="MA">' +
'              MA' +
'            </option>' +
'            <option value="MD">' +
'              MD' +
'            </option>' +
'            <option value="ME">' +
'              ME' +
'            </option>' +
'            <option value="MI">' +
'              MI' +
'            </option>' +
'            <option value="MN">' +
'              MN' +
'            </option>' +
'            <option value="MO">' +
'              MO' +
'            </option>' +
'            <option value="MS">' +
'              MS' +
'            </option>' +
'            <option value="MT">' +
'              MT' +
'            </option>' +
'            <option value="NC">' +
'              NC' +
'            </option>' +
'            <option value="ND">' +
'              ND' +
'            </option>' +
'            <option value="NE">' +
'              NE' +
'            </option>' +
'            <option value="NH">' +
'              NH' +
'            </option>' +
'            <option value="NJ">' +
'              NJ' +
'            </option>' +
'            <option value="NM">' +
'              NM' +
'            </option>' +
'            <option value="NV">' +
'              NV' +
'            </option>' +
'            <option value="NY">' +
'              NY' +
'            </option>' +
'            <option value="OH">' +
'              OH' +
'            </option>' +
'            <option value="OK">' +
'              OK' +
'            </option>' +
'            <option value="OR">' +
'              OR' +
'            </option>' +
'            <option value="PA">' +
'              PA' +
'            </option>' +
'            <option value="PR">' +
'              PR' +
'            </option>' +
'            <option value="RI">' +
'              RI' +
'            </option>' +
'            <option value="SC">' +
'              SC' +
'            </option>' +
'            <option value="SD">' +
'              SD' +
'            </option>' +
'            <option value="TN">' +
'              TN' +
'            </option>' +
'            <option value="TX">' +
'              TX' +
'            </option>' +
'            <option value="UT">' +
'              UT' +
'            </option>' +
'            <option value="VA">' +
'              VA' +
'            </option>' +
'            <option value="VI">' +
'              VI' +
'            </option>' +
'            <option value="VT">' +
'              VT' +
'            </option>' +
'            <option value="WA">' +
'              WA' +
'            </option>' +
'            <option value="WI">' +
'              WI' +
'            </option>' +
'            <option value="WV">' +
'              WV' +
'            </option>' +
'            <option value="WY">' +
'              WY' +
'            </option>' +
'          </select>' +
'        </td>' +
'      </tr>' +
'    </table>' +
'    <!-- End Merrill Connect Form Body Content. -->' +
  '';
}

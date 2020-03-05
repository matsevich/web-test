(function( cssPhoneInfo, $, undefined ) {

  cssPhoneInfo.insert = function () {
    var css_headerInfo = [{currencies: 'en-US,en-CA', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: ''},
              {currencies: 'en-GB', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">Cookie Policy</a>'},
              {currencies: 'en-RW,en-IE,se-SE,nb-NO,da-DK,en-ZA', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">Cookie Policy</a>'},
              {currencies: 'de-DE,de-LI', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">Cookie-Richtlinie вЂ“ Neu</a>'},
              {currencies: 'fr-FR', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">Cookies : nouvelle politique</a>'},
              {currencies: 'it-IT', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">Informativa sui cookie вЂ“ NovitГ </a>'},
              {currencies: 'nl-NL', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">Cookiebeleid вЂ“ Nieuw</a>'},
              {currencies: 'cs-CZ', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">NovГ© вЂ“ zГЎsady cookies</a>'}];
              //{currencies: 'pl-PL', phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%', extraInfo: '<a href="http://www.corel.com/privacy/#cookies" target="_blank">Pliki cookie (nowe zasady)</a>'}];
    var css_genericInfo = {phoneText: '<a href="tel:%phonenumber%">%phonenumber%</a>', hoursText: '%hours%'}
              
    // Insert CSS Phone numbers into header
    for (var i=0; i < css_headerInfo.length; i++) {
      var currencyList = css_headerInfo[i].currencies.split(",");
      if ($.inArray(pricing.getCurrency(), currencyList) != -1) {
        if (null != $(".phone")[0]) {
          $(".phone")[0].innerHTML = replaceToken(css_headerInfo[i].phoneText);
          $(".phone").attr('data-content', replaceToken(css_headerInfo[i].hoursText));
          $(".cookies")[0].innerHTML = css_headerInfo[i].extraInfo;
          $(".h-phone, .phone, .cookies").show();
        }
        break;
      }
    }
    
    // Insert any other CSS phone numbers on the page
    $(".phoneNumber").html(replaceToken(css_genericInfo.phoneText));
    $(".callHours").html(replaceToken(css_genericInfo.hoursText));
  }
  
  var css_phoneInfo = {'en-US':{phonenumber: '1-877-582-6735', hours: 'Mon-Fri: 9am-10pm EST<br>Sat-Sun: 9am-6pm EST'},
             'en-CA':{phonenumber: '1-877-582-6735', hours: 'Mon-Fri: 9am-10pm EST<br>Sat-Sun: 9am-6pm EST'},
             'en-GB':{phonenumber: '0 800 023 2433', hours: 'Mon-Sun: 8am-5pm GMT'},
             'en-RW':{phonenumber: '+44 2039 01 8665', hours: 'Mon-Sun: 8am-5pm GMT & CET'},
             'en-IE':{phonenumber: '+44 2039 01 8665', hours: 'Mon-Sun: 8am-5pm GMT & CET'},
             'en-ZA':{phonenumber: '+44 2039 01 8665', hours: 'Mon-Sun: 8am-5pm GMT & CET'},
             'se-SE':{phonenumber: '+44 2039 01 8665', hours: 'Mon-Sun: 8am-5pm GMT & CET'},
             'nb-NO':{phonenumber: '+44 2039 01 8665', hours: 'Mon-Sun: 8am-5pm GMT & CET'},
             'da-DK':{phonenumber: '+44 2039 01 8665', hours: 'Mon-Sun: 8am-5pm GMT & CET'},
             'de-LI':{phonenumber: '+44 2039 01 8665', hours: 'Mo-So 8.00 bis 05.00 GMT & CET (auf Englisch)'},
             'de-DE':{phonenumber: '+49 8007238455', hours: 'Mo-So 8.00 bis 05.00 GMT & CET (auf Englisch)'},
             'fr-FR':{phonenumber: '+33 805087928', hours: 'Lun-dim 8h-17h GMT & CET (en anglais)'},
             'it-IT':{phonenumber: '+44 2039 01 8665', hours: 'Lun-dom 08:00-17:00 GMT & CET (in inglese)'},
             'nl-NL':{phonenumber: '+44 2039 01 8665', hours: 'Ma-zo 08:00 tot 17:00 uur GMT en CET (in het Engels)'},
             'cs-CZ':{phonenumber: '+44 2039 01 8665', hours: 'Po-Ne 08:00-17:00 GMT & CET (v angliДЌtinД›)'}};
             //'pl-PL':{phonenumber: '+48 71 738 24 38', hours: 'Pn-pt w godzinach 9-17 CET'}};
  
  function replaceToken (str){
    var result = str;
    var tokens = str.match(/%\w*%/ig);
    if (null != tokens) {
      var phoneInfo = {};
      if (css_phoneInfo.hasOwnProperty(pricing.getCurrency())) {
        phoneInfo = css_phoneInfo[pricing.getCurrency()];
      }
      else {
        phoneInfo = css_phoneInfo['en-US'];
      }
      for (var i=0; i < tokens.length; i++) {
        if (tokens[i] == "%phonenumber%") {
          result = result.replace(tokens[i], phoneInfo.phonenumber);
        }
        else if (tokens[i] == "%hours%") {
          result = result.replace(tokens[i], phoneInfo.hours);
        }
      }
    }
    return result;
  }
  }( window.cssPhoneInfo = window.cssPhoneInfo || {}, jQuery ));
  
  $( window ).ready(function() {
    cssPhoneInfo.insert();
  });
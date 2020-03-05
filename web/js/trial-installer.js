var urlQuery = window.location.href.split("sourceid=");
var now = new Date();
var time = now.getTime();
time += 30*3600 * 1000*24;
now.setTime(time);
/*document.cookie =
'sourceid=' + value +
'; expires=' + now.toUTCString() +
'; path=/';*/
var source_id_cdgs="";
var elementid="cdgs-trial"
var hostName = window.location.hostname;

var siteCookie = document.cookie.match('(?:^|;) ?' + 'source_id_cdgs' + '=([^;]*)(?:;|$)');
if(siteCookie){
    source_id_cdgs = siteCookie[1];
    }

var ref = document.referrer;
var req = new XMLHttpRequest();
req.open('GET', "/geolookup.html", false);
req.send(null);
var countryCode = (req.getResponseHeader('true-client-country-4js') == null ? "US": req.getResponseHeader('true-client-country-4js').toUpperCase());

var euCountries = [  "AD", "AL","AT", "AX", "BA","BE","BG","BY","CH","DE","DK","EE","EU", "FI","FO","FR", "FX","GB","GG","GI","GR","HR","HU","IE","IM","IS","IT","JE","LI","LT","LU","LV","MC","MD","ME","MK","MT","NL","NO","PT","RO","RS","SE","SI","SJ","SK","SM","UA","VA"];

var installerServerPath = "https://installer.corel.com/get_dwnld.cgi";
if(hostName.indexOf("dev.") > -1){
installerServerPath = "https://dev.installer.public.corel.net/get_dwnld.cgi";
}else if(hostName.indexOf("stg.") > -1){
installerServerPath = "https://stg.installer.public.corel.net/get_dwnld.cgi";
}else if(hostName.indexOf("local.") > -1){
installerServerPath = "http://127.0.0.1/get_dwnld.cgi";
}

if (ref.match(/^https?:\/\/www\.google\.([^\/]+)(\/|$)/i))
{
  source_id_cdgs = "cdgs2018-xx-seo";
  if(((window.location.href.search("gclid=")) >0))
  {
    source_id_cdgs = "cdgs2018-xx-ppc_brkws";
    if((urlQuery[1].search("&")) >0)
    {
        var sub_urlQuery= urlQuery[1].split("&");
        source_id_cdgs = sub_urlQuery[0];
    }
    else{

        source_id_cdgs = urlQuery[1];
        }
  }
  //alert("goes here");
  if(siteCookie){
    source_id_cdgs = siteCookie[1];
    $(document).ready(function(){$.getJSON(installerServerPath, {"source_id": source_id_cdgs}, function(data_dwn){document.getElementById(elementid).href = data_dwn.download_url;
    document.cookie = 'stub-trk-param=' + data_dwn.stub_trk_param + '; expires=' + now.toUTCString() + '; path=/';})});
    }
    else{
  document.cookie =
'source_id_cdgs=' + source_id_cdgs +
'; expires=' + now.toUTCString() +
'; path=/';

  $(document).ready(function(){$.getJSON(installerServerPath, {"source_id": source_id_cdgs}, function(data_dwn){document.getElementById(elementid).href = data_dwn.download_url;
    document.cookie = 'stub-trk-param=' + data_dwn.stub_trk_param + '; expires=' + now.toUTCString() + '; path=/';
  })});
  }
}

else if(urlQuery.length>0 && ((window.location.href.search("sourceid=")) >0))
{
    if((urlQuery[1].search("&")) >0)
    {
        var sub_urlQuery= urlQuery[1].split("&");
        source_id_cdgs = sub_urlQuery[0];
    }
    else{

        source_id_cdgs = urlQuery[1];
        }

    //if (source_id_cdgs is not null)
    if(siteCookie){
        if(euCountries.indexOf(countryCode) >-1 ){
            source_id_cdgs = source_id_cdgs.replace("-rw", "-emea");
        }
        if(source_id_cdgs.indexOf("control2") > -1 || source_id_cdgs.indexOf("ipp2") > -1){
            document.cookie = 'source_id_cdgs=' + source_id_cdgs +
            '; expires=' + now.toUTCString() +
            '; path=/';
        }
        else{
            source_id_cdgs = siteCookie[1];

        }

    //alert("goes here1 " + source_id_cdgs);

    $(document).ready(function(){$.getJSON(installerServerPath, {"source_id": source_id_cdgs}, function(data_dwn){if(data_dwn.download_url != "NONE"){document.getElementById(elementid).href = data_dwn.download_url;
    document.cookie = 'stub-trk-param=' + data_dwn.stub_trk_param + '; expires=' + now.toUTCString() + '; path=/';}})});
    }
    else{

        if(euCountries.indexOf(countryCode) >-1 && (source_id_cdgs.indexOf("control2") > -1 || source_id_cdgs.indexOf("ipp2") > -1)){
            source_id_cdgs = source_id_cdgs.replace("-rw", "-emea");
        }
    //alert("goes here2 " + siteCookie);
  document.cookie =
'source_id_cdgs=' + source_id_cdgs +
'; expires=' + now.toUTCString() +
'; path=/';
    $(document).ready(function(){$.getJSON(installerServerPath, {"source_id": source_id_cdgs}, function(data_dwn){if(data_dwn.download_url != "NONE"){document.getElementById(elementid).href = data_dwn.download_url;
    document.cookie = 'stub-trk-param=' + data_dwn.stub_trk_param + '; expires=' + now.toUTCString() + '; path=/';}})});
    }
}
if(source_id_cdgs){
    $(document).ready(function(){$.getJSON(installerServerPath, {"source_id": source_id_cdgs}, function(data_dwn){if(data_dwn.download_url != "NONE"){document.getElementById(elementid).href = data_dwn.download_url;
    document.cookie = 'stub-trk-param=' + data_dwn.stub_trk_param + '; expires=' + now.toUTCString() + '; path=/';}})});
}

function isEmea() {
result = false;
if(euCountries.indexOf(countryCode) >-1 ) {
  result = true;
}
return result;
}

function isMac() {
result = false;
if (window.navigator.userAgent.indexOf("Mac") != -1) {
  result = true;
}
return result;
}

var runOnce = false;
function replaceForMac() {
if (!runOnce && isMac()) {
  var trialLink = "https://www.corel.com/akdlm/6763/downloads/free/trials/GraphicsSuite/2019/R5tgO2Wx1/CorelDRAWGraphicsSuite2019Installer_RW.dmg";
  if (isEmea()) {
    trialLink = "https://www.corel.com/akdlm/6763/downloads/free/trials/GraphicsSuite/2019/R5tgO2Wx1/CorelDRAWGraphicsSuite2019Installer_EMEA.dmg";
  }
  // update all of the trial download links on the page
  $(".cdgs-trial").attr("href", trialLink);
  
  // update any learn more buttons to point to Mac product page
  var productLink = $(".cdgs-product").attr("href");
  $(".cdgs-product").attr("href", productLink + "mac/");
  
  // switch the "are you looking for" links
  $(".cdgs-mac-product").hide();
  $(".cdgs-win-product").show();
}
runOnce = true;
}

$(document).ready(function(){
if (isEmea()) {
  $("#cdgs-trial-mac").attr("href", "https://www.corel.com/akdlm/6763/downloads/free/trials/GraphicsSuite/2019/R5tgO2Wx1/CorelDRAWGraphicsSuite2019Installer_EMEA.dmg");
}
});
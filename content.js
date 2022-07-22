var pattern=/youtube.com\/shorts\/\w+/;
var watchText = "/watch?v=";
var newurl;
if (pattern.test(document.location.href))
{
  newurl = document.location.protocol + "//" + document.location.host + watchText + document.location.pathname.split('/')[2]; 
  chrome.extension.sendRequest({redirect: newurl});
}
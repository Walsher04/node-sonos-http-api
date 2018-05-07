const fs = require('fs');
const JSON5 = require('json5');
const logger = require('sonos-discovery/lib/helpers/logger');

function loadme()
{
document.getElementById('image').src = displaydate();

}

function displaydate()
{
//your displaydate() function here
//function getImageUrl(img) {
   var mw = "http://192.168.1.30:1400/getaa?u=x-file-cifs%3a%2f%2fTheW-Synology%2fMusic%2fImagine%2520Dragons%2fEvolve%2f09%2520Thunder.mp3&v=88";
  
return mw ;


}

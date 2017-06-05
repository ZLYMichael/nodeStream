  var getHTML = require('./http-functions');

var requestOptions = {
  host: 'sytantris.github.io',
  path: '/http-examples/step6/1337.html'
};

function print1337(html) {

  html = html
    .replace(/ck/ig, 'x')
    .replace(/er/ig, '0r')
    .replace(/you/ig, 'j00')
    .replace(/a/ig, "4")
    .replace(/e/ig, "3")
    .replace(/o/ig, "0")
    .replace(/s/ig, "5")
    .replace(/t/ig, "7");
  console.log(html);
}

getHTML(requestOptions, print1337);
var https = require('https');
function getHTML(options, callback) {

  https.get(options, function(response) {
    response.setEncoding('utf8');
    response.on('data', function (data) {
        var dataOut = ""
        for (var i = 0; i < data.length; i++) {
          dataOut += data[i]
      };
    console.log(dataOut.toString())
    })
  });
  function printHTML(html) {
    console.log(html);
  };
}

var requestOptions = {
  host:'sytantris.github.io',
  path:'/http-examples/step4.html'
};

getHTML(requestOptions)
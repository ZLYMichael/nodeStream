var https = require('https');
function getAndPrintHTML(options) {

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
}

var requestOptions = {
  host:'sytantris.github.io',
  path:'/http-examples/step3.html'
};

getAndPrintHTML(requestOptions)
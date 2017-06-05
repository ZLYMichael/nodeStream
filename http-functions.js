var https = require('https');

module.exports = function getHTML(options, callback) {

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
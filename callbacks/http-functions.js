var https = require('https');

module.exports = function getHTML(options, callback) {

  https.get(options, function(response) {
    var dataOut = "";
    response.setEncoding('utf8');
    response.on('data', function (data) {
        dataOut += data
      });
    response.on('end', function() {
      callback(dataOut)
    })
  });
}
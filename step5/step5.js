var getHTML = require('./http-function');

var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};

function printHTML (html) {
  console.log(html);
}

getHTML(requestOptions, printHTML);
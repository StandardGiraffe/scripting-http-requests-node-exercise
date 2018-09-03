const getHTML = require("./http-functions.js");


var requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};


const printUppercase = function (html) {
  console.log(html.toUpperCase());
}

getHTML(requestOptions, printUppercase);

getHTML = require("./http-functions.js");

const requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};

function printLowerCase (html) {
  console.log(html.toLowerCase());
}

getHTML(requestOptions, printLowerCase);


getHTML = require("./http-functions.js");

const requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};

function reverseText (html) {
  console.log(html.split("").reverse().join(""));
}

getHTML(requestOptions, reverseText);
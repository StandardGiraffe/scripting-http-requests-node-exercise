const https = require("https");

function getHTML (options, callback) {


  https.get(options, (response) => {
    let dataBuffer = "";
    response.setEncoding("utf8");

    response.on("data", (data) => {
      dataBuffer += data;
      console.log("Received a data chunk and added it to the buffer.")
    });

    response.on("end", () => {
      console.log("Download complete.  Returning buffer.");
      callback(dataBuffer);
    });

  });

}

const requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
};

function printHTML (html) {
  console.log(html);
}


getHTML(requestOptions, printHTML);
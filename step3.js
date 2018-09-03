const https = require("https");


function getAndPrintHTML () {

// Takes parameters from the command line: (host, path).

  https.get(requestOptions, (response) => {
    let dataBuffer = "";
    response.setEncoding("utf8");

    response.on("data", (data) => {
      dataBuffer += data;
      console.log("Received a data chunk and added it to the buffer.");
    });

    response.on("end", () => {
      console.log("Data acquired.  Printing buffer:\n")
      console.log(dataBuffer);
    });

  });


}

const requestOptions = {
  host: process.argv[2],
  path: process.argv[3]
}

getAndPrintHTML();
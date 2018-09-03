const https = require("https");

function getAndPrintHTML() {

    const requestOptions = {
      host: "sytantris.github.io",
      path: "/http-examples/step2.html"
    }

  https.get(requestOptions, (response) => {
    let dataBuffer = "";
    response.setEncoding("utf8");

    response.on("data", (data) => {
      dataBuffer += data;
      console.log("Received data added to the output buffer.");
    });

    response.on("end", () => {
      console.log("Complete data follows: \n");
      console.log(dataBuffer);
    });

  });
}

getAndPrintHTML();

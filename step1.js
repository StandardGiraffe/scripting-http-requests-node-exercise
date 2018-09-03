https = require("https");

function getAndPrintHTMLChunks () {
  var requestOptions = {
    host: 'sytanris.github.io',
    path: '/http-examples/step1.html'
  }

  https.get(requestOptions, (response) => {
    response.setEncoding("utf8");

    response.on("data", (data) => {
      console.log("Chunk received.  Length: " + data.length + "\n Contents:\n;");

      console.log(data + "\n")

    });


    response.on("end", () => {
      console.log("\nResponse stream complete.");
    });
  });

};

getAndPrintHTMLChunks();
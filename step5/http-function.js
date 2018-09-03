module.exports = function getHTML (options, callback) {

  const https = require("https");

  https.get(options, (response) => {
    let dataBuffer = "";
    response.setEncoding("utf8");

    response.on("data", (data) => {
      dataBuffer += data;
      console.log("Received a data chunk and added it to the buffer.")
    });

    response.on("end", () => {
      console.log("Download complete.");
      callback(dataBuffer);
    });

  });

}
const request = require('request');
const fs = require('fs');

request(process.argv[2], (error, response, body) => {
  fs.writeFile(process.argv[3], body, err => {
    if (err) {
      console.error(err)
      return
    }
    console.log("Download and saved " + body.length + " bytes to " + process.argv[3])
  })
});
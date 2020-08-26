const domainName = process.argv[2];
const localFile = process.argv[3];

const request = require('request');
const fs = require('fs');
const readLine = require('readline');

request(domainName, (error, response, body) => {
  if (localFile) {
    console.log('meow')
  } else {
    console.log('poop')
  }
  // fs.writeFile(localFile, body, () => {
  //   console.log(`Downloaded and saved ${body.length} bytes to ${localFile}.`);
  // });
});

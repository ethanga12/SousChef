const express = require('express');
const app = express();

// async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient({
    keyFilename: '/Users/ethanasis/Desktop/SousChef/eco-watch-291322-394e56de3abb.json'
  });

  // Performs label detection on the image file
  client
    .labelDetection('Users/ethanasis/Desktop/SousChef/bigReceipt3.jpg')
    .then(results => {
      const labels = results[0].labelAnnotations;

      console.log('Labels:')
      labels.forEach(label => console.log(label.description))
    })
    .catch(err => {
      console.error('ERROR:', err);
    });
  // }
app.listen(5000, '127.0.0.1', () => console.log('Server Running'))

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
const [result] = await client.labelDetection('Users/ethanasis/Desktop/SousChef/bigReceipt3.jpg');
const labels = result.labelAnnotations;
console.log('Labels:');
labels.forEach(label => console.log(label.description));
// }

app.listen(5000, '127.0.0.1', () => console.log('Server Running'))

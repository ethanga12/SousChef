async function quickstart() {
  // Imports the Google Cloud client library
  const vision = require('@google-cloud/vision');

  // Creates a client
  const client = new vision.ImageAnnotatorClient();
  /**
   * TODO(developer): Uncomment the following line before running the sample.
   */
  const fileName = '/Users/ethanasis/Desktop/SousChef/bigReceipt3.jpg';

  // Performs text detection on the local file
  const [result] = await client.textDetection(fileName);
  const detections = result.textAnnotations;
  console.log('Text:');
  detections.forEach(text => console.log(text));

}

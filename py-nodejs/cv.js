const spawn = require("child_process").spawn;

// "Users/ethanasis/Desktop/SousChef/bigReceipt3.jpg"
var imgLoc = "Users/ethanasis/Desktop/SousChef/bigReceipt3.jpg";

$.ajax({
  type: "POST",
  url: "~/computerVision/visionTrial.py",
  data: {param: imgLoc}
}).done(function( o ){
  console.log("done????")
});
// const pythonProcess = spawn('python3', ["computerVision/visionTrial.py"]);
// pythonProcess.stdout.on('data', (data) => {
//   mystr = data.toString();
//   console.log(mystr);
  // const createCsvWriter = require('csv-writer').createObjectCsvWriter;
  // const csvWriter = createCsvWriter({
  //     path: 'test.csv',
  //     header: [
  //         {id: 'name', title: 'NAME'},
  //         {id: 'lang', title: 'LANGUAGE'}
  //     ]
  // });
  //
  // const records = [
  //     {name: 'Bob',  lang: 'French, English'},
  //     {name: 'Mary', lang: 'English'}
  // ];
  //
  // csvWriter.writeRecords(records)       // returns a promise
  //     .then(() => {
  //         console.log('...Done');
  //     });

  // This will produce a file path/to/file.csv with following contents:
  //
  //   NAME,LANGUAGE
  //   Bob,"French, English"
  //   Mary,English
  // myjson = JSON.parse(mystr);
  // console.log(`JSON IS : ${myjson}`);
  // console.log(myjson.Response);
  // console.log(myjson.Message);
// });

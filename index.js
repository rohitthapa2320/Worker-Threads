const {Worker} = require('worker_threads');


//Creating a new worker thread
const worker= new Worker('./worker.js');

//Listening to message from worker thread
worker.on('message' , message => {
  console.log('Message Received by Parent: ', message);
});

//Listening for errors
worker.on('error', err => {
  console.log("Error: ", err );
});

//Listening for worker thread to exit
worker.on('exit', exitCode => {
  console.log("Exit: ", exitCode);
});

console.log("We are in parent thread");
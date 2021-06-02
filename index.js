const {Worker} = require('worker_threads');

let num=10;

//Creating a new worker thread
const worker= new Worker('./worker.js', {workerData: {num: num}});

//Listening to message from worker thread
// worker.on('message' , message => {
//   console.log('Message Received by Parent: ', message);
// });

//Listening for result from worker
worker.on('message', result => {
  console.log("Received result from worker");
  console.log(`Factorial of ${num}= ${result}`);
});

//Listening for errors
worker.on('error', err => {
  console.log("Error: ", err );
});

//Listening for worker thread to exit
worker.on('exit', exitCode => {
  console.log("Worker Exited with code: ", exitCode);
});

console.log("\nWe are in parent thread\n");
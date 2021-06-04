const {Worker} = require('worker_threads');

// let num=10;

//Creating a new worker thread and sending number to worker through workerData 
// const worker= new Worker('./worker.js', {workerData: {num: num}});

const worker = new Worker('./worker.js');

//Listening to message from worker thread
// worker.on('message' , message => {
//   console.log('Message Received by Parent: ', message);
// });


//Listening for result from worker
worker.on('message', result => {
  console.log("Received result from worker");
  console.log(`\nFactorial of ${result.num}= ${result.factorial}\n`);
  worker.terminate();
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

//Sending number to worker using postMesssage
worker.postMessage({num:12});
worker.postMessage({num:15});
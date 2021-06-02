const {parentPort} = require('worker_threads');

console.log("We are in worker thread");

//Sending message to main thread
parentPort.postMessage('Hello from worker thread');

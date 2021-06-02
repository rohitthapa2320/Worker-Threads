const {parentPort, workerData} = require('worker_threads');

console.log("We are in worker thread\n");

//Sending message to main thread
// parentPort.postMessage('Hello from worker thread');

//Sending result to main thread
parentPort.postMessage(getFac(workerData.num));

//Fuction to find factorial of a number
function getFac(number){
  if(number === 1)
    return 1;

  return number * getFac(number-1);
}

const worker = new Worker('Thread.js');

worker.postMessage({
    anything: "good morning",
});

worker.onmessage = e => console.log(e.data);




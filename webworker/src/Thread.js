onmessage = e => { 
    const { data } = e;
    const { anything } = data;
    console.log(anything);
    console.log(this);

    
    
    postMessage({
        message: "greetings from worker",
        payload: 42,
        ping: data
    });

}
onmessage = e => { 
    const { data } = e;
    const { anything } = data;

    fetch('big.json').
        then(r => r.json()).
        then(j => postMessage(j));
    
    

}
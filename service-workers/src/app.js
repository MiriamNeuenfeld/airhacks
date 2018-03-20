

if (navigator.serviceWorker) {
    console.log(' sw supported');
} else { 
    console.log(' not supported');
}


navigator.serviceWorker.
    register("swworker.js").then(reg => { 
        reg.onupdatefound = e => console.log('reg ',e.type);
        reg.onstatechange = e => console.log('reg ',e.type);
        console.log(reg);
        reg.update();

    });


setInterval(_=>fetchFromServer(),2000);


const fetchFromServer = _ => { 

    fetch('payload.json').
        then(r => r.json()).
        then(j => console.log(j));

}    
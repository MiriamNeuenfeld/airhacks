export default class FetchData extends HTMLElement { 

    constructor() { 
        super();
    }

    connectedCallback() { 
        this.startPolling();
    }

    set serviceURI(serviceURI) { 
        this.setAttribute('service-uri',serviceURI);
    }

    get serviceURI() { 
        return this.getAttribute('service-uri');
    }

    set refreshRate(refresh) { 
        this.setAttribute('refresh-rate',refresh);

    }

    get refreshRate() { 
        return this.getAttribute('refresh-rate');
    }

    fetchData() { 
        fetch(this.serviceURI).
            then(response => response.json()).then(j => console.log(j));
    }

    startPolling() { 
      setInterval(_ => this.fetchData(),this.refreshRate);
    }

}

customElements.define("fetch-data",FetchData);
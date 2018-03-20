class AirHacks extends HTMLElement { 

    constructor() { 
        super();
    }

    connectedCallback() { 
        this.innerText = 'hey joe...';
    }

}

customElements.define('air-hacks',AirHacks);



class AirHacks extends HTMLElement { 

    constructor() { 
        super();
        console.log(this.innerText);
    }

    connectedCallback() { 
        console.log('Now Im in DOM ' + this.innerText);
        const origin = this.innerText;
        this.innerText = `Decorated: ${origin} day: ${this.getAttribute('day')}`;
    }

}

customElements.define('air-hacks',AirHacks);



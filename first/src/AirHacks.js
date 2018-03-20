export default class AirHacks extends HTMLElement { 

    constructor() { 
        super();
        console.log(this.innerText);
    }

    connectedCallback() { 
        console.log('Now Im in DOM ' + this.innerText);
        const origin = this.innerText;
        this.innerText = `Decorated: ${origin} day: ${this.getAttribute('category')}`;
    }

    static get observedAttributes() { 
        return ['category','initialized'];
    }

    attributeChangedCallback(name,oldValue,newValue) { 
        console.log(name,oldValue,newValue);
    }

    disconnectedCallback() { 
        console.log('...garbage...');
    }

    set activated(active) { 
        this.setAttribute('activated',active);
    }

    get activated() {
        return this.getAttribute('activated') === "true";
    }
    

    toggleActive() { 
        this.activated = !this.activated;
    }

}

customElements.define('air-hacks',AirHacks);



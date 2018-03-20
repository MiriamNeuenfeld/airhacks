export default class AirButton extends HTMLElement { 

    constructor() { 
        super();
    }

    connectedCallback() { 
        this.innerHTML = `
            ${this.getAttribute('caption')}<button>air push</button>
        `;
        this.button = this.querySelector('button');
        this.button.onclick = _ => this.clicked();
        this.initReferenceToAirHacks();
    }

    initReferenceToAirHacks() { 
        customElements.whenDefined('air-hacks').
            then(_ => {
            const all = document.querySelectorAll('air-hacks');
            all.forEach(a => a.setAttribute('initialized',true));
        });
    }

    clicked() { 
        console.log('going to server');
    }

}

customElements.define('air-button', AirButton);

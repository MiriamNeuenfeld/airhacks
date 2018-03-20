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
            this.all = document.querySelectorAll('air-hacks');
            this.all.forEach(a => a.setAttribute('initialized',true));
        });
    }

    clicked() { 
        console.log('going to server');
        this.all.forEach(a => a.toggleActive());
    }

}

customElements.define('air-button', AirButton);

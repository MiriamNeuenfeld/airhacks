class Workshop extends HTMLElement { 
    constructor() { 
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() { 
        this.root.innerHTML = `
        <style>
        h3{
            background: var(--big-company-color,hotpink);
        }
        
        </style>
        <h3>In a component</h3>
        `;
    }
}

customElements.define("a-workshop",Workshop);
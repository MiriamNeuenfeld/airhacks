class Workshop extends HTMLElement { 
    constructor() { 
        super();
    }

    connectedCallback() { 
        this.innerHTML = `
        <style>
        h2{
            background: hotpink;
        }
        
        </style>
        <h3>In a component</h3>
        `;
    }
}

customElements.define("a-workshop",Workshop);
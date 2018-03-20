class Workshop extends HTMLElement { 
    constructor() { 
        super();
        this.root = this.attachShadow({mode: 'open'});
    }

    connectedCallback() { 
        this.root.innerHTML = `
        <style>
        :host{
            display:block;
        }
        h3{
            background: var(--big-company-color,hotpink);
        }
        </style>
        <slot name="status">
         <h3>In a component</h3>
        </slot>
        <slot name="main">
         hello!
        </slot>
        `;

        const h3 = this.root.querySelector("h3");
        h3.innerText = "set in shadow";
    }
}

customElements.define("a-workshop",Workshop);
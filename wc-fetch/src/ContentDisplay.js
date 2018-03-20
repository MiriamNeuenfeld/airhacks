import DataRow from './DataRow.js';

export default class ContentDisplay extends HTMLElement{ 
    constructor() { 
        super();
        this.payloadCounter = 0;
    }

    connectedCallback() { 
        document.addEventListener("arrival",e => this.display(e));
    }

    display(json) { 
        const { detail } = json;
        
        const content = `<p>${detail.name} ${this.payloadCounter++}</p>`;
        const newRow = new DataRow();
        newRow.content = content;
        this.appendChild(newRow);
        
    }
}
customElements.define("content-display",ContentDisplay);
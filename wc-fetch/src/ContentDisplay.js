import DataRow from './DataRow.js';

export default class ContentDisplay extends HTMLElement{ 
    constructor() { 
        super();
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = `
        <style>
            article{
                font-weight:bold;
            }
        </style>
    `;

        this.payloadCounter = 0;
    }

    connectedCallback() { 
        document.addEventListener("arrival",e => this.display(e));
    }

    display(json) { 

        const { detail } = json;
        console.log(detail);
        while (this.root.firstChild) { 
            this.root.removeChild(this.root.firstChild);
        }
        const { value: persons } = detail;
        persons.forEach(p => { 
            const newRow = new DataRow();
            newRow.content = p;
            newRow.counter = this.payloadCounter++;
            this.root.appendChild(newRow);
    
        });
        
    }
}
customElements.define("content-display",ContentDisplay);
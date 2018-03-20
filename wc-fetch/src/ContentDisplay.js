import DataRow from './DataRow.js';

export default class ContentDisplay extends HTMLElement{ 
    constructor() { 
        super();
        this.filterExpression = "*";
        this.root = this.attachShadow({ mode: 'open' });
        this.root.innerHTML = `
        <style>
            article{
                font-weight:bold;
            }
        </style>
        <input placeholder="filter me"></input>
    `;

        this.payloadCounter = 0;
    }

    connectedCallback() { 
        this.main = document.createElement("main");
        this.root.appendChild(this.main);
        this.root.querySelector("input").onchange = e => this.filterExpression = e.target.value;
        document.addEventListener("arrival", e => this.display(e));
        
    }

    display(json) { 

        const { detail } = json;
        console.log(detail);
        while (this.main.firstChild) { 
            this.main.removeChild(this.main.firstChild);
        }
        this.payloadCounter = 0;
        const { value: persons } = detail;
        persons.filter(p => p.ShipName.startsWith(this.filterExpression) || this.filterExpression === '*').forEach(p => { 
            const newRow = new DataRow();
            newRow.content = p;
            newRow.counter = this.payloadCounter++;
            this.main.appendChild(newRow);
    
        });

        this.root.appendChild(this.createCounter());
        
    }

    createCounter() { 
        const counter = document.createElement("small");
        counter.innerText = this.payloadCounter;
        return counter;

    }
}
customElements.define("content-display",ContentDisplay);
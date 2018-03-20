export default class DataRow extends HTMLElement {
    constructor() {
        super();
        this.__content = "";
    }

    set content(c) {
        console.log('slot',c);
        this.__content = c;
    }

    get content() { 
        return this.__content;
    }

    set counter(counter) { 
        this.setAttribute("counter",counter);
    }

    get counter() { 
        return this.getAttribute("counter");
    }

    connectedCallback() { 
        this.appendChild(this.prepareTemplate());
        this.querySelector("#customer").innerText = this.content.CustomerID;
        this.querySelector("#employee").innerText = this.content.EmployeeID;
        this.querySelector("#ship").innerText = this.content.ShipName;
    }

    prepareTemplate() { 
        if (!DataRow.template) {
            const template = document.createElement('template');
            template.innerHTML = `
            <article>
                <label>Customer:</label>
                <output id="customer"></output>
                <label>Employee:</label>
                <output id="employee"></output>
                <label>ShipName:</label>
                <output id="ship"></output>
            </article>        
        `;
            DataRow.template = template;  
        }
        return DataRow.template.content.cloneNode(true);
    }


}

customElements.define("data-row",DataRow);
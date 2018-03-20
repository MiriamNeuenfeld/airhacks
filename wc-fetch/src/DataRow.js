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
        this.innerHTML = `
        <article>
            <label>Name:</label>
            <output>${this.content.Name}</output>
        </article>
        `;
    }
}

customElements.define("data-row",DataRow);
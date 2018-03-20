export default class DataRow extends HTMLElement {
    constructor() {
        super();
        this.__content = "";
    }

    set content(c) {
        this.__content = c;
    }

    get content() { 
        return this.__content;
    }

    connectedCallback() { 
        this.innerHTML = this.content;
    }
}

customElements.define("data-row",DataRow);
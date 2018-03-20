class OrderEditor extends HTMLElement { 
    constructor() {
        super();
        this.listener = _ => this.editMode();
    }



    connectedCallback() { 
        this.content = this.innerText;        
        this.displayMode();
    }
    displayMode() { 
        this.addEventListener('click',this.listener);
        this.innerHTML = `
           <output>${this.content}</output> 
        `;        
    }

    editMode() { 
        this.removeEventListener('click',this.listener);
        this.innerHTML = `
        <input placeholder="input"></input>
        `;
        this.querySelector("input").onchange = e => {
            this.content = e.target.value;
            this.displayMode();
        }
    }
}

customElements.define("order-editor",OrderEditor);




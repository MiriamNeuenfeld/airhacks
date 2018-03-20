


customElements.whenDefined("vaadin-progress-bar").then(_ => { 
    const progress = document.querySelector("vaadin-progress-bar");
    progress.value = 0.3;
});

customElements.whenDefined("vaadin-date-picker").then(_ => {
    const picker = document.querySelector("vaadin-date-picker");
});

class ScaledInput extends HTMLElement{
    private static template: HTMLTemplateElement;
    static {
        this.template = document.createElement("template");
        this.template.innerHTML = `
        <input type="number" value="0">
        <select></select>
        `;
    }
    private built: boolean;
    private input: HTMLInputElement;
    private select: HTMLSelectElement;

    constructor() {
        super();
        this.attachShadow({mode: "open"});
        this.built = false;
    }

    connectedCallback(){
        // Make sure the element has not already been built
        if(this.built) return;
        this.built = true;

        // Create another variable to reference `this` in anonymous callback functions
        const self = this;

        // Copy the template to the shadow root
        this.shadowRoot.appendChild(
            ScaledInput.template.content.cloneNode(true)
        );

        // Obtain a reference to each of the elements in the shadow root
        this.input = this.shadowRoot.querySelector("input");
        this.select = this.shadowRoot.querySelector("select");

        // Set up a slot that will allow child elements to be moved to inside the select element
        const slot = document.createElement("slot");
        this.select.appendChild(slot);
        slot.addEventListener("slotchange", function (e){
            const nodes = slot.assignedNodes();
            for(const node of nodes){
                self.select.appendChild(node);
            }
            slot.remove();
        });


        this.input.addEventListener("change", function(){
            self.dispatchEvent(new Event("change"));
        });
        this.select.addEventListener("change", function (){
            self.dispatchEvent(new Event("change"));
        });
    }

    get value(){
        return parseFloat(this.input.value) * parseFloat(this.select.value);
    }
}

customElements.define("scaled-input", ScaledInput);
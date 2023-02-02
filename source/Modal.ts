class Modal extends HTMLElement{
    static template: HTMLTemplateElement = require("./Modal/Templates").template;

    private readonly shadow: ShadowRoot;
    private built: boolean;

    constructor() {
        // Create a shadow root and initialise variables
        super();
        this.shadow = this.attachShadow({mode:"open"});
        this.built = false;
    }

    connectedCallback(){
        // Check if the element has already been built before
        if(this.built) return;
        this.built = true;

        // Copy the template to the shadow DOM
        this.shadow.appendChild(Modal.template.content.cloneNode(true));

        const self = this;
        console.log(this.shadow);
        const closeBtn: HTMLButtonElement = this.shadow.querySelector("#modal-header > button");
        closeBtn.addEventListener(
            "click",
            function (){
                self.close();
            }
        );

        this.setAttribute("tabindex", "0");
        this.addEventListener("keydown", function(e: KeyboardEvent){
            console.log(e)
            if(e.key === "Escape") self.close();
        });
    }

    open(){
        this.style.display = "block";
        this.focus();
    }

    close(){
        this.style.display = "none";
    }
}

customElements.define("cmp-modal", Modal);
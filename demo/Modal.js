(()=>{var t={795:(t,n,e)=>{"use strict";e.d(n,{X:()=>o});const o=document.createElement("template");o.innerHTML='\n<style>\n    :host{\n        display: none;\n        position: fixed;\n        left: 0;\n        right: 0;\n        top: 0;\n        bottom: 0;\n        z-index: 1;\n        background-color: rgb(60, 60, 60);\n        background-color: rgba(0, 0, 0, 0.2);\n    }\n    #modal-header > button {\n        font-size: x-large;\n        font-weight: bold;\n        float: right;\n    }\n    #modal {\n        position: fixed;\n        top: 50%;\n        left: 50%;\n        transform: translate(-50%, -50%);\n        width: 75%;\n        height: 75%;\n        min-width: 400px;\n        min-height: 400px;\n        max-height: 100%;\n        max-width: 100%;\n        background-color: #E0E0E0;\n        border: 2px solid black;\n        border-radius: 10px;\n    }\n</style>\n<div id="modal">\n    <div id="modal-header">\n        <button title="Close">X</button>\n    </div>\n    <div id="modal-content">\n        <slot></slot>\n    </div>\n</div>'}},n={};function e(o){var i=n[o];if(void 0!==i)return i.exports;var s=n[o]={exports:{}};return t[o](s,s.exports,e),s.exports}e.d=(t,n)=>{for(var o in n)e.o(n,o)&&!e.o(t,o)&&Object.defineProperty(t,o,{enumerable:!0,get:n[o]})},e.o=(t,n)=>Object.prototype.hasOwnProperty.call(t,n),(()=>{class t extends HTMLElement{constructor(){super(),this.shadow=this.attachShadow({mode:"open"}),this.built=!1}connectedCallback(){if(this.built)return;this.built=!0,this.shadow.appendChild(t.template.content.cloneNode(!0));const n=this;console.log(this.shadow),this.shadow.querySelector("#modal-header > button").addEventListener("click",(function(){n.close()})),this.setAttribute("tabindex","0"),this.addEventListener("keydown",(function(t){console.log(t),"Escape"===t.key&&n.close()}))}open(){this.style.display="block",this.focus()}close(){this.style.display="none"}}t.template=e(795).X,customElements.define("cmp-modal",t)})()})();
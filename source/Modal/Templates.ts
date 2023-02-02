export const template = document.createElement("template");
template.innerHTML = `
<style>
    :host{
        display: none;
        position: fixed;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        z-index: 1;
        background-color: rgb(60, 60, 60);
        background-color: rgba(0, 0, 0, 0.2);
    }
    #modal-header > button {
        font-size: x-large;
        font-weight: bold;
        float: right;
    }
    #modal {
        position: fixed;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        width: 75%;
        height: 75%;
        min-width: 400px;
        min-height: 400px;
        max-height: 100%;
        max-width: 100%;
        background-color: #E0E0E0;
        border: 2px solid black;
        border-radius: 10px;
    }
</style>
<div id="modal">
    <div id="modal-header">
        <button title="Close">X</button>
    </div>
    <div id="modal-content">
        <slot></slot>
    </div>
</div>`;
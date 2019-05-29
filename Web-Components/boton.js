class Botonwc extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {
        //botones
        let template=document.getElementById('boton');
		let templateContent=template.content;
		var clone=document.importNode(templateContent, true);
        this._shadowRoot.appendChild(clone);
        
        let nuevo = document.createElement('button');
        nuevo.setAttribute('id', 'abrirModal');
        nuevo.setAttribute('class', 'boton');
        nuevo.innerText = 'NUEVO';

        nuevo.addEventListener('click', e=>{
            let abrirModal = document.querySelector('modal-wc').shadowRoot.getElementById('simpleModal');
            abrirModal.style.display = 'block';
        });

        this._shadowRoot.appendChild(nuevo);
    }
}
customElements.define('boton-wc', Botonwc);
export default Botonwc;
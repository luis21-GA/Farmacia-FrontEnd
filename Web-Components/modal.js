class Modalwc extends HTMLElement {

    constructor() {
        super();
        this._shadowRoot = this.attachShadow({ mode: 'open' });
    }

    connectedCallback() {

        let template = document.getElementById('modal');
        let templateContent = template.content;
        var clone = document.importNode(templateContent, true);
        this._shadowRoot.appendChild(clone);

        let divSimpleModal = document.createElement('div');
        divSimpleModal.setAttribute('id', 'simpleModal');
        divSimpleModal.setAttribute('class', 'modal');

        let divModalContent = document.createElement('div');
        divModalContent.setAttribute('class', 'modal-content');


        let spanClose = document.createElement('span');
        spanClose.setAttribute('class', 'closeBtn');
        spanClose.innerText = 'X';

        let br=document.createElement('br');
        let br1 = document.createElement('br');
        let br2 = document.createElement('br');
        let br3 = document.createElement('br');
        let br4 = document.createElement('br');
        let br5 = document.createElement('br');
        let br6 = document.createElement('br');
        let br7 = document.createElement('br');
        let br8=document.createElement('br');
        let br9 = document.createElement('br');
        let br10 = document.createElement('br');
        let br11 = document.createElement('br');
        let br12 = document.createElement('br');
        let br13 = document.createElement('br');
        let br14 = document.createElement('br');

        let lbSolicitud = document.createElement('label');
        lbSolicitud.setAttribute('id', 'solicitud');
        lbSolicitud.innerText = 'Id Solicitud';

        let lbFecha = document.createElement('label');
        lbFecha.setAttribute('id', 'fecha');
        lbFecha.innerText = 'Fecha';

        let fecha = document.createElement('input');
        fecha.setAttribute('type', 'text');

        let idSolicitud = document.createElement('input');
        idSolicitud.setAttribute('type', 'text');

        let responsable = document.createElement('input');
        responsable.setAttribute('type', 'text');

        let email = document.createElement('input');
        email.setAttribute('type', 'text');

        let telefono = document.createElement('input');
        telefono.setAttribute('type', 'text');

        let descripcion = document.createElement('input');
        descripcion.setAttribute('type', 'text');

        let idEquipo = document.createElement('input');
        idEquipo.setAttribute('type', 'text');

        let idTipoMantenimiento = document.createElement('input');
        idTipoMantenimiento.setAttribute('type', 'text');

        let lbResponsable = document.createElement('label');
        lbResponsable.setAttribute('id', 'responsable');
        lbResponsable.innerText = 'Responsable';

        let lbEmail = document.createElement('label');
        lbEmail.setAttribute('id', 'email');
        lbEmail.innerText = 'Email';

        let lbTelefono = document.createElement('label');
        lbTelefono.setAttribute('id', 'telefono');
        lbTelefono.innerText = 'Telefono';

        let lbDescripcion = document.createElement('label');
        lbDescripcion.setAttribute('id', 'descripcion');
        lbDescripcion.innerText = 'Descripcion';

        let lbIdEquipo = document.createElement('label');
        lbIdEquipo.setAttribute('id', 'idEquipo');
        lbIdEquipo.innerText = 'Id Equipo';

        let lbTipoMantenimiento = document.createElement('label');
        lbTipoMantenimiento.setAttribute('id', 'idTipoMantenimiento');
        lbTipoMantenimiento.innerText = 'Id Tipo Mantenimiento';

        let boton =document.createElement('button');
        boton.setAttribute('id','guardar');
        boton.innerText = 'GUARDAR';

        divModalContent.appendChild(br);
        divModalContent.appendChild(spanClose);
        divModalContent.appendChild(lbSolicitud);
        divModalContent.appendChild(idSolicitud);
        divModalContent.appendChild(br7);
        divModalContent.appendChild(br8);
        divModalContent.appendChild(lbFecha);
        divModalContent.appendChild(fecha);
        divModalContent.appendChild(br1);
        divModalContent.appendChild(br9);
        divModalContent.appendChild(lbResponsable);
        divModalContent.appendChild(responsable);
        divModalContent.appendChild(br2);
        divModalContent.appendChild(br10);
        divModalContent.appendChild(lbEmail);
        divModalContent.appendChild(email);
        divModalContent.appendChild(br3);
        divModalContent.appendChild(br11);
        divModalContent.appendChild(lbTelefono);
        divModalContent.appendChild(telefono);
        divModalContent.appendChild(br4);
        divModalContent.appendChild(br12);
        divModalContent.appendChild(lbDescripcion);
        divModalContent.appendChild(descripcion);
        divModalContent.appendChild(br5);
        divModalContent.appendChild(br13);
        divModalContent.appendChild(lbIdEquipo);
        divModalContent.appendChild(idEquipo);
        divModalContent.appendChild(br6);
        divModalContent.appendChild(br14);
        divModalContent.appendChild(lbTipoMantenimiento);
        divModalContent.appendChild(idTipoMantenimiento);
        divModalContent.appendChild(boton);
        divSimpleModal.appendChild(divModalContent);


        spanClose.addEventListener('click', e=>{
            this._shadowRoot.getElementById('simpleModal').style.display = 'none';
        });


        this._shadowRoot.appendChild(divSimpleModal);
    }
}
customElements.define('modal-wc', Modalwc);
export default Modalwc;
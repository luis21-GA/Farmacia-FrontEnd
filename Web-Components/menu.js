class Menu extends HTMLElement {

    constructor() {
        super();
    }

    connectedCallback() {

        //sd -> shadowDom
        const sd = this.attachShadow({ mode: 'open' });

        //estilo de la lista
        let style = `<style>
        ul {
            list-style-type: none;
            margin: 0;
            padding: 0;
        }
        
        li {
            padding: 8px;
            margin-bottom: 7px;
            background-color: #33b5e5;
            color: #ffffff;
            box-shadow: 0 1px 3px rgba(0, 0, 0, 0.12), 0 1px 2px rgba(0, 0, 0, 0.24);
            text-align: center;
        }
        
        li:hover {
            background-color: #0099cc;
        }
        a {
            color: white;
            text-decoration: none;
        }
        </style>`

        sd.innerHTML = style;


        //Opciones del menu
        let ulMenu = document.createElement('ul');

        let liProducto = document.createElement('li');
        let aProducto = document.createElement('a');
        aProducto.setAttribute('href', './index.html');
        aProducto.innerText = 'PRODUCTOS';
        liProducto.appendChild(aProducto);
        ulMenu.appendChild(liProducto);


        let liPagos = document.createElement('li');
        let aPagos = document.createElement('a');
        aPagos.setAttribute('href', './formaPagos.html');
        aPagos.innerText = 'FORMA DE PAGOS';
        liPagos.appendChild(aPagos);
        ulMenu.appendChild(liPagos);


        let liDescuento = document.createElement('li');
        let aDescuento = document.createElement('a');
        aDescuento.setAttribute('href', './descuento.html');
        aDescuento.innerText = 'FORMA DE DESCUENTO';
        liDescuento.appendChild(aDescuento);
        ulMenu.appendChild(liDescuento);


        let liSucursal = document.createElement('li');
        let aSucursal = document.createElement('a');
        aSucursal.setAttribute('href', './sucursales.html');
        aSucursal.innerText = 'SUCURSALES';
        liSucursal.appendChild(aSucursal);
        ulMenu.appendChild(liSucursal);


        let liUsuario = document.createElement('li');
        let aUsuario = document.createElement('a');
        aUsuario.setAttribute('href', './proveedores.html');
        aUsuario.innerText = 'NUESTRO PROVEEDORES';
        liUsuario.appendChild(aUsuario);
        ulMenu.appendChild(liUsuario);

        sd.appendChild(ulMenu);

    }
}

customElements.define('menu-wc', Menu);
export default Menu;
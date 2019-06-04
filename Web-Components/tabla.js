import RestController from "../Control/restController.js";

class TablaBusqueda extends HTMLElement {
  constructor() {
    super();
  }

  connectedCallback() {
    //sd -> shadowDom
    const sd = this.attachShadow({ mode: 'open' });
    //estilo a darle a la tabla

    let styleOP = `<style>
        
    th {
      font-family: "Lucida Sans", sans-serif;
      font-size: 18px;
      color: white;
      background: #36304a;
  }

    table {
      border-spacing: 1;
      border-collapse: collapse;
      background: white;
      border-radius: 10px;
      overflow: hidden;
      width: 100%;
      margin: 0 auto;
      position: relative;
    }
    table * {
      position: relative;
    }
    table td, table th {
      padding-left: 8px;
    }
    table thead tr {
      height: 60px;
      background: #36304a;
    }
    table tbody tr {
      height: 50px;
    }
    table tbody tr:last-child {
      border: 0;
    }
    table td, table th {
      text-align: left;
    }
    table td.l, table th.l {
      text-align: right;
    }
    table td.c, table th.c {
      text-align: center;
    }
    table td.r, table th.r {
      text-align: center;
    }
    
  
    
    tbody tr:nth-child(even) {
      background-color: #f5f5f5;
    }
    

    
    @media screen and (max-width: 992px) {
      table {
        display: block;
      }
      table > *, table tr, table td, table th {
        display: block;
      }
      table thead {
        display: none;
      }
      table tbody tr {
        height: auto;
        padding: 37px 0;
      }
      table tbody tr td {
        padding-left: 40% !important;
        margin-bottom: 24px;
      }
      table tbody tr td:last-child {
        margin-bottom: 0;
      }
      table tbody tr td:before {
        font-family: OpenSans-Regular;
        font-size: 14px;
        color: #999999;
        line-height: 1.2;
        font-weight: unset;
        position: absolute;
        width: 40%;
        left: 30px;
        top: 0;
      }
      table tbody tr td:nth-child(1):before {
        content: "Producto:";
      }
      table tbody tr td:nth-child(2):before {
        content: "Cantidad: ";
      }
      table tbody tr td:nth-child(3):before {
        content: "Sucursal:";
      }
      table tbody tr td:nth-child(4):before {
        content: "Laboratorio: ";
      }
      table tbody tr td:nth-child(5):before {
        content: "Precio: ";
      }
      table tbody tr td:nth-child(6):before {
        content: "Descripcion Producto: ";
      }
    
      tbody tr {
        font-size: 14px;
      }
    }
  
    }
	

}
#paginacionBar {
  text-align: center !important;
  margin-top: 20px;
}

#paginacionBar * {
  margin: 3px;
}

button {
  background-color: #C6D8D3;
  border-style: solid;
  border-width: 2px;
  border-color: #331832;
  border-radius: 5px;
  font-weight: bold;
  padding: 7px;

}


    </style>
    <div>
      <slot entidad = 'entidad'></slot>
    </div>`


    let style = `<style>
    * {
      font-family: "Gill Sans", sans-serif;
    }

    table{
      width: 100%;
      background-color: #acc9f2;
    }
    
    td, th {
      text-align: center;
      padding: 3px;
      border: blue 0.5px solid;
    }
    
    th {
      background-color: #3386ff;
    }
    
    tr:hover {
      background-color:#C6D8D3;
    }
    
    #paginacionBar {
      text-align: center;
      margin-top: 20px;
    }

    #paginacionBar * {
      margin: 3px;
    }
    
    button {
      background-color: #C6D8D3;
      border-style: solid;
      border-width: 2px;
      border-color: #331832;
      border-radius: 5px;
      font-weight: bold;
      padding: 7px;
    }
    
    button:hover {
      background-color: #D81E5B;
    }
    </style>
    <div>
      <slot entidad = 'entidad'></slot>
    </div>`

    sd.innerHTML = style;

    //creando los elemento para tabla
    const contenedor = document.createElement('div');
    contenedor.id = 'tablaContenedor';

    let tabla = document.createElement('table');
    tabla.id = 'tablaEntidad'

    let cabecera = document.createElement('th');
    cabecera.id = 'cabeceraEntidad'

    let celda = document.createElement('td');
    celda.id = 'celdaEntidad';

    /**
     * metod que recibe un json con la busqueda deseada
     * @param {*} busquedas filtro para complementar el json 
     * @param {*} paginacion numero entero para mostrar en la tabla
     */
    let crearTablaEntidad = function (busquedas, paginacion) {
      let maxPage = Math.ceil(busquedas.length / paginacion);
      let actualPageNumber = 1;

      var renderPagination = function () {
        sd.innerHTML = style;

        let changePage = function (option) {
          if (this.innerText == '<<') {
            actualPageNumber = 1;
            this.disabled = true;
          } else if (this.innerText == '<') {
            if (actualPageNumber != 1) {
              actualPageNumber--;
            }
          } else if (this.innerText == '>') {
            if (actualPageNumber != maxPage) {
              actualPageNumber++;
            }
          } else {
            actualPageNumber = maxPage;
            this.disabled = true;
          }

          renderPagination();
        }

        let contenedor = document.createElement('div');
        contenedor.id = 'tablaContenedor';

        let tabla = document.createElement('table');
        tabla.id = 'tablaEntidad'

        let cabecera = document.createElement('th');
        cabecera.id = 'cabeceraEntidad'

        let celda = document.createElement('td');
        celda.id = 'celdaEntidad';

        let columna = [];

        for (var i = 0; i < busquedas.length; i++) {
          for (var key in busquedas[i]) {
            if (columna.indexOf(key) === -1) {
              columna.push(key);
            }
          }
        }

        var tr = tabla.insertRow(-1);

        for (var i = 0; i < columna.length; i++) {
          var th = document.createElement('th');
          th.innerHTML = columna[i];
          tr.appendChild(th);
        }

        let maxIndex = actualPageNumber == maxPage ? busquedas.length : paginacion * actualPageNumber;

        for (var i = paginacion * actualPageNumber - paginacion; i < maxIndex; i++) {
          tr = tabla.insertRow(-1);
          for (var j = 0; j < columna.length; j++) {
            var newCelda = tr.insertCell(-1);
            newCelda.innerHTML = busquedas[i][columna[j]];
            tr.onclick = function () {

              console.log(this.innerText);
            };
          }
        }

        contenedor.appendChild(tabla);
        let paginacionBar = document.createElement("div");
        let tableTitleBar = document.createElement("div");
        paginacionBar.id = "paginacionBar";
        tableTitleBar.id = "tableTitleBar";

        let tableTitle = document.createElement("h1");
        //tableTitle.innerText = this.getAttribute("busqueda");
        tableTitleBar.appendChild(tableTitle);

        let buttonFirst = document.createElement("button");
        let buttonPrevious = document.createElement("button");
        let buttonNext = document.createElement("button");
        let buttonLast = document.createElement("button");
        let span = document.createElement("span");
        buttonFirst.innerText = "<<";
        buttonFirst.onclick = changePage;
        buttonPrevious.innerText = "<";
        buttonPrevious.onclick = changePage;
        buttonNext.innerText = ">"
        buttonNext.onclick = changePage;
        buttonLast.innerText = ">>";
        buttonLast.onclick = changePage;
        span.innerText = "Page " + actualPageNumber + " of " + maxPage;
        paginacionBar.appendChild(buttonFirst);
        paginacionBar.appendChild(buttonPrevious);
        paginacionBar.appendChild(span);
        paginacionBar.appendChild(buttonNext);
        paginacionBar.appendChild(buttonLast);

        sd.appendChild(tableTitleBar);
        sd.appendChild(contenedor);
        sd.appendChild(paginacionBar);
      }

      renderPagination();
    }

    let accion = function (entidad, paginacion) {// AA
      var respuestaPromesa = RestController.findAll(entidad).then(data => {
        return crearTablaEntidad(data, paginacion)
      });
      //crearTablaEntidad(RestController.findAll(), paginacion);
    }
    accion(this.getAttribute("busqueda"), this.getAttribute("paginacion"));
  }
}
window.customElements.define('tabla-dinamica', TablaBusqueda);
export default TablaBusqueda;

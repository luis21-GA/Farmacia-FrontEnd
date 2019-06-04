import OrigenResource from "./origenResource.js";
import GetDatos from "./getData.js";
/**
 * Clase para consumir rest
 */
class RestController extends OrigenResource {
    constructor() {
        super();
        this.url_base = `http://localhost:8080/WebAppFarmacia/webresources`;

    }

    /**
     * metodo generico que trae todos los datos
     * @param {*} entidad parametro para filtrar de que parte traer los datos
     */
    findAll(entidad) {
        return GetDatos.getDatos(`${this.url_base}/${entidad}/`).then(data => {
            return data
        });
    }

    /**
     * metodo para traer un registro especifico
     * @param {*} entidad parametro para filtrar de que parte traer los datos
     * @param {*} id filtro para buscar registro especifico
     */
    findById(entidad, id) {
        return GetDatos.getDatos(`${this.url_base}/${entidad}/${id}`).then(id_data => {
            return id_data
        });
    }

    /**
     * metodo para traer una cantidad de datos 
     * @param {*} entidad parametro para filtrar de que parte traer los datos
     * @param {*} a valor entero donde iniciara la busqueda
     * @param {*} b total de registro a traer
     */
    findByRange(entidad, a, b) {
        return GetDatos.getDatos(`${this.url_base}/${entidad}/?first=${a}&pagesize=${b}`).then(rango => {
            return rango
        });
    }

    /**
     * metodo para contar cantidad de registros que posee la api a consumir
     * @param {*} entidad parametro para filtrar de que parte traer los datos
     */
    count(entidad) {
        return GetDatos.getDatos(`${this.url_base}/${entidad}/count`).then(cantidad => {
            return cantidad
        });
    }

}
export default new RestController;

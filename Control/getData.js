/**
 * Clase generica para traer las respuesta del servidor
 */
class GetDatos {
    /**
     * metodo que recibe una url, la cual devuelte un json con los datos a utilizar
     * @param {*} url direecion de la api
     */
    async getDatos(url) {
        console.log('URL: ' + url)
        let data = await (await (fetch(url)
            .then(respuesta => {
                return respuesta.json()
            })
            .catch(error => {
                console.log('Hubo un error: ' + error)
            })
        ))
        return data;
        
    }
}
export default new GetDatos;
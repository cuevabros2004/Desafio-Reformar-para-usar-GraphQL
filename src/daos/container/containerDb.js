

class ContenedorDb {

    cliente;
    table;
    productos;

    constructor(cliente, tabla, productos) {

        this.cliente = cliente;
        this.tabla = tabla;
        this.productos = productos;
    }


    //Productos
    async save(objeto) {

        try {
            await this.cliente(this.tabla).insert(objeto);
            return objeto
        }
        catch (error) {
            return error
        }

    }


    async getAll() {

        try {
            const contenido = this.cliente(this.tabla).select()

            if (contenido) {
                return contenido
            } else {
                return null
            }
        }

        catch (error) {
            return error
        }

    }

    async deleteById(objeto) {
        try {

            const objetoBuscado = await this.getById(objeto._id)

            if (objetoBuscado) {
                await this.cliente(this.tabla).del().where("_id", "=", objeto._id)
                return objetoBuscado;
            } else {
                return { "mensaje": `No existe el producto con el id: ${objeto._id}` }
            }
        }
        catch (error) {
            return error
        }
    }


    async update(objeto) {
        try {

            const objetoBuscado = await this.getById(objeto._id)

            if (objetoBuscado) {
                await this.cliente(this.tabla).update(objeto).where("_id", "=", objeto._id);
                return objetoBuscado;
            } else {
                return { "mensaje": `No existe el producto con el id: ${objeto._id}` }
            }

        }
        catch (error) {
            return error
        }
    }



    async getById(id) {

        try {

            const objetoBuscado = await this.cliente(this.tabla).select().where("_id", "=", id)
            if (objetoBuscado[0] === undefined) {
                return null
            } else {
                return objetoBuscado[0];
            }

        }

        catch (error) {
            return error
        }

    }


}


const Contenedor = ContenedorDb
export default Contenedor;

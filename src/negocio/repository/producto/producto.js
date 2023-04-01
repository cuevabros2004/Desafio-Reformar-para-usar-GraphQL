import Productos from '../../models/producto.js'
import ContenedorFaker from '../../../daos/container/containerFaker.js'


export class product {

    #dao
    constructor(dao) {
        this.#dao = dao
    }


    async guardarProducto(producto) {
        try {
            const resul = await this.#dao.save(producto.datos())
            console.log("esto es resul de repository")
            console.log(producto.datos())
            return resul
        } catch (error) {
            return error
        }

    }

    async listarProducto() {
        try {
            const dtos = await this.#dao.getAll()

            if (dtos != []) {
                const datos = dtos.map(dto => new Productos(dto))
                return datos
            } else
                return null

        } catch (error) {
            return error
        }
    }

    async productosFaker(objeto) {
        const productosFaker = new ContenedorFaker(objeto)
        const listadoProductoFaker = await productosFaker.getProductosTest();
        return listadoProductoFaker
    }


    async actualizarProducto(producto) {
        try {
            const resul = await this.#dao.update(producto.datos())
            return resul
        } catch (error) {
            return error
        }
    }

    async eliminarProducto(producto) {
        try {
            const resul = await this.#dao.deleteById(producto.datos())
            return resul
        } catch (error) {
            return error
        }
    }

    async listarProductoPorId(objeto) {
        try {
            const dtos = await this.#dao.getById(objeto._id)

            if (dtos) {
                const datos = new Productos(dtos)
                return datos
            } else
                return null

        } catch (error) {
            return error
        }
    }

}


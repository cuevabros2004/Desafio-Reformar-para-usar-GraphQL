import Producto from '../negocio/models/producto.js';
import { Products } from '../negocio/repository/producto/index.js';
import ContenedorFaker from '../daos/container/containerFaker.js'

class ProductoServicio {


    async agregarProducto(producto) {
        const productos = new Producto(producto);
        const registroNuevoProducto = await Products.guardarProducto(productos)
        return registroNuevoProducto
    }

    async getProductos() {
        try {
            const listadoProducts = await Products.listarProducto()
            if (listadoProducts) {
                const products = []
                listadoProducts.forEach(d => {
                    products.push(d.datos())
                });
                return products
            } else
                return null
        } catch (error) {
            return error
        }
    }


    async actualizarProducto(objeto) {
        try {
            const product = new Producto(objeto);
            const updateProduct = await Products.actualizarProducto(product)
            return updateProduct
        } catch (error) {
            return error
        }
    }

    async getProductosFaker(objeto) {
        const productosList = new Producto();

        return ContenedorFaker.obtenerProductosFaker(objeto);
    }

    async listarProductoPorId(objeto) {
        try {
            const producto = await Products.listarProductoPorId(objeto)
            if (producto)
                return producto.datos()
            else
                return null
        } catch (error) {
            return error
        }
    }

    async eliminarProducto(objeto) {
        try {
            const product = new Producto(objeto);
            const deleteProduct = await Products.eliminarProducto(product)
            return deleteProduct
        } catch (error) {
            return error
        }
    }

}


export const productoServicio = new ProductoServicio()
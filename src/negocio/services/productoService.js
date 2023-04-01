import Productos from "../models/producto.js"
import { Products } from '../repository/producto/index.js';

class ProductoServicio {


    async grabarProducto(producto) {
        const productos = new Productos(producto);
        const registroNuevoProducto = await Products.guardarProducto(productos)
        return registroNuevoProducto
    }


    async listarProducto() {
        try {
            const listadoProducts = await Products.listarProducto()
            const products = []
            listadoProducts.forEach(d => {
                products.push(d.datos())
            });
            return products
        } catch (error) {
            return error
        }
    }

    async actualizarProducto(objeto) {
        try {
            const product = new Productos(objeto);
            const updateProduct = await Products.actualizarProducto(product)
            return updateProduct
        } catch (error) {
            return error
        }
    }


    async eliminarProducto(objeto) {
        try {
            const product = new Productos(objeto);
            const deleteProduct = await Products.eliminarProducto(product)
            return deleteProduct
        } catch (error) {
            return error
        }
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
    
}


export const productoServicio = new ProductoServicio()
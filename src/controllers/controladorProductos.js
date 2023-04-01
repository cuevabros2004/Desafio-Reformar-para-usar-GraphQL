
import ContenedorFaker from "../daos/container/containerFaker.js";
import { clienteSql } from '../db/clienteSql.js';
import { productoServicio } from "../services/productoService.js";
import loggerError from '../utils/pinoError.js';
import { randomUUID } from 'crypto';

const productsFaker = new ContenedorFaker(clienteSql, 'productos')


async function controladorPostProductos(req, res) {

    const objeto = req.body;
    objeto._id = randomUUID();

    const datosProducto = req.body

    const resul = await productoServicio.agregarProducto(datosProducto)
    if (resul) {
        if (resul.message) {
            res.status(500)
            loggerError(req, resul.message)
            return resul.message
        } else
            res.status(201).json(datosProducto)
    } else
        res.json({ mensaje: "No hay productos" })
}

async function controladorPutProducto(req, res) {

    const productos = await productoServicio.getProductos();


    if (!productos) {
        res.status(404);
        res.json({ "mensaje": `no hay productos` });
    } else {
        if (productos.message) {
            res.status(500)
            loggerError(req, productos.message)
        }
        else {
            req.body._id = req.params.id;
            const resul = await productoServicio.actualizarProducto(req.body);
            res.status(200).json(resul);
        }
    }

}

async function controladorGetProductos(req, res) {

    const productos = await productoServicio.getProductos()

    if (productos.message) {
        loggerError(req, productos.message)
        return productos.error
    } else
        res.json(productos);

}

async function controladorGetProductosTest(req, res) {
    const productos = await productoServicio.getProductosFaker()

    if (productos.message) {
        loggerError(req, error.message)
        return error
    } else
        res.json(productos);
}


function controladorproductosRandom(req, res) {
    res.send(products.getById(randomUUID()))
}

async function controladorGetProductoSegunId(req, res) {

    req.body._id = req.params.id

    const productos = await productoServicio.listarProductoPorId(req.body);
    console.log(productos)
    if (!productos) {
        res.status(404);
        res.json({ "mensaje": `no existe el producto` });
    } else {
        if (productos.message) {
            res.status(500)
            loggerError(req, productos.message)
        } else
            res.status(200).json(productos);
    }
}


async function controladorDeleteProducto(req, res) {

    const productos = await productoServicio.getProductos();

    if (!productos) {
        res.status(404);
        res.json({ mensaje: `no se encontraron productos` });
    } else {
        if (productos.message) {
            res.status(500)
            loggerError(req, productos.message)
        }
        else {
            req.body._id = req.params.id;
            const resul = await productoServicio.eliminarProducto(req.body);
            res.status(200).json(resul);
        }
    }


}




export {
    controladorGetProductos,
    controladorPostProductos,
    controladorproductosRandom,
    controladorGetProductosTest,
    controladorPutProducto,
    controladorDeleteProducto,
    controladorGetProductoSegunId
    
};
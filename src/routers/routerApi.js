import { Router } from 'express';
import loggerMiddleware from '../utils/pino.js'

const routerApi = Router();

import {controladorGetProductos, 
        controladorPostProductos, 
        controladorproductosRandom,
        controladorGetProductosTest,
        controladorPutProducto,
        controladorDeleteProducto,
        controladorGetProductoSegunId} 
from "../controllers/controladorProductos.js";

 

import { controladorPostChat } from "../controllers/controladorChat.js";

routerApi.post('/', loggerMiddleware, controladorPostProductos);
routerApi.get('/',  loggerMiddleware, controladorGetProductos);
routerApi.get('/productos-test', loggerMiddleware, controladorGetProductosTest);
routerApi.get('/random/productosRandom', loggerMiddleware, controladorproductosRandom);
routerApi.post('/chat',  loggerMiddleware, controladorPostChat)
routerApi.put('/:id',  loggerMiddleware, controladorPutProducto)
routerApi.delete('/:id',  loggerMiddleware, controladorDeleteProducto)
routerApi.get('/:id', loggerMiddleware, controladorGetProductoSegunId)



export   {routerApi };

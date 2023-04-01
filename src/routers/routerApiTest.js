import { Router } from 'express';
const routerApiTest = Router();
import loggerMiddleware  from '../utils/pino.js'

import { controladorGetProductos } 
from "../controllers/controladorProductos.js"; 

routerApiTest.get('/', loggerMiddleware, controladorGetProductos);

export    {routerApiTest};

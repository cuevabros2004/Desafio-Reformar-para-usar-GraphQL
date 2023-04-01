import compression from 'compression'
import loggerMiddleware from  '../utils/pino.js'

import { Router } from 'express';

import { controladorProcessInfo } from "../controllers/controladorProcessInfo.js"
import { controladorWebInfoProcess } from "../controllers/controladorProcessInfo.js"

const routerWeb = Router();

routerWeb.get('/info', loggerMiddleware, controladorProcessInfo)
routerWeb.get('/infoConCompresion', loggerMiddleware, compression(), controladorProcessInfo)
routerWeb.get('/infoList', loggerMiddleware, controladorWebInfoProcess)

 
export default  routerWeb;


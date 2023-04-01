import { chatService } from "../negocio/services/chatService.js";

import pino from 'pino'
import colors from 'colors'

const logger = pino({
  prettyPrint: {
    colorize: true, // colorizes the log
    levelFirst: true,
    translateTime: 'yyyy-dd-mm, h:MM:ss TT',
  },
})

const pinoError = pino("./logs/error.log");

//const chatFile = new Contenedor(clienteSql, 'chat')
//const chatFile = new Contenedor('chat.txt')


async function controladorPostChat(req, res) {
    res.status(201);
    const objeto = req.body;

    const resul = await chatService.grabarChat(objeto);
    
    if(resul.message) {
      loggerError(req, resul.message)
      res.json(objeto)
  } else
      res.json(objeto)


 


  }

   

 
export {controladorPostChat };
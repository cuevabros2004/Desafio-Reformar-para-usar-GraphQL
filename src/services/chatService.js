import { Chat } from "../models/chat.js";
import Contenedor from "../container/container.js";

class ChatServicio{

    async agregarMensajeChat(chat){
        const chats = new Chat(chat);
        
        const registroNuevoChat = await chats.guardarMensajeChat(chat)
        return registroNuevoChat
    }

    async listarChat() {
        const contenedor = new Contenedor('chat.txt');
        const listadoChat = await contenedor.getAll()
        return listadoChat
    }


}



export const chatServicio = new ChatServicio()
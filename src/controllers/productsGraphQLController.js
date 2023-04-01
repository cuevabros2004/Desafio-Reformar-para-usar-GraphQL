import {productoServicio} from '../negocio/services/productoService.js'
import {randomUUID}  from 'crypto';


export async function listarProducto() {

    const resul = await productoServicio.listarProducto()

  if(resul){
    if(resul.message){
        return resul.message
    } else{
        return resul
    }
  } else
        return "No hay productos"
}

export async function listarProductoPorId(objeto) {
    
    const resul = await productoServicio.listarProductoPorId(objeto)

   if(resul){
    if(resul.message){
        return resul.message
    } else{
        return resul
    }
   } else
      return `No existe el producto con el ID ${objeto._id}`

}

export async function grabarProducto({ datos }) {
    
    datos._id = randomUUID();

   
    const resul = await productoServicio.grabarProducto(datos)

    if(resul.message){
        return resul.message
    } else{
        return resul
    }
}

export async function actualizarProducto({ _id, datos }) {

    datos._id = _id
  
    const resul = await productoServicio.actualizarProducto(datos)

    if(resul.message){
        return resul.message
    } else{
        return resul
    }

}

export async function eliminarProducto({ _id }) {

    const existe = await productoServicio.listarProductoPorId(_id)


  if(existe){
    
    const resul = await productoServicio.eliminarProducto(_id)

    if(resul.message){
        return resul.message
    } else{
        return resul
    }
  } else 
  return `No existe el producto con el ID ${_id}`

}

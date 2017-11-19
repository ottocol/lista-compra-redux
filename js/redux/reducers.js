import {ADD_ITEM} from './acciones'

var itemId = 1

export default function listaReducer(estado = [], accion) {
   switch (accion.type) {
       case ADD_ITEM: return [
           ...estado,
           {  
               id: itemId++,
               nombre: accion.nombreItem
           }
       ]
       default: return estado
   }  
}


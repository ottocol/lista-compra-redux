import {ADD_ITEM, TOGGLE_ITEM} from './acciones'

var itemId = 1

export default function listaReducer(estado = [], accion) {
   switch (accion.type) {
       case ADD_ITEM: return [
           ...estado,
           {  
               id: itemId++,
               nombre: accion.nombreItem,
               comprado: false
           }
       ]
       case TOGGLE_ITEM: return estado.map( (item) => {
           if (item.id === accion.itemId) {
               return Object.assign({}, item, {
                        comprado: !item.comprado
                      })
           }
           else return item
       })
       default: return estado
   }  
}


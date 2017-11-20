import {ADD_ITEM, TOGGLE_ITEM, REQUEST_ITEMS, RECEIVE_ITEMS} from './acciones'

export default function listaReducer(estado = [], accion) {
   switch (accion.type) {
       case ADD_ITEM: return [
           ...estado,
           {  
               id: accion.newItem.id,
               nombre: accion.newItem.nombre,
               comprado: accion.newItem.comprado
           }
       ]
       case TOGGLE_ITEM: return estado.map( (item) => {
           if (item.id === accion.itemId) {
               return itemReducer(item, accion)
           }
           else return item
       })
       case RECEIVE_ITEMS: return accion.items
       default: return estado
   }  
}

function itemReducer(estado, accion) {
    switch(accion.type) {
        case TOGGLE_ITEM: return Object.assign({}, estado, {
            comprado: !estado.comprado
        })
        default: return estado
    }
}


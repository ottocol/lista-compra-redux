export const ADD_ITEM = 'ADD_ITEM'
export const TOGGLE_ITEM = 'TOGGLE_ITEM'
export const REQUEST_ITEMS = 'REQUEST_ITEMS'
export const RECEIVE_ITEMS = 'RECEIVE_ITEMS'
export const SEND_ITEM = 'SEND_ITEM'
export const RECEIVE_ITEM_RESPONSE = 'RECEIVE_ITEM_RESPONSE'

export function addItem(newItem) {
    return {
        type: ADD_ITEM,
        newItem: newItem
    }
}

export function toggleItem(id) {
    return {
        type: TOGGLE_ITEM,
        itemId: id
    }
}

//COMUNICACION CON EL API REST
const API_BASE_URL = 'https://apilistacompra-qbsiqpwogm.now.sh/'

export function requestItems() {
    return {type: REQUEST_ITEMS}
}

export function receiveItems(datos) {
    return {type: RECEIVE_ITEMS, items:datos}
}

export function fetchItems() {
    return function(dispatch) {
        dispatch(requestItems())
        fetch(API_BASE_URL + 'api/items')
           .then(function(resp) {
               return resp.json()
           }, function(error){   //Usamos un callbck de error porque un bug nos impide usar catch
                                 //https://github.com/facebook/react/issues/6895
               console.log("Error: " + error)
           })
           .then(function(json){
               dispatch(receiveItems(json))
           })

    }
}

export function sendItem() {
  return {type: SEND_ITEM}
}


export function postItem(nombre) {
    return function(dispatch) {
        dispatch(sendItem())
        fetch(API_BASE_URL + 'api/items', {
            method: 'POST',
            headers: {
                'Content-type':'application/json'
            },
            body: JSON.stringify({nombre:nombre})
        }).then(function(resp){
            return resp.json()
        }, function(error){   //Usamos un callbck de error porque un bug nos impide usar catch
            //https://github.com/facebook/react/issues/6895
            console.log("Error: " + error)
        }).then(function(newItem){
            dispatch(addItem(newItem))
        })
    }
}
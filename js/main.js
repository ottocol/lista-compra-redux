import { createStore } from 'redux'
import { ADD_ITEM, TOGGLE_ITEM} from './redux/acciones';
import rootReducer from './redux/reducers'

//aplicamos las acciones manualmente y mostramos el resultado en la consola
var store = createStore(rootReducer)
console.log(store.getState())

store.subscribe(function(){
    console.log(store.getState())
})

var a1 = { type: ADD_ITEM, nombreItem: 'pan' }
store.dispatch(a1)

var a2 = { type: ADD_ITEM, nombreItem: 'patatas' }
store.dispatch(a2)

var a3 = {type: TOGGLE_ITEM, itemId: 1}
store.dispatch(a3)
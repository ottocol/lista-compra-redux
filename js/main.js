import store from './redux/store'
import { ADD_ITEM } from './redux/acciones';
import rootReducer from './redux/reducers'

//por ahora no usamos la librería redux, sino código propio
//aplicamos las acciones manualmente y mostramos el resultado en la consola
console.log(store.state)
var a1 = { type: ADD_ITEM, nombreItem: 'pan' }
store.state = rootReducer(store.state, a1)
console.log(store.state)
var a2 = { type: ADD_ITEM, nombreItem: 'patatas' }
store.state = rootReducer(store.state, a2)
console.log(store.state)


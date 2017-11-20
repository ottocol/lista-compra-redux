import { createStore } from 'redux'
import { ADD_ITEM, TOGGLE_ITEM} from './redux/acciones';
import rootReducer from './redux/reducers'
import thunk from 'redux-thunk'

import React from 'react'
import ReactDOM from 'react-dom'
import NuevoItemContainer from './componentes/NuevoItemContainer'
import ListaContainer from './componentes/ListaContainer'
import { applyMiddleware } from 'redux';

var store = createStore(rootReducer, applyMiddleware(thunk))

//Pintamos los componentes React
ReactDOM.render(
    <NuevoItemContainer store={store}/>,
    document.getElementById('componenteNuevoItem'),
)

ReactDOM.render(
    <ListaContainer store={store}/>,
    document.getElementById('componenteLista'),
)


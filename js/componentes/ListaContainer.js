import React from 'react'
import Lista from './Lista'

//En redux un "container" es un componente que se conecta con el store
//y le despacha acciones y/o recibe los cambios de estado.
//En este caso solo recibimos cambios de estado
//Recibimos el store en la prop del mismo nombre
//Con la librería 'react-redux' se simplificaría la sintaxis de conexión con el store
//pero de momento se hace así para que se vea qué está pasando 
class ListaContainer extends React.Component {
    constructor(props) {
        super(props)
        this.state = {items:[]}
    }

    componentDidMount() {
        //Nos suscribimos a los cambios de estado del store
        this.props.store.subscribe(() => {
            //copiamos el estado del store en el estado local del componente
            //para que al cambiar el estado local se dispare un re-render.
            //En este ejemplo nos interesa el estado completo del store
            //pero normalmente sería solo una parte
            this.setState({items:this.props.store.getState()})
        })
    }

    render() {
        return <Lista items={this.state.items}/>
    }
}

export default ListaContainer
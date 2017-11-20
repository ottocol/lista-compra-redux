import React  from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
        this.toggle = this.toggle.bind(this)
    }

    toggle() {
        this.props.handleToggle(this.props.itemId)
    }

    render() {
        return <li onClick={this.toggle} className={this.props.comprado?'tachado':''}>
                  {this.props.nombre}
               </li>
    }
}

export default Item


import React  from 'react'

class Item extends React.Component {
    constructor(props) {
        super(props)
    }

    render() {
        return <li className="item">
                  {this.props.nombre}
               </li>
    }
}

export default Item


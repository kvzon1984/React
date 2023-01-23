import React, {Component} from "react";

// Si la destruccturacion de Components React.Component

class ComponenteClass extends Component{
    render() {
        return <h2>{this.props.msg}</h2>
    }
}

export default ComponenteClass

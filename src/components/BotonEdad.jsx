import { Component } from "react";

class BotonEdad extends Component {
    render() {
        return (
            <button type="button">Boton para {this.props.firstName} </button>
        )
    }
}

export default BotonEdad;
import { Component } from "react";

class BotonEdad extends Component {
    render() {
        const { funcion, nombre } = this.props;
        return (
            <button className="boton" type="button" onClick={funcion}>Aumentar edad de {nombre} </button>
        )
    }
}

export default BotonEdad;
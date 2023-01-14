import { Component } from "react";
import '../index.css';
import BotonEdad from "./BotonEdad";

class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: props.name,
            apellido: props.apellido,
            edad: props.edad,
            colorPelo: props.colorPelo
        }
    }
    render() {
        const { nombre, apellido, edad, colorPelo } = this.state;
        return (
            <div className="bordeNegro">
                <h1> {nombre}, {apellido}</h1>
                <p> Age: <strong>{edad}</strong></p>
                <p> Color de Pelo: <strong>{colorPelo}</strong></p>
                <BotonEdad funcion={this.incrementar} nombre={nombre}></BotonEdad>
            </div >
        )
    }

    incrementar = () => {
        this.setState({ edad: this.state.edad + 1 });
    }
}

export default PersonCard;
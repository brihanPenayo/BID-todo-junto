import { Component } from "react";
import '../index.css';
class PersonCard extends Component {
    constructor(props) {
        super(props);
        this.state = {
            nombre: props.name,
            edad: props.edad
        }
    }
    // incrementAge = () => {
    //     this.setState({ newAge: this.state.newAge + 1 });
    // };
    render() {
        let { nombre, edad } = this.state;
        return (<>
            <h1>{nombre}</h1>
            <h1>{edad}</h1>
            <button onClick={this.incrementar}></button>
        </>
        )


        // const { firstName, lastName, hairColor, age } = this.props;
        // const setVariable = () => {
        //     this.setState({ newAge: age });
        // };
        // setVariable;
        // return (
        //     <div className="bordeNegro">
        //         <h1> {firstName}, {lastName}</h1>
        //         <p> Age: <strong>{newAge}</strong></p>
        //         <p> Color de Pelo: <strong>{hairColor}</strong></p>
        //         <button onClick={this.incrementAge}>Flip Switch</button>
        //     </div >
        // )

    }

    incrementar = () => {
        this.setState({edad: this.state.edad+1});
    }
}

export default PersonCard;
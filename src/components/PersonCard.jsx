import { Component } from "react";
import '../index.css';

class PersonCard extends Component {
    render() {
        const { firstName, lastName, age, hairColor } = this.props;
        return (
            <div className="bordeNegro">
                <h1> {firstName}, {lastName}</h1>
                <p> Age: <strong>{age}</strong></p>
                <p> Color de Pelo: <strong>{hairColor}</strong></p>
            </div>
        )
    }
}

export default PersonCard;
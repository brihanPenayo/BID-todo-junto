import PersonCard from './components/PersonCard';
import './index.css';
import React from 'react';


function App() {
  // const [age, setAge] = React.useState("25");
  // const [age, setAge] = React.useState(10);
  // const incrementAge = () => {
  //   setAge(age + 1);
  // }
  // constructor(props) {
  //   super(props);
  //   this.state = {
  //       age: 0
  //   }
  // }

  // incrementAge = () => {
  //   this.setState({age: this.state.age + 1});
  // }
  return (
    <>
      <PersonCard name="Gilberto" edad={26}/>
    </>
  );
}

export default App;

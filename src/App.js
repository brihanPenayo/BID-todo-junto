import PersonCard from './components/PersonCard';
import './index.css';
import React from 'react';


function App() {
  return (
    <>
      <PersonCard name="Gilberto" apellido="Gonzalez" edad={34} colorPelo="Negro" />
      <PersonCard name="Rocio" apellido="Ramirez" edad={22} colorPelo="Rojo" />
      <PersonCard name="Camila" apellido="Roa" edad={25} colorPelo="Negro" />
      <PersonCard name="Brihan" apellido="Penayo" edad={26} colorPelo="Negro" />
    </>
  );
}

export default App;
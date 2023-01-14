import PersonCard from './components/PersonCard';
import './index.css';


function App() {
  return (
    <>
      <PersonCard firstName="Laura" lastName="Cardozo" age="26" hairColor="Rojo"/>
      <PersonCard firstName="Camila" lastName="Roa" age="25" hairColor="Castanho"/>
      <PersonCard firstName="Brihan" lastName="Penayo" age="26" hairColor="Negro"/>
      <PersonCard firstName="Coding" lastName="Dojo" age="25" hairColor="Blanco"/>
    </>
  );
}

export default App;

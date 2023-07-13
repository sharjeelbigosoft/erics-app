import './App.css';
import Appointment from './components/Appointment';
import Place from './components/Place';
import Services from './components/Services';
import Time from './components/Time';
import Vehicle from './components/Vehicle';

function App() {
  return (
    <>
      <Place/>
      <Time/>
      <Vehicle/>
      <Services/>
      <Appointment/>
    </>
  );
}

export default App;

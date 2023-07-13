import './App.css';
import Appointment from './components/Appointment';
import Contact from './components/Contact';
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
      <Contact/>
    </>
  );
}

export default App;

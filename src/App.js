import './App.css';
import SbdcRoute from './Components/Router/sbdc/SbdcRoute';
import SfdcRoute from './Components/Router/sfdc/SfdcRoute';

function App() {
  return (
    <div className="App">
      <SbdcRoute/>
      {/* <SfdcRoute/> */}
    </div>
  );
}

export default App;

import logo from './logo.svg';
import './App.css';
import DatosN from './componentes/container/pure/imprimir';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <DatosN></DatosN>
      </header>
    </div>
  );
}

export default App;

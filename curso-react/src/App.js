import logo from './logo.svg';
import './App.css';
import ComponenteClass from './components/ComponenteClase';
import ComponenteFuncion from './components/ComponenteFuncional';



function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <section>
        <ComponenteClass msg="Componente de clase"/>
        <ComponenteFuncion msg="Componente de funcion"/>
      </section>
    </div>
  );
}

export default App;

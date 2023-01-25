import logo from './logo.svg';
import './App.css';
import ComponenteClass from './components/ComponenteClase';
import ComponenteFuncion from './components/ComponenteFuncional';
import Propiedades from './components/PropiedadesProps';
import Estado from './components/Estados';
import RenderizadoCondicional from './components/RenderiazadoCondicional';
import RenderizadoElementos from './components/RenderizadoElementos';


function App() {
  return (
    <div className="App">
      <header className="App-header">
      <section>
      <img src={logo} className="App-logo" alt="logo" />
      </section>
      <section>
        <ComponenteClass msg="Componente de clase"/>
        <hr/>
        <ComponenteFuncion msg="Componente de funcion"/>
        <hr/>
        <Propiedades 
        cadena="Esto es una cadena de texto"
        numero={25}
        boolean={true}
        arreglo={[1,2,3,4,5]}
        objeto={{'nombre':'Isaac Vega', 'edad': 38, 'nacionalidad': 'Chilena'}}
        elementoReact={<i>elemento react</i>}
        funcion = {(num) => num * num}
        componenteReact = {<ComponenteClass msg="Soy un componente pasado como prop"/>}
        />
        <hr/>
        <Estado/>
        <hr/>
        <RenderizadoCondicional/>
        <hr/>
        <RenderizadoElementos/>
      </section>
      
      </header>
    </div>
  );
}

export default App;

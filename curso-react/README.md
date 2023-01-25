# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `npm run build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)


### `ComponenteClase.js `

Este archivo explica como poder crear un Compenete de clase y sus caracteristicas. 

Este componente hereda de una clase existente **`Component`** con un metodo **`render`** y un **`return`** 

~~~
import React, { Component } from "react";

class Title extends Component {
render() {
    return <h1>Hola mundo</h1>;
    }
}
~~~

### `ComponenteFuncional.js `

Muestra como seria un componente como `Function`

Este componente hereda de una clase existente **`Component`** con un metodo **`render`** y un **`return`** 

~~~
const Title = () => {
    return <h1>Hola Mundo</h1>;
};
~~~

### `PropiedadesProps.js `

Son valores que recibe un componente hijo de uno padre. Se agrupan en un objeto llamado props, el cual puede recibir diferentes tipos de datos, como:

+ Strings
+ Numbers
+ Booleans
+ Arrays
+ Objects
+ Functions
+ React Elements
+ React Components

Las props son inmutables, es decir, son valores de sólo lectura, no se pueden modificar.

El componente las recibe como atributos que se pasan a través de JSX.

~~~
<Welcome name="Jon" />

<Welcome name="Irma" />
~~~

Si defines el componente en una clase, las props se reciben en el constructor de la clase:

~~~
class Welcome extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return <h1>{this.props.name}</h1>;
    }
}
~~~

Si defines el componente como una función, las props se reciben como un parámetro de la función:

~~~
const Welcome = (props) => {
    return <h1>{props.name}</h1>;
};
~~~

### `Estado.js `

El state son los valores internos que manejan la lógica y los datos de un componente, permite que éste reaccione a cualquier cambio lo que hará que se vuelva a renderizar en la interfaz.

El estado tiene 3 características importantes:

1. Es inmutable.
2. No se puede modificar directamente.
3. Es asíncrono.

Para hacer cambios hay que hacer uso del método setState().

El estado de un componente no es accesible desde otro componente excepto de aquel que lo posee y lo asigna.

La propagación del estado fluye de forma unidireccional y descendiente (hacia abajo), esto significa que un componente padre puede pasar valores de su estado a componentes hijos que lo recibirán como propiedades.

En el momento que los valores del estado del padre sufran cambios esto causará que tanto el padre como los hijos que recibieron esos valores como propiedades se rendericen nuevamente y reaccionen a dicho cambio.

Cada componente que se defina como una clase cuenta con un objeto para almacenar información llamado state.

Cada vez que cambia el state React vuelve a renderizar (pintar) el componente en la vista.

~~~
class Welcome extends Component {
    constructor() {
        super();

        this.state = {
        title: "Hola Mundo",
        };
    }

    render() {
        return <h1>{this.state.title}</h1>;
    }
}
~~~

En este ejemplo estamos definiendo una componente Welcome que inicializa el estado con una llave title. En el método render estamos obteniendo el valor de esa llave con this.state.title.

Para cambiar el estado utiliza el método setState:

~~~
this.setState({
    title: "Hello World",
});
~~~


### `RenderizadoCondicional.js `

En React, puedes crear distintos componentes que encapsulan el comportamiento que necesitas. Entonces, puedes renderizar solamente algunos de ellos, dependiendo del estado de tu aplicación.

El renderizado condicional en React funciona de la misma forma que lo hacen las condiciones en JavaScript. Puedes usar el condicional if o el operador ternario para crear elementos dinámicamente en base al valor del estado o las propiedades que recibe el componente.

Considera estos dos componentes:

~~~
function SaludoUsuario(props) {
    return <h1>¡Bienvenid@ nuevamente!</h1>;
}   
~~~
~~~
function SaludoInvitado(props) {
    return <h1>Por favor, regístrate.</h1>;
}
~~~

Vamos a crear un componente Saludar que muestra cualquiera de estos componentes dependiendo si el usuario ha iniciado sesión o no:

~~~
function Saludar(props) {
    const isLoggedIn = props.isLoggedIn;

    if (isLoggedIn) {
        return <SaludoUsuario />;
    }
    return <SaludoInvitado />;
}

ReactDOM.render(
    // Intentar cambiando isLoggedIn={true}:
    <Saludar isLoggedIn={false} />,
    document.getElementById("root")
);
~~~

Con el operador ternario el código quedaría de la siguiente manera:

~~~
function Saludar(props) {
    const isLoggedIn = props.isLoggedIn;

    return isLoggedIn ? <SaludoUsuario /> : <SaludoInvitado />;
}

ReactDOM.render(
    // Intentar cambiando isLoggedIn={true}:
    <Saludar isLoggedIn={false} />,
    document.getElementById("root")
);
~~~

### `RenderizadoElementos.js `

Puedes hacer colecciones de elementos e incluirlos en JSX usando llaves {}.

Recorriendo los elementos de un array y usando la función map() de Javascript.

Por ejemplo:

~~~
const numeros = [1, 2, 3, 4, 5];
const listaElementos = numeros.map((numero) => <li>{numero}</li>);
~~~

Incluimos el array listaElementos dentro de un elemento `<ul>`, y lo renderizamos en el DOM:

~~~
ReactDOM.render(<ul>{listaElementos}</ul>, document.getElementById("root"));
~~~

Refactorizamos el ejemplo anterior en un componente que acepte un array de numeros e imprima una lista de elementos.

~~~
function ListaNumeros(props) {
    const numeros = props.numeros;
    const listaElementos = numeros.map((numero) => <li>{numero}</li>);
    return <ul>{listaElementos}</ul>;
}

const numeros = [1, 2, 3, 4, 5];
ReactDOM.render(
    <ListaNumeros numeros={numeros} />,
    document.getElementById("root")
);
~~~

Al ejecutar este código, serás advertido que una **key** debería ser proporcionada para elementos de lista.

Una **key** es un atributo especial de tipo ***string*** que debes incluir al crear listas de elementos.

Las **keys** ayudan a React a identificar que elementos han cambiado, son agregados, o son eliminados. Las **keys** deben ser dadas a los elementos dentro del array para darle una identidad estable.

La mejor forma de elegir una **key** es usando un ***string*** que identifique únicamente a un elemento de la lista entre sus hermanos. Habitualmente vas a usar los IDs de tus datos como **key**.

Cuando no tengas IDs estables para renderizar, puedes usar como **key** el índice de los elementos del ***array*** de datos como último recurso.

Las **keys** usadas dentro de ***arrays*** deberían ser únicas entre sus hermanos. Sin embargo, no necesitan ser únicas globalmente. Podemos usar las mismas **keys** cuando creamos dos o más ***arrays*** diferentes.

Entonces refactorizando nuestro código anterior quedaría así:

~~~
    function ListaNumeros(props) {
        const numeros = props.numeros;
        const listaElementos = numeros.map((numero, indice) => (
            <li key={indice}>{numero}</li>
        ));
        return <ul>{listaElementos}</ul>;
    }

    const numeros = [1, 2, 3, 4, 5];
    ReactDOM.render(
        <ListaNumeros numeros={numeros} />,
        document.getElementById("root")
    );
~~~
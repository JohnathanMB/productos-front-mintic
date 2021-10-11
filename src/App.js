import './App.css';
import React from 'react';
import ReactDOM from 'react-dom'
import axios from 'axios';

class App extends React.Component{

  componentDidMount() {
    axios.get(`https://jsonplaceholder.typicode.com/users`)
      .then(res => {
        const persons = res.data;
        this.setState({ persons });
      })
  }

  handleSubmit(event) {
    //event.preventDefault();
    let codigo = event.target.codigo.value;
    let nombre = event.target.nombre.value;
    let precio = event.target.precio.value;
    let disponible = event.target.disponible.checked;
    alert(codigo +" "+nombre+" "+precio+" "+disponible );
  }

  render(){
    return (
      <div className="App">
        <div className="formulario">
          <form onSubmit={this.handleSubmit}>
            <input type="text" placeholder="Ingrese Codigo de producto" name="codigo"/><br/>
            <input type="text" placeholder="Ingrese Nombre de producto" name="nombre"/><br/>
            <input type="number" placeholder="Precio" name="precio"/><br/>
            Disponible<input type="checkbox" name="disponible"/><br/>
            <input type="submit" value="Submit" />
          </form>
        </div>
  
        <div className="ver-resultados">
  
        </div>
        
      </div>
    );
  }
}


export default App;

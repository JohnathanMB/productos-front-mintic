import './App.css';
import React from 'react';
import axios from 'axios';

class App extends React.Component{

  registrarProducto(event){
    event.preventDefault();
    
    //consumir post con axios
    axios.post('http://localhost:3001/api/producto',{
      codigo: event.target.codigo.value,
      nombre: event.target.nombre.value,
      precio: event.target.precio.value,
      disponible: event.target.disponible.checked
    }).then(res =>{
      alert(res.data.message);
      console.log(res.data);
    })


  }

  render(){
    return (
      <div className="App">
        <div className="formulario">
          <form onSubmit={this.registrarProducto}>
            <input type="text" placeholder="Ingrese Codigo de producto" name="codigo"/><br/>
            <input type="text" placeholder="Ingrese Nombre de producto" name="nombre"/><br/>
            <input type="number" placeholder="Precio" name="precio"/><br/>
            Disponible<input type="checkbox" name="disponible"/><br/>
            <input type="submit" value="Registrar" />
          </form>
        </div>
  
  {/*
        <div className="ver-resultados">
          <ul>
            {this.state.productos.map(producto => <li>{producto.codigo} - {producto.nombre} - {producto.precio} - Disponible: {producto.disponible?'SI':'NO'}</li>)}
          </ul>
        </div>
  */}
        
      </div>
    );
  }
}


export default App;

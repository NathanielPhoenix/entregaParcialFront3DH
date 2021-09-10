import data from "./components/data.json";
import React, { Component } from "react";
import Botones from "./components/Botones";
import Historial from "./components/Historial";

const historial = [];

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0,
      //seleccionPrevia: "", //matarlo
      elecciones:[]
    };
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.elecciones.length !== this.state.elecciones.length) {
      historial.push(this.state.seleccionPrevia);
    }
  }

  handleClick = (e) => {
    const id = e.target.id;
    this.state.elecciones.push(id)
    console.log(this.state.elecciones)
    if (this.state.elecciones.length > 4) {
      alert("Fin.\nGracias por acompañarnos en esta triste historia");
    }else{
      this.setState({
        contador : (2 * this.state.elecciones.length) - (id ==="A") 
      })
    }
  };

  render() {
    return (
      <div className="layout">
        <h1 className="historia">{data[this.state.contador].historia}</h1>
        <Botones
          elecciones = {this.state.elecciones}
          handleClick={this.handleClick}
          opcionA={data[this.state.contador].opciones.a}
          opcionB={data[this.state.contador].opciones.b}  
        />
        <Historial
          
          elecciones={this.state.elecciones}    
          historial={this.state.elecciones.map(
            (e, index, array) => (
              <li key={array + "-" + index}>{e}</li>    
            ),
            data[this.state.contador].id
          )}
        />
      </div>
    );
  }
}

export default App;

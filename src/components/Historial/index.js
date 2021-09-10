import React, { Component } from "react";

class Historial extends Component {
  render() {
    return (
      <div className="recordatorio">
        <h3>Selección anterior: {this.props.elecciones[this.props.elecciones.length-1]}</h3>
        <h4>Historial de opciones elegidas: </h4>
        <ul>{this.props.historial}</ul>
      </div>
    );
  }
}

export default Historial;
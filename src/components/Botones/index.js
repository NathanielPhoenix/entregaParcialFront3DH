import React, { Component } from "react";


export default class Botones extends Component {
  render() {
    return (
      <div display={this.props.elecciones.length>=4?"none":""} className="opciones">
        <div className="opcion">
          <button id="A" className="botones" onClick={this.props.handleClick}>
            A
          </button>
          <h2>{this.props.opcionA}</h2>
        </div>
        <div className="opcion">
          <button id="B" className="botones" onClick={this.props.handleClick}>
            B
          </button>
          <h2>{this.props.opcionB}</h2>
        </div>
      </div>
    );
  }
}

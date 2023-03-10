import "./styles.css";
import React from "react";

export default class App extends React.Component {
  state = {
    afazeres: "",
    minhaLista: []
  };
  hadleChange = (event) => {
    this.setState({
      afazeres: event.target.value
    });
  };

  addTask = () => {
    this.setState({
      minhaLista: this.state.minhaLista.concat({
        afazeres: this.state.afazeres,
        id: Math.random()
      }),
      afazeres: ""
    });
  };

  erase = (id) => {
    this.setState({
      minhaLista: this.state.minhaLista.filter((item) => {
        return item.id !== id;
      })
    });
  };

  render() {
    return (
      //  handleChange
      //
      //     return (
      <>
        <h1> Atividade em Aula </h1>
        <h2> To Do List - (10/03)</h2>
        <input placeholder="Add um Afazer" onChange={this.hadleChange} />
        <button className="addButton" onClick={this.addTask}>
          Adicionar Afazer
        </button>

        {this.state.minhaLista.map((item) => (
          <div className="conteinerList">
            <li>{item.afazeres}</li>

            <button
              className="eraseButton"
              onClick={() => {
                this.erase(item.id);
              }}
            >
              x
            </button>
          </div>
        ))}
        <p> A aplicação é limitada. Tenha cuidado ao usar. </p>
      </>
    );
  }
}

import React from "react";
import styled from "styled-components";
import "./styles.css";

const TarefaList = styled.ul`
  padding: 0;
  width: 200px;
`;

const Tarefa = styled.li`
  text-align: left;
  text-decoration: ${({ completa }) => (completa ? "line-through" : "none")};
`;

const InputsContainer = styled.div`
  display: grid;
  grid-auto-flow: column;
  gap: 10px;
`;

class App extends React.Component {
  state = {
    tarefas: [],
    inputValue: "",
    filtro: ""
  };

  componentDidUpdate() {
    localStorage.setItem("listaTarefas", JSON.stringify(this.state.tarefas));
  }

  componentDidMount() {
    if (localStorage.getItem("listaTarefas")) {
      const listaString = localStorage.getItem("listaTarefas");
      const listaObj = JSON.parse(listaString);

      this.setState({ tarefas: listaObj });
    }
  }

  onChangeInput = (event) => {
    this.setState({
      inputValue: event.target.value
    });
  };

  criaTarefa = () => {
    const novaTarefa = {
      id: Date.now(),
      texto: this.state.inputValue,
      completa: false // Indica se a tarefa está completa (true ou false)
    };
    this.setState({
      tarefas: [...this.state.tarefas, novaTarefa]
    });
  };

  selectTarefa = (id) => {
    const selecionar = this.state.tarefas.map((item) => {
      if (item.id === id) {
        item.completa = !item.completa;
      }
      return item;
    });

    this.setState({
      tarefas: [...selecionar]
    });
  };

  onChangeFilter = (event) => {
    const filtro = event.target.value;

    this.setState({
      filtro: filtro
    });
  };

  render() {
    const listaFiltrada = this.state.tarefas.filter((tarefa) => {
      switch (this.state.filtro) {
        case "pendentes":
          return !tarefa.completa;
        case "completas":
          return tarefa.completa;
        default:
          return true;
      }
    });

    return (
      <div className="App">
        <h1>Lista de tarefas</h1>
        <InputsContainer>
          <input value={this.state.inputValue} onChange={this.onChangeInput} />
          <button onClick={this.criaTarefa}>Adicionar</button>
        </InputsContainer>
        <br />

        <InputsContainer>
          <label>Filtro</label>
          <select value={this.state.filter} onChange={this.onChangeFilter}>
            <option value="">Nenhum</option>
            <option value="pendentes">Pendentes</option>
            <option value="completas">Completas</option>
          </select>
        </InputsContainer>
        <TarefaList>
          {listaFiltrada.map((tarefa) => {
            return (
              <Tarefa
                completa={tarefa.completa}
                onClick={() => this.selectTarefa(tarefa.id)}
              >
                {tarefa.texto}
              </Tarefa>
            );
          })}
        </TarefaList>
      </div>
    );
  }
}

export default App;
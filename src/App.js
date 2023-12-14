import React, { Component } from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBoby";

class App extends Component {
  state = {
    livros: [
      {
        id: "978-85-8522-632-2",
        titulo: "CSS Grid Layout",
        autor: "Maurício Samy Silva",
      },
      {
        id: "978-85-7522-677-3",
        titulo: "Node Essencial",
        autor: "Ricardo L. Lecheta",
      },
      {
        id: "978-85-7522-512-7",
        titulo: "Aprendendo Material Designer",
        autor: "Kyle Mew",
      },
    ],
  };
  render() {
    return (
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot />
        <TabelaBody />
      </table>
    );
  }
}

export default App;

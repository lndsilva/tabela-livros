import React from "react";
import TabelaHead from "./components/TabelaHead";
import TabelaFoot from "./components/TabelaFoot";
import TabelaBody from "./components/TabelaBoby";

function App() {
  return (
    <div>
      <h1>Tabela de livros</h1>
      <table className="tabela">
        <TabelaHead />
        <TabelaFoot />
        <TabelaBody />
      </table>
    </div>
  );
}

export default App;

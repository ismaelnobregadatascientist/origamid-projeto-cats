import { useState } from "react";

export default function App() {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [saida, setSaida] = useState("");

  function handleSubmit(event) {
    event.preventDefault();
    setSaida(nome + " " + sobrenome);
    console.log(event);
  }

  return (
    <form onSubmit={handleSubmit}>
      <label htmlFor="nome">Nome </label>
      <input
        type="text"
        id="nome"
        value={nome}
        onChange={(event) => setNome(event.target.value)}
      />

      <label htmlFor="nome">Sobrenome </label>
      <input
        type="text"
        id="nome"
        value={sobrenome}
        onChange={(event) => setSobrenome(event.target.value)}
      />

      <button>Enviar</button>

      <label htmlFor="SAIDA">{saida} </label>
    </form>
  );
}

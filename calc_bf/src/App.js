import "./App.css";
import { useState } from "react";

function App() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [idade, setIdade] = useState("");
  const [pescoco, setPescoco] = useState("");
  const [cintura, setCintura] = useState("");
  const [mensagem, setMensagem] = useState("Teste");

  function calcularBF() {
    const cin_pesc = Math.log(cintura - pescoco);
    const bf =
      495 / (0.84163(cin_pesc) + 0.15456(Math.log(altura))) - 450(Math.log10());
    alert(bf);
  }
  return (
    <div className="App">
      <h2> Como Calcular o Percentual de Gordura Corporal?</h2>
      <h4>
        Veremos como tirar suas medidas. Lembrando que você precisa ter em mãos
        uma fita métrica. 1 – Meça sua altura. 2 – Tire a medida, em
        centímetros, da circunferência de sua cintura na altura do umbigo 3 –
        Tire a medida, em centímetros, da circunferência de seu pescoço, logo
        abaixo do “pomo de adão”. 4 – Apenas para mulheres, tire a medida, em
        centímetros, da circunferência do seu quadril, na altura que ele for
        mais largo.
      </h4>
      <h1>Calculadora de BF</h1>
      <span>Vamos calcular seu BF</span>

      <div className="area-input">
        <input
          type="text"
          placeholder="Peso em Quilos exe:90"
          value={peso}
          onChange={(e) => setPeso(e.target.value)}
        />
        <input
          type="text"
          placeholder="Altura em (cm) exe:180"
          value={altura}
          onChange={(e) => setAltura(e.target.value)}
        />
        <input
          type="text"
          placeholder="Idade em (anos) exe:20"
          value={idade}
          onChange={(e) => setIdade(e.target.value)}
        />
        <input
          type="text"
          placeholder="Pescoço (cm) exe:38"
          value={pescoco}
          onChange={(e) => setPescoco(e.target.value)}
        />
        <input
          type="text"
          placeholder="Cintura (cm) exe:80"
          value={cintura}
          onChange={(e) => setCintura(e.target.value)}
        />
        <button onClick={calcularBF}>Calcular BF</button>
        <h2>{mensagem}</h2>
      </div>
    </div>
  );
}

export default App;

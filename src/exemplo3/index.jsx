import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const listarDados = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
        setUsuario(dados.results[0]);
    }
    listarDados();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
      <li>
          <h1>{usuario?.location.street}</h1>
            <p>{usuario?.location.number}</p>
            <p>{usuario?.location.name}</p>
  
          </li>
       
      </ul>
    </>
  );
}

7
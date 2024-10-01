import { useEffect, useState } from "react";

export default function App() {
  
  const [Usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const listarDados = async () => {
        const resposta = await fetch('https://randomuser.me/api');
        const dados = await resposta.json();
         //complete o código
    }
    listarDados();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
        Usuario.map(usuario =>(
          <div key={usuario.results[gender]}>
          </div>
        )

        )
        }
      </ul>
    </>
  );
}

7
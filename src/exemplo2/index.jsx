import { useEffect, useState } from "react";

export default function App() {
  
  const [usuario, setUsuario] = useState([]);

  useEffect(() => { 

    const buscarUsuario  = async () => {
        const resposta  = await fetch('https://jsonplaceholder.typicode.com/todos');
        const dados =    await resposta.json();            ;
        setUsuario(dados);
    }
    buscarUsuario();
  }, []);

  return (
    <>
      <h1>Usuário</h1>
      <ul>
        {
           usuario.map (produto => (
            <div key={produto.id}>
            <p>{produto.title}</p>
            <p>{produto.url}</p>
            <p>{produto.thumbnailUrl}</p>
            </div>
    
          )
          )
        }
      </ul>
    </>
  );
}

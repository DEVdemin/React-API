
import axios from "axios"
import { useState } from "react"
import './index.scss';


export default function Index(){
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');
  async  function verificarCor(){
       const resp = await  axios.get('http://localhost:5000/corprimaria/' + cor);
       if( resp.data.Primária === true){
           setResposta('Sim!');
       }
       else {
           setResposta('Não!')
       }
    }

    return (
        <main className="cor"> 
            <h1> Cor Primária </h1>

            <div className="corin"> 
                Cor: <input type = "text" value={cor} onChange={e=> setCor(e.target.value)}/>
            </div>

            <div className="bo">
                <button onClick={verificarCor}> Verificar </button>
            </div>

            <div className="per">
                É cor Primária? {resposta}
            </div>

            <a href="/">Voltar</a>
        </main>
    )
}
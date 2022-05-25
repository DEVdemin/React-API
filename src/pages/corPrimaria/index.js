
import axios from "axios"
import { useState } from "react"

export default function index(){
    const [cor, setCor] = useState('');
    const [resposta, setResposta] = useState('');
  async  function verificarCor(){
       const resp = await  axios.get('http://localhost:5000/corprimaria/' + cor);
       if( resp.data.primaria ===    true){
           setResposta('Sim!');
       }
       else {
           setResposta('Não!')
       }
    }

    return (
        <main> 
            <h1> Cor Primária </h1>

            <div> 
                Cor: <input type = "text" value={cor} onChange={e=> setCor(e.target.value)}/>
            </div>

            <div>
                <button onClick={verificarCor}> Verificar </button>
            </div>

            <div>
                É cor Primária? {resposta}
            </div>
        </main>
    )
}
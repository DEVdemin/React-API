import { useState } from "react"
import axios from "axios";
import './index.scss';


export default function Index(){
    const [numeros, setNumeros] = useState([]);
    const [numero, setNumero] = useState([]);
    const [resposta, setResposta ] = useState('');
    
    async function verificacao() {
        const resp = await axios.post('http://localhost:5000/maiornumero', numeros);
        setResposta(resp.data.Maior);
    }
    
    function add(){
        setNumeros([...numeros, numero])
        setNumero(0);
    }
    
    return (
        <main className="maior"> 
            <h1> Maior Numero </h1>

            <div>
                Número: <input type='text' value={numero} onChange={e =>setNumero(Number(e.target.value))} /> <button onClick={add}> Adicionar um Número </button>
            </div>

            <div className="a">
                {numeros.map(item =>
                    <div> {item} </div>
                )}
            </div>

            <div>
                <button onClick={verificacao} >Verificar</button>
            </div>
            <div>    
                Maior Número é:  {resposta}
            </div>

            <a href="/">Voltar</a>

        </main>
    )
}
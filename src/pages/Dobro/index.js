
import axios from "axios"
import { useState } from "react"
import './index.scss';

export default function Index(){
    const [Numero, setNumero] = useState(0);
    const [resposta, setResposta]= useState('');

    async function calcular (){
        const resp = await axios.get('http://localhost:5000/dobro/' + Numero);
        setResposta(resp.data.dobro)
    }
    return(
        <main> 
            <h1> Dobro</h1>
            <div>
                Número:<input type="text" value={Numero} onChange={e=> setNumero(e.target.value)}/>
            </div>
            <div>
                <button onClick={calcular}> Calcular </button>
            </div>

            <div>
                O dobro é {resposta}
            </div>
        </main>
    )

}   
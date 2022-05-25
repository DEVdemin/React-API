
import axios from "axios"
import { useState } from "react"
import {Link} from "react-router-dom"
import './index.css'

export default function Index() {

    const [cor, setCor] = useState('');

    const [Resposta, setResposta] = useState('');

    async function verificarcor() {
        const resp = await axios.get('http://localhost:5000/dia2/corprimaria/' + cor);
        
        if (resp.data.Primária === true) {

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
                Cor: <input type="text" value={cor} onChange={e => setCor(e.target.value)} />
            </div>

            <div>
                <button onClick={verificarcor}> Verificar </button>
            </div>

            <div>
                É cor Primária? {Resposta}
            </div>

            <div>
               <Link to ='/'> Voltar para a HOME </Link>
            </div>
        </main>
    )
}
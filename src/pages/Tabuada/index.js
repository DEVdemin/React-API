import { useState } from "react";
import axios from "axios";
import './index.scss';

export default function Index(){
    const [numero, setNumero] = useState();
    const [resposta, setResposta] = useState('');



    async function calcularTabuada() {
        const resp = await axios.get(`http://localhost:5000/tabuada?a=${numero}`);
        setResposta(resp.data.tabuada)
    }

    return (


        <main className="tabuada">
            <section className="j"> 
            <h1> Tabuada</h1>

            
                <div>
                    Número: <input type='text' value={numero} onChange= {e => setNumero(Number(e.target.value))} />
                </div>                

                <div>
                    <button onClick={calcularTabuada} > Calcular </button>
                </div>

                <div>
                    Tabuada: {resposta}
                </div>
                
                <a href="/">Voltar</a>

            </section>
        </main>
    )
}
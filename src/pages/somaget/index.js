import { useState } from "react";
import axios from "axios";

export default function Index(){
    const [n1, setN1] = useState('');
    const [n2, setN2] = useState('');
    const [resposta, setResposta] = useState('');



    async function calcularSoma() {
        const resp = await axios.get('http://localhost:5000/somar?a&b');
        setResposta(resp.data.soma)
    }

    return (


        <main className="soma">
            <section className="j"> 
            <h1> Soma de Números</h1>

            
                <div>
                    Primeiro número: <input type='text' value={n1} onChange= {e => setN1(e.target.value)} />
                </div>

                <div>
                    Segunda número: <input type='text' value={n2} onChange= {e => setN2(e.target.value)} />
                </div>

                <div>
                    <button onClick={calcularSoma} > Calcular </button>
                </div>

                <div>
                    Total da soma: {resposta}
                </div>
                
                <a href="/">Voltar</a>

            </section>
        </main>
    )
}
import { useState } from "react";
import axios from "axios";

export default function Index(){
    const [numero1, setnumero1] = useState(0);
    const [numero2, setnumero2] = useState(0);
    const [resposta, setResposta] = useState(0);



    async function calcularSoma() {
        const resp = await axios.post('http://localhost:5000/somar',{
            a:numero1,
            b:numero2
        });
        setResposta(resp.data.soma)
    }

    return (


        <main className="soma">
            <section className="j"> 
            <h1> Soma de Números</h1>

            
                <div>
                    Primeiro número: <input type='text' value={numero1} onChange= {e => setnumero1(Number(e.target.value))} />
                </div>

                <div>
                    Segunda número: <input type='text' value={numero2} onChange= {e => setnumero2(Number(e.target.value))} />
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
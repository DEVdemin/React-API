import { useState } from "react";
import axios from "axios"
import './index.scss'


export default function Index(){
        const [qtdInteiras,setqtdInteiras] = useState(0);
        const [qtdMeias,setqtdMeias] = useState(0);
        const [diaSemana,setDiaSemana] = useState('');
        const [Nacionalidade,setNacionalidade] = useState('');
        const [Total, setTotal] = useState(0);

       async function calcular(){
         const resp = await axios.post('http://localhost:5000/ingresso', {
            a:qtdInteiras,
            b:qtdMeias,
            c:diaSemana,
            d:Nacionalidade
            })

            setTotal(resp.data.Total)
        }


        
    return (
        <main className="main"> 
        <div className="cont">
            <h1 className="Ingresso"> Ingresso </h1>

            <div> 
                Qtd.Inteiras:<input type = "text"   value={qtdInteiras} onChange={e=> setqtdInteiras(Number(e.target.value))}/>
            </div>
            <div> 
                Qtd.Meias:<input type = "text" value={qtdMeias} onChange={e=> setqtdMeias(Number(e.target.value))}  />
            </div>
            <div> 
                Dia da Semana:<input type = "text" value={diaSemana} onChange={e=> setDiaSemana(e.target.value)}/>
            </div>
            <div> 
                Nacionalidade:<input type = "text" value={Nacionalidade} onChange={e=> setNacionalidade (e.target.value)} />
            </div>
            <div> 
                <button onClick={calcular}> Calcular </button>
            </div>
            <div> 
                O total é de: {Total}
             </div>
             </div>
        </main>
    )
}
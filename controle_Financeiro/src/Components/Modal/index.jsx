import { useState } from 'react'
import './Style.css'
import axios from 'axios'
export function Modal({isOpen, setOpen})
{

    const [Titulo, setTitulo] = useState('')
    const [Valor, setValor] = useState(0)
    const [Data, setData] = useState('')

    const dados = {
        titulo: Titulo,
        valor: Valor,
        data: Data
    }

    const cadastrarEntrada = () => 
    {
        location.reload()
        axios.post("http://localhost:8080/entradas/post", dados)
    }

    const cadastrarSaida = () =>
    {
        location.reload()
        axios.post("http://localhost:8080/saidas/post", dados)
    }

    if(isOpen)
    {
        return(
            <>
                <div className="back">
                <div className="form">
                    <h2>Nova Transação</h2>
                    <div className="in">
                        <input type="text" placeholder="Título" id="titulo" onChange={(e) => setTitulo(e.target.value)}/>
                    </div>
                    <div className="in">
                        <input type="number" placeholder="Valor" id="valor" onChange={(e) => setValor(e.target.value)}/>
                    </div>
                    <div className="in">
                        <input type="text" placeholder="data" id="data" onChange={(e) => setData(e.target.value)}/>
                    </div>
                   <div className="but">
                        <button id='in' onClick={cadastrarEntrada}>Entrada</button>
                   </div>
                   <div className="but">
                        <button id='out' onClick={cadastrarSaida}>Saída</button>
                   </div>
                   <div className="but">
                        <button id='x' onClick={setOpen}>X</button>
                   </div>
                </div>
                </div>
            </>
        )
    }
}
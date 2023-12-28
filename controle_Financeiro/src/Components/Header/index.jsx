import { useEffect, useState } from 'react'
import './Style.css'
import { Modal } from '../Modal'
import axios from 'axios'
export function Header()
{

    const [isOpen, setOpen] = useState(false)

    const [entradas, setEntradas] = useState([])
    const [saidas, setSaidas] = useState([])

    useEffect(() => {
        axios.get("http://localhost:8080/entradas/get")
        .then(res => setEntradas(res.data))
        .catch(err => console.log(err))
    }, [])

    useEffect(() => {
        axios.get("http://localhost:8080/saidas/get")
        .then(res => setSaidas(res.data))
        .catch(err => console.log(err))
    }, [])

    const totalEntrada = entradas.reduce((acc, transaction) => {
        return acc + parseFloat(transaction.valor)
    }, 0)

    const totalSaida = saidas.reduce((acc, transaction) => {
        return acc + parseFloat(transaction.valor)
    }, 0)

    const valorTotal = totalEntrada - totalSaida

    return(
        <div className="head">
            <div className="content">
                <h1>AVG-Money</h1>
                <button onClick={() => setOpen(!isOpen)}>Nova Transação</button>
            </div>
               <div className="summary">
                <div className="entradas">
                        <h2>Entradas</h2>
                        <strong><p>R$ {totalEntrada}</p></strong>
                    </div>
                    <div className="saidas">
                        <h2>Saídas</h2>
                        <strong><p>R$ {totalSaida}</p></strong>
                    </div>
                    <div className="total">
                        <h2>Total</h2>
                        <strong><p>R$ {valorTotal}</p></strong>
                    </div>
               </div>
               <Modal isOpen={isOpen} setOpen={() => setOpen(!isOpen)}/>
        </div>
    )
}
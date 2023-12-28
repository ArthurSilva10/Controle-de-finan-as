import './Style.css'
export function Entradas(props)
{
    return(
        <div className="card-entradas">
            <h2>{props.titulo}</h2>
            <strong><p>R$ {props.valor}</p></strong>
            <h2 id="in-type">Entrada</h2>
            <strong><p>{props.data}</p></strong>
        </div>
    )
}
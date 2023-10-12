import './card.css'

export default function Card(props:any){
    return(
        <div className='card'>
            <h3>{props.titulo}</h3>
            <p>{props.descricao}</p>
        </div>
    )
}
import './button.css'

export default function Button(props:any){
    return(
        <button>
            {props.acao}
            <img src={props.imageUrl} alt={props.alt} />    
        </button>
    )
}
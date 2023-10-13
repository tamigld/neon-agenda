import './input.css'

export default function Input(props:any){
    return(
        <label htmlFor={props.htmlFor}>
            <input required placeholder={props.placeholder} name={props.name} type={props.type} />
        </label>
    )
}
import './input.css'

export default function Input(props:any){
    return(
        <div id="form__group">
            <input type={props.type} className="form__input" id="name" placeholder={props.placeholder} name={props.name} required />
            <label htmlFor={props.htmlFor} className="form__label">{props.placeholder}</label>
        </div>
    )
}
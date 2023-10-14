import './input.css'

export default function Input(props:any){
    return(
        <div id="form__group">
            <input type={props.type} className="form__input" id="name" placeholder={props.placeholder} name={props.name} required />
            <label htmlFor={props.htmlFor} className="form__label">
                <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/angulo-pequeno-direito.png?alt=media&token=7b531123-b77e-45cf-b00a-01b59a052b7f&_gl=1*aqmjm6*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzI0MzgyMC4zMS4xLjE2OTcyNDQwMDAuNTIuMC4w" alt="Ícone de certo" />
                {props.placeholder}
            </label>
        </div>
    )
}
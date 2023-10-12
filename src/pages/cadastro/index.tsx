import './cadastro.css'
import {Link} from 'react-router-dom'

export default function Cadastro(){
    return(
        <section id="cadastro">
            <form className='formcadastro' action="post">
                <h1>Cadastre-se</h1>
                <label htmlFor="nome">
                    <input required placeholder='Nome completo' name='nome' type="text" />
                </label>
                <label htmlFor="email">
                    <input required placeholder='E-mail' name='email' type="email" />
                </label>
                <label htmlFor="password">
                    <input required placeholder='Senha' name='password' type="password" />
                </label>
                <button>
                    Cadastre-se
                    <img src="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/entrar.png?alt=media&token=9831f103-4c88-4677-9410-741d393eba53&_gl=1*1scv3yl*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzEyOTU2MS4yOC4xLjE2OTcxMjk1NzMuNDguMC4w" alt="Ícone entrar" />    
                </button>
                <span>Já tem uma conta? <Link
                    style={{
                        color: "var(--lavender)"
                    }}
                    to={"/login"}
                     >Faça login</Link>
                </span>
            </form>
        </section>
    )
}
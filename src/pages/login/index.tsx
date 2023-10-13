import { Link } from 'react-router-dom'
import './login.css'
import Input from '../../components/input'
import Button from '../../components/button'

export default function Login(){
    return(
        <section id="login">
            <form className='formlogin' action="post">
                <h1>Login</h1>
                <Input
                htmlFor="email"
                placeholder="E-mail"
                name="email"
                type="email"
                />
                <Input
                htmlFor="password"
                placeholder="Senha"
                name="password"
                type="password"
                />
                <Button
                acao="Entrar"
                imageUrl="https://firebasestorage.googleapis.com/v0/b/neon-agenda.appspot.com/o/entrar.png?alt=media&token=9831f103-4c88-4677-9410-741d393eba53&_gl=1*xb63fe*_ga*OTkzMDE5MjQ4LjE2OTM2Nzk1Mjk.*_ga_CW55HF8NVT*MTY5NzIzODkyNy4zMC4xLjE2OTcyMzg5NTcuMzAuMC4w"
                alt="Ícone de entrar"
                />
                <span>Ainda não tem uma conta? <Link
                    style={{
                        color: "var(--lavender)"
                    }}
                    to={"/cadastro"}
                     >Cadastre-se!</Link>
                </span>
            </form>
        </section>
    )
}
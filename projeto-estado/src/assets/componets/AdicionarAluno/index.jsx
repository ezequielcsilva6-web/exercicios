import { useState } from 'react'
import './style.css'

function AdicionarAluno() {
    const [nome, setNome] = useState('')
    const [email, setEmail] = useState('')
    const [alunos, setAlunos] = useState([])

    //Funçao para adicionar um aluno na lista.
    const handlerAdicionarAluno = (event) => {
        event.preventDefault()//Impede que a pagina seja recarregada.

        // Se os campos estiverem preenchidos...
        if (nome && email) {

            setAlunos([...alunos, { nome, email }])// Adicionar na lista
            setNome(" ")//Apaga o nome informado deixando o campo vazio
            setEmail("")// apaga o email informado deixando o campo vazio
        }
    }

    return (
        <div>
            <h2>Adicionar Aluno</h2>
            <form onSubmit={handlerAdicionarAluno}>
                <input
                    type="Nome"
                    value={nome}
                    onChange={(e) => setNome(e.target.value)}
                />

                <input
                    type="Email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)} />

                <button type="submit">
                    Adicionar
                </button>
            </form>
            <hr />
            <h2>Alunos Adicionados</h2>
            <ul>
                {alunos.map((alunos, index) => (
                    <li> key = {index}
                        {alunos.nome} - {alunos.email}
                    </li>
                ))}
            </ul>
        </div>
    )
}

export default AdicionarAluno
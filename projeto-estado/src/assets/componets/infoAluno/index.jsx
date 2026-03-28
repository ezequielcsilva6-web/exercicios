import './style.css'

function InfoAluno() {
    const nome ="Ezequiel Cardoso"
    const idade = 20
    const curso = "Desenvolvimento de Sistemas"

    return (
        <div className='info-aluno'>
            <h2>Informações do Aluno</h2>
            <p>Nome: {nome}</p>
            <p>Idade: {idade}</p>
            <p>Curso: {curso}</p>

        </div>

    )
}

export default InfoAluno
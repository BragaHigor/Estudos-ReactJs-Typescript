import { useContext } from "react"

import {UserContext}from "../../contexts/user"

import Nome from "../Nome/Nome"

const Aluno = () => {

  const {qtdAlunos, mudaNome, mudaQtd} = useContext(UserContext)

  return (
    <div>
        <h3>Quantidade de Alunos {qtdAlunos}</h3>
        <button onClick={() => mudaNome("Higor")}>
          Mudar Nome
        </button>
        <button onClick={() => mudaQtd(27)}>
          Mudar quantidade Alunos
        </button>
        <br />
        <br />
        <Nome/>
    </div>
  )
}

export default Aluno
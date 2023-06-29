import { useState } from "react"

const RenderCondicional = () => {

    const [signed, setSigned] = useState(false)

  return (
    <>
        <button onClick={() => setSigned(true)}>Entrar</button>
        <button onClick={() => setSigned(false)}>Sair</button>

        {signed ? (
            <h1>Bem vindo Higor Braga!</h1>
        ) : (
            <h1>Nenhum usuário logado</h1>
        )}
    </>
  )
}

export default RenderCondicional
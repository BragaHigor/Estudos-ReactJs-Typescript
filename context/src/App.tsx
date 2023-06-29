
import Aluno from "./components/Alunos/Aluno"
import Rodape from "./components/Footer/footer"

import UserProvider from "./contexts/user"

const App = () => {

  return (
    <UserProvider>
      <div>
        <h1>Escola DEV</h1>
        <br />
        <hr />

        <Aluno />
        <Rodape/>
      </div>
    </UserProvider>

  )
}

export default App
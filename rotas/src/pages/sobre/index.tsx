import { Link } from 'react-router-dom'

const Sobre = () => {
  return (
    <div>
        <h1>Página Sobre!</h1>
        <br />
        <br />
        <Link to='/'>Ir para a Home</Link>
        <br />
        <Link to='/Contato'>Contato</Link>
    </div>
  )
}

export default Sobre
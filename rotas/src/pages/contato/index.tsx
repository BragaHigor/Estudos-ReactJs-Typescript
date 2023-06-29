import { Link } from 'react-router-dom'

const Contato = () => {
  return (
    <div>
        <h1>Contatos!</h1>
        <h3>Telefone: (xx) xxxxx-xxxx</h3>
        <Link to='/sobre'>Sobre</Link>
        <br />
        <Link to='/'>Ir para a Home</Link>
    </div>
  )
}

export default Contato
import { Link } from 'react-router-dom'

const Home = () => {
  return (
    <div>
      <h1>Bem-vindo a página de Home</h1>
      <span>Essa é a minha primeira página com navegação</span>
      <br />
      <br />
      <Link to='/sobre'>Sobre</Link>
      <br />
      <Link to='/Contato'>Contato</Link>
    </div>
  )
}

export default Home
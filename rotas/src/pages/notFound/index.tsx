import { Link } from 'react-router-dom'

const NotFound = () => {
  return (
    <div>
        <h1>Ops essa página não existe!</h1>

        <Link to='/'>Acessar página HOME</Link>
    </div>
  )
}

export default NotFound
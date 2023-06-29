import { useParams } from 'react-router-dom'

const Produto = () => {

  const { id } = useParams()

  return (
    <div>
      <h1>Produto {id}</h1>
    </div>
  )
}

export default Produto
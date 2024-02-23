//Import do CSS
import { Link } from 'react-router-dom';
import './NotFound.css'

const NotFound = () => {
  return (
    <div className='NotFound'>
        <h1>404</h1>
        <p>Página não encontrada T.T</p>
        <Link to={"/"}>Retornar para a Home</Link>
    </div>
  )
}

export default NotFound;
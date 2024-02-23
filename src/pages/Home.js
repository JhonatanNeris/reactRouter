import {Link} from "react-router-dom"
import { useFetch } from "../hooks/useFetch"

//CSS
import './Home.css'

const Home = () => {
    // Carregamento de dados
    const url = 'http://localhost:3000/products'

    const {data: items, loading, error} = useFetch(url)
  return (
    <div>
        <h1>Produtos</h1>
        {error && <p>{error}</p>}
        <ul className="products">
            {items && items.map(item => (
                <li key={item.id}>
                    <h2>{item.name}</h2>
                    <p>R$ {item.price}</p>
                    {/*Rota dinamica*/}
                    <Link to={`/products/${item.id}`}>Ver detalhes</Link>
                </li>
            ))}

        </ul>
    </div>
  )
}

export default Home
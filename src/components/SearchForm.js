import './SearchForm.css'
import { useNavigate } from 'react-router-dom'
import { useState } from 'react'

const SearchForm = () => {
    const navigate = useNavigate()
    const [query, setQuery] = useState()

    const handleSubmit = (e) => {
        e.preventDefault()

        navigate("/search?q=" + query)
    }
  return (
    <div className='search-form'>
        <form onSubmit={handleSubmit}>
            <input type="text" placeholder="Digite aqui a sua busca" onChange={(e) => setQuery(e.target.value)} />
            <input type="submit" value="Buscar" />
        </form>
        

    </div>
  )
}

export default SearchForm
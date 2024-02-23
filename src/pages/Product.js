import './Product.css'

//Novo hook não sei muito bem o que faz ainda 
import { Link, useParams } from 'react-router-dom'
import { useFetch } from '../hooks/useFetch'
import { useEffect, useState } from 'react'

const Product = () => {
    //Rota dinâmica 
    const {id} = useParams()

    // Carregamento dos dados individual
    const url = "http://localhost:3000/products/" + id
    const {data: product, loading, error} = useFetch(url)

    const [cart, setCart] = useState([])    
    
    //TESTANDO CARRINHO
    const testandocarro = (produto) =>{
        //setCart(produto)
        setCart((actualCart)=>[
            ...actualCart,
            produto,
        ])
        console.log(cart)
        alert(product.name + " Adicionado com sucesso")
    }

  return (
    <div className='product-details'>
        {/*<p>ID do produto: {id}</p>*/}
        {error && <p>Ocorreu um erro...</p>}
        {loading && <p>Carregando Dados...</p>}
        {product && (
            <div className='container'>
                <div className='card-single'>
                    <div className="left">
                        <img src={product.img}/>
                    </div>
                    <div className="right">
                        <h1>{product.name}</h1>
                        <p>R$ {product.price}</p>
                        <button onClick={() => testandocarro({product})}>Adicionar ao carrinho</button>
                        {/* 6 - Nested Routes */}
                        <Link to={`/products/${product.id}/info`}>Mais informações sobre o produto</Link>
                    </div>               
                </div>
                <div className="card-description">
                    <div className="menu-description">
                        <span>descrição</span>
                    </div>
                    <div className="description">
                        <p>O Tênis Nomade INVICTUS - Preto combina o estilo e as características de um calçado tático com materiais de alta performance que proporcionam robustez, durabilidade e resistência, porém, com o conforto e flexibilidade de um tênis.</p>
                        <p>Seu design de perfil baixo com um colarinho acolchoado envolve levemente o tornozelo sem sacrificar a mobilidade.</p>
                        <p>O cabedal é feito de CORDURA 1000® com sobreposições de Microfibra da Freudenberg® trazendo a alta performance de um calçado tático paras as ruas.</p>
                        <p>Sua biqueira e o calcanhar contam com reforços extras construído com borracha SBR de alta resistência a abrasão que melhoram a aderência. O solado agrupa a resistência e o conforto, o que significa que o Nomade pode ser usado do dia à noite nas mais diferentes circunstâncias, sem perder a comodidade.</p>
                    </div>
                </div>
            </div>
            
        )}
        {!cart && <p>Carrinho Vazio</p>}
        {cart && cart.map(item => (
            <div className="container-cart">
                <div className="cart-single">
                    <li key={item.product.id}>
                        <p>{item.product.name}</p>
                        <span>R$ {item.product.price}</span>                        
                    </li>
                    <button onClick={()=> console.log(item.product.id)}>Excluir</button>
                </div>                
            </div>
            
        ))}
        <h1>Total: "xxx"</h1>
    </div>
    
  )
}

export default Product
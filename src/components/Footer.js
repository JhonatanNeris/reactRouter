import "./Footer.css"

// Vamos ter que utilizar o componente link do rect router, lembra a tag A(<a></a>) do html 

const Footer = () => {
  return (
    <footer>
        <h2>Tecnologias utilizadas</h2>
        <div className="tecs">
            <span>HTML</span>
            <span>CSS</span>
            <span>JavaScript</span>
            <span>React</span>
        </div>
        <h2>Contato</h2>
        <h2 style={{color: '#ff6c0c'}}>jhonatansnx@gmail.com</h2>       
    </footer>
  )
}

export default Footer
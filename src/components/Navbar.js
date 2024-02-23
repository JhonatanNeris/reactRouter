import "./Navbar.css"

// Vamos ter que utilizar o componente link do rect router, lembra a tag A(<a></a>) do html
import {Link, NavLink} from "react-router-dom" 

const Navbar = () => {
  return (
    <nav>
        {/* <Link to="/">Home</Link>
        <Link to="/about">About</Link> */}
        
        {/* Vamos utilizar o NavLink pois é melhor para barras de navegaçãoe para liberar para utilizarmos o isactive  */}
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
    </nav>
  )
}

export default Navbar;
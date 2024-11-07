import SearchBar from "./SerchBar/SerchBar";
import { useNavigate, useLocation } from "react-router-dom";
import style from './Nav.module.css'

const Nav = () => {
    const navigate = useNavigate()
    const location = useLocation()

    return(
        <nav className={style.contenedor}>
            <SearchBar />

            {location.pathname !== '/home' && <button className={style.boton} onClick={() => {navigate('/home')}}>Home</button>}

            {location.pathname !== '/form' && <button onClick={() => {navigate('/form')}}className={style.boton} >Crear pokemon</button>}

            {<button className={style.boton} onClick={() => {navigate('/')}} >Landing</button>}
        </nav>
    )
}

export default Nav;
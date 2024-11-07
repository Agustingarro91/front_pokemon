import { Link } from "react-router-dom";
import { connect, useDispatch } from "react-redux";
import { allPokemons, todoTipos } from "../../redux/actions";
import { useEffect } from "react";
import style from './landing.module.css'
import { NavLink } from "react-router-dom";

const Landing = () => {
    const dispatch = useDispatch();

    useEffect(()=>{
        dispatch(allPokemons())
    },[])
    
    const handlerAllPoke = () =>{
        dispatch(todoTipos())
    }
    return(
        <div className={style.contenedor}>
            <NavLink className={style.link} onClick={handlerAllPoke} to= '/home'>
                <div className={style.ingresar}>
                    INGRESAR
                </div>
            </NavLink>
        </div>
    )

}

export default connect(
    null,
    null
) (Landing);
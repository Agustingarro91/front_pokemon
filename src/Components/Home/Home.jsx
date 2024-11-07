import Card from "../Card/Card";
import { NavLink, useLocation } from "react-router-dom";
import { orderPokemon, filterPokemon } from "../../redux/actions";
import { useDispatch } from "react-redux";
import style from './home.module.css'
import { connect } from "react-redux";
import { useEffect, useState } from "react";



const ITEMS_PAGE = 12;
const Home = ({ pokeFiltrados, allTypes }) => {
    const dispatch = useDispatch()
    const location = useLocation();

    const [card, setCard] = useState([...pokeFiltrados].splice(0, ITEMS_PAGE));
    const [pagina, setPagina] = useState(0);


    useEffect(() => {
        setCard([...pokeFiltrados].splice(0, ITEMS_PAGE));
        setPagina(0)
    }, [pokeFiltrados])

    const handlerNext = () => {
        const totalPoke = pokeFiltrados.length;
        const nextPage = pagina + 1;
        const firstIndex = nextPage * ITEMS_PAGE;
        const cantPage = Math.ceil(totalPoke / ITEMS_PAGE);

        if (cantPage === nextPage) return;
        //if(firstIndex === totalPoke) return;

        setCard([...pokeFiltrados].splice(firstIndex, ITEMS_PAGE));
        setPagina(nextPage);
    }

    const handlerPrev = () => {
        const prevPage = pagina - 1;
        if (prevPage < 0) return
        const firstIndex = prevPage * ITEMS_PAGE;
        setCard([...pokeFiltrados].splice(firstIndex, ITEMS_PAGE));
        setPagina(prevPage);
    }

    const handleChangeOrd = (event) => {
        dispatch(orderPokemon(event.target.value))

    }

    const handleFilter = (event) => {
        dispatch(filterPokemon(event.target.value))
    }





    return (
        <div className={style.home}>
            {/* Paginado */}

            <div className={style.buscadores}>
                <button className={style.btn} onClick={handlerPrev}>Prev</button>
                <select className={style.btn} onChange={handleFilter}>
                    <option value={'allPoke'} > Buscar x su tipo</option>
                    {
                        allTypes.map((tipos, i) => {
                            return (<option className={style.btn} value={`${tipos.name}`}>{`${i + 1}: ${tipos.name}`}</option>)
                        })
                    }
                </select>

                <select className={style.btn} onChange={handleFilter}>
                    <option >Buscar segun su Origen</option>
                    <option value="1DB">Base de Dato</option>
                    <option value="1AP">API</option>
                </select>

                <select className={style.btn} onChange={handleChangeOrd} >
                    <option> Ordenar x Nombre</option>
                    <option value="BA">Ascendente</option>
                    <option value="BD">Descendente</option>
                </select>

                <select className={style.btn} onChange={handleChangeOrd}>
                    <option> Ordenar x Ataque</option>
                    <option value="A">Ascendente</option>
                    <option value="D">Descendente</option>
                </select>


                {location.pathname === '/home' && <>
                    <span > Pagina: {`${pagina + 1}`} </span>
                </>}
                <button className={style.btn} onClick={handlerNext}>Next</button>
            </div>

            <div className={style.contenedor}>
                {card?.map(pokemon => {
                    return (
                        <NavLink to={`/detail/${pokemon.name}`} className={style.link}>
                            <Card pokemon={pokemon} key={pokemon.id} />
                        </NavLink>
                    )
                })}
            </div>
        </div>
    )
}

const mapStateToProps = (state) => {
    return {
        pokeFiltrados: state.pokeFiltrados,
        allTypes: state.allTypes
    }
}

export default connect(
    mapStateToProps,
    null
)(Home);
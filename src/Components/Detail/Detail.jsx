import axios from "axios";
import { useState, useEffect } from "react";
import Card from "../Card/Card";
import { useParams, useNavigate } from "react-router-dom";
import style from './ditail.model.css'

const Detail = () =>{
    const navigate = useNavigate();

    const {name} = useParams()

    const [pokemon, setPokemon] = useState({});


    useEffect(() => {
        const pedido = async () =>{
            try {
            const {data} = await axios(`http://localhost:3001/pokemons/name?name=${name}`)

                if(data.name) setPokemon(data);
                
            } catch (error) {
                navigate('/error')
            }
        }
        pedido()
        return setPokemon({});
     }, [name])
   

    return(
        <div className={style.contenedor}>
            {pokemon.name? 
            <Card  pokemon = {pokemon} />
            :<img src="https://cdn.pixabay.com/animation/2022/08/15/19/03/19-03-25-52_512.gif" alt="Se esta cargando" /> }
            
            
        </div>
    )
}

export default Detail;
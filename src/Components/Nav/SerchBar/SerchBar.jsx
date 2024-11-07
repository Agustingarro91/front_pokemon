import { useState, useEffect } from "react";
import { useNavigate, NavLink } from "react-router-dom";
import Card from "../../Card/Card";
import axios from "axios";
import style from './serch.module.css'

export default function SearchBar() {
   const navigate = useNavigate();
   const [name, setName] = useState('');
   const [input, setInput] = useState({});
   const [boton, setBoton] = useState(true);


   const [pokemon, setPokemon] = useState({});

   const onSearch = async (name) =>{
       try {
           const {data} = await axios(`http://localhost:3001/pokemons/name?name=${name}`)
                       
           setPokemon(data);
           
       } catch (error) {
           return setPokemon({error : 'No existe el pokemon'})
       }
      
     }


   const handleChange = (event) => {
      setName(event.target.value)
      setInput(validarInput(event.target.value))
   }


   const validarInput = (name) => {
      const input = {};
      
      if (name.length < 3) {
            input.error ='Debe tener al menos tres letras'
      }
      if (!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(name)) {
         input.error = 'Utilice solo letras'
      }
      if (!name) {
            input.error ='No puede estar vacio'
         }      
      if (name.length > 15) {
            input.error ='No puede tener mas de 15 caracteres'
      }

      return input;
   }



   

   return (
      <div className={style.contenedor}>
         <div>

         <input type='search' value={name} onChange={handleChange} placeholder={input.error?input.error:'Busque un pokemon'} />
         
         <button disabled= {!name ||input.error} onClick={() => { onSearch(name); setName(''); navigate('/home') }} className={style.bton}>Buscar</button>

         {pokemon.error && <p className={style.error}>El pokemon ingresado no existe</p>}

         {pokemon.name && <button className={style.bton} onClick = {() =>  setBoton(!boton)}>{boton?`Mostrar ${pokemon.name}`:`Ocultar  ${pokemon.name}`}</button>}
         </div>

         {input.error !== 'No puede estar vacio' && <p>{input.error}</p>}

         {!boton && <div className={style.card}>
            <NavLink className={style.link} to={`/detail/${pokemon.name}`}>
                <Card pokemon={pokemon}/>
            </NavLink>
         </div>}

      </div>
   );
}
import { NEW_POKE,ORDER_POKE,FILTER_POKE, ALL_POKE, ALL_TYPES } from "./actionsTypes";
import axios from "axios";

export const allPokemons = ()=>{
    const endpoint = `http://localhost:3001/pokemons/`;
    return async (dispatch) =>{
        try {
            const {data} = await axios(endpoint)

            if(!data.length) throw Error('Hay fallo en allPokemons');

            return dispatch(
                {type: ALL_POKE, payload: data}                
            ) 
            
        } catch (error) {
            console.log(error.request);
            return {error:'Donde estas?'}
            
        }
    }
}

export const newPokemon = (newPoke)=>{
    console.log(newPoke );
    const endpoint = 'http://localhost:3001/pokemons/';
    return async (dispatch) => {
        try {
            const { data } = await axios.post(endpoint,newPoke)
            console.log(data.error);
            console.log(data.name);
            if(!data.name) throw Error('Hay fallo en form');

            return dispatch(
                {type: NEW_POKE, payload: newPoke}
            ) 
        } catch (error) {
            return error.message
        }
    }
}

export const orderPokemon = (order)=>{
    return {type: ORDER_POKE, payload: order}
}

export const filterPokemon = (origen)=>{
    return {type: FILTER_POKE, payload: origen}
}

export const todoTipos = () =>{
    const endpoint = 'http://localhost:3001/types';
    return async (dispatch) =>{
        try {
            const {data} = await axios(endpoint)
            console.log(data);

            if(!data.length) throw Error('Hay fallo en todo los tipos');

            return dispatch(
                {type: ALL_TYPES, payload: data}                
            ) 
            
        } catch (error) {
            return error.message
            
        }
    }
}
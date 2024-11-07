
import { NEW_POKE,  ORDER_POKE, FILTER_POKE, ALL_POKE, ALL_TYPES } from "./actionsTypes";


const initialState = {
    allPokemons: [],
    pokeFiltrados: [],
    allTypes: []
}

const reducer = (state = initialState, action) => {

    switch (action.type) {
        case NEW_POKE:
            return {
                ...state,
                allPokemons: [...state.allPokemons, action.payload]
            }

        case ALL_POKE:
            return {
                ...state,
                allPokemons: action.payload,
                pokeFiltrados: action.payload
            }

        case FILTER_POKE:
            const allPokeFilt = state.allPokemons.filter((poke) => poke.types.includes(action.payload))
            const dbPokeFilt = state.allPokemons.filter((poke) => poke.type)
            const apiPokeFilt = state.allPokemons.filter((poke) => !poke.type)

            return {
                ...state,
                pokeFiltrados:
                    !action.payload.includes('1') ?
                        (action.payload === 'allPoke'
                            ? [...state.allPokemons]
                            : allPokeFilt)
                    :(action.payload === '1DB'
                            ? dbPokeFilt
                            : apiPokeFilt)
            }

        case ORDER_POKE:
            const copyPoke = [...state.pokeFiltrados];
            return {
                ...state,
                pokeFiltrados:
                    !action.payload.includes('B') ?
                        (action.payload === 'A'
                            ? copyPoke.sort((a, b) => a.attack - b.attack)
                            : copyPoke.sort((a, b) => b.attack - a.attack))
                        : (action.payload.includes('A')
                            ? copyPoke.sort((a, b) => {
                                if (a.name > b.name) {
                                    return 1;
                                }
                                if (a.name < b.name) {
                                    return -1;
                                }
                                return 0;
                            })
                            : copyPoke.sort((a, b) => {
                                if (a.name < b.name) {
                                    return 1;
                                }
                                if (a.name > b.name) {
                                    return -1;
                                }
                                return 0;
                            }))
            }

        case ALL_TYPES:
            console.log(state.allTypes.length);
            return {
                ...state,
                allTypes: action.payload
            }

        default:
            return { ...state }
    }

}

export default reducer;
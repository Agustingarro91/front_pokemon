import { useState, useEffect } from 'react';
import validate from '../../validate/validate';
import { useNavigate } from 'react-router-dom';
import { connect, useDispatch } from 'react-redux';
import { newPokemon } from '../../redux/actions';
import style from './form.module.css';
import { NavLink } from 'react-router-dom';





const Form = ({allTypes,allPoke}) => {
    const dispatch = useDispatch();
    const navigate = useNavigate();



    const [form, setForm] = useState({
        name: '',
        image: '',
        life: '',
        attack: '',
        defense: '',
        speed: null,
        height: null,
        weight: null,
        type: [],
        types:[]
    });

    const [error, setError] = useState({})

    const handleDisable = () => {
        if (!form.name ||error.name || error.image || error.life || error.attack || error.defense || error.types) return true
    }

    const handleOnChange = (event) => { 
        if ([event.target.name] != 'type') {
            setForm({
                ...form,
                [event.target.name]: event.target.value

            })
        } else {
            if (form.type.includes(event.target.value)) {
                const typ = form.type.filter((tip) => tip != event.target.value);
                const typs = form.types.filter((tip) => tip != event.target.id);
                setForm({
                    ...form,
                    [event.target.name]: typ,
                    types:typs

                })
            } else {
                setForm({
                    ...form,
                    [event.target.name]: [...form.type, event.target.value],
                    types:[...form.types,event.target.id]
                })
            }
        }
        setError(validate({
            ...form,
            [event.target.name]: event.target.value
        },allPoke))
    }
    const handleSubmit = (event) => {
        event.preventDefault();
        dispatch( newPokemon(form));
        navigate('/home');
        
    }

   

    return (


        <form className={style.contenedor} onSubmit={handleSubmit}>
            <div className={style.error}>
            <button className={style.boton} disabled={handleDisable()}> Crear pokemon </button>

            {error.name && <p >{error.name}</p>}

            {error.image && <p >{error.image}</p>}

            {error.life && <p >{error.life}</p>}

            {error.attack && <p >{error.attack}</p>}

            {error.height && <p >{error.height}</p>}
            
            {error.defense && <p >{error.defense}</p>}

            {error.weight && <p >{error.weight}</p>}

            {error.speed && <p >{error.speed}</p>}
            </div>
            
            <div className={style.input}>

                <label htmlFor="name">name: </label>
                <input type="text" name='name' value={form.name} onChange={handleOnChange} />
                
                

                <label htmlFor="image">image: </label>
                <input type="text" name='image' value={form.image} onChange={handleOnChange} />
                
                

                <label htmlFor="life">life: </label>
                <input type="text" name='life' value={form.life} onChange={handleOnChange} />
                
                

                <label htmlFor="attack">attack: </label>
                <input type="text" name='attack' value={form.attack} onChange={handleOnChange} />
                
                

                <label htmlFor="defense">defense: </label>
                <input type="text" name='defense' value={form.defense} onChange={handleOnChange} />
                
                

                <label htmlFor="speed">speed: </label>
                <input type="text" name='speed' value={form.speed} onChange={handleOnChange} />
                
                

                <label htmlFor="height">height: </label>
                <input type="text" name='height' value={form.height} onChange={handleOnChange} />
                

                <label htmlFor="weight">weight: </label>
                <input type="text" name='weight' value={form.weight} onChange={handleOnChange} />
                
            </div>
            
            <div className={style.cheBox}>
                {/* <label >Tipos:</label> */}
                
                {error.types && <p >{error.types}</p>}
                {allTypes.map((poque, i) => <>
                    <label htmlFor="type">{`${i + 1}: ${poque.name}`}</label>
                    <input type="checkbox" name='type' id={`${poque.name}`}
                        value={`${i + 1}`} onChange={handleOnChange} />
                    
                </>
                )
                }

            </div>

            



            




        </form>
    )

}

const mapStateToProps = (state) => {
    return{
        allTypes: state.allTypes,
        allPoke : state.pokeFiltrados
    }
 }
 
 export default connect(
    mapStateToProps,
    null
 ) (Form);
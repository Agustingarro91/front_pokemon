import { useLocation } from "react-router-dom";
import style from './card.module.css'

const Card = ({ pokemon }) => {
    const location = useLocation();
    const { id, life, attack, defense, speed, weight, height, image, name, types } = pokemon

    return (
        <div className={style.contenedor}>

            {name && <h2>{`${name}`}</h2>}

            {image && <img src={`${image}`} alt={`Imagen de ${name}`} width={200} />}
            {location.pathname !== '/home' && <>
                {life && <h2>{`Vida :${life}`}</h2>}
                {attack && <h2>{`Ataque: ${attack}`}</h2>}
                {defense && <h2>{`Defensa: ${defense}`}</h2>}
                {speed && <h2>{`Velocidad: ${speed}`}</h2>}
                {weight && <h2>{`Altura: ${weight}`}</h2>}
                {height && <h2>{`Peso: ${height}`}</h2>}
                {id && <h2>{`Id: ${id}`}</h2>}
            </>}

            {types && <>
                <h2>Tipos :</h2>
                {types.map(type =>
                    <p> {`${type}`} </p>
                )
                }
            </>
            }


        </div>
    )

}

export default Card;
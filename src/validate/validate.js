


const validate = (form,allPoke) => {
    const error = {}
    /*Comienza la validaciond de name  */
    allPoke.map((poke)=>{
        if(poke.name === form.name){
            error.name = 'Ya existe el nombre ingresado'
        }
    })

    if(form.name.length < 3){
        error.name = 'Debe tener al menos tres letras'
    }
    if(!/^[ a-zA-ZñÑáéíóúÁÉÍÓÚ]+$/.test(form.name) ){
            error.name= 'Utilice solo letras'
    }
    if (!form.name){
            error.name= 'Este campo no puede estar vacio'
    }
    if(form.name.length > 15){
        error.name = 'No puede tener mas de 15 caracteres'
    }
    /* Finaliza name
    Comienza validacion de image */
    if (!form.image){
        error.image= 'Este campo no puede estar vacio'
}
    /*  Finaliza image
    Comienza validacion de life*/

    if(!/^[0-9]+$/.test(form.life)){
        error.life = 'Debe ser un numero'
    }
    if (!form.life){
        error.life= 'Este campo no puede estar vacio'
}
    /*  Finaliza life
    Comienza validacion de attack*/


    if(!/^[0-9]+$/.test(form.attack)){
        error.attack = 'Debe ser un numero'
    }
    if (!form.attack){
        error.attack= 'Este campo no puede estar vacio'
}
        /*  Finaliza attack
    Comienza validacion de defense*/

    if(!/^[0-9]+$/.test(form.defense)){
        error.defense = 'Debe ser un numero'
    }
    if (!form.defense){
        error.defense= 'Este campo no puede estar vacio'
}
     /*  Finaliza defense
    Comienza validacion de speed*/
    
    if(!/^[0-9]+$/.test(form.speed)){
        error.speed = 'Debe ser un numero'
    }

     /*  Finaliza speed
    Comienza validacion de weight*/

    if(!/^[0-9]+$/.test(form.weight)){
        error.weight = 'Debe ser un numero'
    }

     /*  Finaliza weight
    Comienza validacion height*/

    if(!/^[0-9]+$/.test(form.height)){
        error.height = 'Debe ser un numero'
    }

    /*  Finaliza height
    Comienza validacion tipos*/
    if(form.type.length < 1){
        error.types = 'Debe tener al menos 1 tipo seleccionado'
    }


    return error;
}

export default validate;
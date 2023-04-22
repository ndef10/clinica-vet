class Propietario {
    constructor(nombrePropietario, direccion, telefono){
        this.nombrePropietario = nombrePropietario
        this.direccion = direccion
        this.telefono = telefono
    }
    datosPropietario(){
        console.log("")
    }
} 

class Animal extends Propietario {
    #tipo
    constructor(nombrePropietario, direccion, telefono, tipo){
        super(nombrePropietario,direccion,telefono)
        this.#tipo = tipo
    }

    get tipo(){
        return this.#tipo
    }

}

class Mascota extends Animal {

    constructor(nombrePropietario, direccion, telefono, tipo, nombre, enfermedad){
        super(nombrePropietario, direccion, telefono, tipo)
        this._nombre = nombre
        this._enfermedad = enfermedad
    }
    get nombre(){
        return this._nombre
    }

    set nombre(newNombre){
        this._nombre = newNombre 
    }
    get enfermedad(){
        return this._enfermedad
    }

    set enfermedad(newEnfermedad){
        this._enfermedad=newEnfermedad

    }    
}

class Registro {
    listado(mascota2){
        const resultado = document.querySelector('#resultado')
        const datos = document.createElement('div');
        datos.innerHTML =`
        <p>
        <li >EL nombre del dueño es: ${mascota2.nombrePropietario}. El domicilio es: ${mascota2.direccion}, y el número telefónico de contacto es: <br>${mascota2.telefono}</li>
        <li>El tipo de animal es un: ${mascota2.tipo}, mientras que el nombre de la mascota es: ${mascota2.nombre} y la enfermedad es: ${mascota2.enfermedad}</li>
        </p> <br>           
        `;
        resultado.appendChild(datos);                               
    }  
    
}

let registrandoDatos=()=>{   

    let nombrePropietario = document.querySelector('#propietario').value
    let telefono = document.querySelector('#telefono').value   
    let direccion = document.querySelector('#direccion').value;
    let tipo = document.querySelector('#tipo').value;
    let nombreMascota = document.querySelector('#nombreMascota').value;
    let enfermedad = document.querySelector('#enfermedad').value;
   
    let mascota2 = new Mascota (nombrePropietario, direccion,telefono,tipo, nombreMascota, enfermedad)
    let agregar= new Registro();
    agregar.listado(mascota2)
 
}

let agregar = document.querySelector('.boton')

agregar.addEventListener('click',(event)=>{
    event.preventDefault()
    registrandoDatos()  
 
});



  
  

    


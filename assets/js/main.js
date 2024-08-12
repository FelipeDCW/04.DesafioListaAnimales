import Conejo from "./conejo.js";
import Gato from "./gato.js";
import Perro from "./perro.js";
import Propietario from "./propietario.js";

/* 
let conejo = new Conejo(`nombre conejo`,`enfermedad1`)
let gato = new Gato(`nombre gato`,`enfermedad2`)
let perro = new Perro(`nombre perro`,`enfermedad3`)
let propietariouno = new Propietario(`Propietario1`,`Direccion1`,`Direccion1`,conejo)
let propietariodos = new Propietario(`Propietario2`,`Direccion2`,`Direccion1`,gato)
let propietariotres = new Propietario(`Propietario3`,`Direccion3`,`Direccion1`,perro)
 */
/* console.log(propietariouno, propietariodos, propietariotres) */
let propietarios =[]
let cadena = ''
let btnAgregar = document.querySelector(`.btn`)
    btnAgregar.addEventListener(`click`,(event) =>{
        event.preventDefault()
        
        let txtPropietario = document.querySelector(`#propietario`)
        let txttelefono = document.querySelector(`#telefono`)
        let txtdireccion = document.querySelector(`#direccion`)
        let txtnombreMascota = document.querySelector(`#nombreMascota`)
        let txtenfermedad = document.querySelector(`#enfermedad`)        
        let txttipo = document.querySelector(`#tipo`)
        let txtresultado = document.querySelector(`#resultado`)
        if (txttipo.value === `perro`){
            let perro = new Perro(txtnombreMascota.value,txtenfermedad.value)
            let propietario = new Propietario(txtPropietario.value,txtdireccion.value,txttelefono.value,perro)
            console.log(propietario)
            propietarios.push(propietario)
        }
        else if(txttipo.value === `gato`){
            let gato = new Gato(txtnombreMascota.value,txtenfermedad.value)
            let propietario = new Propietario(txtPropietario.value,txtdireccion.value,txttelefono.value,gato)
            propietarios.push(propietario)
        }
        else{
            let conejo = new Conejo(txtnombreMascota.value,txtenfermedad.value)
            let propietario = new Propietario(txtPropietario.value,txtdireccion.value,txttelefono.value,conejo)
            propietarios.push(propietario)
        }
        propietarios.forEach((indice) => {
            cadena = cadena +  `<li>${indice.propietario.datosPropietario()}</li>`            
        })
        txtresultado.children[0].innerHTML =cadena

        console.log(propietarios)
    })

    

//creo el objeto paquete de viaje//
class Paquete{

    constructor(id, nombre, destino, precio){
        this.id=id;
        this.nombre = nombre;
        this.destino = destino;
        this.precio = parseFloat(precio);
    }

}

//creo los diferentes paquetes de viaje//
const paquete1 = new Paquete(0, "Safari en Africa", "Africa", 6000)
const paquete2 = new Paquete(1, "Ruinas de Machu Picchu", "Peru", 3000)
const paquete3 = new Paquete(2, "Viaje al Caribe", "Caribe", 1000)
const paquete4 = new Paquete(3, "Australia salvaje", "Australia", 7000)
const paquete5 = new Paquete(4, "Europa clasica", "Europa", 5000)

//hago un array con los paquetes de viajes//
let paquetes =[paquete1, paquete2, paquete3, paquete4, paquete5]

//creo el objeto estrellas de hoteles//
class Estrella{

    constructor(id, numero, precio){
        this.id=id;
        this.numero = parseFloat(numero);
        this.precio = precio;
    }

}

//creo las opciones a elegir//
const estrella1 = new Estrella(0, 1, 0)
const estrella2 = new Estrella(1, 2, 200)
const estrella3 = new Estrella(2, 3, 300)
const estrella4 = new Estrella(3 , 4, 600)
const estrella5 = new Estrella(4, 5, 1000)

//hago un array con las estrellas de hoteles//
let estrellas = [estrella1, estrella2, estrella3, estrella4, estrella5]

let parrafos =document.getElementById("parrafos")
let parrafo1 =document.getElementById("parrafo1")

//let seleccionDestino = document.getElementById("seleccionDestino")//

parrafo1.innerText += "Hola / Prueba"

//Presento todos los paquetes que hay para seleccionar//
paquetes.forEach(elemento => {

    parrafo1.innerHTML+= `
        <div id= "${elemento.id}" class="card"> 
        <p> Nombre: ${elemento.nombre} </p> 
        <p> Destino: ${elemento.destino} </p> 
        <p> Precio base: $${elemento.precio}</p> 
        
        </div>

        ` 
})


function hotel()
{
    var xdestino=document.getElementById("seleccionDestino");
    var displaytext = xdestino.options[xdestino.selextedIndex].text;
    document.getElementById("txtvalue").value=displaytext;
    
}


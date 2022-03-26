

let cards =document.getElementById("cards")



//creo el objeto menu//
class Menu{

    constructor(id, imagen, nombre, precio){
        this.id=id;
        this.nombre = nombre;
        this.imagen=imagen;
        this.precio = parseFloat(precio);
    }
}

//creo los diferentes menus//
const menu1 = new Menu(0, "/img/agua.jpg"  , "Africa", 6000)


//hago un array con los paquetes de viajes//
let menus =[menu1]


cards.innerHTML+= `
        <div <h3 class="card"> prueba2 <h3>
        </div>      

        ` 

menus.forEach(elemento => {

            cards.innerHTML+= `
                <div id= "${elemento.id}" class="card"> 
                <p> Nombre: ${elemento.nombre} </p> 
                <img src= "${elemento.imagen}">
                <p> Precio: $${elemento.precio}</p> 
                <btn class="btn"> Añadir al carrito </btn>
                
                </div>
                ` 
        })
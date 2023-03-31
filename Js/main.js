class productos{
    constructor(id,nombre,precio,img,){
        this.id = id;
        this.nombre = nombre;
        this.precio = precio;
        this.img = img;
        this.cantidad = 1;
        
    }

}

const termoPink = new productos ("1","termoPink","3200","img/termo rosa mate1.jpeg");
const botellaDeportiva = new productos ("2","botellaDeportiva","1300","img/botella deportiva.jpeg");
const balanzaDigital = new productos ("3","balanzaDigital","1600","img/balanzadigital.jpeg");
const botellaDeportiva2 = new productos ("4","botellaDeportiva2","1300","img/botelladeportiva2.jpeg");
const botellaDeportiva3 = new productos ("5","botellaDeportiva3","1300","img/botelladeportiva3.jpeg");
const termoPurpura = new productos ("6","termoPurpura","3600","img/termo rosa engomado2.jpeg");

arrayProducto =[termoPink,botellaDeportiva,balanzaDigital,botellaDeportiva2,botellaDeportiva3,termoPurpura];

let carrito = [];

if(localStorage.getItem("carrito")){
    carrito = JSON.parse(localStorage.getItem("carrito"));
}

const contenedorProductos = document.getElementById("contenedorProductos");


const verProductos = () => {
    arrayProducto.forEach(productos => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-sm-12")
        card.innerHTML= `
                        <div class = "card mt-4">
                           <img src = "${productos.img}" class ="card-img-top" alt ="${productos.nombre}">

                            <div class = "card-body">
                                <h5> ${productos.nombre}</h5>
                                <p> ${productos.precio}</p>
                                <div>
                                <button class = "btn btn-primary mt-2" id="boton${productos.id}">agregar al carrito </button>
                                </div>
                            </div>
                        </div>
                        `
                            
        contenedorProductos.appendChild(card); 
                                
                                
                                
        const boton = document.getElementById(`boton${productos.id}`);
        boton.addEventListener("click", () =>{
        agregarAlCarrito(productos.id);
        })
    })
} 
                                
verProductos();


const agregarAlCarrito = (id) =>{
    const productoEnCarrito = carrito.find( productos => productos.id === id)
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else{
        const productos = arrayProducto.find( productos => productos.id === id);
        carrito.push(productos);
    }
    sumarCompra();
    localStorage.setItem("carrito",JSON.stringify(carrito));
    verCarrito.addEventListener("click",()=>{
        swal.fire("Segui comprando, no aflojes ahora")
    })
};

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");
verCarrito.addEventListener("click", ()=>{
    swal.fire("¿estas seguro?")
})
        
verCarrito.addEventListener("click", () => {
    contenedorCarro();
})
    
const contenedorCarro = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(productos =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-sm-12")
        card.innerHTML= `
                        <div class = "card mt-4">
                           <img src = "${productos.img}" class ="card-img-top" alt ="${productos.nombre}">

                            <div class = "card-body">
                                <h5> ${productos.nombre}</h5>
                                <p> ${productos.precio}</p>
                                <p> ${productos.cantidad}</p>
                                <button class = "btn btn-primary" id="eliminarDelCarrito${productos.id}">eliminar del carrito</button>
                                <button id="disminuirProductos${productos.id}">-</button>
                                <button id="aumentarProductos${productos.id}">+</button>
                                </div>
                            </div>
                        `
                                


        
        contenedorCarrito.appendChild(card);

        const aumentarProductos = document.getElementById(`aumentarProductos${productos.id}`);
         aumentarProductos.addEventListener("click",() =>{
         aumentarProductos(productos.id)
        })
         const disminuirProductos = document.getElementById(`disminuirProductos${productos.id}`);
         disminuirProductos.addEventListener("click", () =>{
         eliminaCantidad(productos.id)
        })

         const botonEliminar = document.getElementById(`eliminarDelCarrito${productos.id}`);
         botonEliminar.addEventListener("click", () =>{
         eliminarDelCarrito(productos.id);
        })

    })
    
    sumarCompra();
}
const aumentarProductos =(id)=>{
    const productos = carrito.find((productos) => productos.id === id);
    productos.cantidad ++;
    localStorage.setItem("carrito",json.stringify(carrito));
    contenedorCarrito();
}
const disminuirProductos = (id)=>{
        const productos = carrito.find((productos) => productos.id === id);
        productos.cantidad --;
        if(productos.cantidad === 0){
            eliminarDelCarrito(id);
        }else{
            localStorage.setItem("carrito",JSON.stringify(carrito));
        } 
    }

    
const eliminarDelCarrito = (id) =>{
const productos = carrito.find(productos =>productos.id === id);
const indice = carrito.indexOf(productos);
carrito.splice(indice, 1);
contenedorCarro();
localStorage.setItem("carrito",JSON.stringify(carrito));


}
//contenedorCarrito.addEventListener("click",()=>{
    swal.fire("es para regalar, compralo no seas raton")
//})

       
const totalCompra = document.getElementById("totalCompra");

const sumarCompra = () =>{
    let total = 0;
    carrito.forEach(productos =>{
        total += productos.precio * productos.cantidad;
    })
    totalCompra.innerHTML = `${total}`;

}
const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", ()=>{
    swal.fire("¿Estas re seguro? lleva todo, se paga solo")
    
     
})

vaciarCarrito.addEventListener("click", () => {
    vaciarTotalidad();
   
})

const vaciarTotalidad = () => {
    carrito = [];
    contenedorCarro();

    localStorage.clear();

}
      

            
    



 
      
    
    
    










    /* const comentarios = document.getElementById("comentarios");
    const listaComentarios = "json/comentarios.json";

    fetch(listaComentarios)
    .then(respuesta => respuesta.json())
    .then(datos =>{
        datos.forEach(usuario =>{
            comentarios.innerHTML +=
                                    `<div class="comentarios">
                                        <h5>nombre: ${usuario.nombre}</h5>
                                        <p>comentarios: ${usuario.testimonio}</p>
            
                                    <div/>
                                    
                                    
                                    `
        })

        
    })
    .catch(error => console.log(error))
    .finally(() => console.log("finalizacion comentarios")); */
   


    
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

const contenedorProductos = document.getElementById("contenedorCarrito");

const verProductos = () => {
    arrayProducto.forEach(productos => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-sm-12")
        card.innerHTML= `
                        <div class = "card">
                           <img src = "${productos.img}" class ="card-img-top" alt ="${productos.nombre}">

                            <div class = "card-body">
                                <h5> ${productos.nombre}</h5>
                                <p> ${productos.precio}</p>
                                <button class = "btn btn-primary" id="boton${productos.id}">agregar al carrito </button>
                                <button class = "btn btn-primary" id="eliminarCarrito"${productos.id}>eliminar del carrito</button>
                            </div>

                        </div>
        
                        `
    
        
       contenedorProductos.appendChild(card); 
      

       const boton = document.getElementById(`boton${productos.id}`);
       boton.addEventListener("click", () =>{
            agregarAlCarrito(productos.id);
            
       })
              
    });
    
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
};

const contenedorCarrito = document.getElementById("contenedorCarrito");
const verCarrito = document.getElementById("verCarrito");

verCarrito.addEventListener("click", () => {
    contenedorCarro();
})

const contenedorCarro = () => {
    contenedorCarrito.innerHTML = "";
    carrito.forEach(productos =>{
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-sm-12")
        card.innerHTML= `
                        <div class = "card">
                           <img src = "${productos.img}" class ="card-img-top" alt ="${productos.nombre}">

                            <div class = "card-body">
                                <h5> ${productos.nombre}</h5>
                                <p> ${productos.precio}</p>
                                <p> ${productos.cantidad}</p>
                                
                                <button class = "btn btn-primary" id="eliminarDelCarrito${productos.id}">eliminar del carrito</button>
                            </div>

                        </div>
        
                        `
        contenedorCarrito.appendChild(card);

         const botonEliminar = document.getElementById(`eliminarDelCarrito${productos.id}`);
         botonEliminar.addEventListener("click", () =>{
         eliminarDelCarrito(productos.id);
        })
    })
    sumarCompra();

    const aumentarProductos =(id)=>{
        const productos = carrito.find((productos) => productos.id === id);
        productos.cantidad ++;
        localStorage.setItem("carrito",json.stringify(carrito));
        totalCompra();
    }

}

const eliminarDelCarrito = (id) =>{
    const productos = carrito.find(productos =>productos.id === id);
    const indice = carrito.indexOf(productos);
    carrito.splice(indice, 1);
    contenedorCarro();
    localStorage.setItem("carrito",JSON.stringify(carrito));
}

const totalCompra = document.getElementById("totalCompra");

const sumarCompra = () =>{
    let total = 0;
    carrito.forEach(productos =>{
        total += productos.precio * productos.cantidad;
    })
    totalCompra.innerHTML = `${total}`;

}

const vaciarCarrito = document.getElementById("vaciarCarrito");

vaciarCarrito.addEventListener("click", () => {
    vaciarTotalidad();
})

const vaciarTotalidad = () => {
    carrito = [];
    contenedorCarro();

    localStorage.clear

}


    const comentarios = document.getElementById("comentarios");
    const listaComentarios = "json/productos.json";

    fetch(listaComentarios)
    .then(respuesta => respuesta.json())
    .then(datos =>{
        datos.forEach(productos =>{
            comentarios.innerHTML +=`
                                    <h5>nombre: ${productos.nombre}</h5>
                                    <p>comentarios: ${productos.testimonio}</p>
                                    <p> id :${productos.id}</p>
                                    `
        })
        
    })
    .catch(error => console.log(error))
    .finally(() => console.log("finalizacion comentarios"));




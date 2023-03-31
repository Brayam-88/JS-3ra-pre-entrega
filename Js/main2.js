// class productos{

//     constructor(id,nombre,precio,img,){
//         this.id = id;
//         this.nombre = nombre;
//         this.precio = precio;
//         this.img = img;
//         this.cantidad = 1;
        
//     }

// }

const elementos= [{
    id:1,
    nombre:"termoPink",
    precio:3200,
    img:"img/termo rosa mate1.jpeg",
    cantidad:1

},{
    id:2,
    nombre:"botellaDeportiva",
    precio:1300,
    img:"img/botella deportiva.jpeg",
    cantidad:0
},{
    id:3,
    nombre:"balanzaDigital",
    precio:1600,
    img:"img/balanzadigital.jpeg",
    cantidad:0

},{
    id:4,
    nombre:"botellaDeportiva2",
    precio:1300,
    img:"img/botelladeportiva2.jpeg",
    cantidad:0
},{
    id:5,
    nombre:"botellaDeportiva3",
    precio:1300,
    img:"img/botelladeportiva3.jpeg",
    cantidad:0
},{
    id:6,
    nombre:"termoPurpura",
    precio:3600,
    img:"img/termo rosa engomado2.jpeg",
    cantidad:0

}]

// const termoPink = new productos ("1","termoPink","3200","img/termo rosa mate1.jpeg");
// const botellaDeportiva = new productos ("2","botellaDeportiva","1300","../img/botella deportiva.jpeg");
// const balanzaDigital = new productos ("3","balanzaDigital","1600","img/balanzadigital.jpeg");
// const botellaDeportiva2 = new productos ("4","botellaDeportiva2","1300","img/botelladeportiva2.jpeg");
// const botellaDeportiva3 = new productos ("5","botellaDeportiva3","1300","img/botelladeportiva3.jpeg");
// const termoPurpura = new productos ("6","termoPurpura","3600","img/termo rosa engomado2.jpeg");

//arrayProducto =[termoPink,botellaDeportiva,balanzaDigital,botellaDeportiva2,botellaDeportiva3,termoPurpura];

let carrito = []



const contenedorProductos = document.getElementById("contenedorProductos");

const crearCatalogo = () => {
    elementos.forEach(producto => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-sm-12")
        card.innerHTML= `
                        <div class = "card">
                           <img src = "${producto.img}" class ="card-img-top" alt ="${producto.nombre}">

                            <div class = "card-body">
                                <h5> ${producto.nombre}</h5>
                                <p> ${producto.precio}</p>
                                <button class = "btn btn-primary" id="boton${producto.id}" >agregar al carrito </button>
                            </div>

                        </div>
        
                        `
    
        
       contenedorProductos.appendChild(card); 
      

       const boton = document.getElementById(`boton${producto.id}`);
       boton.addEventListener("click", () =>{
            agregarAlCarrito(producto.id);

            //console.log(producto.id);
       })
       
        
    });
} 

crearCatalogo();
const contenedorCarrito = document.getElementById("contenedorCarrito");
const mostrarCarrito = () =>{
    carrito.forEach(producto => {
    const card = document.createElement("div");
    card.classList.add("col-xl-3", "col-md-6","col-sm-12")
    card.innerHTML= 
                        `
                    <div class = "card">
                       <img src = "${producto.img}" class ="card-img-top" alt ="${producto.nombre}">

                        <div class = "card-body">
                            <h5> ${producto.nombre}</h5>
                            <p> ${producto.precio}</p>
                            <p> ${producto.cantidad}</p>
                            <button class = "btn btn-primary" id="btnEliminar${producto.id}" >eliminar del carrito </button>
                            
                        </div>

                    </div>
    
                    `
                contenedorCarrito.appendChild(card); 

                const btnEliminar = document.getElementById(`btnEliminar${producto.id}`);
                btnEliminar.addEventListener("click", () =>{
                     eliminarDelCarrito(producto);
         
                     console.log(producto.id);
                })

})

}
function agregarAlCarrito(producto){
    if (producto.id){
        carrito.push(producto);
        producto.cantidad++;
        console.log(carrito);
    }
    mostrarCarrito();
}
function eliminarDelCarrito(producto){
    if (producto.id){
        carrito.remove(producto.id)
        producto.cantidad--;
        console.log(carrito);
    }
    mostrarCarrito();

}
// const agregarAlCarrito = (id) =>{
//     const productoEnCarrito = carrito.find(producto => producto.id === id);
//     if(productoEnCarrito) {
//         productoEnCarrito.cantidad++;
//     } else{
//         const productos =productos.find( productos => productos.id === id);
//         carrito.push(productos);
//     }
// }





      
    
   
    
       

        
        
    
 
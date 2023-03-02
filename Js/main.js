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
const botellaDeportiva = new productos ("2","botellaDeportiva","1300","../img/botella deportiva.jpeg");
const balanzaDigital = new productos ("3","balanzaDigital","1600","img/balanzadigital.jpeg");
const botellaDeportiva2 = new productos ("4","botellaDeportiva2","1300","img/botelladeportiva2.jpeg");
const botellaDeportiva3 = new productos ("5","botellaDeportiva3","1300","img/botelladeportiva3.jpeg");
const termoPurpura = new productos ("6","termoPurpura","3600","img/termo rosa engomado2.jpeg");

arrayProducto =[termoPink,botellaDeportiva,balanzaDigital,botellaDeportiva2,botellaDeportiva3,termoPurpura];

let carrito = [];

const contenedorProductos = document.getElementById("contenedorCarrito");

const buscarProducto = () => {
    arrayProducto.forEach(productos => {
        const card = document.createElement("div");
        card.classList.add("col-xl-3", "col-md-6","col-sm-12")
        card.innerHTML= `
                        <div class = "card">
                           <img src = "${productos.img}" class ="card-img-top" alt ="${productos.nombre}">

                            <div class = "card-body">
                                <h5> ${productos.nombre}</h5>
                                <p> ${productos.precio}</p>
                                <button class = "btn btn-primary" id="boton"${productos.id} >agregar al carrito </button>
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

buscarProducto();

const agregarAlCarrito = (id) =>{
    const productoEnCarrito = carrito.find(productos => productos.id === id);
    if(productoEnCarrito) {
        productoEnCarrito.cantidad++;
    } else{
        const productos =productos.find( productos => productos.id === id);
        carrito.push(productos);
    }
}
console.log(carrito);


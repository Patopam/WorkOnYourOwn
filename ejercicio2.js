function obtenerProductosCaros(productos) {
  
    let productosCaros = [];

    
    for (let i = 0; i < productos.length; i++) {
        
        let productoActual = productos[i];

        
        if (productoActual.precio > 50) {
         
            productosCaros.push(productoActual);
        }
    }

  
    return productosCaros;
}


let productos = [
    { nombre: "Camisa", precio: 25 },
    { nombre: "Pantalón", precio: 60 },
    { nombre: "Zapatos", precio: 40 },
    { nombre: "Reloj", precio: 80 }
];



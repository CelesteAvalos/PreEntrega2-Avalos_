//mi array de articulos
const articulos = [
    {nombre: 'Vasos' , seccion: 'Vajilla' , precio: 800},
    {nombre: 'Manteles' , seccion: 'Textil' , precio: 1300},
    {nombre: 'Florero' , seccion: 'Decoracion' , precio: 950},
    {nombre: 'Ollas' , seccion: 'Cocina' , precio: 1580},
    {nombre: 'Escoba' , seccion: 'Limpieza' , precio: 760},
] 

 let ticketTotal;
 let cantidad;
 let total = 0;
 let agregar;
 let opcion;


 function ticket (total , cantidad, nombre) {
    return total + cantidad * nombre
 };

alert ( 'Hola Bienvenidos aL Carrito de Nuestro Bazaar, presione aceptar y comenzamos..!!');


do{ 
    const listaStringArticulos = articulos.map(
        (articulo, index) => `
                        ${index + 1}: ${articulo.nombre} 
                        precio: ${articulo.precio}`);

    opcion = parseInt(
          prompt("Ingrese una opcion" + "\n" + listaStringArticulos.join('\n')));
             
    while(opcion <= 0 || opcion > articulos.length) {
        /// pido ingresar una opcion
    }
    
    cantidad = parseInt(prompt("Ingrese la cantidad a comprar"));
    total = total + articulos[ opcion - 1].precio*cantidad;

    agregar = prompt("quiere agragar algo mas al carrito? si/no")
    
}   while (agregar =="si");

alert("El total dde su compra es de: $" + total)
 
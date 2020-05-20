import '../css/style.scss';

const carrito = ['Producto1', 'Producto2' , 'Producto3'];
console.log(carrito);

/////////////////////////////////

//Damos Ctrl+P en consola del navegador y presionamos index.js y vemos el código trasnpilado a Babel

const  cliente = (nombreCliente) => nombreCliente;
//Código transpilado con Babel:
/*
var cliente = function cliente(nombreCliente) {
    return nombreCliente;
  };
*/

/////////////////////////////////////////////////////

class Cliente1 {
    constructor(nombre) {
        this.nombre = nombre;
    }
}

const cliente1 = new Cliente1('Juan');

//Código transpilado con Babel:
/*
var Cliente1 = function Cliente1(nombre) {
    _classCallCheck(this, Cliente1);
  
    this.nombre = nombre;
  };
  
var cliente1 = new Cliente1('Juan');
*/

console.log(cliente1);
console.log('Desde el inicio');

///////////////////////////////////////////

const customers = ['cliente1', 'cliente2' , 'cliente3','cliente4','cliente5'];

let html = '';
customers.forEach(cliente => {
  html+= `
    <li>${cliente}</li>
  `
})

document.querySelector('#clientes').innerHTML = html;
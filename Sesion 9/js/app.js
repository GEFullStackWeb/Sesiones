// alert("otro mensaje");
// console.log(123);
// console.log("string");
// console.log('123');
// console.error("esto es un error");
// console.warn("esto es una aviso");

// var varible = 'primero';
// var varible = 223;

// let var1 = 'primero';

//  var1 = 123;
//  const pi = {Pi : 3.14};

// //  pi = {r: 20}

// console.log(pi);

// if (2==='2') {
//     console.log("son iguales");
    
// } else {
//     console.log("no son iguales");
    
// }

// function saludar(nombre , apellido) {
    
//     console.log(`hola ${nombre} ${apellido}`);
//     // alt+96 ``
    
// }
// saludar('limber','choque');

// (function () {console.log("sin llamar");
//  })();

// alert("una alerta");

//  let nombre = prompt("cual es tu nombre");

// document.getElementById('app').innerHTML = ` Bienvenido ${nombre}`;

// if(confirm('Eiminar?')){
//     console.log("eliminido");
    
// }else{
//     console.log("no eliminado");
// }

let elemento;

// elemento = document.getElementById('un_id');

// elemento = document.getElementsByClassName('active');

// elemento = document.getElementsByTagName('img');
// elemento = document.querySelectorAll('#un_id');

// elemento = document.body;

//  elemento = document.getElementById('id_title').textContent = "cambieando texto";

//  elemento = document.getElementById('id_title').style.color = 'red';

//  elemento = document.getElementById('id_title').style.background = '#333';

// elemento = document.querySelector('nav').children;
// elemento = document.querySelector('nav').parentElement;

const enlace = document.createElement('a');

enlace.className ="clase";

enlace.id = "id_enlace";
enlace.textContent = "nuevo enlace";

document.querySelector('nav').appendChild(enlace);

document.querySelector('.nosotros').remove();


const producto1 = 'pizza';
const producto2 = 'comida de algo';
 let html = '<ul>'+'<li> Orden:'+producto1+'</li>'+'</ul>';

html = `
    <ul>
        <li> Orern ${producto1}</li>
        <li>Orden ${producto2}</li>
    </ul>
`;

document.getElementById('app').innerHTML = html;

console.log(enlace);

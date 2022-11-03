//querySelector retorna 0 o 1 elementos
const heading = document.querySelector('.header__texto h2');
 heading.textContent = 'Nuevo Heading';
 //heading.classList.add('nueva-clase');/**Agrega nueva clase el "classList.add()" */
 console.log(heading);

 //querySelectorAll para generar un nuevo enlace en la navegacion
const enlaces = document.querySelectorAll('.navegacion a');
enlaces[0].textContent = 'Nuevo texto para enlace';
enlaces[0].classList.add('nueva-clase');
//Generar un nuevo enlace

const nuevoEnlace = document.createElement('A');

//Agregar el href
nuevoEnlace.href = 'nuevo-enlace.html';

//Agregar la class
nuevoEnlace.classList.add('navegacion__enlace');
//Agregar el texto
nuevoEnlace.textContent = 'Tienda Virtual';

//Agregar al Documento

const navegacion = document.querySelector('.navegacion');
navegacion.appendChild(nuevoEnlace);

console.log(navegacion);//console.log(nuevoEnlace);  

//Eventos

console.log(1);

window.addEventListener('load', function (){ //"load" espera a que el JS y los archivos que depende del HTML estén listos
    console.log(2);
});

window.onload = function() {
    console.log(3);
}

document.addEventListener('DOMContentLoaded', function(){ //"DOMContentLoaded" Solo espera a que este listo el HTML pero no el CSS o imagenes

    console.log(4);
})

console.log(5);

/*window.onscroll = function(evento) {
    console.log(evento);
}*/

/*const btEnviar = document.querySelector('.boton--primario');
btEnviar.addEventListener('click', function(evento) {
    console.log(evento);
    evento.preventDefault();//"preventDefault" previene que se recargue la pagina al apretar el boton de enviar
})*///"click" sirve para arreglos, ejemplo puede ser agregando cosas a un carrito, los like de facebook. 

//Eventos de los Inputs y Textarea

const datos = {
    nombre: '',
    email: '',
    mensaje: ''
}

const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.querySelector('#mensaje');
const formulario = document.querySelector('.formulario');

nombre.addEventListener('input', leerTexto);
email.addEventListener('input', leerTexto);
mensaje.addEventListener('input', leerTexto);

//Evento de Submit
formulario.addEventListener('submit', function(evento){
    evento.preventDefault();

    //Validar formulario
    const { nombre, email, mensaje } = datos;//Este metodo se llama destructoring
    
    if(document.querySelector(".error") === null && document.querySelector(".correcto") === null){
        
    if(nombre === '' || email === '' || mensaje === ''){
        mostrarAlerta('Todos los campos son obligatorios', true);
        
        return;//Corta la ejecución del código 
    }
        mostrarAlerta('Mensaje Enviado Correctamente');
    }    /*else{
        mostrarCorrecto('Enviando Formulario');
    }*/
});//"submit" sirve para los formularios

function leerTexto(e){
    //console.log(e.target.value) Sirve para mostrar en la consola
    datos[e.target.id] = e.target.value;

    //console.log(datos);
}

function mostrarAlerta(mensaje, error = null){
    const alerta = document.createElement('P');
    alerta.textContent = mensaje;

    if(error){
        alerta.classList.add('error');
    }else{
        alerta.classList.add('correcto');
    }
    formulario.appendChild(alerta);//Con "appendChild" podemos agregarlo al codigo del HTML

    //Desaparezca la alerta
    setTimeout(() =>{
        alerta.remove(); //"remove()" es un metodo para que desaparezca la alerta
    }, 3000);
}
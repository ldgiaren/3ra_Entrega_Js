

// let opi = [
//    {nombre: 'Daniel Perez', edad: 22, opinion: 'Es un curso muy educativo.'},
//    {nombre: 'Marina Sanchez', edad: 42, opinion: 'Es un curso muy complejo.'},
//    {nombre: 'Pepito Sayan', edad: 18, opinion: 'Un poco complejo, pero entendible'},
//    {nombre: 'Daniel Gil', edad: 28, opinion: 'Muy bien explicado.'}
   
// ]

// console.log(JSON.stringify(opi));

fetch('/datos.json')
.then((response)=>response.json())
// .then((datos)=>console.log(datos))
.then((datos)=> datos_opiniones(datos))
.catch((error)=> console.log(error))


// traemos el template con dom
// let template = document.querySelector('template')

// // accedemos al contenido
// let contenido = template.content

// // vamos hacer un clon de template y esta la insertamos en el container
// let clon = contenido.cloneNode(true)


 
 let currentIndex = 0

 let opiniones = []
 
 function datos_opiniones(data) {
     // Guardamos las opiniones en un array
     opiniones = data

     mostrarOpinion(currentIndex) // Mostrar la primera opinión
 }
 
 function mostrarOpinion(index) {

     if (index < opiniones.length) {

         let clon = document.querySelector('template').content.cloneNode(true)
 
         clon.querySelector('h5').innerText = `Nombre: ${opiniones[index].nombre}`
         clon.querySelector('h6').innerText = `Edad: ${opiniones[index].edad}`
         clon.querySelector('p').innerText = opiniones[index].opinion
 
         // Limpiamos el contenido previo antes de mostrar la nueva opinion
         let cardContainer = document.querySelector('.card-opi')
         cardContainer.innerHTML = '';
         cardContainer.append(clon)
     }
 }
 
 // boton de Siguiente Opinion
 document.getElementById('next-opinion').addEventListener('click', () => {
     currentIndex++

     if (currentIndex < opiniones.length) {

         mostrarOpinion(currentIndex)

     } else {
         // Reiniciamos al inicio si llegamos al final

         currentIndex = 0

         mostrarOpinion(currentIndex)
     }
 })
 

// document.querySelector('.card-opi').append(clon)


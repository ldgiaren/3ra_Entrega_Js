

// class User {
//     constructor (name, pass, id){
//         this.name = name
//         this.pass = pass
//         this.id = id
//     }
// }

// let datos_de_ingreso = [
//     new User ('Profesor1','12345678','0000'),
//     new User ('admin','admin','1111')

// ]

// // subimos los datos al localstore
// localStorage.setItem('datos',JSON.stringify(datos_de_ingreso))


// treaemos los datos como un array  que hay en el localstorage.
let datos_validados =JSON.parse( localStorage.getItem('datos'))

// traemos el formulario del dom
let formulario = document.querySelector('form')


// vamos a quitar el evento del formulario de refrescar.
formulario.addEventListener('submit', (e)=>{
        e.preventDefault()

// vamos a tomar los datos del usuario.

let name = formulario[0].value
let pass = formulario[1].value


// verificar si el usuario existe.

let user = datos_validados.find((dato)=>{
    return dato.name == name && dato.pass == pass
})

if(user){
    // si user encontro los datos validos nos manda al index
    location.href = 'index.html' 
}else{
    alert('Datos incorrecto.')
}


})
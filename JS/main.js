
// // vamos a tener un sistema de logeo de profesor1 o admin.
// // vamos a ingresar nombre de estudiante.
// // por estudiante vamos a tener 5 notas y las vamos a promediar.
// // si pasa el promedio los vamos a pasar a una lista de aprobados y no aprobados.
// _______________________


// --- Conectamos elementos del HTML

let nombre_alumno = document.getElementById  ('nombrealumno')

let nota1 =document.getElementById('nota1')

let nota2 =document.getElementById('nota2')

let nota3 = document.getElementById('nota3')

let nota4 = document.getElementById('nota4')

let nota5 = document.getElementById ('nota5')

let promedio_notas =document.getElementById('promedio')

let nombre_alumno_apro = document.getElementById('nombrealumnoAprobado')
let nota_final_apro = document.getElementById('notaFinal')

let nombre_alumno_no_apro = document.getElementById('nombrealumnoNOaprobado')
let nota_final_no_apro = document.getElementById ('notaFinalNOapro')

let formulario= document.querySelector('form')

// --- Recuperamos datos del localStorage al cargar la pgina

window.addEventListener('load',function(){
    let nombreAprobado = localStorage.getItem('nombreAprobado')

    let notaAprobado = localStorage.getItem('notaAprobado')
    let nombreNoAprobado = localStorage.getItem('nombreNoAprobado')
    let notaNoAprobado = localStorage.getItem('notaNoAprobado')

    if (nombreAprobado && notaAprobado){
        nombre_alumno_apro.value = nombreAprobado
        nota_final_apro.value = notaAprobado
    }

    if(nombreNoAprobado && notaNoAprobado){
        nombre_alumno_no_apro.value = nombreNoAprobado
        nota_final_no_apro.value = notaNoAprobado
    }
})

// ---  el evento de submit para que no se reinicie
formulario.addEventListener('submit',function(e){
    e.preventDefault()

    // -- calculamos el promedi

    let resultado =(parseFloat(nota1.value)+

                     parseFloat(nota2.value)+
                     parseFloat(nota3.value)+
                     parseFloat(nota4.value)+
                     parseFloat(nota5.value) ) / 5

        promedio_notas.value = resultado.toFixed(2)

    // -- Verificar si el promedio es mayor a 70 y asignamos los campos
        if(resultado > 70){
        nombre_alumno_apro.value = nombre_alumno.value
        nota_final_apro.value = resultado.toFixed(2)

        nombre_alumno_no_apro.value = '' // Limpiamos el campo de no aprobados
        nota_final_no_apro.value = '' // Limpiamos el campo de no aprobados

        // -- Guardamos en el local storage
        localStorage.setItem('nombreAprobado',nombre_alumno.value)
        localStorage.setItem('notaAprobado',resultado.toFixed(2))
        localStorage.removeItem('nombreNoAprobado')
        localStorage.removeItem('notaNoAprobado')

        }else{
        nombre_alumno_no_apro.value =nombre_alumno.value
        nota_final_no_apro.value = resultado.toFixed(2)

        nombre_alumno_apro.value ='' // Limpiamos el campo de aprobados
        nota_final_apro.value ='' // Limpiamos el campo de aprobados

        // -- Guardamos en el local storage
        localStorage.setItem('nombreNoAprobado',nombre_alumno.value)
        localStorage.setItem('notaNoAprobado',resultado.toFixed(2))
        localStorage.removeItem('nombreAprobado')
        localStorage.removeItem('notaAprobado')
    }
})


// ------------------- boton ------------------------------------------------- //

// treaemos el nodo del dom
// darle un evento al nodo que hemos traido.

let boton_dia = document.getElementById ('boton_dia')
let boton_noche = document.getElementById ('boton_noche')
let select2 = document.querySelector ('section.contenedorForm_dia') || document.querySelector ('section.contenedorForm_noche')

let modo_guardado = localStorage.getItem('modo1')

if(modo_guardado){
    select2.className = modo_guardado;
}

boton_dia.addEventListener ('click', ()=>{
    select2.className = 'contenedorForm_dia'

    localStorage.setItem ('modo1', 'contenedorForm_dia')
})

boton_noche.addEventListener('click',()=>{
    select2.className = 'contenedorForm_noche'

    localStorage.setItem('modo1', 'contenedorForm_noche')
})
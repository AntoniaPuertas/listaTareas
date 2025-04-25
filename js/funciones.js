//crear un evento para el botón
// document.getElementById("buttonAdd").addEventListener('click', function(){
//     //código de la función
// })

document.getElementById("buttonAdd").addEventListener('click', crearTarea);

function crearTarea(){
    //leer los datos del input
    let tarea = document.getElementById("inputTarea").value;
    //comprobar que hay datos
    tarea = tarea.trim();
    if(tarea === ''){
        //mostrar un mensaje
        document.getElementById("error").textContent = "No has introducido ninguna tarea";
        return;
        document.querySelector('#error').textContent
    }

    //crear un li con la tarea y añadirlo al ul
    const li = document.createElement('li');
    li.innerHTML = `${tarea}
                    <button class="eliminar">🗑️</button>`;
    
    document.getElementById("listaTareas").appendChild(li);
    
    li.querySelector('.eliminar').addEventListener('click', function(){
        li.remove();
    })


    document.getElementById("inputTarea").value = '';
}
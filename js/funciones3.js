//array para guardar las tareas
let listaDeTareas = [];
let contadorTareas = 0;

//recupero las tareas guardadas en el navegador
if(localStorage.getItem("tareasGuardadas") != null){
    listaDeTareas = localStorage.getItem("tareasGuardadas");
    //como están guardadas en formato json le cambio el formato a array de objetos
    listaDeTareas = JSON.parse(listaDeTareas);
    listaDeTareas.forEach(item => {
        displayTarea(item);
        if(item.id > contadorTareas){
            contadorTareas = item.id + 1;
        }
    });
}

//selecciona el botón de añadir tarea y le crea un evento
//para que cuando se haga click sobre el botón se ejecute la función crear tarea
document.getElementById("buttonAdd").addEventListener('click', crearTarea);

//función que se encarga de crear una nueva tarea
function crearTarea(){
    //leer los datos del input
    let textoTarea = document.getElementById("inputTarea").value;
    let tipoTarea = document.getElementById("tipoTarea").value;

    //comprobar que hay datos
    //trim() elimina los espacios del principio y final de un string
    textoTarea = textoTarea.trim();
    //comprueba que textoTarea contenga un string no vacío
    if(textoTarea === ''){
        //textoTarea no contiene nada
        //mostrar un mensaje 
        document.getElementById("error").textContent = "No has introducido ninguna tarea";
        //finaliza la ejecución de la función
        return;
    }

    //Si llegamos aquí, es porque textoTarea contiene un string con datos

    //Borro el mensaje de error
    document.getElementById("error").textContent = "";
    
    //creo un objeto para guardar la tarea
    const tarea = {
        id: contadorTareas,
        texto: textoTarea,
        tipo: tipoTarea,
        tareaRealizada: false
    }

    //contadorTareas = contadorTareas + 1;
    contadorTareas++;

    //Añadir la tarea al array
    listaDeTareas = [tarea, ...listaDeTareas];
    //Guardar el  array de tareas en el navegador
    localStorage.setItem("tareasGuardadas", JSON.stringify(listaDeTareas));
    console.log(listaDeTareas);

    displayTarea(tarea);
}


function displayTarea(tarea){
    let iconoTipo = '&#129001;';
    if(tarea.tipo === 'obligatoria'){
        iconoTipo = '&#128998;';
    }else if(tarea.tipo === 'urgente'){
        iconoTipo = '&#128997;';
    }

    //crear un nodo de tipo li (etiqueta de html li)
    const li = document.createElement('li');

    //añade contenido al nodo li
    //checkbox es una casilla de verificación
    li.innerHTML = `
        <div data-id="${tarea.id}">
        <input type="checkbox" class="tareaRealizada"> 
        ${iconoTipo} 
        <span class="texto-tarea">${tarea.texto}</span>
        </div>
        <button class="eliminar">🗑️</button>`;

    if(tarea.tareaRealizada == true){
        li.style.opacity = '0.8';
        //tacha el texto
        li.querySelector('.texto-tarea').style.textDecoration = "line-through";
        //marcar el checkbox como seleccionado
        li.querySelector('.tareaRealizada').checked = true;
    }
    
    //añado el elemento li como hijo del elemento ul que hay en el html
    document.getElementById("listaTareas").appendChild(li);

    
    //añado un evento click al botón eliminar que elimina el li entero
    li.querySelector('.eliminar').addEventListener('click', function(){
        
        //averiguar que id tiene la tarea
        let idTarea = li.querySelector('div').getAttribute('data-id');
        // eliminar la tarea del array
        listaDeTareas = listaDeTareas.filter(item => item.id != idTarea);
        localStorage.setItem("tareasGuardadas", JSON.stringify(listaDeTareas));
        //borrar la tarea de pantalla
        li.remove();
    })

    //añado un evento al checkbox para modificar la tarea
    li.querySelector('.tareaRealizada').addEventListener('click', function(){
        //comprueba si la casilla está seleccionada
        if(li.querySelector('.tareaRealizada').checked == true){
            //está seleccionada
            //baja la opacidad
            li.style.opacity = '0.8';
            //tacha el texto
            li.querySelector('.texto-tarea').style.textDecoration = "line-through";
            //modifica el valor tareaRealizada del  objeto a true
            tarea.tareaRealizada = true;
        }else{
            //no está seleccionada
            //sube opacidad
            li.style.opacity = '1';
            //destacha el texto
            li.querySelector('.texto-tarea').style.textDecoration = "none";
            //marca el objeto como tarea no realizada
            tarea.tareaRealizada = false;
        }
        localStorage.setItem("tareasGuardadas", JSON.stringify(listaDeTareas));
    })

    document.getElementById("inputTarea").value = '';
}



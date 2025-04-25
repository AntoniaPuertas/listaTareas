//colores
const colorUrgente = '#128997';
const colorObligatoria = '#128998';
const colorOpcional = '#129001';

document.getElementById("buttonAdd").addEventListener('click', crearTarea);

function crearTarea(){
    //leer los datos del input
    let textoTarea = document.getElementById("inputTarea").value;
    let tipoTarea = document.getElementById("tipoTarea").value;

    //comprobar que hay datos
    textoTarea = textoTarea.trim();
    if(textoTarea === ''){
        //mostrar un mensaje
        document.getElementById("error").textContent = "No has introducido ninguna tarea";
        return;
    }

    const tarea = {
        texto: textoTarea,
        tipo: tipoTarea
    }
    //crear un li con la tarea y añadirlo al ul
    const li = document.createElement('li');
    li.innerHTML = `${tarea.texto}
                    <button class="eliminar">🗑️</button>`;
    

    if(tarea.tipo === "obligatoria"){
        li.style.backgroundColor = colorObligatoria;
    }else if(tarea.tipo === "urgente"){
        li.style.backgroundColor = colorUrgente;
    }

    document.getElementById("listaTareas").appendChild(li);
    
    li.querySelector('.eliminar').addEventListener('click', function(){
        li.remove();
    })


    document.getElementById("inputTarea").value = '';
}
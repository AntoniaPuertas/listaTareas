//colores
const colorUrgente = 'rgb(238, 51, 51)';
const colorObligatoria = 'rgb(92, 97, 238)';
const colorOpcional = 'rgb(81, 198, 79)';

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
        tipo: tipoTarea,
        realizada: false
    }

    let iconoTipo = '&#129001;';
    if(tarea.tipo === 'obligatoria'){
        iconoTipo = '&#128998;';
    }else if(tarea.tipo === 'urgente'){
        iconoTipo = '&#128997;';
    }

    //crear un li con la tarea y añadirlo al ul
    const li = document.createElement('li');
    li.innerHTML = `
        <div>
        <input type="checkbox" class="tareaRealizada"> 
        ${iconoTipo} 
        ${tarea.texto}
        </div>
        <button class="eliminar">🗑️</button>`;
    

    document.getElementById("listaTareas").appendChild(li);
    
    li.querySelector('.eliminar').addEventListener('click', function(){
        li.remove();
    })

    li.querySelector('.tareaRealizada').addEventListener('click', function(){
        if(li.querySelector('.tareaRealizada').checked){
            li.style.opacity = '0.5'
            tarea.realizada = false;
        }else{
            li.style.opacity = '1'
            tarea.realizada = true;
        }
    })

    document.getElementById("inputTarea").value = '';
}
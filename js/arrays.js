//listaDeTareas = listaDeTareas.filter(item => item.id != idTarea);

let frutas = ["pera", "manzana", "fresa"];

let frutaBuscada = "manzana";

for(let i = 0 ; i < frutas.length ; i++){
    if(frutas[i] === frutaBuscada){
        frutas.splice(i);
    }
}

let tareas = [
    {id: 0, textoTarea: "Cazar gamusinos"},
    {id: 1, textoTarea: "Cazar gamusinos"},
    {id: 2, textoTarea: "Cazar gamusinos"},
    {id: 3, textoTarea: "Cazar gamusinos"},
    {id: 4, textoTarea: "Cazar gamusinos"},
    {id: 5, textoTarea: "Cazar gamusinos"},
    {id: 6, textoTarea: "Mirar mariposas"}
]

let idBorrar = 6;
let nuevoArray = []
for(let i = 0 ; i < tareas.length ; i++){
    if(tareas[i].id != idBorrar){
        nuevoArray.push(tareas[i]);
    }
}
tareas.splice(2,1);
//método para arrays
//filter 
//devuelve un array con todos los elementos que cumplan una condición
tareas = tareas.filter( tarea => tarea.id != idBorrar);

tareas = tareas.filter(
    function (tarea){
        return tarea.id != idBorrar
    }
);
console.log(tareas);



//distintas formas de crear una función
sumar(1,1);

function saludar(){
    console.log("hola");
}
saludar();

function saludar2(nombre){
    console.log("Hola" + nombre);
}
saludar2("Pepe");

function sumar(num1, num2){
    return num1 + num2;
}

let sumar = (num1, num2) => num1 + num2;


let resultado = sumar(2, 5);


//declarar una función como  variable
let sumar2 = function(num1, num2){
    return num1 + num2;
}



sumar(3,6);
sumar2(3,6);

//funciones flecha
let sumar3 = (num1, num2) => {
    return num1 + num2;
}

let sumar4 = (num1, num2) => num1 + num2;

let saludar = (saludo) => console.log(saludo);


let suma = 0
let promedio
let años 
let i
let edad

class Familia {
    constructor(nombre,edad) {
        this.nombre = nombre;
        this.edad = edad;
    }
}

function crearFamiliar() {
        nombre = prompt("Ingresa el nombre de tu familiar")
        edad = parseInt(prompt("Ingresa la edad de tus familiares"))
        let familiar = new Familia(nombre, edad)
        console.log(familiar);
}

function acumulador(){
    suma = suma + edad;
}
function resultado(){
    promedio = suma / cant;
}

alert("Hola!, vamos a calcular el promedio de la edad de tu familia")
let apellido = prompt("Ingresa el apellido de tu familia")

let cant = parseInt(prompt("Cuantas personas integran tu familia?"))

while(i != cant){
    for (i = 0; i < cant; i++){   
        crearFamiliar();
        acumulador();
    } 
    resultado();
        alert(`La familia ${apellido} tiene un promedio de edad de ${promedio}, y la suma total de las edades es de ${suma}`) 
}
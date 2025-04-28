 //Ejercicio 2

var x1 = 2
var x2 = 4

function Result_Operaciones(){
function suma (){
 let x4= x1+x2
 console.log("el resultado de la suma es:" + x4 +"\n")
}
function resta(){
let x4= x1-x2
console.log("el resultado de la resta es:" + x4 +"\n")
}
function division(){
let x4= x1/x2
console.log("el resultado de la division es:" + x4 +"\n")
}
function multiplicacion(){
 let x4= x1*x2
console.log("el resultado de la Multiplicacion es:" + x4 +"\n")
}
suma()
resta()
division()
multiplicacion()
}
Result_Operaciones()
// ejercicio 1
var nombre = "fermmin"
var edad = 20 
var Tienes_Mascota = true
function mostrar_mascota(){
if (Tienes_Mascota){
console.log("si tiene perro ")
}else{
    console.log("no tiene perro") 
}
}
console.log ( "Nombre:" + nombre +"\n" + "Edad:" + edad)
mostrar_mascota()

// Ejecicio 3
var Nombre_dado = "fermin"
function saludar(Nombre){
console.log ("Hola"+ " " + Nombre_dado)
}
saludar()
//Ejercicio 4

const frutas = ["Platanos", "uva", "kiwi", "manzana", "melon"]
console.log("las frutas son:")
for(let i=0 ; i<frutas.length; i++){
console.log(frutas[i])
}
//Ejercicio 5

var array = [2,4,6]

let array_nuevo = array.map(function(arrayp){
return arrayp*2
})

console.log(array_nuevo)

//ejercicico 6

var array = [ {nombre:"fermin",
edad: 20} ,{nombre: "lalo" , edad: 21}             
]
console.log("los nombres son:")
array.forEach((persona)=>{ 
console.log(persona.nombre)
})
//Ejercicio 7
var array = [2,3,4,5,6,7,8]
let numeros_mayores = array.filter(function(numero){
return numero>5   
}
)
console.log("los numeros mayores a 5 son: " + "[" + numeros_mayores + "]")

//ejercicio 8
var array = [1,2,3]

var numeros_sumados = array.reduce(function(suma,array){
return suma + array
})

console.log(numeros_sumados) 

// Ejercicio 9 

function esperar(){
return new Promise(resolve=> {
    setTimeout (() => {
        resolve("chao")
    }, 2000)
})
}
async function ejecutar() {
    console.log("hola")
    const resultado = await esperar()
    console.log(resultado)
    
}
ejecutar() 
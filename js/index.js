//Dado el array: ["rojo", "verde", "azul", "rojo", "rojo", "verde"] Cuenta cuántas veces aparece "rojo" y muéstralo por consola. Resultado esperado:3

let colores = ["rojo", "verde", "azul", "rojo", "rojo", "verde"]
let contadorRojos = 0
let colorEscogido = []
for(let i=0; i< colores.length;i++) {
    if(colores[i] === "rojo"){
        colorEscogido = colores[i]
        contadorRojos++
    }
}
console.log(`${colorEscogido} se repite ${contadorRojos} veces`)

/*2️⃣ Números pares Dado el array: [3, 8, 12, 5, 7, 10, 2] Crea un nuevo array solo con los números pares.
Resultado esperado: [8, 12, 10, 2]*/


let numerosParesEImpares = [3, 8, 12, 5, 7, 10, 2].filter(function(pares){
        return pares %2===0        
    }
)
console.log(numerosParesEImpares)


/*3️⃣ Longitud de palabras Dado el array: ["gato", "perro", "elefante", "raton"]
Usa .map() para crear un nuevo array con la longitud de cada palabra. Resultado esperado: [4, 5, 8, 5]*/

let animales = ["gato", "perro", "elefante", "raton"].map(function(anml){
    return anml.length
})
console.log(animales)


/*4️⃣ Número más grande Dado el array: [12, 45, 7, 89, 23, 56] Encuentra el número más grande usando un bucle for.
Resultado esperado: 89*/
let ArrayDeNumeroMasGrande = [12, 45, 7, 89, 23, 56]
let elNumeroMasGrandeDelArray = 0
for (let index = 0; index < ArrayDeNumeroMasGrande.length; index++) {
    if (elNumeroMasGrandeDelArray < ArrayDeNumeroMasGrande[index]){
        elNumeroMasGrandeDelArray = ArrayDeNumeroMasGrande[index]
    }    
}
console.log(elNumeroMasGrandeDelArray)

/*5️⃣ Convertir palabras a mayúsculas Dado el array: ["javascript", "html", "css", "java"]
Crea un nuevo array donde todas las palabras estén en mayúsculas. Resultado esperado: ["JAVASCRIPT", "HTML", "CSS", "JAVA"]
Pista: .toUpperCase()*/

let ListaProgramasMinuscEnMayusc = ["javascript", "html", "css", "java"]
let listaMayusculas = []
for (let index = 0; index < ListaProgramasMinuscEnMayusc.length; index++) {
    listaMayusculas[index] = ListaProgramasMinuscEnMayusc[index].toUpperCase()
}
console.log(listaMayusculas)

/*6️⃣ Eliminar números negativos Dado: [4, -2, 10, -5, 7, -1, 8] Crea un array solo con números positivos.*/
let  numerosPositivosYnegativos= [4, -2, 10, -5, 7, -1, 8].filter(function(numeroPositivoOnegativo){
            return numeroPositivoOnegativo > 0
    
})
console.log(numerosPositivosYnegativos)

/*7️⃣ Sumar todos los números Dado: [5, 10, 15, 20] Suma todos los números y muestra el resultado.
Resultado esperado:
50* [10, 20, 30, 40]*/
let total =0
let todosLosNumerosASumar = [5, 10, 15, 20].filter((numeros)=> {
    total += numeros    
})
console.log(total)


/*8️⃣ Invertir un array (sin .reverse()) Dado: [1, 2, 3, 4, 5] Crea un nuevo array: [5, 4, 3, 2, 1]*/

let invertirArrayNormal = [1, 2, 3, 4, 5]
let arrayInvertido= []
let arrayRealmenteInvertido =[]
for(let i = invertirArrayNormal.length -1; i>=0; i--){
    arrayInvertido[arrayInvertido.length] = invertirArrayNormal[i]
}
    console.log(arrayInvertido)





/*9️⃣ Encontrar palabra larga 
Dado: ["sol", "montaña", "rio", "estrella"]
Encuentra la primera palabra con más de 5 letras. */

let cosmos = ["joseJumenezDeVelasco", "sol", "montaña", "rio", "estrella"]
let palabra = ""
for(let i =0; i<cosmos.length;i++) {
    if(cosmos[i].length > 5){
            palabra = cosmos[i]
            break
    }
}
console.log(`la palabra ${palabra} es el primero mas largo`)

/*🔟 Dibujar un cuadrado con *
Usa un for para mostrar esto:
*****
*****
*****
*****
***** */

let asteriscos= ["*","*","*","*","*","*"]
let cuadrado1 = ""

for(let i=0; i< asteriscos.length;i++){
    cuadrado1 +=asteriscos[i].repeat(asteriscos.length)+ "\n"
}

    console.log(cuadrado1)


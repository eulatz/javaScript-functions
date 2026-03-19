/*1️⃣ Contar vocales Dado: "javascript es divertido"Cuenta cuántas vocales hay.Resultado esperado:8*/
let aVocales ="javascript es divertido".toLowerCase()
let contVocales=0
for(let i=0; i < aVocales.length;i++){
    //if (aVocales[i] === "a"||aVocales[i] === "e"||aVocales[i] === "i"||aVocales[i] === "o"||aVocales[i] === "u"){
    if("aeiou".includes(aVocales[i])){  
    contVocales++
    }
}
console.log("cont vocales " +contVocales)

/*2️⃣ Eliminar duplicados Dado: [1,2,3,2,4,1,5] Crear: [1,2,3,4,5]*/
const duplicados = [1,2,3,2,4,1,5]
let arraySinDuplicados = []
for(let i =0 ; i< duplicados.length;i++){
    if (!arraySinDuplicados.includes(duplicados[i])) {
        arraySinDuplicados.push(duplicados[i])
    }
}
console.log(arraySinDuplicados)

//2
let soloDuplicados = []
let duplis=[]
for(let i =0; i<duplicados.length;i++) {
    if(!soloDuplicados.includes(duplicados[i])){
        duplis = duplicados[i] != arraySinDuplicados[i] + " "
        if(duplis===true){
            console.log(duplis[i])

        }
                if(duplis[i] === -1){
            soloDuplicados.push(duplis) 
        }
    }
}
console.log(duplicados + " | " + duplis)

/*3️⃣ Palabra más larga (con map o reduce) Dado:["casa","programacion","sol","javascript"] Resultado:"programacion"*/
let reducirPalabras =["casa","programacion","sol","javascript"]
let palabraReducida = ""
for (let i=0; i<reducirPalabras.length;i++) {
    if(reducirPalabras[i].length > palabraReducida.length){
        palabraReducida = reducirPalabras[i]
    }
}
console.log(palabraReducida)

/*4️⃣ Contar palabras repetidas Dado: ["gato","perro","gato","raton","perro","gato"]Resultado:{gato:3,perro:2,raton:1}*/
let animalesRepetidos = ["gato","perro","gato","raton","perro","gato"]
let frecuencia = {}
for(let i=0; i<animalesRepetidos.length; i++){
    let num = animalesRepetidos[i]
    frecuencia[num] ? frecuencia[num]++ : frecuencia[num]=1
    /*
    if(frecuencia[num]){s                                             ,                                                                   
        frecuencia[num]++
    }else{
        frecuencia[num]=1
    }
        */
}
console.log(frecuencia)


/*5️⃣ Sumar solo los pares Dado:[1,2,3,4,5,6] Resultado: 12 porque:2 + 4 + 6*/
let sumarTodos = [1,2,3,4,5,6]
let sumados = []
for(let i=0; i<sumarTodos.length;i++){
    if(sumarTodos[i]%2==0){
        sumados = sumarTodos[i] + sumarTodos[i]
    }
}
console.log(sumados)

/*6️⃣ Encontrar el segundo número más grande Dado: [10,5,8,20,3,20]Resultado: 10 (no vale ordenar el array)*/
let segundoMasGrande = [20,10,5,8,20,3,20]
let primero =0
let segundo = 0
for(let i=0; i<segundoMasGrande.length;i++){
    if(segundoMasGrande[i]>primero){
        segundo = primero
        primero = segundoMasGrande[i]
    }else if (segundoMasGrande[i]>segundo && segundoMasGrande[i] != primero){
        segundo =segundoMasGrande[i]
    }   
}
console.log(segundo)
console.log(primero)

/*7️⃣ Contar letras de una palabra Entrada:"banana" Resultado:{b:1,a:3,n:2} */
let platano = "banana"
let obj= {}
for(let i=0; i<platano.length;i++){
    let resume = platano[i]
    if(obj[resume]){
        obj[resume]++
    }else {
        obj[resume] =1
    }
}
console.log(obj)
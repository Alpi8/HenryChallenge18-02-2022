//EJERCICIO 09 SUPERADO

  //function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:
var string = "hola"
var nuevoArreglo = []

for (var i = 0; i < string.length; i++) {
nuevoArreglo.push(string[i])
nuevoArreglo.push(string[i])
  }
  
console.log(nuevoArreglo)
console.log(nuevoArreglo.join("")) //el metodo .join("") une todos los elementos de una matriz


/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function repetirCaracteres() {
  // Escribi una funcion llamada 'repeatCharacters' en el prototypo del objeto global String
  // que reciba como parametro un string
  // y devuelve un string en donde cada letra se repita una vez.
  // Por ej:
  // 'hola'.repeatCharacters() devuelve "hhoollaa"

  // Tu código aca:

  // EL SIGUIENTE CODIGO ES EL QUE TENIA EN UN PRINCIPIO PARA ESTE EJERCICIO 
  /*String.prototype.repeatCharacters() = function(string){
    var nuevoArreglo = []
      for (var i = 0; i < string.length; i++) {
      nuevoArreglo.push(string[i])
      nuevoArreglo.push(string[i])
      }
    return (nuevoArreglo.join(""))
  }*/ 
  //Y TENIA LOS SGTES ERRORES
  
  /* 1. Es String.prototype.repeatCharacters =... NO String.prototype.repeatCharacters() 
  (fijate en los parentesis)
    2. Es String.prototype.repeatCharacters = function () 
    NO String.prototype.repeatCharacters = function (string)
    Es sin el argumento string, porque el elemento está implícito en el prototype (ver punto siguiente)
    3. Dentro de la función ocupar this que será el string en cuestión*/
    String.prototype.repeatCharacters = function (){

      var nuevoArreglo = []
    
      for (var i = 0; i < this.length; i++) 
      {
         nuevoArreglo.push(this[i])
         nuevoArreglo.push(this[i])
      }
    
      return (nuevoArreglo.join(""))
    }
    
    console.log("hola".repeatCharacters());
  }

// No modifiques nada debajo de esta linea //

module.exports = repetirCaracteres
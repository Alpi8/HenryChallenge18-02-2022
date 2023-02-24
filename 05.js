/* 
  Importante: 
  No modificar ni el nombre ni los argumetos que reciben las funciones, sólo deben escribir
  código dentro de las funciones ya definidas. 
  No comentar la funcion 
*/
function palabraMasLarga(array) {
  // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
  // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
  // Por ej:
  // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'

  // Tu código aca:
  var palabra = "";

    for (var i = 0; i < array.length; i++) { //RECORRE EL PRIMER ARRAY
    var strSplit = array[i].split(" "); //APLICA EL .SPLIT AL ARRAY, Y LO GUARDA EN LA NUEVA VARIABLE
        for (var j = 0; j < strSplit.length; j++) { //SE RECORRE EL NUEVO ARRAY 
            if (strSplit[j].length >  palabra.length ) { //BUSCA LAS PALABRAS MAS GRANDES DENTRO DEL NUEVO ARRAY
            palabra = strSplit[j]
            }
        }
    }
  return(palabra)
}

// No modifiques nada debajo de esta linea //


module.exports = palabraMasLarga
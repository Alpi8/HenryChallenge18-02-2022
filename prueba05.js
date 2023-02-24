    // function palabraMasLarga(array) {
    // La funcion llamada 'palabraMasLarga' recibe un array 'array' de frases (strings) como parametro
    // y debe devolver la palabra mas larga entre todas las frases ( Es decir la palabra con mayor cantidad de caracteres)
    // Por ej:
    // palabraMasLarga(['hola esto string', 'frase con palabra']) debe devolver 'palabra'
  
    // Tu código aca:
   
    
    function palabraMasLarga(array) {
          // Se crea un array de la cadena str separado por espacio (' ')
        var largoPalabra = 0;  // Declara variable para almacenar el largo en numeros de la palabra mas larga encontrada
            
        var strSplit = array.split(" ");
        palabra = strSplit[0];

        for (var i = 1; i < strSplit.length; i++) { // Se recorre el array de string
          if (largoPalabra < strSplit[i].length) {   // Compara si la cadena guardada es ms larga que la posicion del array.
            palabra = strSplit[i] ;                //Guarda la vueva palabra
            largoPalabra = strSplit[i].length;    // Guarda el tamaño de la cadena ms larga en la variable.
            
          }
        }
        console.log (largoPalabra) // Devuelve la variable con el largo del string
        console.log (palabra)
      }
      
      palabraMasLarga('hola esto string', 'frase con palabra'); // Devuelve 5, por que hello es la palabra más larga y tiene un largo de 5 caracteres.

    /*  palabra1 = array.length

      for (var i = 0; i < palabraMasLargaW; i++){
            if(i > palabraMasLargaW)
            palabra1 = palabraMasLargaW
      }
      console.log(palabraMasLarga) 
      */
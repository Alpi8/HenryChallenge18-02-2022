// EJERCICIO 01 SUPERADO

//      function menorMayor(numeros) {
    // La función llamada 'menorMayor' recibe como argumento un arreglo de números llamado 'numeros' y debe devolver un
    // arreglo que contenga el menor número del arreglo 'numeros' en la posición cero y el mayor número del arreglo
    // 'numeros' en la posición 1.
    // Ej:
    // menorMayor([4, 6, 1, 7, 15]) debe retornar [1, 15]
    // ya que 1 es el número más chico (menor) dentro del arreglo [4, 6, 1, 7, 15]
    // y 15 es el número más grande (mayor) dentro del arreglo [4, 6, 1, 7, 15]
  
    // Tu código aca:
numeros = [1,2,3,4,5,6,7,8,9,10]
nMayor = 0
nMenor = 0 
nuevoArray = []

 nMayor = Math.max.apply(null, numeros);
 nMenor = Math.min.apply(null, numeros);
 //nuevoArray.push(nMenor)
 //nuevoArray.push(nMayor)
 nuevoArray.push(nMenor, nMayor)
console.log (nuevoArray)
console.log (nMayor)

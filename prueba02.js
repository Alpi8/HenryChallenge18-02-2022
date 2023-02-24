// EJERCICIO 03 SUPERADO

// function cuantosOnline(usuarios) {

  // La funcion llamada "cuantosOnline" recibe como argumento un objeto 'usuarios', cada property de ese objeto es un objeto
  // cada usuario tiene una property 'online' que es un booleano.
  // deberia devolver la cantidad de usuarios con la property online igual a true.
  // Por ej:
  // let usuarios = {
  //     toni: {
  //         edad: 33,
  //         online: true
  //     },
  //     emi: {
  //         edad: 25,
  //         online: true
  //     },
  //     fran: {
  //         edad: 25,
  //         online: false
  //     },
  //     agus: {
  //         edad: 24,
  //         online: false
  //     }
  // }; 
  // cuantosOnline(usuarios) devuelve 2
  // Tip: Podes usar el metodo for...in

  // Tu código aca:
  contador = 0
    let usuarios = {
            toni: {
                edad: 33,
                online: true
            },
            emi: {
                edad: 25,
                online: true
            },
            fran: {
                edad: 25,
                online: true
            },
            agus: {
                edad: 24,
                online: false
            }
        }; 

  for (let i in usuarios) {
    if (usuarios[i].online == true ){
      contador ++
        
    }
    
 };
 
 console.log ("Resultado contador " + contador)


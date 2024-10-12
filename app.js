window.onload = function () {
    let quién = ["mi primo ","mi vecino ","una anciana ","Batman ","una horda de zombies ","Goku ",];
    let acción = ["destruyó ","explotó ","robó ","bailó sobre ","disparó a ","golpeó ","quemó ",];
    let objeto = ["mi móvil ","mi bicicleta ","mi ordenador ","mi coche ","mis zapatillas ","mi patín ",];
    let donde = ["en la calle ","en el circo ","en mi casa ","en la playa ","en el aeropuerto ","en el gimnasio ",];
    let cuando = ["justo antes de venir.","ayer.","esta mañana.","anoche.","hace una hora.","antes de comer.",];
  
    let rdm1 = Math.floor(Math.random() * quién.length);
    let rdm2 = Math.floor(Math.random() * acción.length);
    let rdm3 = Math.floor(Math.random() * objeto.length);
    let rdm4 = Math.floor(Math.random() * donde.length);
    let rdm5 = Math.floor(Math.random() * cuando.length);
  
    document.querySelector("#excusa").innerHTML = quién[rdm1] + acción[rdm2] + objeto[rdm3] + donde[rdm4] + cuando[rdm5];
  };
  
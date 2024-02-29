

function getSuma(){
    //LEEMOS LOS VALORES DE LOS INPUTS
    const sumando1 = document.getElementById("sumauno").value
    const sumando2 = document.getElementById("sumando2").value;
    //SUMAMOS LOS VALORES
    const resultado = parseInt(sumando1) + parseInt(sumando2); //parseInt CONVIERTE UN VALOR EN TIPO INTEGER

    //MOSTAR RESULTADO

    document.getElementById("resultado").innerHTML = resultado //innerHTML CAMBIA LO QUE CONTIENE LA ETIQUETA DEL ID POR EL VALOR DENTRO DE LA CONSTANTE
}


//ACCEDER AL BOTON

const botonSumar = document.getElementById("suma");
botonSumar.addEventListener("click", getSuma)


//DEVOLVER SALUDO

function getSaludo(){
    const nombre = document.getElementById("nombre").value
    const apellido = document.getElementById("apellido").value
    const resulatdo = `Hola ${nombre} ${apellido}! `;

    document.getElementById("resulatdo").innerHTML = resulatdo;
}

const botonEnviar = document.getElementById("enviarnombres");
botonEnviar.addEventListener("click", getSaludo)



//CARRUSEL DE FOTOS Y FAT ARROW


function cambiarFotoPrincipal(idMiniatura){
    const fotoprincipal = document.getElementById("foto-principal");
    const miniatura = document.getElementById(idMiniatura);

    fotoprincipal.src = miniatura.src;
}


const miniatura1 = document.getElementById("miniatura1");
const miniatura2 = document.getElementById("miniatura2");
const miniatura3 = document.getElementById("miniatura3");

miniatura1.addEventListener("click", function(){cambiarFotoPrincipal("miniatura1")})
miniatura2.addEventListener("click", function(){cambiarFotoPrincipal("miniatura2")})
miniatura3.addEventListener("click", function(){cambiarFotoPrincipal("miniatura3")})
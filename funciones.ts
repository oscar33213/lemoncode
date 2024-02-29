function areaCirculo(radio: number): number{
   return Math.PI * radio ** 2;
}

const area : number = areaCirculo(2);
console.log(area);


function areaCuadrado(lado: number) : number {
    return lado ** 2;

}

const areacuadrado : number = areaCuadrado(20);
console.log(areacuadrado);



function Suma(){
    //LEEMOS LOS VALORES DE LOS INPUTS
    const sumando1 = (document.getElementById("suma1") as HTMLInputElement).value //"DECLARAMOS" QUE EL ,value SI ES UN InputElement
    const sumando2 = (document.getElementById("suma2") as HTMLInputElement).value;
    //SUMAMOS LOS VALORES
    const resultado = parseInt(sumando1) + parseInt(sumando2); //parseInt CONVIERTE UN VALOR EN TIPO INTEGER

    //MOSTAR RESULTADO INDICANDO UNA CONDICION PARA AVISAR QUE EL VALOR NO ES NULO NI INDEFINIDO
    const resultadoElement = document.getElementById("resultado"); //CREAMOS UNA VARIABLE QUE VA A LLEVAR EL VALOR DEL div RESULTDO

    if(resultadoElement !== null && resultadoElement !== undefined){

    resultadoElement.innerHTML = resultado.toString() //innerHTML CAMBIA LO QUE CONTIENE LA ETIQUETA DEL ID POR EL VALOR DENTRO DE LA CONSTANTE
    }
}


//ACCEDER AL BOTON

const botonSuma = document.getElementById("sumar");

if (botonSuma !== null && botonSuma !== undefined){
botonSuma.addEventListener("click", Suma)
}

console.log(Suma); 


//INSTANCE OF Y TYPEOF

function changePhotoMain(idMiniatura :string) : void{
    const fotoprincipal = document.getElementById("foto-principal") as HTMLImageElement; //HACEMOS EL CASTING PARA EL ELEMENTO img
    const miniatura = document.getElementById(idMiniatura)

    if(fotoprincipal !== null && fotoprincipal !== undefined && miniatura !== undefined && miniatura !== null){
        if(miniatura instanceof HTMLImageElement){ //ESTAMOS CREANDO UNA CONDICION PARA QUE NOS DIGA SI miniatura.src ES UNA INSTANCIA DE HTMLImageElement

    fotoprincipal.src = miniatura.src; 
    }
}


const miniaturauno: HTMLElement | null = document.getElementById("miniatura1");
const miniaturados: HTMLElement | null = document.getElementById("miniatura2");
const miniaturatres: HTMLElement | null = document.getElementById("miniatura3");


if(miniaturauno !== null && miniatura1 !== undefined){
miniaturauno.addEventListener("click", function(){changePhotoMain("miniatura1")})
}
if(miniaturados !== null && miniatura2 !== undefined){
miniaturados.addEventListener("click", function(){changePhotoMain("miniatura2")})
}
if(miniaturatres !== null && miniatura3 !== undefined){
miniaturatres.addEventListener("click", function(){changePhotoMain("miniatura3")})
    }
}

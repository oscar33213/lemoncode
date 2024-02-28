//LA VARIABLES SIRVEN PARA ALMACENAR DATOS

var descuent = 0.9
var iva = 1.21
var producto1 = 100
var producto2 = 30

console.log(producto1* descuent * iva + producto2*descuent*iva);



var sum1 = 21
var sum2 = 20


const cliente = { //AL SER const NO SE PODRAN CAMBIAR LOS VALORES DE LA CONSTANTE 
    nombre: "Oscar",
    apellido: "Hidalgo",
    edad: 26,
    direccion: {
        calle: "Picassent",
        numero: 23,
        ciudad: "Torrent",
        codigoPost: 46900
    }
};


cliente.edad = 27; //DE ESTA MANERA SI PODRIAS HACER CAMBIOS DENTRO DEL OBJETO DEBIDO A QUE LA PALABRA RESERVADA const SE APLICA AL OBJETO, PERO NO A SUS PROPIEDADES, DE ESTA MANERA ESTAMOS INDICANDO QUE SOLO CAMBIE EL VALOR DE ESA PROPIEDAD



const nombre = "Oscar"
const edad = 26
const nacionalidad = "Española"


console.log(`Me llamo ${nombre} mi edad es ${edad} y soy ${nacionalidad}`)
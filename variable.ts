

/*Queremos mostrar información acerca de grupos musicales.

Si estás trabajando con TypeScript habría que crear un interfaz para representar a un grupo musical.

La información de los grupos que queremos mostrar:

    Nombre del grupo / cantante / compositor (string).
    Año de fundación: cuando se formó el grupo (numero).
    Si está en activo (booleano).
    Género musical (string).

Cada género queremos tenerlo en una variable.

Los grupos que vamos a mostrar:

    The Beatles / 1960 / Activo: true / 🎵 Pop Rock
    Queen / 1970 / Activo: false / 🎸 Rock
    AC DC / 1973 / Activo: true / 🤘 Hard Rock
    Ludwig van Beethoven / 1770 / Activo: false / 🎼 Clásica
    The Rolling Stones / 1962 / Activo: true / 🎸 Rock

Queremos mostrar cada grupo por consola, el nombre del grupo de música queremos ponerlo en negrita, con fuente más grande y color de fondo verde. */



interface gruposMusicales {
    NombreGrupo: string;
    cantantePrincipal: string;
    añoFundacion: number;
    Activo: boolean;
    generoMusica: string
}


const GrupoA: gruposMusicales = {
    NombreGrupo: "The Beatles",
    cantantePrincipal: "John Lenon",
    añoFundacion: 1960,
    Activo: false,
    generoMusica: "Rock"
}

const GrupoB: gruposMusicales = {
    NombreGrupo: "Queen",
    cantantePrincipal: "Freddie Mercury",
    añoFundacion: 1970,
    Activo: false,
    generoMusica: "Rock"
}

const GrupoC: gruposMusicales = {
    NombreGrupo: "AC/DC",
    cantantePrincipal: "Angus McKinnon Young",
    añoFundacion: 1973,
    Activo: true,
    generoMusica: "Hard Rock"
}

const GrupoD: gruposMusicales = {
    NombreGrupo: "Beethoven",
    cantantePrincipal: "El mismo",
    añoFundacion: 1770,
    Activo: false,
    generoMusica: "Clasica"
}

const GrupoE: gruposMusicales = {
    NombreGrupo: "The Rolling Stones",
    cantantePrincipal: "Mick Jagger",
    añoFundacion: 1962,
    Activo: true,
    generoMusica: "Rock"
}
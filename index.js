const fs = require("node:fs");
const path = require("node:path");



const juego = {
    titulo: "Marvel Tokon",
    genero: "pelea",
    estudio: "Arc System Works",
    distribuidor: "Sony Interactive Entertainment",
    clasificacion: "T teen",
    plataformas: ["PlayStation 5", "Windows"],
    multijugador: true,
    idioma: ["japones", "ingles"],
    anio: 2026,
}
//------------------Ficha de Juego------------------//

const nombre = process.argv[2] ?? "Estudiante";
console.log(`Bienvenido: ${nombre}`);

const node = process.version;
const os = process.platform;

const plataformasComoTexto = juego.plataformas.join(", ");
const idiomaComoTexto = juego.idioma.join(", ");
const multijugador = juego.multijugador ? "Si" : "No";

const fichaDeJuego = `FICHA DEL JUEGO

Estudiante: ${nombre}
Node js: ${node}
Plataforma del sistema: ${os}

Titulo: ${juego.titulo}
Genero: ${juego.genero}
Estudio: ${juego.estudio}
Distribuidor: ${juego.distribuidor}
Clasificacion ${juego.clasificacion}
Plataformas: ${plataformasComoTexto}
¿Es multijugador?: ${multijugador}
idioma: ${idiomaComoTexto}
Año: ${juego.anio}`;

//------------------Creación del archivo------------------//

const carpetaDeSalida = path.join(__dirname, "Salida");
const rutaFicha = path.join(carpetaDeSalida, "ficha-videojuego.txt");

fs.mkdirSync(carpetaDeSalida, {recursive: true});
fs.writeFileSync(rutaFicha, fichaDeJuego, "utf8");

console.log(fichaDeJuego);
console.log("----------------------------------------------------");
console.log(`ruta del archivo generado: ${rutaFicha}`);



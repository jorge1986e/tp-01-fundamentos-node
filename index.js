const juego = {
    titulo: "Marvel Tokon",
    estudio: "Arc System Works",
    distribuidor: "Sony Interactive Entertainment",
    clasificacion: "T teen",
    plataformas: ["PlayStation 5", "Windows"],
    multijugador: "true",
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

const fichaDeJuego = `FICHA DE JUEGO

Estudiante: ${nombre}
Node js: ${node}
Plataforma del sistema: ${os}

Nombre de Juego: ${juego.titulo}
Desarrolador: ${juego.estudio}
Distribuidor: ${juego.distribuidor}
Clasificacion ${juego.clasificacion}
Plataformas: ${plataformasComoTexto}
Multijugador: ${multijugador}
idioma: ${idiomaComoTexto}
Año: ${juego.anio}`;



# Trabajo práctico 01: 
Alumno: Chocobar Jorge

## Descripción:

Este trabajo practico pedia crear una aplicacion principal que pedia crear una ficha de un video juego, para eso ise una objeto con los datos de un juego que eligi "Marvel Tokon", luego mostre un mensaje de bienvenida de dos formas una predeterminada como Estidiante y otra por consola donde puedo elegir el nombre, tambien mostre la version de node y windows con process, use join para convertir los arreglos a textos ejemplo: plataformas, luego ise la ficha del juego interpolando las constantes, luego use path.join para crear los nombres de las salidas y fs para crear carpetas y escribir el archivo de salida. Resultado: salida/ficha-videojuego.txt.


## Cómo ejecutar:

-Para ejecutar la aplicacion, abro la terminal con las teclas "Ctrl + ñ" en el directorio raiz del proyecto: tp-01-fundamentos-node y utilizo el entorno de ejecucion de node.js para interpretar el punto de entrada, ejecutando el comando node index.js esto inicia el proceso principal de js en el lado del servidor; Pero tambien puedo ingresar un usuario por consola al cambiar el comando agregando el nombre del estudiante al final de index.js por ejemplo: node index.js Jorge 

-Para ejecutar la aplicacion orde-event-loop.js abro la terminal con las teclas "Ctrl + ñ" en el directorio raiz del proyecto: tp-01-fundamentos-node y utilizo el entorno de ejecucion de node.js para interpretar el punto de entrada, ejecutando el comando node orden-event-loop.js

## Archivo generado:

ficha-videojuego.txt:

Bienvenido: Jorge
FICHA DEL JUEGO

Estudiante: Jorge
Node js: v24.18.0
Plataforma del sistema: win32

Titulo: Marvel Tokon
Genero: pelea
Estudio: Arc System Works
Distribuidor: Sony Interactive Entertainment
Clasificacion T teen
Plataformas: PlayStation 5, Windows
¿Es multijugador?: Si
idioma: japones, ingles
Año: 2026

-------------------------------------------------
Por consola:
ruta del archivo generado: C:\Users\JORGE\Desktop\Drive Agosto 2026\Curso NODO - Desarrollo Back end con Node.js\x-trabajos practicos\Semana01\tp-01-fundamentos-node\Salida\ficha-videojuego.txt


# Conceptos:

## 1. ¿Qué diferencia existe entre JavaScript, V8 y el runtime de Node.js?

La diferencia radica en su nivel de abstracción: JavaScript es el lenguaje, V8 es el motor que traduce ese código a instrucciones de máquina, y Node.js es el entorno de ejecución que le otorga a JavaScript capacidades para interactuar con el sistema operativo (archivos, redes, procesos).

El runtime es la caja de herramientas que le da vida a js fuera del navegador, dentro del cual el motor de js se encarga de procesar y ordennar la ejecucion de codigo

## 2. ¿Por qué el callback de setTimeout(..., 0) se ejecuta después del código principal?

El callback de setTimeout se ejecuta después del código principal porque el hilo de ejecucion esta ocupado y el callback espera que se libere para enviar la orden y recien poder imprimir.

## 3. ¿Cuál es la diferencia general entre I/O bloqueante y no bloqueante?

La diferencia entre bloquenate es que el programa detiene la ejecución del hilo actual hasta que la operación de I/O finalice y devuelva un resultado mientras que no bloquente el programa inicia la operación de I/O y continúa inmediatamente con la ejecución de las siguientes líneas de código, sin esperar el resultado.

## 4. ¿Qué responsabilidades cumplen node:path y node:fs en index.js ?

Node node:path se encargar de definir las rutas y node:fs es el módulo encargado de interactuar con el sistema operativo a nivel de almacenamiento. Permite leer, escribir, actualizar, eliminar y observar archivos y carpetas en el disco duro.
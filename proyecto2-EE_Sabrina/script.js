let username = "";
const readline = require('readline');
const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});
let cedula = "33432308";
let palabrasEncontrar = [
  "abrazadera", "abstracto", "abundante", "acelerador", "acertijo", 
  "algoritmo", "atuendo", "adivinanza", "adjetivo", "administrar",
  "advertencia", "aeropuerto", "afortunado", "agricultura", "alquiler",
  "altavoz", "ambiente", "ambulancia", "amortiguador", "anestesia",
  "aniversario", "antepasado", "antibiotico", "antidoto", "apariencia",
  "apellido", "aprendizaje", "arandela", "arquitecto", "artificial",
  "ascensor", "aspiradora", "asteroide", "astronomia", "atardecer",
  "atletismo", "atmosfera", "autobus", "automovil", "aventura",
  "bachillerato", "bacteria", "baloncesto", "banquero", "barbacoa",
  "biblioteca", "bicicleta", "bienvenida", "biografia", "biologia",
  "boligrafo", "bombilla", "bombero", "brazalete", "brillante",
  "caballero", "cacahuete", "calendario", "caligrafia", "caminata",
  "camioneta", "campamento", "campeonato", "cancelacion", "candelabro",
  "capacidad", "caracter", "carretera", "castillo", "catedral",
  "celebracion", "centigrado", "certificado", "cientifico", "cinturon",
  "circuito", "ciudadano", "clasificacion", "clausura", "coleccion",
  "combustible", "comienzo", "compañerismo", "competencia", "complicado",
  "compositor", "computadora", "comunicar", "concierto", "conferencia",
  "confianza", "confirmar", "congelador", "conjunto", "conocimiento",
  "consecuencia", "conservar", "constante", "construccion", "continente"
];
let adivinarPalabra;
let opcion = "";
let palabrasAdivinadas = [];
let vidas = 3;
let victorias = 0;
let derrotas = 0;
let letrasCantidad;
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}
startGame();
async function startGame(){
    username = await getUserInput("Cual es tu nombre?");
    do {
        console.log("Bienvenido al juego del ahorcado", username);
        console.log("Para empezar a jugar por favor coloque el numero 1");
        console.log("para salir de programa coloque la cedula del autor:", cedula);
        console.log("Buena suerte");
        opcion = await getUserInput("Seleccione su opcion");
        if (opcion === cedula) break;
        switch (opcion) {
            case "1":
                if (palabrasAdivinadas.length === palabrasEncontrar.length) {
                    console.log("Ya se han adivinado todas las palabras, por favor cierre el juego... Gracias por jugar :)");
                    opcion = cedula;
                    break;
                } else {
                    do {
                        adivinarPalabra = palabrasEncontrar[Math.floor(Math.random() * palabrasEncontrar.length)].toLowerCase();
                    } while (palabrasAdivinadas.includes(adivinarPalabra));
                    palabrasAdivinadas.push(adivinarPalabra);
                    letrasCantidad = adivinarPalabra.length;
                    vidas = 3;
                    let letrasUsadas = [];
                    let progreso = Array(letrasCantidad).fill("_");
                    while (vidas > 0 && progreso.includes("_")) {
                        console.log("\n=====================================");
                        console.log("Palabra: " + progreso.join(" ") + " (" + letrasCantidad + " letras)");
                        console.log("");
                        console.log("Vidas: " + vidas + " | Letras usadas: " + letrasUsadas.join(","));
                        console.log("Victorias: " + victorias + " | Derrotas: " + derrotas);
                        let entrada = await getUserInput("Ingresa una letra:");
                        if (entrada === cedula) {
                            opcion = cedula;
                            break;
                        }
                        let letra = entrada.toLowerCase();
                        if (letra.length !== 1 || !/[a-z]/.test(letra) || letra === "ñ") {
                            console.log("ERROR: Ingresa solo una letra válida (a-z, sin la letra ñ).");
                            continue;
                        }
                        if (letrasUsadas.includes(letra)) {
                            console.log("Ya utilizaste la letra: " + letra);
                            continue;
                        }
                        letrasUsadas.push(letra);
                        if (adivinarPalabra.includes(letra)) {
                            console.log("¡Letra correcta!");
                            for (let i = 0; i < adivinarPalabra.length; i++) {
                                if (adivinarPalabra[i] === letra) progreso[i] = letra;
                            }
                        } else {
                            console.log("Letra incorrecta.");
                            vidas--;
                        }
                        await getUserInput("Presiona Enter para continuar...");
                    }
                    if (opcion === cedula) break;
                    if (!progreso.includes("_")) {
                        console.log("\n¡Felicidades " + username + "! Ganaste. La palabra era: " + adivinarPalabra);
                        victorias++;
                    } else {
                        console.log("\nPerdiste todas tus vidas. La palabra era: " + adivinarPalabra);
                        derrotas++;
                    }
                    await getUserInput("Presiona Enter para volver al menú...");
                    break;
                }
            default:
                if (opcion !== cedula) console.log("Opción no válida.");
                break;
        }
    } while (opcion !== cedula);
    return rl.close();
}
console.log("Gracias por jugar :), Saliendo del programa......");
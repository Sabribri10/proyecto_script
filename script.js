// version 1.0.0

// No borrar ni modificar las constantes y variables que ya están declaradas, ya que son necesarias para el funcionamiento del juego.
// Simplemente comenta las líneas indicadas más abajo una vez hagas las pruebas del funcionamiento del código inicial.

let username = [];

const readline = require('readline');

const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
});

// ------------------- Ejemplo para pedir datos al usuario ----------------------

// Llama a la función getUserInput para obtener la entrada del usuario.
// De esta manera debes pedir datos al usuario durante el juego.
// Simplemente guardarás la respuesta en otra variable para el fin que corresponda.

username = await getUserInput("What is your name?"); // COMENTA esta linea cuando empieces a programar.

// ------------------- Función para pedir datos al usuario ----------------------
// Esta función se encarga de obtener la entrada del usuario a través de la consola. 
// Toma una pregunta como argumento, la muestra al usuario y espera su respuesta. 
// Una vez que el usuario ingresa su respuesta, la función devuelve esa respuesta como una cadena de texto.
function getUserInput(question) {
    return new Promise((resolve) => {
        rl.question(question + " ", (answer) => {
            resolve(answer);
        });
    });
}
let palabras = [
"abeja", "abismo", "actor", "adivino", "aguja", "alarma", "alba", "aldea", "alga", "ancla", "arco", 
"arena", "asfalto", "astro", "atlas", "bache", "bala", "banco", "barco", "barril", "bata", "blanco",
"bloque", "blusa", "bobina", "bota", "bote", "brazo", "brisa", "broma", "bulto", "buque", "burla", "busca",
"cabra", "cadena", "calma", "cama", "campo", "canal", "casco", "cebra", "cerca", "cero", "cesta", 
"cielo", "cisne", "clima", "cobre", "copa", "cristal", "cuadro", "cuerpo", "dardo", "dato", "dedo",
"deseo", "diente", "disco", "drama", "duelo", "efecto", "eje", "enigma", "escama", "espada", "espejo",
"estufa", "eterno", "exito", "extra", "faja", "falda", "fango", "faro", "fiebre", "firma", "flanco",
"flecha", "flor", "flujo", "forma", "frase", "frente", "fresa", "fruto", "fuego", "fuente", "fuerza",
"fuga", "furgon", "fusil", "futuro", "gafas", "gala", "gamo", "gana", "ganso", "garaje", "garra", "gato"
];

//-------------------- Fin del código Espacio Educa ----------------------

// Recuerda que debes seguir las instrucciones del proyecto para completar el juego.
// Y no borres el código que ya está escrito, ya que es necesario para el funcionamiento del juego.
// Solo comenta las líneas indicadas más arriba.

// Get ur coffee and Empieza a codear!!

// Declara las variables que necesitas para el juego antes de llamar a la función startGame.

// Luego llama a la función startGame para iniciar el juego.

startGame();

async function startGame(){
    // Aquí va la lógica principal del juego.
    let username =[];
    username.push(await getUserInput("Inserta el nombre"));
    return rl.close(); // Linea que hace que el programa se cierre una vez termine el juego. No la borres ni comentes.
}
const horaActual = new Date().getHours();
let saludo;

if (horaActual < 12) {
    saludo = "¡Buenos días!";
} else if (horaActual < 19) {
    saludo = "¡Buenas tardes!";
} else {
    saludo = "¡Buenas noches!";
}

console.log(saludo + " Bienvenido al código de ejemplo de Carlos.");

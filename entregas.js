
// ---------- Crear un id random---------------------------------
function crearID() {
    return parseInt(Math.random() * 1000)
}

// console.log(crearID())

// ---------- Constructor de productos--------------------------

class Producto {
    constructor(id, nombre, precio, stock) {
        this.id = id,
        this.nombre = nombre;
        this.precio = precio;
        this.stock = stock
    }

}

// ---------- Creación de productos (objetos) mediante método push---------------- 
const listaLibros = []

listaLibros.push(new Producto(crearID(), 'las mil y una noches', 3800, 10));
listaLibros.push(new Producto(crearID(), 'don Quijote de la Mancha', 4000, 5));
listaLibros.push(new Producto(crearID(), 'orgullo y Prejuicio', 5000, 10));
listaLibros.push(new Producto(crearID(), 'moby dick', 6000, 3));
listaLibros.push(new Producto(crearID(), 'crimen y castigo', 5000, 10));
listaLibros.push(new Producto(crearID(), 'mujercitas', 3400, 10));
listaLibros.push(new Producto(crearID(), 'la metamorfosis', 6600, 10));
listaLibros.push(new Producto(crearID(), 'rayuela', 8000, 10));



console.log(listaLibros)

// ---------- Saludo y solicitud de búsqueda---------------- 

const saludoInicial = prompt('Hola! ¿Cuál es tu nombre?')

function busqueda() {

    let busquedaLibro = prompt(`${saludoInicial} ¿Qué libro estás buscando?`)
    let resultado = listaLibros.some ((p) => p.nombre === busquedaLibro.toLowerCase())

    if (resultado) {
        console.log("Resultado de la búsqueda del usuario: " + resultado)
        alert( "¡EL LIBRO ESTÁ DISPONIBLE!  "  )
    } else {
        alert("Ese libro no está disponible. Tu búsqueda quedará en nuestra base da datos.")
        console.log("El usuario buscó: " + busquedaLibro )
        
    }

};

busqueda()

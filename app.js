// Array para almacenar los nombres de los amigos
let amigos = [];

// Función para agregar un amigo a la lista
function agregarAmigo() {
    // Obtener el elemento de input
    let inputAmigo = document.getElementById('amigo');
    
    // Validar que el input no esté vacío o solo contenga espacios en blanco
    if (inputAmigo && inputAmigo.value.trim() !== '') {
        // Agregar el nombre del amigo al array
        amigos.push(inputAmigo.value.trim());
        
        // Actualizar la lista mostrada
        actualizarLista();
        
        // Limpiar el campo de input
        inputAmigo.value = "";
    } else {
        // Mostrar alerta si el input está vacío
        alert("Por favor, inserte un nombre.");
    }
}

// Función para actualizar la lista de amigos en la interfaz
function actualizarLista() {
    // Obtener el elemento de lista
    let listaAmigos = document.getElementById('listaAmigos');
    
    // Limpiar la lista existente
    listaAmigos.innerHTML = "";
    
    // Iterar sobre el array de amigos y crear elementos de lista
    for (let i = 0; i < amigos.length; i++) {
        // Crear un nuevo elemento de lista
        let elementoLi = document.createElement('li');
        
        // Establecer el texto del elemento con el nombre del amigo
        elementoLi.textContent = amigos[i];
        
        // Agregar el elemento de lista a la lista
        listaAmigos.appendChild(elementoLi);
    }
}

// Función para sortear un amigo de manera aleatoria
function sortearAmigo() {
    // Validar que haya amigos disponibles
    if (amigos.length > 0) {
        // Generar un índice aleatorio
        let indiceAleatorio = Math.floor(Math.random() * amigos.length);
        
        // Obtener el elemento de resultado
        let resultado = document.getElementById('resultado');
        
        // Mostrar el amigo sorteado
        resultado.innerHTML = amigos[indiceAleatorio];
    } else {
        // Mostrar una alerta si no hay amigos para sortear
        alert("No hay amigos disponibles para sortear.");
    }
}

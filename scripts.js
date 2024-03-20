document.addEventListener("DOMContentLoaded", function() {
    // Función para manejar el envío del formulario de registro
    document.getElementById("registrationForm").addEventListener("submit", function(event) {
        event.preventDefault(); // Evitar que el formulario se envíe por defecto

        // Obtener los valores del formulario
        var name = document.getElementById("name").value;
        var age = document.getElementById("age").value;
        var hobbies = document.getElementById("hobbies").value.split(",").map(function(item) {
            return item.trim(); // Eliminar espacios en blanco alrededor de los hobbies
        });

        // Aquí puedes hacer lo que quieras con los datos del formulario, como enviarlos a un servidor o almacenarlos localmente.
        // Por ahora, simplemente mostraremos los datos en la consola.
        console.log("Nombre:", name);
        console.log("Edad:", age);
        console.log("Hobbies:", hobbies);
        
        // Puedes agregar aquí código para enviar los datos del formulario a un servidor utilizando AJAX o fetch.
    });

    // Función para generar el perfil del usuario (puedes implementarla según tus necesidades)
    function generateUserProfile() {
        // Aquí puedes implementar la lógica para generar el perfil del usuario
    }

    // Función para generar las posibles coincidencias (puedes implementarla según tus necesidades)
    function generateMatches() {
        // Aquí puedes implementar la lógica para generar las posibles coincidencias
    }

    // Llamar a las funciones para generar el perfil del usuario y las coincidencias cuando se cargue la página
    generateUserProfile();
    generateMatches();
});

// Función para limpiar el formulario
function limpiarFormulario() {
    document.getElementById("formulario").reset();
}

// Función para guardar el formulario
function guardarFormulario() {
    // Obtener los valores de los campos del formulario
    var nombre = document.getElementById("nombre").value.trim();
    var apellido = document.getElementById("apellido").value.trim();
    var email = document.getElementById("email").value.trim();
    var telefono = document.getElementById("telefono").value.trim();
    var fechaNacimiento = document.getElementById("fecha_nacimiento").value.trim();
    var estrato = document.getElementById("Estrato").value.trim();
    var edad = document.getElementById("edad").value.trim();
    var genero = document.querySelector('input[name="genero"]:checked');
    var intereses = document.querySelectorAll('input[type="checkbox"]:checked');

    // Verificar que todos los campos estén llenos
    if (nombre === "" || apellido === "" || email === "" || telefono === "" || fechaNacimiento === "" || estrato === "" || edad === "" || genero === null || intereses.length === 0) {
        alert("Por favor complete todos los campos.");
        return;
    }

    // Verificar que el nombre y el apellido solo contengan letras y tengan al menos 4 caracteres
    if (!/^[a-zA-Z]{4,}$/.test(nombre) || !/^[a-zA-Z]{4,}$/.test(apellido)) {
        alert("El nombre y el apellido deben contener solo letras y tener al menos 4 caracteres.");
        return;
    }

    // Verificar que el teléfono contenga solo números y tenga máximo 12 dígitos
    if (!/^\d{1,12}$/.test(telefono)) {
        alert("El teléfono debe contener solo números y tener máximo 12 dígitos.");
        return;
    }

    // Verificar que el estrato esté entre 1 y 10
    if (parseInt(estrato) < 1 || parseInt(estrato) > 10) {
        alert("El estrato debe estar entre 1 y 10.");
        return;
    }

    // Verificar que la edad esté entre 1 y 100
    if (parseInt(edad) < 1 || parseInt(edad) > 100) {
        alert("La edad debe estar entre 1 y 100.");
        return;
    }

    // Mostrar un mensaje de éxito
    alert("Formulario guardado exitosamente.");
}

document.getElementById("loginForm").addEventListener("submit", function(event) {
    event.preventDefault();
    var nombre = document.getElementById("nombre").value;
    var password = document.getElementById("password").value;

    // Validación del nombre
    if (!/^[a-zA-Z\s]{4,}$/.test(nombre)) {
        document.getElementById("mensajeError").textContent = "El nombre debe contener al menos 4 caracteres y solo letras.";
        return;
    } else {
        document.getElementById("mensajeError").textContent = "";
    }

    if (!/(?=.*[A-Z])(?=.*[0-9]).{8,}/.test(password)) {
        document.getElementById("passwordError").textContent = "La contraseña debe tener al menos 8 caracteres con una mayúscula y un número.";
        return;
      } else {
        document.getElementById("passwordError").textContent = "";
    }

    // Aquí puedes agregar la lógica para validar la contraseña y realizar el inicio de sesión en tu sistema
    // Por ahora, solo redirigiremos al usuario a la página "producto.html" después de un inicio de sesión exitoso
    window.location.href = "producto.html";
});
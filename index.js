function showProductDescription(productID) {
    // Ocultar todas las descripciones del producto
    var productDescriptions = document.getElementsByClassName("product-description");
    for (var i = 0; i < productDescriptions.length; i++) {
      productDescriptions[i].style.display = "none";
    }
    // Mostrar la descripción del producto correspondiente al ID proporcionado
    document.getElementById(productID).style.display = "block";
  }


  function changePageColor() {
    // Cambiar el color de fondo de la página
    document.body.style.backgroundColor = getRandomColor();
}

function changeText() {
    // Cambiar el texto del párrafo
    const paragraph = document.querySelector('cambio');
    paragraph.textContent = "¡Texto cambiado!";
}

function getRandomColor() {
    // Generar un color hexadecimal aleatorio
    const letters = '0123456789ABCDEF';
    let color = '#';
    for (let i = 0; i < 6; i++) {
        color += letters[Math.floor(Math.random() * 16)];
    }
    return color;
}

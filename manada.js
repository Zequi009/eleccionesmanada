const image = document.getElementById('image');

image.addEventListener('mouseenter', function() {
  image.classList.add('hover');
  image.src = 'imagenes/NuevaCele3.png'; // Cambia a la segunda imagen
});

image.addEventListener('mouseleave', function() {
  image.classList.remove('hover');
  image.src = 'imagenes/baloo3.png'; // Vuelve a la primera imagen
});

const image2 = document.getElementById('image2');

image2.addEventListener('mouseenter', function() {
  image2.classList.add('hover');
  image2.src = 'imagenes/NuevaMica3.png'; // Cambia a la segunda imagen
});

image2.addEventListener('mouseleave', function() {
  image2.classList.remove('hover');
  image2.src = 'imagenes/bagheera.png'; // Vuelve a la primera imagen
});


//Verificar Contraseña
function VerificarContraseña() {
  var contraseñaInput = document.getElementById("contraseña");
  var contraseñaIngresada = contraseñaInput.value;
  var mensajeError = document.getElementById('mensajeError')
  if (contraseñaIngresada === "manada1234") {
      window.location.href = "Main.html";
  } else {
      contraseñaInput.classList.add("is-invalid");
      mensajeError.classList.remove("d-none");

  }
}

document.getElementById("olvContraseña").addEventListener("click", function() {
  // Mostrar mensaje
  alert("¡Has hecho clic en el botón!");
});

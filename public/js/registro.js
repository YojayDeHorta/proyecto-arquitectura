
// Example starter JavaScript for disabling form submissions if there are invalid fields
(function () {
  'use strict'

  // Fetch all the forms we want to apply custom Bootstrap validation styles to
  var forms = document.querySelectorAll('.needs-validation')

  // Loop over them and prevent submission
  Array.prototype.slice.call(forms)
    .forEach(function (form) {
      form.addEventListener('submit', function (event) {
        if (!form.checkValidity()) {
          event.preventDefault()
          event.stopPropagation()
        }

        form.classList.add('was-validated')
      }, false)
    })
})()
/*-------------VALIDACIONES------------- */
const formulario = document.getElementById('registro');


/**----------------REGISTRO-------------------- */
formulario.addEventListener('submit', (e) => {
  e.preventDefault();
  var object = {};
  var datos_registro = new FormData(formulario);
  datos_registro.forEach((value, key) => object[key] = value);
  fetch("/registro", {
    method: "POST",
    headers: {
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(object),
  })
    .then((res) => res.json())
    .then((data) => {
      switch (data) {
        case "1":
          Swal.fire({
            icon: 'success',
            title: 'Registro ejecutado correctamente!',
            text: 'ya pues entrar a la pagina',
            footer: '<a href="../login/recovery.php">se te olvido tu contraseña?</a>'
          }).then(function() {
            window.location = "/login";
          })
         
          break;
        case "2":
          Swal.fire({
            icon: 'error',
            title: 'algo salio mal...',
            text: 'alguien con tu cedula/tarjeta de identidad o correo ya se ha registrado, intenta recuperar tu contraseña',
            footer: 'intentalo de nuevo'
          })
          break;
        case "3":
          Swal.fire({
            icon: 'error',
            title: 'algo salio mal...',
            text: 'alguien con tu cedula/tarjeta de identidad ya se ha registrado, intenta recuperar tu contraseña',
            footer: '<a href="recovery.php">Quieres recuperar tu contraseña?</a>'
          })
          break;
        default:
          break;
      }

    });

});


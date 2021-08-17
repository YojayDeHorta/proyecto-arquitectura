/*-------------VALIDACIONES------------- */
const formulariovideo = document.getElementById('videoForm');
const videolabel=document.getElementById('archivo')
const modalvideo= new bootstrap.Modal(
  document.getElementById("videomodal")
);
let id_recepcion;
function abrirformvideo(id){
  videolabel.value=''
  id_recepcion=id;
  modalvideo.show();
}
function cerrarvideo(){
  modalvideo.hide();
}
/**----------------REGISTRO-------------------- */
videoForm.addEventListener('submit', (e) => {
  e.preventDefault();
  var datos_registro = new FormData(formulariovideo);
  fetch("/subir/"+id_recepcion, { method: "POST",body: datos_registro,}).then((res) => res.json())
    .then((data) => {
      switch (data) {
        case "1":
          Swal.fire({
            icon: 'success',
            title: 'Video subido exitosamente',
          }).then(function() {
            window.location = "/admin";
          })
         
          break;
        case "2":
          Swal.fire({
            icon: 'error',
            title: 'algo salio mal...',
            text: 'el archivo que intentas subir no es un mp4!',
            footer: 'intentalo de nuevo'
          })
          break;
        default:
          break;
      }

    });

});
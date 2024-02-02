const tooltipTriggerList = document.querySelectorAll('[data-bs-toggle="tooltip"]')
const tooltipList = [...tooltipTriggerList].map(tooltipTriggerEl => new bootstrap.Tooltip(tooltipTriggerEl))

/* Se realiza mejora al navbar para cuando se desplace el contenido, se vea de mejor manera el menu */
$(document).ready(function () {
    $(window).scroll(function () {
        if ($(this).scrollTop() > 50) {
            $('.navbar').addClass('bg-scroll');
        } else {
            $('.navbar').removeClass('bg-scroll');
        }
    });
});

$(function() {

    $('#enviar').click(function() {
        alert('El correo fue enviado correctamente...');
    });
})

/* Se agrega funcion para mostrar seccion quienes somos en el caso que el usaurio en dispositivo movil le haga click al boton quienes somos del navbar
javascript vanilla version 

document.getElementById('showData').addEventListener('click', function () {
    document.getElementById('quienesSomos-data').classList.remove('d-none');
}) */

$(document).ready(function () {
    $('#showData').click(function () {
        $('#quienesSomos-data').removeClass('d-none');
    });
});
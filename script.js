$(document).ready(function() {
    $("#formulario").validate({
    rules: {
        rut: {
            required: true,
            pattern: /([\b[0-9|.]{1,10}\-[K|k|0-9]])/,
            minlenght: 9
            },
        nombres : {
            required: true,
            minlength: 6,
            pattern: /([a-zA-z\säÄëËïÏöÖüÜáéíóúáéíóúÁÉÍÓÚÂÊÎÔÛâêîôûàèìòùÀÈÌÒÙñÑ])/g
        },
        apellidos : {
            required: true,
            minlength: 6,
            pattern: "^([A-Z]{1}[a-zñáéíóú])+$"
        },
        edad: {
            required: true,
            number: true,
            min: 1,
            max: 3
            },
        email: {
            required: true,
            email: true, 
            pattern: /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)$/
        },
        fecha: {
            required: true,
            date: true
        },
        }
    
});
});

$("#boton").click(function() {

    var rut = $("#rut").val();
    var nombres =$("#nombres").val();
    var apellidos =$("#apellidos").val();
    var edad =$("#edad").val();
    var email =$("#email").val(); 
    var fecha =$("#fecha").val();

    
})

/* \b[0-9|.]{1,10}\-[K|k|0-9] */

/* $(document).on('ready', function(){




})

function validar() {
    var rut = document.getElementById("rut").value;
    var nombres = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var edad = document.getElementById("edad").value;
    var email = document.getElementById("email").value;
    var fecha = document.getElementById("fecha").value;

    if(nombre=""){
        $("#alert").html("Debes ingresar un nombre").slideDown(500);
    }
} */
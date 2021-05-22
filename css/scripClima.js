$(document).ready(function(){
    $('#datosDelClima').hide();

});

function cargar_clima(){
    //1.- Llamada a WS  lectura de JSON

    var clima = new XMLHttpRequest();
    var ciudad = document.getElementById("ciudad").value;

    clima.open('GET','https://api.openweathermap.org/data/2.5/weather?q=' + ciudad + '&appid=8fefcdc4f65e87fdd7c08f9e34215dc5&units=metric', false);
    clima.send(null);

    //2.- Capturar los datos

    var datos = JSON.parse(clima.response);

    var ciudad = datos.name;
    var temperatura = datos.main.temp_min;
    var humedad = datos.main.humidity;
    var velocidadViento = datos.wind.speed;

    //3.- Disponer datos capturados
    $('#ubicacion').html(ciudad);
    $('#temperatura').html(temperatura);
    $('#humedad').html(humedad);
    $('#velocidadviento').html(velocidadViento);

    $('#ciudad').val('');

    $('#datosDelClima').show();

}
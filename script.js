function mostrarAlerta() {

  alert("Nombre, curso y grupo: Martín Ferrero Santos 2ºB");

  }



  function ocultarSeccion() {

    document.querySelector('.seccion-dorada').style.display = 'none';

  }



  function mostrarSeccion() {

    document.querySelector('.seccion-dorada').style.display = 'block';

  }



  function cambiarColorFondo() {

    var colores = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow", "lightsalmon"];

    var nuevoColor = colores[Math.floor(Math.random() * colores.length)];

    document.querySelector('.seccion-dorada').style.backgroundColor = nuevoColor;


  }

document.querySelector('.imagen-dinos').addEventListener('mouseover', mostrarFecha);


document.querySelector('.seccion-plateada').addEventListener('mouseover', cambiarColorFondoHover);
document.querySelector('.seccion-plateada').addEventListener('mouseout', restaurarColorFondo);

function mostrarFecha() {
    var fechaActual = new Date();
    alert("Fecha actual: " + fechaActual);
}

function cambiarColorFondoHover() {
    var nuevoColor = getRandomColor();
    document.querySelector('.seccion-plateada').style.backgroundColor = nuevoColor;
}

function restaurarColorFondo() {
    document.querySelector('.seccion-plateada').style.backgroundColor = 'silver';
}

function getRandomColor() {
    var colores = ["lightblue", "lightgreen", "lightcoral", "lightgoldenrodyellow", "lightsalmon"];
    return colores[Math.floor(Math.random() * colores.length)];
}

function obtenerUbicacion() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(function(position) {
      var ubicacion = document.getElementById("ubicacion");
      ubicacion.innerHTML = "Latitud: " + position.coords.latitude + "<br>Longitud: " + position.coords.longitude;
      
      var mapa = L.map('mapa').setView([position.coords.latitude, position.coords.longitude], 13);
      L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
        attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      }).addTo(mapa);
      L.marker([position.coords.latitude, position.coords.longitude]).addTo(mapa)
        .bindPopup('¡Estás aquí!')
        .openPopup();
    });
  } else {
    alert("La geolocalización no es soportada por este navegador.");
  }
}

document.getElementById("btnObtenerUbicacion").addEventListener("click", obtenerUbicacion);
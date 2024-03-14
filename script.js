document.getElementById("inicio").addEventListener("click", function() {
            // Redirigir al usuario a otro HTML cuando el div es clicado
            window.location.href = "index.html";
        });

document.getElementById("e1").addEventListener("click", function() {
            // Redirigir al usuario a otro HTML cuando el div es clicado
            window.location.href = "1.html";
        });
        
document.getElementById("e2").addEventListener("click", function() {
            // Redirigir al usuario a otro HTML cuando el div es clicado
            window.location.href = "2.html";
        });
        
document.getElementById("e3").addEventListener("click", function() {
            // Redirigir al usuario a otro HTML cuando el div es clicado
            window.location.href = "3.html";
        });
        
        document.getElementById("e4").addEventListener("click", function() {
            // Redirigir al usuario a otro HTML cuando el div es clicado
            window.location.href = "4.html";
        });
        
document.getElementById("e5").addEventListener("click", function() {
            // Redirigir al usuario a otro HTML cuando el div es clicado
            window.location.href = "5.html";
        });

document.getElementById("e6").addEventListener("click", function() {
            // Redirigir al usuario a otro HTML cuando el div es clicado
            window.location.href = "6.html";
        });
function redireccionar() {
  var paisSelect = document.getElementById("paisSelect");
  var selectedOption = paisSelect.options[paisSelect.selectedIndex].value;
  
  if (selectedOption === "CT") {
    window.location.href = "cataluña.html";
  } 
}

document.getElementById("inicio").addEventListener("click", function() {
    // Redirigir al usuario a otro HTML cuando el div es clicado
    window.location.href = "index.html";
});

document.getElementById("e1").addEventListener("click", function() {
    // Redirigir al usuario a otro HTML cuando el div es clicado
    window.location.href = "1.html";
});

document.getElementById("e2").addEventListener("click", function() {
    // Redirigir al usuario a otro HTML cuando el div es clicado
    window.location.href = "2.html";
});

document.getElementById("e3").addEventListener("click", function() {
    // Redirigir al usuario a otro HTML cuando el div es clicado
    window.location.href = "3.html";
});

document.getElementById("e4").addEventListener("click", function() {
    // Redirigir al usuario a otro HTML cuando el div es clicado
    window.location.href = "4.html";
});

document.getElementById("e5").addEventListener("click", function() {
    // Redirigir al usuario a otro HTML cuando el div es clicado
    window.location.href = "5.html";
});

document.getElementById("e6").addEventListener("click", function() {
    // Redirigir al usuario a otro HTML cuando el div es clicado
    window.location.href = "6.html";
});

document.getElementById("botonEnviar").addEventListener("click", function() {
    redireccionar();
});

function redireccionar() {
    var paisSelect = document.getElementById("paisSelect");
    var selectedOption = paisSelect.options[paisSelect.selectedIndex].value;
  
    if (selectedOption === "CT") {
        window.location.href = "cataluña.html";
    } 
}



// Array de URLs de los archivos Markdown de los eventos
const urlsEventos = ['evento1.md', 'evento2.md' ,'evento3.md'];

// Función para cargar y mostrar el contenido de los eventos Markdown
function cargarEventos() {
    urlsEventos.forEach(urlEvento => {
        fetch(urlEvento)
            .then(response => response.text())
            .then(texto => {
                const converter = new showdown.Converter();
                const html = converter.makeHtml(texto);
                document.getElementById('eventos').innerHTML += `<div class="evento">${html}</div>`;
            });
    });
}

// Llama a la función cargarEventos al cargar la página
window.onload = cargarEventos;

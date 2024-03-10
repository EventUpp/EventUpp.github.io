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


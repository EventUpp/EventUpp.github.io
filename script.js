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
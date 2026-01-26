
function closeWelcoming(e) {
    e.preventDefault(); // evita que el link recargue

    const welcoming = document.getElementById('welcoming');

    welcoming.classList.add('exit');

    // cuando termina la transición
    setTimeout(() => {
        welcoming.style.display = 'none';
    }, 800); // mismo tiempo que el transition

   
}

function cargarYT() {
    const link = document.getElementById("ytLink").value.trim();

    // Validación básica
    if (!link.includes("youtube.com/watch") && !link.includes("youtu.be")) {
        alert("Por favor pega un link válido de YouTube.");
        return;
    }

    let videoId = "";

    // Detectar tipo de link
    if (link.includes("youtube.com/watch")) {
        const urlParams = new URL(link).searchParams;
        videoId = urlParams.get("v");
    } 
    else if (link.includes("youtu.be")) {
        videoId = link.split("/").pop();
    }

    if (!videoId) {
        alert("No se pudo extraer el ID del video.");
        return;
    }

    // Crear link embed
    const embedLink = `https://www.youtube.com/embed/${videoId}?autoplay=1&loop=1&playlist=${videoId}`;

    // Actualizar iframe
    document.getElementById("ytPlayer").src = embedLink;
}

const images = document.querySelectorAll('.fondos');

images.forEach(img => {
  img.addEventListener('click', () => {
    // Cambiar el background del body a la imagen clickeada
    document.body.style.backgroundImage = `url('${img.src}')`;
  });
});


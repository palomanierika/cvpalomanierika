// script.js
document.addEventListener("DOMContentLoaded", function() {
    const progressDots = document.querySelectorAll(".progress-dots");

    progressDots.forEach(dotContainer => {
        const percent = parseInt(dotContainer.dataset.percent); // Obtiene el porcentaje del atributo data-percent
        const dots = dotContainer.querySelectorAll(".progress-dot");
        const fillCount = Math.round((percent / 100) * dots.length);

        let counter = 0;

        const interval = setInterval(() => {
            if (counter >= fillCount) {
                clearInterval(interval);
                return;
            }
            dots[counter].classList.add("complete");
            counter++;
        }, 300); // Velocidad de la animación (200ms = 0.2s)
    });
});

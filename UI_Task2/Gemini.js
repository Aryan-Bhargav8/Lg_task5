document.addEventListener('DOMContentLoaded', function() {
   const morphingDiv = document.getElementById('morphing-div');

   const svgUrls = [
    'Ellipse.svg',
    'Polygon.svg',
    'Star.svg',
    'Rectangle.svg'
];
let currentIndex = 0;
    const duration = 1500;

    function morph() {
        currentIndex = (currentIndex + 1) % svgUrls.length;
        morphingDiv.style.webkitMask = `url('${svgUrls[currentIndex]}')`;
        morphingDiv.style.mask = `url('${svgUrls[currentIndex]}')`;

        setTimeout(morph, duration);
    }

    setTimeout(morph, duration);

    const overlayImage = document.getElementById('overlay-image');

    overlayImage.addEventListener("click", function() {
        overlayImage.classList.add("rotate");
        overlayImage.classList.add("white");
        morphingDiv.style.opacity = "1";

        overlayImage.addEventListener("animationend", function() {
            overlayImage.classList.remove("rotate");

            setTimeout(() => {
                overlayImage.classList.add("rotate");
                overlayImage.classList.remove("white");

                overlayImage.addEventListener("animationend", function() {
                    overlayImage.classList.remove("rotate");
                    morphingDiv.style.opacity = "0"; 
                }, { once: true });
            }, 6000);
        }, { once: true });
    });
});
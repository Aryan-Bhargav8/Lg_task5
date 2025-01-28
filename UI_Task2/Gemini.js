document.addEventListener('DOMContentLoaded', function() {
    const morphingDiv = document.getElementById('morphing-div');
    const overlayImage = document.getElementById('overlay-image');

    const svgUrls = [
        'Ellipse.svg', 
        'Polygon.svg',
        'Star.svg',
        'Rectangle.svg'
    ];
    let currentIndex = 0;
    const duration = 3000; // duration for each morphing animation
    const totalMorphCycle = svgUrls.length * duration; 
    const fullAnimationDuration = 2 * totalMorphCycle; 

    function morph(repeat = 2, onComplete) {
        if (repeat === 0) {
            if (onComplete) onComplete();
            return;
        }

        currentIndex = 0; // Reset morphing
        function nextMorph() {
            if (currentIndex < svgUrls.length) {
                morphingDiv.style.webkitMask = `url('${svgUrls[currentIndex]}')`;
                morphingDiv.style.mask = `url('${svgUrls[currentIndex]}')`;
                currentIndex++;
                setTimeout(nextMorph, duration);
            } else {
                morph(repeat - 1, onComplete);
            }
        }
        nextMorph();
    }

    overlayImage.addEventListener("click", function() {
        overlayImage.classList.add("rotate");
        overlayImage.classList.add("white");

        overlayImage.addEventListener("animationend", function() {
            overlayImage.classList.remove("rotate");

            morphingDiv.style.opacity = "1";
            morph(2, function() { 
                morphingDiv.style.opacity = "0";

                setTimeout(() => {
                    overlayImage.classList.add("rotate");
                    overlayImage.addEventListener("animationend", function() {
                        overlayImage.classList.remove("rotate");
                        overlayImage.classList.remove("white");
                    }, { once: true });
                }, 0); 
            });
        }, { once: true });
    });
});

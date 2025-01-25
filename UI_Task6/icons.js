document.addEventListener('DOMContentLoaded', function () {
    function changeLottieColor(animation, color) {
        animation.addEventListener('DOMLoaded', () => {
            const elements = animation.renderer.svgElement.querySelectorAll('path');
            elements.forEach(element => {
                element.setAttribute('fill', color);
            });
        });
    }

    const icon1Animation = lottie.loadAnimation({
      container: document.getElementById('icon1'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'Summe House Tour - iconSvg.co.json' 
    });
    changeLottieColor(icon1Animation, '#ff7d00');
  
    document.getElementById('icon1').addEventListener('click', () => {
      icon1Animation.goToAndPlay(0, true);
    });
  
    const icon2Animation = lottie.loadAnimation({
      container: document.getElementById('icon2'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'Wifi Router Best Buy - iconSvg.co.json' 
    });
    changeLottieColor(icon2Animation, '#ff7d00'); 
  
    document.getElementById('icon2').addEventListener('click', () => {
      icon2Animation.goToAndPlay(0, true);
    });

    const icon3Animation = lottie.loadAnimation({
      container: document.getElementById('icon3'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'Add Bookmark To Chrome - iconSvg.co.json' 
    });
    changeLottieColor(icon3Animation, '#ff7d00'); 
  
    document.getElementById('icon3').addEventListener('click', () => {
      icon3Animation.goToAndPlay(0, true);
    });

    const icon4Animation = lottie.loadAnimation({
      container: document.getElementById('icon4'),
      renderer: 'svg',
      loop: false,
      autoplay: false,
      path: 'Windows 10 Settings - iconSvg.co.json'
    });
    changeLottieColor(icon4Animation, '#ff7d00'); 
  
    document.getElementById('icon4').addEventListener('click', () => {
      icon4Animation.goToAndPlay(0, true);
    });
});
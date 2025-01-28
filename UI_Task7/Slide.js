document.addEventListener('DOMContentLoaded', function () {
    const tabs = document.querySelectorAll('.tab');
    const indicator = document.querySelector('.tab-indicator');

    const updateIndicator = (activeTab) => {
        const span = activeTab.querySelector('span'); 
        const spanRect = span.getBoundingClientRect(); 
        const containerRect = activeTab.parentElement.getBoundingClientRect();

        indicator.style.width = `${spanRect.width}px`; 
        indicator.style.left = `${spanRect.left - containerRect.left}px`; 
    };

    tabs.forEach((tab) => {
        tab.addEventListener('click', () => {
            tabs.forEach((tab) => {
                tab.classList.remove('active');
                tab.setAttribute('aria-selected', 'false');
            });

            tab.classList.add('active');
            tab.setAttribute('aria-selected', 'true');

            updateIndicator(tab);
        });
    });

    const activeTab = document.querySelector('.tab.active');
    if (activeTab) {
        updateIndicator(activeTab);
    }

    window.addEventListener('resize', () => {
        const activeTab = document.querySelector('.tab.active');
        if (activeTab) {
            updateIndicator(activeTab);
        }
    });
});

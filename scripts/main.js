document.addEventListener('DOMContentLoaded', () => {
    const mobileLink = document.getElementById('mobileLink');
    const geoLink = document.getElementById('geoLink');
    const splitLanding = document.querySelector('.split-landing');

    // Elements
    const mobileView = document.getElementById('mobile-portfolio');
    const geoView = document.getElementById('geo-portfolio');
    const closeMobile = document.getElementById('closeMobile');
    const closeGeo = document.getElementById('closeGeo');

    // Functions to show/hide
    function openSide(sideElement) {
        // Optional: add active state to landing to fade out other side?
        sideElement.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent background scrolling
    }

    function closeSide(sideElement) {
        sideElement.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    // Event Listeners
    mobileLink.addEventListener('click', () => {
        openSide(mobileView);
    });

    geoLink.addEventListener('click', () => {
        openSide(geoView);
    });

    closeMobile.addEventListener('click', () => {
        closeSide(mobileView);
    });

    closeGeo.addEventListener('click', () => {
        closeSide(geoView);
    });

    // Escape key to close
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeSide(mobileView);
            closeSide(geoView);
        }
    });
});

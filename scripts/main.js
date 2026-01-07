document.addEventListener('DOMContentLoaded', () => {
    // Landing Page Split Links
    const mobileLink = document.getElementById('mobileLink');
    const geoLink = document.getElementById('geoLink');
    const mobilePortfolio = document.getElementById('mobile-portfolio');
    const geoPortfolio = document.getElementById('geo-portfolio');
    const closeMobileBtn = document.getElementById('closeMobile');
    const closeGeoBtn = document.getElementById('closeGeo');

    // Open Mobile Portfolio
    mobileLink.addEventListener('click', () => {
        mobilePortfolio.classList.remove('hidden');
        document.body.style.overflow = 'hidden'; // Prevent scrolling on main body
    });

    // Open Geospatial Portfolio
    geoLink.addEventListener('click', () => {
        geoPortfolio.classList.remove('hidden');
        document.body.style.overflow = 'hidden';
    });

    // Close Functions
    function closeView(viewElement) {
        viewElement.classList.add('hidden');
        document.body.style.overflow = 'auto';
    }

    closeMobileBtn.addEventListener('click', () => {
        closeView(mobilePortfolio);
    });

    closeGeoBtn.addEventListener('click', () => {
        closeView(geoPortfolio);
    });

    // Validating Keyboard Accessibility (Escape Key)
    document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            if (!mobilePortfolio.classList.contains('hidden')) closeView(mobilePortfolio);
            if (!geoPortfolio.classList.contains('hidden')) closeView(geoPortfolio);
        }
    });

    console.log("Portfolio interactions loaded.");
});

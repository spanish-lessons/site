document.addEventListener('DOMContentLoaded', function () {
    const navLinks = document.querySelectorAll('header nav ul li a');

    function scrollToSection(targetSection) {
        const targetPosition = targetSection.offsetTop;
        window.scrollTo({
            top: targetPosition,
            behavior: 'smooth'
        });
    }

    navLinks.forEach(link => {
        link.addEventListener('click', function (event) {
            event.preventDefault();
            const targetId = link.getAttribute('href').substring(1);
            const targetSection = document.getElementById(targetId);
            scrollToSection(targetSection);
        });
    });

    window.addEventListener('resize', function () {
        // Recalculer le décalage si la taille de l'écran change
        navLinks.forEach(link => {
            link.addEventListener('click', function (event) {
                event.preventDefault();
                const targetId = link.getAttribute('href').substring(1);
                const targetSection = document.getElementById(targetId);
                scrollToSection(targetSection);
            });
        });
    });
});

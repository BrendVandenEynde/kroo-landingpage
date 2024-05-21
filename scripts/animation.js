document.addEventListener("DOMContentLoaded", function () {
    const isMobile = window.innerWidth <= 768;
    if (!isMobile) { 
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('show');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            observer.observe(el);
        });
    } else {
        const elements = document.querySelectorAll('.fade-in');
        elements.forEach(el => {
            el.classList.add('show');
        });
    }
});

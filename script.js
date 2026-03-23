document.addEventListener('DOMContentLoaded', () => {
    
    // Intersection Observer for Reveal
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('active');
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Parallax & Fade Effect for Hero
    const heroImage = document.querySelector('.hero-image');
    const heroContent = document.querySelector('.hero-content');

    window.addEventListener('scroll', () => {
        let scroll = window.scrollY;
        
        // Moves the image slower than the page
        heroImage.style.transform = `translateY(${scroll * 0.4}px)`;
        
        // Fades out text as you scroll down
        heroContent.style.opacity = 1 - (scroll / 600);
        heroContent.style.transform = `translateY(${scroll * 0.1}px)`;
    });
});
// Add this to the bottom of your script.js
setTimeout(() => {
    const waBtn = document.querySelector('.btn-cta');
    waBtn.style.transform = 'scale(1.1)';
    setTimeout(() => waBtn.style.transform = 'scale(1)', 300);
}, 5000);
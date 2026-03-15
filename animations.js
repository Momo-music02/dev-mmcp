// GSAP & ScrollTrigger Animations pour la page d'accueil
// Nécessite GSAP et le plugin ScrollTrigger

document.addEventListener('DOMContentLoaded', function() {
    // Animation du titre principal
    gsap.from('header h1', {duration: 1, y: -80, opacity: 0, ease: 'power2.out'});
    // Animation des sections au scroll
    gsap.utils.toArray('section').forEach(section => {
        gsap.from(section, {
            scrollTrigger: {
                trigger: section,
                start: 'top 80%',
                toggleActions: 'play none none none'
            },
            y: 60,
            opacity: 0,
            duration: 1
        });
    });
    // Animation des boutons
    gsap.from('.theme-btn', {duration: 0.8, scale: 0.7, opacity: 0, stagger: 0.2, delay: 0.5});
});

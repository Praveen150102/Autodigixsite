const cards = document.querySelectorAll('.service-card');

function showCards() {
    const triggerBottom = window.innerHeight * 0.85;

    cards.forEach(card => {
        const cardTop = card.getBoundingClientRect().top;

        if(cardTop < triggerBottom){
            card.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showCards);
window.addEventListener('load', showCards);

// Counter Animation
const counters = document.querySelectorAll('.counter');

const startCounting = () => {
    counters.forEach(counter => {
        const target = +counter.getAttribute('data-target');
        const increment = target / 100;

        const updateCounter = () => {
            const current = +counter.innerText;

            if(current < target){
                counter.innerText = Math.ceil(current + increment);
                setTimeout(updateCounter, 20);
            } else {
                counter.innerText = target + "+";
            }
        };

        updateCounter();
    });
};

let statsSection = document.querySelector('.stats');

window.addEventListener('scroll', () => {
    const sectionPos = statsSection.getBoundingClientRect().top;
    const screenPos = window.innerHeight;

    if(sectionPos < screenPos - 100){
        startCounting();
    }
});

const contactSection = document.querySelector('.contact-wrapper');

function showContact() {
    const trigger = window.innerHeight * 0.85;
    const contactTop = contactSection.getBoundingClientRect().top;

    if (contactTop < trigger) {
        contactSection.style.transform = "translateY(0)";
        contactSection.style.opacity = "1";
    }
}

window.addEventListener('scroll', showContact);
window.addEventListener('load', showContact);

// Fade Reveal Animation
const fadeElements = document.querySelectorAll('.fade-element');

function showFadeElements() {
    const triggerBottom = window.innerHeight * 0.85;

    fadeElements.forEach(el => {
        const elementTop = el.getBoundingClientRect().top;

        if (elementTop < triggerBottom) {
            el.classList.add('show');
        }
    });
}

window.addEventListener('scroll', showFadeElements);
window.addEventListener('load', showFadeElements);


// Courses Hero Fade
const heroFadeElements = document.querySelectorAll('.hero-fade');

function showHeroFade() {
    heroFadeElements.forEach(el => {
        el.classList.add('show');
    });
}

window.addEventListener('load', showHeroFade);


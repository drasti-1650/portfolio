// Initialize Lucide Icons
lucide.createIcons();

// Navigation Shadow & Scroll Progress
const nav = document.querySelector('nav');
window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
        nav.style.borderBottom = '1px solid rgba(255, 116, 141, 0.2)';
        nav.style.boxShadow = '0 10px 30px -10px rgba(255, 116, 141, 0.1)';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.9)';
    } else {
        nav.style.borderBottom = '1px solid rgba(255, 116, 141, 0.1)';
        nav.style.boxShadow = 'none';
        nav.style.backgroundColor = 'rgba(255, 255, 255, 0.7)';
    }
});

// Reveal Animations on Scroll
const revealElements = document.querySelectorAll('.reveal');
const revealObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, { threshold: 0.15 });

revealElements.forEach(el => revealObserver.observe(el));

// Active Link Tracking
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');

window.addEventListener('scroll', () => {
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= (sectionTop - 200)) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.getAttribute('href').slice(1) === current) {
            link.classList.add('active');
        }
    });
});

// Contact Form Simulation
const contactForm = document.getElementById('contact-form');
if (contactForm) {
    contactForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const btn = contactForm.querySelector('button');
        const originalText = btn.innerHTML;
        
        btn.disabled = true;
        btn.innerHTML = 'Sending... <i data-lucide="loader-2" class="animate-spin"></i>';
        lucide.createIcons();
        
        // Simulate Success and Redirect to LinkedIn
        setTimeout(() => {
            btn.innerHTML = 'Redirecting... <i data-lucide="external-link"></i>';
            btn.style.backgroundColor = '#0077B5'; // LinkedIn Blue
            lucide.createIcons();
            
            // Open LinkedIn in a new tab
            window.open('https://www.linkedin.com/in/drasti-thakkar-09641b314', '_blank');

            setTimeout(() => {
                btn.disabled = false;
                btn.innerHTML = originalText;
                btn.style.backgroundColor = '';
                contactForm.reset();
                lucide.createIcons();
            }, 3000);
        }, 1500);
    });
}

// Hover Effect for Project Cards (Glow follow)
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(card => {
    card.addEventListener('mousemove', (e) => {
        const rect = card.getBoundingClientRect();
        const x = e.clientX - rect.left;
        const y = e.clientY - rect.top;
        
        card.style.setProperty('--mouse-x', `${x}px`);
        card.style.setProperty('--mouse-y', `${y}px`);
    });
});

// ===================================
// Initialize GSAP with Fallback System
// ===================================

let gsapLoaded = false;
let scrollTriggerLoaded = false;

// Check if GSAP loaded
window.addEventListener('load', () => {
    setTimeout(() => {
        gsapLoaded = typeof gsap !== 'undefined';
        scrollTriggerLoaded = typeof ScrollTrigger !== 'undefined';
        
        if (gsapLoaded && scrollTriggerLoaded) {
            gsap.registerPlugin(ScrollTrigger);
            console.log('✓ GSAP chargé avec succès');
        } else {
            console.warn('⚠️ GSAP non disponible - affichage sans animations');
            // Fallback: rendre tout visible immédiatement
            activateFallbackMode();
        }
    }, 1000);
});

// Fonction fallback pour afficher tout sans animations
function activateFallbackMode() {
    const elements = document.querySelectorAll('.service-card, .portfolio-item, .testimonial-card, .faq-item, .timeline-item');
    elements.forEach(el => {
        el.style.opacity = '1';
        el.style.transform = 'none';
        el.classList.add('animate');
    });
    console.log('✓ Mode fallback activé');
}

// ===================================
// Navigation & Scroll Effects
// ===================================

const navbar = document.getElementById('navbar');
const hamburger = document.getElementById('hamburger');
const navMenu = document.getElementById('nav-menu');
const navLinks = document.querySelectorAll('.nav-link');
const scrollProgress = document.getElementById('scroll-progress');

// Sticky navbar with scroll effect
window.addEventListener('scroll', () => {
    if (window.scrollY > 100) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update scroll progress
    const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
    const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
    const scrolled = (winScroll / height) * 100;
    scrollProgress.style.width = scrolled + '%';
});

// Mobile menu toggle
hamburger.addEventListener('click', () => {
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
});

// Close mobile menu on link click
navLinks.forEach(link => {
    link.addEventListener('click', () => {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
    });
});

// Active nav link on scroll
const sections = document.querySelectorAll('section[id]');

window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    
    sections.forEach(section => {
        const sectionHeight = section.offsetHeight;
        const sectionTop = section.offsetTop - 100;
        const sectionId = section.getAttribute('id');
        
        if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.add('active');
        } else {
            document.querySelector(`.nav-link[href*="${sectionId}"]`)?.classList.remove('active');
        }
    });
});

// ===================================
// Hero Animations
// ===================================

// Animate hero statistics counter - VERSION AMÉLIORÉE
const statNumbers = document.querySelectorAll('.stat-number');

// Fonction pour animer un compteur
const animateCounter = (element) => {
    const target = parseInt(element.getAttribute('data-target'));
    const duration = 2000;
    const increment = target / (duration / 16);
    let current = 0;
    
    const updateCounter = () => {
        current += increment;
        if (current < target) {
            element.textContent = Math.floor(current);
            requestAnimationFrame(updateCounter);
        } else {
            element.textContent = target;
        }
    };
    
    updateCounter();
};

// Observer pour déclencher l'animation
const heroObserver = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            statNumbers.forEach(stat => {
                animateCounter(stat);
            });
            heroObserver.disconnect();
        }
    });
}, { threshold: 0.3 });

const heroSection = document.querySelector('.hero');
if (heroSection) {
    heroObserver.observe(heroSection);
} else {
    // Fallback si hero non trouvé
    statNumbers.forEach(stat => {
        stat.textContent = stat.getAttribute('data-target');
    });
}

// ===================================
// Scroll Animations with GSAP
// ===================================

// Services cards animation
setTimeout(() => {
    if (gsapLoaded && scrollTriggerLoaded) {
        gsap.from('.service-card', {
            scrollTrigger: {
                trigger: '.services-grid',
                start: 'top 80%',
                end: 'bottom 20%',
                toggleActions: 'play none none reverse'
            },
            y: 50,
            opacity: 0,
            duration: 0.6,
            stagger: 0.2,
            ease: 'power2.out'
        });
    } else {
        // Fallback sans animation
        document.querySelectorAll('.service-card').forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
        });
    }
}, 1200);

// Timeline items animation
setTimeout(() => {
    const timelineItems = document.querySelectorAll('.timeline-item');
    
    if (gsapLoaded && scrollTriggerLoaded) {
        timelineItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                x: -50,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                onComplete: () => {
                    item.classList.add('animate');
                }
            });
        });
    } else {
        // Fallback
        timelineItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateX(0)';
            item.classList.add('animate');
        });
    }
}, 1200);

// Portfolio items animation
setTimeout(() => {
    const portfolioItems = document.querySelectorAll('.portfolio-item');
    
    if (gsapLoaded && scrollTriggerLoaded) {
        portfolioItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                onComplete: () => {
                    item.classList.add('animate');
                }
            });
        });
    } else {
        // Fallback
        portfolioItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.classList.add('animate');
        });
    }
}, 1200);

// Testimonials animation
setTimeout(() => {
    const testimonialCards = document.querySelectorAll('.testimonial-card');
    
    if (gsapLoaded && scrollTriggerLoaded) {
        testimonialCards.forEach((card, index) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: 'top 85%',
                    toggleActions: 'play none none none'
                },
                y: 50,
                opacity: 0,
                duration: 0.6,
                delay: index * 0.1,
                ease: 'power2.out',
                onComplete: () => {
                    card.classList.add('animate');
                }
            });
        });
    } else {
        // Fallback
        testimonialCards.forEach(card => {
            card.style.opacity = '1';
            card.style.transform = 'translateY(0)';
            card.classList.add('animate');
        });
    }
}, 1200);

// FAQ items animation
setTimeout(() => {
    const faqItems = document.querySelectorAll('.faq-item');
    
    if (gsapLoaded && scrollTriggerLoaded) {
        faqItems.forEach((item, index) => {
            gsap.from(item, {
                scrollTrigger: {
                    trigger: item,
                    start: 'top 90%',
                    toggleActions: 'play none none none'
                },
                y: 30,
                opacity: 0,
                duration: 0.5,
                delay: index * 0.05,
                ease: 'power2.out',
                onComplete: () => {
                    item.classList.add('animate');
                }
            });
        });
    } else {
        // Fallback
        faqItems.forEach(item => {
            item.style.opacity = '1';
            item.style.transform = 'translateY(0)';
            item.classList.add('animate');
        });
    }
}, 1200);

// ===================================
// FAQ Accordion
// ===================================

const faqQuestions = document.querySelectorAll('.faq-question');
const faqItemsElements = document.querySelectorAll('.faq-item');

faqQuestions.forEach(question => {
    question.addEventListener('click', () => {
        const faqItem = question.parentElement;
        const faqAnswer = faqItem.querySelector('.faq-answer');
        const isActive = faqItem.classList.contains('active');
        
        // Fermer tous les autres items
        faqItemsElements.forEach(item => {
            if (item !== faqItem) {
                item.classList.remove('active');
                item.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                const answer = item.querySelector('.faq-answer');
                answer.style.maxHeight = null;
            }
        });
        
        // Toggle l'item cliqué
        if (!isActive) {
            faqItem.classList.add('active');
            question.setAttribute('aria-expanded', 'true');
            faqAnswer.style.maxHeight = faqAnswer.scrollHeight + 'px';
        } else {
            faqItem.classList.remove('active');
            question.setAttribute('aria-expanded', 'false');
            faqAnswer.style.maxHeight = null;
        }
    });
    
    // Keyboard accessibility
    question.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' || e.key === ' ') {
            e.preventDefault();
            question.click();
        }
    });
});

// Ouvrir la première question par défaut (optionnel)
if (faqQuestions.length > 0) {
    // Décommenter la ligne suivante pour ouvrir la première question automatiquement
    // faqQuestions[0].click();
}

// ===================================
// Contact Form Handling
// ===================================

const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

contactForm.addEventListener('submit', async (e) => {
    e.preventDefault();
    
    // Get form data
    const formData = new FormData(contactForm);
    const data = Object.fromEntries(formData);
    
    // Validate form
    if (!data.name || !data.email || !data.phone || !data.project || !data.message || !data.consent) {
        showFormMessage('Veuillez remplir tous les champs obligatoires.', 'error');
        return;
    }
    
    // Validate email
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(data.email)) {
        showFormMessage('Veuillez entrer une adresse email valide.', 'error');
        return;
    }
    
    // Validate phone
    const phoneRegex = /^[\d\s\-\+\(\)]+$/;
    if (!phoneRegex.test(data.phone)) {
        showFormMessage('Veuillez entrer un numéro de téléphone valide.', 'error');
        return;
    }
    
    // Simulate form submission (replace with actual API call)
    try {
        // Show loading state
        const submitButton = contactForm.querySelector('button[type="submit"]');
        const originalButtonText = submitButton.innerHTML;
        submitButton.innerHTML = '<span>Envoi en cours...</span>';
        submitButton.disabled = true;
        
        // Simulate API call
        await new Promise(resolve => setTimeout(resolve, 1500));
        
        // Success
        showFormMessage('Merci pour votre demande ! Nous vous contacterons sous 24h.', 'success');
        contactForm.reset();
        
        // Reset button
        submitButton.innerHTML = originalButtonText;
        submitButton.disabled = false;
        
        // Optional: Send to actual backend
        // const response = await fetch('/api/contact', {
        //     method: 'POST',
        //     headers: { 'Content-Type': 'application/json' },
        //     body: JSON.stringify(data)
        // });
        
    } catch (error) {
        showFormMessage('Une erreur est survenue. Veuillez réessayer.', 'error');
        console.error('Form submission error:', error);
    }
});

function showFormMessage(message, type) {
    formMessage.textContent = message;
    formMessage.className = `form-message ${type}`;
    formMessage.style.display = 'block';
    
    // Scroll to message
    formMessage.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
    
    // Auto-hide after 5 seconds
    setTimeout(() => {
        formMessage.style.display = 'none';
    }, 5000);
}

// Real-time form validation
const formInputs = contactForm.querySelectorAll('input, textarea, select');
formInputs.forEach(input => {
    input.addEventListener('blur', () => {
        validateInput(input);
    });
    
    input.addEventListener('input', () => {
        if (input.classList.contains('invalid')) {
            validateInput(input);
        }
    });
});

function validateInput(input) {
    const value = input.value.trim();
    
    if (input.hasAttribute('required') && !value) {
        input.classList.add('invalid');
        input.style.borderColor = '#dc3545';
        return false;
    }
    
    if (input.type === 'email' && value) {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(value)) {
            input.classList.add('invalid');
            input.style.borderColor = '#dc3545';
            return false;
        }
    }
    
    if (input.type === 'tel' && value) {
        const phoneRegex = /^[\d\s\-\+\(\)]+$/;
        if (!phoneRegex.test(value)) {
            input.classList.add('invalid');
            input.style.borderColor = '#dc3545';
            return false;
        }
    }
    
    input.classList.remove('invalid');
    input.style.borderColor = '#1a4d2e';
    return true;
}

// ===================================
// Cookie Banner
// ===================================

const cookieBanner = document.getElementById('cookie-banner');
const acceptCookies = document.getElementById('accept-cookies');

// Check if cookies were already accepted
if (!localStorage.getItem('cookiesAccepted')) {
    setTimeout(() => {
        cookieBanner.classList.add('show');
    }, 2000);
}

acceptCookies.addEventListener('click', () => {
    localStorage.setItem('cookiesAccepted', 'true');
    cookieBanner.classList.remove('show');
});

// ===================================
// Back to Top Button
// ===================================

const backToTop = document.getElementById('back-to-top');

window.addEventListener('scroll', () => {
    if (window.scrollY > 500) {
        backToTop.classList.add('show');
    } else {
        backToTop.classList.remove('show');
    }
});

backToTop.addEventListener('click', () => {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// ===================================
// Smooth Scroll for Anchor Links
// ===================================

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        const href = this.getAttribute('href');
        
        // Skip if it's just "#"
        if (href === '#') {
            e.preventDefault();
            return;
        }
        
        const target = document.querySelector(href);
        if (target) {
            e.preventDefault();
            const offsetTop = target.offsetTop - 80;
            
            window.scrollTo({
                top: offsetTop,
                behavior: 'smooth'
            });
        }
    });
});

// ===================================
// Lazy Loading Images
// ===================================

const lazyImages = document.querySelectorAll('img[loading="lazy"]');

if ('IntersectionObserver' in window) {
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src || img.src;
                img.classList.add('loaded');
                observer.unobserve(img);
            }
        });
    });
    
    lazyImages.forEach(img => imageObserver.observe(img));
}

// ===================================
// Parallax Effect for Hero
// ===================================

const heroImage = document.querySelector('.hero-image');

if (heroImage) {
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const parallax = scrolled * 0.5;
        heroImage.style.transform = `translateY(${parallax}px)`;
    });
}

// ===================================
// Newsletter Form
// ===================================

const newsletterForm = document.querySelector('.footer-newsletter');

if (newsletterForm) {
    newsletterForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        const emailInput = newsletterForm.querySelector('input[type="email"]');
        const email = emailInput.value.trim();
        
        if (!email) {
            alert('Veuillez entrer votre adresse email.');
            return;
        }
        
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            alert('Veuillez entrer une adresse email valide.');
            return;
        }
        
        try {
            // Simulate API call
            await new Promise(resolve => setTimeout(resolve, 1000));
            
            alert('Merci de votre inscription ! Vous recevrez bientôt nos actualités.');
            emailInput.value = '';
            
            // Optional: Send to actual backend
            // const response = await fetch('/api/newsletter', {
            //     method: 'POST',
            //     headers: { 'Content-Type': 'application/json' },
            //     body: JSON.stringify({ email })
            // });
            
        } catch (error) {
            alert('Une erreur est survenue. Veuillez réessayer.');
            console.error('Newsletter subscription error:', error);
        }
    });
}

// ===================================
// Performance Optimization
// ===================================

// Debounce function for scroll events
function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
        const later = () => {
            clearTimeout(timeout);
            func(...args);
        };
        clearTimeout(timeout);
        timeout = setTimeout(later, wait);
    };
}

// Apply debounce to scroll-heavy operations
window.addEventListener('scroll', debounce(() => {
    // Additional scroll operations can go here
}, 10));

// ===================================
// Accessibility Enhancements
// ===================================

// Keyboard navigation for mobile menu
hamburger.addEventListener('keydown', (e) => {
    if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        hamburger.click();
    }
});

// Focus trap for mobile menu
const focusableElements = navMenu.querySelectorAll('a, button');
const firstFocusable = focusableElements[0];
const lastFocusable = focusableElements[focusableElements.length - 1];

navMenu.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        if (e.shiftKey && document.activeElement === firstFocusable) {
            e.preventDefault();
            lastFocusable.focus();
        } else if (!e.shiftKey && document.activeElement === lastFocusable) {
            e.preventDefault();
            firstFocusable.focus();
        }
    }
    
    if (e.key === 'Escape' && navMenu.classList.contains('active')) {
        hamburger.classList.remove('active');
        navMenu.classList.remove('active');
        hamburger.focus();
    }
});

// ===================================
// Console Message
// ===================================

console.log('%c🏠 Bienvenue sur Batrêve!', 'color: #1a4d2e; font-size: 24px; font-weight: bold;');
console.log('%cSite développé avec passion et expertise.', 'color: #d4af37; font-size: 14px;');
console.log('%cPour toute question: contact@batreve.fr', 'color: #4a4a4a; font-size: 12px;');

// ===================================
// Initialize
// ===================================

document.addEventListener('DOMContentLoaded', () => {
    console.log('✓ Batrêve website loaded successfully');
    
    // Add loaded class to body
    document.body.classList.add('loaded');
    
    // Trigger any initial animations
    gsap.from('.hero-content', {
        opacity: 0,
        y: 30,
        duration: 1,
        delay: 0.3,
        ease: 'power2.out'
    });
});

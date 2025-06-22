// Scroll animations functionality
document.addEventListener('DOMContentLoaded', function() {
    // Get all sections that need scroll animations
    const heroSection = document.getElementById('hero-section');
    const aboutSection = document.getElementById('about-section');
    const servicesSection = document.getElementById('services-section');
    const contactSection = document.getElementById('contact-section');

    // Elements that need animation classes
    const aboutHeading = document.querySelector('.about-heading');
    const aboutParagraph = document.querySelector('.about-paragraph');
    const aboutCards = document.querySelectorAll('.about-card');
    const visionHeading = document.querySelector('.vision-heading');
    const aboutUsHeading = document.querySelector('.about-us-heading');
    const aboutUsParagraph = document.querySelector('.about-us-paragraph');
    const visionMissionCards = document.querySelectorAll('.vision-mission-card');
    const serviceHeading = document.querySelector('.service-heading');
    const serviceItems = document.querySelectorAll('.service-item');
    const contactHeading = document.querySelector('.contact-heading');

    // Intersection Observer for scroll animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                // Add animation classes when elements come into view
                if (entry.target === aboutSection) {
                    animateAboutSection();
                } else if (entry.target === servicesSection) {
                    animateServicesSection();
                } else if (entry.target === contactSection) {
                    animateContactSection();
                }
            }
        });
    }, observerOptions);

    // Observe sections
    if (aboutSection) observer.observe(aboutSection);
    if (servicesSection) observer.observe(servicesSection);
    if (contactSection) observer.observe(contactSection);

    // Animation functions
    function animateAboutSection() {
        // Animate about heading
        if (aboutHeading) {
            aboutHeading.style.opacity = '0';
            aboutHeading.style.transform = 'translateY(30px)';
            setTimeout(() => {
                aboutHeading.style.transition = 'all 0.8s ease-out';
                aboutHeading.style.opacity = '1';
                aboutHeading.style.transform = 'translateY(0)';
            }, 100);
        }

        // Animate about paragraph
        if (aboutParagraph) {
            aboutParagraph.style.opacity = '0';
            aboutParagraph.style.transform = 'translateY(30px)';
            setTimeout(() => {
                aboutParagraph.style.transition = 'all 0.8s ease-out';
                aboutParagraph.style.opacity = '1';
                aboutParagraph.style.transform = 'translateY(0)';
            }, 300);
        }

        // Animate about cards
        aboutCards.forEach((card, index) => {
            card.style.opacity = '0';
            card.style.transform = 'translateY(30px)';
            setTimeout(() => {
                card.style.transition = 'all 0.8s ease-out';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            }, 500 + (index * 200));
        });

        // Animate vision heading
        if (visionHeading) {
            visionHeading.style.opacity = '0';
            visionHeading.style.transform = 'translateY(30px)';
            setTimeout(() => {
                visionHeading.style.transition = 'all 0.8s ease-out';
                visionHeading.style.opacity = '1';
                visionHeading.style.transform = 'translateY(0)';
            }, 700);
        }
    }

    function animateServicesSection() {
        // Animate service heading
        if (serviceHeading) {
            serviceHeading.style.opacity = '0';
            serviceHeading.style.transform = 'translateY(30px)';
            setTimeout(() => {
                serviceHeading.style.transition = 'all 0.8s ease-out';
                serviceHeading.style.opacity = '1';
                serviceHeading.style.transform = 'translateY(0)';
            }, 100);
        }

        // Animate service items
        serviceItems.forEach((item, index) => {
            item.style.opacity = '0';
            item.style.transform = 'translateY(30px)';
            setTimeout(() => {
                item.style.transition = 'all 0.8s ease-out';
                item.style.opacity = '1';
                item.style.transform = 'translateY(0)';
            }, 300 + (index * 200));
        });
    }

    function animateContactSection() {
        // Animate contact heading
        if (contactHeading) {
            contactHeading.style.opacity = '0';
            contactHeading.style.transform = 'translateY(30px)';
            setTimeout(() => {
                contactHeading.style.transition = 'all 0.8s ease-out';
                contactHeading.style.opacity = '1';
                contactHeading.style.transform = 'translateY(0)';
            }, 100);
        }
    }

    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetId = this.getAttribute('href');
            const targetSection = document.querySelector(targetId);
            
            if (targetSection) {
                targetSection.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Initialize animations on page load
    setTimeout(() => {
        // Trigger initial animations for elements already in view
        const heroRect = heroSection ? heroSection.getBoundingClientRect() : null;
        if (heroRect && heroRect.top < window.innerHeight) {
            // Hero section is already visible, trigger animations
            if (aboutSection) {
                const aboutRect = aboutSection.getBoundingClientRect();
                if (aboutRect.top < window.innerHeight) {
                    animateAboutSection();
                }
            }
        }
    }, 100);

    // Add hover effects for interactive elements
    const interactiveElements = document.querySelectorAll('.about-card, .vision-mission-card, .service-item');
    interactiveElements.forEach(element => {
        element.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-4px) scale(1.02)';
        });
        
        element.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });

    // Add click effects for buttons
    const buttons = document.querySelectorAll('.btn');
    buttons.forEach(button => {
        button.addEventListener('click', function(e) {
            // Create ripple effect
            const ripple = document.createElement('span');
            const rect = this.getBoundingClientRect();
            const size = Math.max(rect.width, rect.height);
            const x = e.clientX - rect.left - size / 2;
            const y = e.clientY - rect.top - size / 2;
            
            ripple.style.width = ripple.style.height = size + 'px';
            ripple.style.left = x + 'px';
            ripple.style.top = y + 'px';
            ripple.classList.add('ripple');
            
            this.appendChild(ripple);
            
            setTimeout(() => {
                ripple.remove();
            }, 600);
        });
    });

    // Add CSS for ripple effect
    const style = document.createElement('style');
    style.textContent = `
        .btn {
            position: relative;
            overflow: hidden;
        }
        
        .ripple {
            position: absolute;
            border-radius: 50%;
            background: rgba(255, 255, 255, 0.3);
            transform: scale(0);
            animation: ripple-animation 0.6s linear;
            pointer-events: none;
        }
        
        @keyframes ripple-animation {
            to {
                transform: scale(4);
                opacity: 0;
            }
        }
    `;
    document.head.appendChild(style);

    // Parallax effect for hero background
    window.addEventListener('scroll', function() {
        const scrolled = window.pageYOffset;
        const heroBackground = document.querySelector('.hero-background');
        
        if (heroBackground) {
            const rate = scrolled * -0.5;
            heroBackground.style.transform = `translateY(${rate}px)`;
        }
    });

    // Add loading animation for images
    const images = document.querySelectorAll('img');
    images.forEach(img => {
        img.addEventListener('load', function() {
            this.style.opacity = '0';
            this.style.transition = 'opacity 0.5s ease-in-out';
            setTimeout(() => {
                this.style.opacity = '1';
            }, 100);
        });
    });

    // Initialize all images as loaded if they're already cached
    images.forEach(img => {
        if (img.complete) {
            img.style.opacity = '1';
        }
    });
});

// Additional utility functions
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

// Optimize scroll performance
const optimizedScrollHandler = debounce(function() {
    // Any additional scroll-based functionality can be added here
}, 16); // ~60fps

window.addEventListener('scroll', optimizedScrollHandler);

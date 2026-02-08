document.addEventListener('DOMContentLoaded', () => {
    // Page loader
    const pageLoader = document.getElementById('page-loader');
    
    window.addEventListener('load', () => {
        setTimeout(() => {
            pageLoader.style.opacity = '0';
            pageLoader.style.transition = 'opacity 0.5s ease';
            setTimeout(() => {
                pageLoader.style.display = 'none';
            }, 500);
        }, 1000);
    });

    // Custom cursor
    const cursor = document.querySelector('.cursor');
    const cursorFollower = document.querySelector('.cursor-follower');
    
    document.addEventListener('mousemove', (e) => {
        cursor.style.left = e.clientX + 'px';
        cursor.style.top = e.clientY + 'px';
        
        setTimeout(() => {
            cursorFollower.style.left = e.clientX + 'px';
            cursorFollower.style.top = e.clientY + 'px';
        }, 100);
    });

    // Cursor hover effects
    const hoverElements = document.querySelectorAll('a, button, .project-card, .skill-card, .achievement-card, .resume-btn');
    hoverElements.forEach(element => {
        element.addEventListener('mouseenter', () => {
            cursor.style.transform = 'scale(1.5)';
            cursorFollower.style.transform = 'scale(1.5)';
        });
        
        element.addEventListener('mouseleave', () => {
            cursor.style.transform = 'scale(1)';
            cursorFollower.style.transform = 'scale(1)';
        });
    });
    // Navbar scroll effect and hero image scroll animation
    const navbar = document.querySelector('.navbar');
    const heroImageContainer = document.querySelector('.hero-image-container');
    
    window.addEventListener('scroll', () => {
        const scrolled = window.scrollY;
        
        // Navbar scroll effect
        if (scrolled > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
        
        // Hero image scroll-triggered hover effect
        if (heroImageContainer) {
            if (scrolled > 50) {
                heroImageContainer.classList.add('scroll-active');
            } else {
                heroImageContainer.classList.remove('scroll-active');
            }
        }
    });

    // Show on scroll effect with Intersection Observer
    const scrollElements = document.querySelectorAll('.show-on-scroll');
    const observer = new IntersectionObserver(
        (entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                } else {
                    entry.target.classList.remove('visible');
                }
            });
        },
        { threshold: 0.1, rootMargin: '0px 0px -50px 0px' }
    );
    scrollElements.forEach((element) => observer.observe(element));

    // Active navbar link effect (Scrollspy)
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('#menu a');
    window.addEventListener('scroll', () => {
        let currentSection = '';
        sections.forEach((section) => {
            const sectionTop = section.offsetTop;
            if (window.scrollY >= sectionTop - 60) {
                currentSection = section.getAttribute('id');
            }
        });
        navLinks.forEach((link) => {
            link.classList.remove('active');
            if (link.getAttribute('href').substring(1) === currentSection) {
                link.classList.add('active');
            }
        });
    });

    // Typed.js for Hero section
    if (typeof Typed !== 'undefined') {
        new Typed('.typed-text', {
            strings: ['Full-Stack Developer', 'Problem Solver', 'Software Engineer', 'Computer Science Engineer'],
            typeSpeed: 50,
            backSpeed: 25,
            backDelay: 1000,
            loop: true
        });
    } else {
        console.error('Typed.js not loaded');
        document.querySelector('.typed-text').textContent = 'Full-Stack Developer';
    }

    // Particle.js for Hero section with enhanced config
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 120, density: { enable: true, value_area: 800 } },
                color: { value: ['#3b82f6', '#a855f7', '#ec4899'] },
                shape: { 
                    type: ['circle', 'triangle'], 
                    stroke: { width: 0, color: '#000000' } 
                },
                opacity: { 
                    value: 0.6, 
                    random: true, 
                    anim: { enable: true, speed: 1, opacity_min: 0.1, sync: false } 
                },
                size: { 
                    value: 4, 
                    random: true, 
                    anim: { enable: true, speed: 2, size_min: 0.1, sync: false } 
                },
                line_linked: { 
                    enable: true, 
                    distance: 150, 
                    color: '#ffffff', 
                    opacity: 0.3, 
                    width: 1 
                },
                move: { 
                    enable: true, 
                    speed: 3, 
                    direction: 'none', 
                    random: true, 
                    straight: false, 
                    out_mode: 'out', 
                    bounce: false,
                    attract: { enable: false, rotateX: 600, rotateY: 1200 }
                }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { 
                    onhover: { enable: true, mode: 'repulse' }, 
                    onclick: { enable: true, mode: 'push' }, 
                    resize: true 
                },
                modes: { 
                    repulse: { distance: 120, duration: 0.4 }, 
                    push: { particles_nb: 6 } 
                }
            },
            retina_detect: true
        });
    } else {
        console.error('Particle.js not loaded');
    }

    // Smooth scroll with offset for navbar
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            const target = document.querySelector(this.getAttribute('href'));
            if (target) {
                target.scrollIntoView({
                    behavior: 'smooth',
                    block: 'start'
                });
            }
        });
    });

    // Mobile menu functionality
    const menuToggle = document.getElementById('menu-toggle');
    const menuLinks = document.querySelectorAll('#menu a');
    const menu = document.getElementById('menu');
    
    // Close menu when clicking on a link
    menuLinks.forEach(link => {
        link.addEventListener('click', () => {
            menuToggle.checked = false;
            document.body.style.overflow = '';
        });
    });
    
    // Close menu when clicking on close button (::before pseudo-element)
    menu.addEventListener('click', (e) => {
        const rect = menu.getBoundingClientRect();
        const closeButtonArea = {
            top: rect.top + 32,
            right: rect.right - 32,
            bottom: rect.top + 82,
            left: rect.right - 82
        };
        
        if (e.clientX >= closeButtonArea.left && 
            e.clientX <= closeButtonArea.right && 
            e.clientY >= closeButtonArea.top && 
            e.clientY <= closeButtonArea.bottom) {
            menuToggle.checked = false;
            document.body.style.overflow = '';
        }
    });
    
    // Close menu when clicking outside menu items
    menu.addEventListener('click', (e) => {
        if (e.target === menu) {
            menuToggle.checked = false;
            document.body.style.overflow = '';
        }
    });
    
    // Simple menu toggle - only control overflow
    menuToggle.addEventListener('change', () => {
        if (menuToggle.checked) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = '';
        }
    });

    // Add parallax effect to floating shapes
    window.addEventListener('scroll', () => {
        const scrolled = window.pageYOffset;
        const shapes = document.querySelectorAll('.floating-shape');
        
        shapes.forEach((shape, index) => {
            const speed = 0.5 + (index * 0.1);
            shape.style.transform = `translateY(${scrolled * speed}px) rotate(${scrolled * 0.1}deg)`;
        });
    });

    // Testimonials carousel
    // const carousel = document.querySelector('.carousel');
    // const carouselItems = document.querySelectorAll('.carousel-item');
    // const prevBtn = document.querySelector('.carousel-btn.prev');
    // const nextBtn = document.querySelector('.carousel-btn.next');
    // let currentIndex = 0;

    // function updateCarousel() {
    //   carousel.style.transform = `translateX(-${currentIndex * 100}%)`;
    //   carouselItems.forEach((item, index) => {
    //     item.classList.toggle('active', index === currentIndex);
    //   });
    // }

    // prevBtn.addEventListener('click', () => {
    //   currentIndex = currentIndex > 0 ? currentIndex - 1 : carouselItems.length - 1;
    //   updateCarousel();
    // });

    // nextBtn.addEventListener('click', () => {
    //   currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
    //   updateCarousel();
    // });

    // Auto-slide every 5 seconds
    // setInterval(() => {
    //   currentIndex = currentIndex < carouselItems.length - 1 ? currentIndex + 1 : 0;
    //   updateCarousel();
    // }, 5000);

    // Initialize carousel
    // updateCarousel();
});

// Toggle Experience/Education Expand/Collapse
function toggleExperience(id) {
    const timelineItem = document.querySelector(`[data-experience="${id}"]`);
    const timelineContent = timelineItem.querySelector('.timeline-content');
    const expandBtn = timelineItem.querySelector('.expand-btn');
    const expandIcon = expandBtn.querySelector('.expand-icon');
    
    // Toggle between hidden and show classes
    if (timelineContent.classList.contains('hidden')) {
        timelineContent.classList.remove('hidden');
        // Use setTimeout to trigger transition after display change
        setTimeout(() => {
            timelineContent.classList.add('show');
        }, 10);
        expandIcon.style.transform = 'rotate(180deg)';
    } else {
        timelineContent.classList.remove('show');
        expandIcon.style.transform = 'rotate(0deg)';
        // Wait for transition to complete before hiding
        setTimeout(() => {
            timelineContent.classList.add('hidden');
        }, 500);
    }
}
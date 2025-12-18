document.addEventListener('DOMContentLoaded', () => {
    // Navbar scroll effect
    const navbar = document.querySelector('.navbar');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            navbar.classList.add('scrolled');
        } else {
            navbar.classList.remove('scrolled');
        }
    });

    // Dark mode toggle
    const darkModeToggle = document.getElementById('dark-mode-toggle');
    const body = document.body;
    darkModeToggle.addEventListener('click', () => {
        body.classList.toggle('dark-mode');
        const isDarkMode = body.classList.contains('dark-mode');
        darkModeToggle.innerHTML = isDarkMode
            ? `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`
            : `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"/></svg>`;
        localStorage.setItem('darkMode', isDarkMode);
    });

    // Load dark mode preference (default to dark mode)
    const darkModePreference = localStorage.getItem('darkMode') !== 'false';
    if (darkModePreference) {
        body.classList.add('dark-mode');
        darkModeToggle.innerHTML = `<svg class="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20.354 15.354A9 9 0 018.646 3.646 9.003 9.003 0 0012 21a9.003 9.003 0 008.354-5.646z"/></svg>`;
    }

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

    // Particle.js for Hero section
    if (typeof particlesJS !== 'undefined') {
        particlesJS('particles-js', {
            particles: {
                number: { value: 80, density: { enable: true, value_area: 800 } },
                color: { value: '#ffffff' },
                shape: { type: 'circle', stroke: { width: 0, color: '#000000' } },
                opacity: { value: 0.5, random: true, anim: { enable: false } },
                size: { value: 3, random: true, anim: { enable: false } },
                line_linked: { enable: true, distance: 150, color: '#ffffff', opacity: 0.4, width: 1 },
                move: { enable: true, speed: 2, direction: 'none', random: false, straight: false, out_mode: 'out', bounce: false }
            },
            interactivity: {
                detect_on: 'canvas',
                events: { onhover: { enable: true, mode: 'repulse' }, onclick: { enable: true, mode: 'push' }, resize: true },
                modes: { repulse: { distance: 100, duration: 0.4 }, push: { particles_nb: 4 } }
            },
            retina_detect: true
        });
    } else {
        console.error('Particle.js not loaded');
    }

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
document.addEventListener('DOMContentLoaded', () => {

    /* ==============================
       Navbar scroll effect
    ============================== */
    const navbar = document.getElementById('navbar');

    window.addEventListener('scroll', () => {
        navbar.classList.toggle('scrolled', window.scrollY > 100);
    });

    /* ==============================
       Scroll progress bar
    ============================== */
    const scrollProgress = document.getElementById('scrollProgress');

    window.addEventListener('scroll', () => {
        const scrollTop = document.documentElement.scrollTop;
        const height =
            document.documentElement.scrollHeight -
            document.documentElement.clientHeight;

        const scrolled = (scrollTop / height) * 100;
        scrollProgress.style.width = `${scrolled}%`;
    });

    /* ==============================
       Intersection Observer animations
    ============================== */
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -50px 0px'
    };

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
            }
        });
    }, observerOptions);

    document
        .querySelectorAll(
            '.section-header, .about-text, .service-card, .benefit-item, .contact-item'
        )
        .forEach(el => observer.observe(el));

    /* ==============================
       Stagger animations
    ============================== */
    document.querySelectorAll('.service-card').forEach((card, index) => {
        card.style.transitionDelay = `${index * 0.15}s`;
    });

    document.querySelectorAll('.benefit-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.2}s`;
    });

    document.querySelectorAll('.contact-item').forEach((item, index) => {
        item.style.transitionDelay = `${index * 0.15}s`;
    });

    /* ==============================
       Smooth scroll for anchor links
    ============================== */
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', e => {
            const target = document.querySelector(anchor.getAttribute('href'));
            if (!target) return;

            e.preventDefault();
            target.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        });
    });

    /* ==============================
       Mobile menu toggle
    ============================== */
    const menuToggle = document.querySelector('.menu-toggle');
    const mobileMenu = document.getElementById('mobileMenu');

    menuToggle.addEventListener('click', () => {
        const isOpen = mobileMenu.classList.toggle('active');

        mobileMenu.setAttribute('aria-hidden', !isOpen);
        document.body.classList.toggle('menu-open', isOpen);
    });

    mobileMenu.querySelectorAll('a').forEach(link => {
        link.addEventListener('click', () => {
            mobileMenu.classList.remove('active');
            mobileMenu.setAttribute('aria-hidden', 'true');
            document.body.classList.remove('menu-open');
        });
    });

    /* ==============================
       Footer year
    ============================== */
    const yearEl = document.getElementById('year');
    if (yearEl) {
        yearEl.textContent = new Date().getFullYear();
    }

});

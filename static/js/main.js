// Handle mobile menu toggle
document.addEventListener('DOMContentLoaded', function() {
    const menuButton = document.querySelector('.fa-bars').parentElement;
    
    menuButton.addEventListener('click', function() {
        // Add mobile menu functionality here
        console.log('Menu clicked');
    });

    // Handle search toggle
    const searchButton = document.querySelector('.fa-search').parentElement;
    
    searchButton.addEventListener('click', function() {
        // Add search functionality here
        console.log('Search clicked');
    });

    // Add smooth scrolling for all internal links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            document.querySelector(this.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

// Add lazy loading for images
document.addEventListener('DOMContentLoaded', function() {
    const images = document.querySelectorAll('img[data-src]');
    
    const imageObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const img = entry.target;
                img.src = img.dataset.src;
                img.removeAttribute('data-src');
                observer.unobserve(img);
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));
});

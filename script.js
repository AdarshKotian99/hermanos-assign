document.addEventListener('touchstart', function() {}, { passive: true });

// Initialize Owl Carousel
$(document).ready(function(){
    let isCarouselInitialized = false; // Track if the carousel is initialized

    // Function to initialize the Owl Carousel
    function initializeCarousel() {
        if (!isCarouselInitialized) {
            $(".owl-carousel").owlCarousel({
                loop: true,
                margin: 10,
                nav: true,
                autoplay: true,
                autoplayTimeout: 2000,
                responsive: {
                    0: { items: 1 },
                    600: { items: 2 },
                    1000: { items: 3 }
                }
            });
            isCarouselInitialized = true; // Mark as initialized
        }
    }

    // Function to destroy the Owl Carousel
    function destroyCarousel() {
        if (isCarouselInitialized) {
            $(".owl-carousel").trigger('destroy.owl.carousel'); // Destroy instance
            $(".owl-carousel").removeClass('owl-loaded owl-drag'); // Reset styles
            isCarouselInitialized = false; // Mark as not initialized
        }
    }

    // Function to handle layout changes based on screen width
    function handleLayoutChange() {
        if (window.innerWidth > 768) {
            initializeCarousel(); // Enable carousel for desktop
        } else {
            destroyCarousel(); // Disable carousel for mobile
        }
    }

    // Initial load
    handleLayoutChange();

    // Handle window resize events
    $(window).resize(function () {
        handleLayoutChange();
    });


    const sections = {
        home: $('.banner'),
        about: $('.about-section-main'),
        projects: $('.projects'),
        contact: $('.form-container')
    };

    const navLinks = {
        home: $('#home-link'),
        about: $('#about-link'),
        projects: $('#projects-link'),
        contact: $('#contact-link')
    };

     // Function to update the active link based on scroll position
     function updateActiveLink() {
        let scrollPos = $(window).scrollTop() + 100; // Adjust offset if needed

        for (let section in sections) {
            let sectionOffset = sections[section].offset().top;
            let sectionHeight = sections[section].outerHeight();

            if (scrollPos >= sectionOffset && scrollPos < sectionOffset + sectionHeight) {
                $('.nav-link').removeClass('active'); // Remove active from all
                navLinks[section].addClass('active'); // Highlight current section
            }
        }
    }

        // Run on scroll and page load to highlight the correct link
        $(window).on('scroll', updateActiveLink);
        updateActiveLink(); // Initial check
    
});

// Toggle Navbar for Mobile
const hamburger = document.getElementById('hamburger');
const navbar = document.querySelector('.navbar');

hamburger.addEventListener('click', () => {
    navbar.classList.toggle('active');
});

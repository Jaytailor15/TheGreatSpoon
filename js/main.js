(function ($) {
    "use strict";

    // Spinner
    var spinner = function () {
        setTimeout(function () {
            if ($('#spinner').length > 0) {
                $('#spinner').removeClass('show');
            }
        }, 1);
    };
    spinner();
    
    
    // Initiate the wowjs
    new WOW().init();

    // Service Filtering Functionality
    document.addEventListener('DOMContentLoaded', function() {
        const filterButtons = document.querySelectorAll('.filter-button-group .btn');
        const serviceItems = document.querySelectorAll('.service-item');
        
        // Add click event listeners to filter buttons
        filterButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active class from all buttons
                filterButtons.forEach(btn => btn.classList.remove('active'));
                
                // Add active class to clicked button
                this.classList.add('active');
                
                // Get filter value
                const filterValue = this.getAttribute('data-filter');
                
                // Filter items
                serviceItems.forEach(item => {
                    if (filterValue === '*' || item.classList.contains(filterValue.substring(1))) {
                        item.style.display = 'block';
                        // Trigger reflow for animation
                        void item.offsetWidth;
                        item.style.animation = 'fadeInUp 0.5s ease-out forwards';
                    } else {
                        item.style.display = 'none';
                    }
                });
            });
        });
        
        // Initialize Isotope for filtering
        const grid = document.querySelector('.service-container');
        if (grid) {
            // Initialize with vanilla JS fallback if Isotope is not available
            if (typeof Isotope === 'undefined') {
                console.log('Isotope not loaded, using fallback filtering');
            } else {
                // Initialize Isotope with vanilla JS
                const iso = new Isotope(grid, {
                    itemSelector: '.service-item',
                    layoutMode: 'fitRows',
                    stagger: 30,
                    transitionDuration: '0.7s',
                    hiddenStyle: {
                        opacity: 0,
                        transform: 'translateY(20px)'
                    },
                    visibleStyle: {
                        opacity: 1,
                        transform: 'translateY(0)'
                    }
                });
                
                // Filter with button click
                filterButtons.forEach(button => {
                    button.addEventListener('click', function() {
                        const filterValue = this.getAttribute('data-filter');
                        iso.arrange({
                            filter: filterValue,
                            transitionDuration: '0.7s'
                        });
                    });
                });
            }
        }
    });

    // Sticky Navbar
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.sticky-top').addClass('bg-white shadow-sm').css('top', '0px');
        } else {
            $('.sticky-top').removeClass('bg-white shadow-sm').css('top', '-150px');
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 1500, 'easeInOutExpo');
        return false;
    });


    // Header carousel
    $(".header-carousel").owlCarousel({
        autoplay: true,
        smartSpeed: 1000,
        loop: true,
        dots: true,
        items: 1
    });


    // Testimonials carousel
    $(".testimonial-carousel").owlCarousel({
        items: 1,
        autoplay: true,
        smartSpeed: 1000,
        animateIn: 'fadeIn',
        animateOut: 'fadeOut',
        dots: true,
        loop: true,
        nav: false
    });
    
})(jQuery);


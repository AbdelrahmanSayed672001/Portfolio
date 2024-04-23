function toggleDarkMode() {
    var element = document.body;
    element.classList.toggle("dark-mode");

    // Store the current mode preference in localStorage
    var isDarkModeEnabled = element.classList.contains("dark-mode");
    localStorage.setItem("darkMode", isDarkModeEnabled);

    // Update moon icon based on dark mode status
    var darkModeIcon = document.getElementById('darkModeIcon');
    if (isDarkModeEnabled) {
        darkModeIcon.classList.remove('bi-moon');
        darkModeIcon.classList.add('bi-moon-stars-fill');
    } else {
        darkModeIcon.classList.remove('bi-moon-stars-fill');
        darkModeIcon.classList.add('bi-moon');
    }
}

// Function to check the initial mode preference and apply it
function checkDarkModePreference() {
    var isDarkModeEnabled = localStorage.getItem("darkMode") === "true";
    var element = document.body;
    
    if (isDarkModeEnabled) {
        element.classList.add("dark-mode");
        // Update moon icon
        var darkModeIcon = document.getElementById('darkModeIcon');
        darkModeIcon.classList.remove('bi-moon');
        darkModeIcon.classList.add('bi-moon-stars-fill');
    } else {
        element.classList.remove("dark-mode");
        // Update moon icon
        var darkModeIcon = document.getElementById('darkModeIcon');
        darkModeIcon.classList.remove('bi-moon-stars-fill');
        darkModeIcon.classList.add('bi-moon');
    }
}

// Check the initial mode preference when the page loads
document.addEventListener("DOMContentLoaded", function() {
    checkDarkModePreference();
});



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


    // Navbar on scrolling
    $(window).scroll(function () {
        if ($(this).scrollTop() > 100) {
            $('.navbar').fadeIn('slow').css('display', 'flex');
        } else {
            $('.navbar').fadeOut('slow').css('display', 'none');
        }
    });


    // Smooth scrolling on the navbar links
    $(".navbar-nav a").on('click', function (event) {
        if (this.hash !== "") {
            event.preventDefault();
            
            $('html, body').animate({
                scrollTop: $(this.hash).offset().top - 45
            }, 100, 'easeInOutExpo');
            
            if ($(this).parents('.navbar-nav').length) {
                $('.navbar-nav .active').removeClass('active');
                $(this).closest('a').addClass('active');
            }
        }
    });
    
    
    // Back to top button
    $(window).scroll(function () {
        if ($(this).scrollTop() > 300) {
            $('.back-to-top').fadeIn('slow');
        } else {
            $('.back-to-top').fadeOut('slow');
        }
    });
    $('.back-to-top').click(function () {
        $('html, body').animate({scrollTop: 0}, 100, 'easeInOutExpo');
        return false;
    });
    

    // Typed Initiate
    if ($('.typed-text-output').length == 1) {
        var typed_strings = $('.typed-text').text();
        var typed = new Typed('.typed-text-output', {
            strings: typed_strings.split(', '),
            typeSpeed: 100,
            backDelay: 1200,
            backSpeed: 20,
            smartBackspace: false,
            loop: true
        });
    }

    // Skills
    $('.skill').waypoint(function () {
        $('.progress .progress-bar').each(function () {
            $(this).css("width", $(this).attr("aria-valuenow") + '%');
        });
    }, {offset: '80%'});


    // Portfolio isotope and filter
    var portfolioIsotope = $('.portfolio-container').isotope({
        itemSelector: '.portfolio-item',
        layoutMode: 'fitRows'
    });
    $('#portfolio-flters li').on('click', function () {
        $("#portfolio-flters li").removeClass('active');
        $(this).addClass('active');

        portfolioIsotope.isotope({filter: $(this).data('filter')});
    });

})(jQuery);

(function() {
    emailjs.init("Fa9vlKAP4-mP0mrgf"); // Replace with your EmailJS user ID

    document.getElementById('contactForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var formData = {
            email: document.getElementById('email').value,
            subject: document.getElementById('subject').value,
            message: document.getElementById('message').value
        };

        // Send email using EmailJS
        emailjs.send("service_iu15jk9", "template_zek1tnn", formData)
            .then(function(response) {
                toastr.success('Your message has been sent successfully.');
            }, function(error) {
                toastr.error('Failed to send your message. Please try again later.');
            });
    });
})();



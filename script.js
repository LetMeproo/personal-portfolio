document.addEventListener('scroll', function() {
    const navbar = document.querySelector('.navbar-custom');
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
});



// auto type for type.js libraray
document.addEventListener('DOMContentLoaded', function () {
    var options = {
        strings: [" Frontend Dev", " UI-UX", " Digital Marketing"],
        typeSpeed: 50,
        backSpeed: 25,
        backDelay: 2000,
        startDelay: 500,
        loop: true
    };

    var typed = new Typed('#typed', options);
});

// animation main card 
document.addEventListener('DOMContentLoaded', function () {
    const section = document.querySelector('#main-card');

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                section.classList.add('show');
            }
        });
    }, {
        threshold: 0.10 // Trigger when 10% of the element is in view
    });

    observer.observe(section);
});



// project part
document.addEventListener('DOMContentLoaded', () => {
    const projects = document.querySelectorAll('.project');

    projects.forEach(project => {
        project.addEventListener('mouseover', () => {
            const description = project.querySelector('.description');
            description.style.display = 'block';
        });

        project.addEventListener('mouseout', () => {
            const description = project.querySelector('.description');
            description.style.display = 'none';
        });
    });
});
document.addEventListener('DOMContentLoaded', function () {
    const projects = document.querySelectorAll('#projects-section .project');

    function checkVisibility() {
        const triggerBottom = window.innerHeight / 5 * 4;

        projects.forEach(project => {
            const boxTop = project.getBoundingClientRect().top;

            if (boxTop < triggerBottom) {
                project.classList.add('visible');
            } else {
                project.classList.remove('visible');
            }
        });
    }

    window.addEventListener('scroll', checkVisibility);
    checkVisibility();
});


// button arrow up 
// Get the button
const scrollToTopBtn = document.getElementById('scrollToTopBtn');

// When the user scrolls down 100px from the top of the document, show the button
window.onscroll = function () {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollToTopBtn.style.display = "flex";
    } else {
        scrollToTopBtn.style.display = "none";
    }
};

// When the user clicks on the button, scroll to the top of the document
scrollToTopBtn.addEventListener('click', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Download Cv
function downloadPDF() {
    window.location.href = 'cv.pdf'; 
}

// testimionals slider
const slides = document.querySelectorAll('.slide');
let currentIndex = 0;

function showNextSlide() {
    slides[currentIndex].classList.remove('active');
    currentIndex = (currentIndex + 1) % slides.length;
    slides[currentIndex].classList.add('active');

    slides.forEach((slide, index) => {
        slide.style.transform = `translateX(-${currentIndex * 100}%)`;
    });
}

setInterval(showNextSlide, 4000);

// Initialize the first slide as active
slides[0].classList.add('active');

// contact form for emailjs library

(function() {
    emailjs.init('EJRkxyc5twkQFJJQx'); 
})();

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();
    emailjs.sendForm('service_m3tdqcd', 'template_qu06n8o', this)
        .then(function() {
            alert('Message sent successfully!');
        }, function(error) {
            alert('Failed to send message. Error: ' + JSON.stringify(error));
        });
});
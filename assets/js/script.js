/*=============== SHOW MENU ===============*/
const navMenu = document.getElementById('nav-menu');
const navToggle = document.getElementById('nav-toggle');
const navClose = document.getElementById('nav-close');

// Menu show
if (navToggle) {
  navToggle.addEventListener('click', () => {
    navMenu.classList.add('show-menu');
  });
}

// Menu hide
if (navClose) {
  navClose.addEventListener('click', () => {
    navMenu.classList.remove('show-menu');
  });
}

/*=============== REMOVE MENU MOBILE ===============*/
const navLinks = document.querySelectorAll('.nav__link');

function linkAction() {
  const navMenu = document.getElementById('nav-menu');
  // When clicking on each nav__link, remove the show-menu class
  navMenu.classList.remove('show-menu');
}
navLinks.forEach(n => n.addEventListener('click', linkAction));

/*=============== CHANGE BACKGROUND HEADER ===============*/
function scrollHeader() {
  const header = document.getElementById('header');
  // When the scroll is greater than 50 viewport height, add the scroll-header class
  if (this.scrollY >= 50) {
    header.classList.add('scroll-header');
  } else {
    header.classList.remove('scroll-header');
  }
}
window.addEventListener('scroll', scrollHeader);

/*=============== SCROLL SECTIONS ACTIVE LINK ===============*/
const sections = document.querySelectorAll('section[id]');

function scrollActive() {
  const scrollY = window.pageYOffset;

  sections.forEach(current => {
    const sectionHeight = current.offsetHeight;
    const sectionTop = current.offsetTop - 100;
    const sectionId = current.getAttribute('id');
    const sectionsClass = document.querySelector('.nav__menu a[href*=' + sectionId + ']');

    if (sectionsClass) {
      if (scrollY > sectionTop && scrollY <= sectionTop + sectionHeight) {
        sectionsClass.classList.add('active-link');
      } else {
        sectionsClass.classList.remove('active-link');
      }
    }
  });
}
window.addEventListener('scroll', scrollActive);

/*=============== SHOW SCROLL UP ===============*/
function scrollUp() {
  const scrollUp = document.getElementById('scroll-top');
  // When the scroll is higher than 400 viewport height, add the show-scroll class
  if (this.scrollY >= 400) {
    scrollUp.classList.add('show-scroll');
  } else {
    scrollUp.classList.remove('show-scroll');
  }
}
window.addEventListener('scroll', scrollUp);

/*=============== SMOOTH SCROLL ===============*/
// Smooth scrolling for all anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    const target = document.querySelector(this.getAttribute('href'));
    
    if (target) {
      const headerHeight = document.getElementById('header').offsetHeight;
      const targetPosition = target.offsetTop - headerHeight;
      
      window.scrollTo({
        top: targetPosition,
        behavior: 'smooth'
      });
    }
  });
});

/*=============== CONTACT FORM SUBMISSION ===============*/
const contactForm = document.getElementById('contact-form');
const formMessage = document.getElementById('form-message');

if (contactForm) {
  contactForm.addEventListener('submit', function(e) {
    e.preventDefault();
    
    // Get form values
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const subject = document.getElementById('subject').value;
    const message = document.getElementById('message').value;
    
    // Basic validation
    if (name && email && subject && message) {
      // Show success message
      formMessage.textContent = 'Thank you for your message! I will get back to you soon.';
      formMessage.classList.remove('error');
      formMessage.classList.add('success');
      
      // Reset form
      contactForm.reset();
      
      // Hide message after 5 seconds
      setTimeout(() => {
        formMessage.classList.remove('success');
        formMessage.style.display = 'none';
      }, 5000);
      
      // In a real application, you would send the form data to a server here
      // Example using fetch:
      /*
      fetch('your-server-endpoint', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          name: name,
          email: email,
          subject: subject,
          message: message
        })
      })
      .then(response => response.json())
      .then(data => {
        console.log('Success:', data);
      })
      .catch((error) => {
        console.error('Error:', error);
        formMessage.textContent = 'Sorry, there was an error sending your message. Please try again.';
        formMessage.classList.remove('success');
        formMessage.classList.add('error');
      });
      */
    } else {
      // Show error message
      formMessage.textContent = 'Please fill in all fields.';
      formMessage.classList.remove('success');
      formMessage.classList.add('error');
      
      // Hide message after 3 seconds
      setTimeout(() => {
        formMessage.classList.remove('error');
        formMessage.style.display = 'none';
      }, 3000);
    }
  });
}

/*=============== CURRENT YEAR ===============*/
// Automatically update copyright year
const currentYearElement = document.getElementById('current-year');
if (currentYearElement) {
  currentYearElement.textContent = new Date().getFullYear();
}

/*=============== SCROLL REVEAL ANIMATION ===============*/
// Simple scroll reveal animation
function revealOnScroll() {
  const reveals = document.querySelectorAll('.skill__card, .portfolio__item, .testimonial__card');
  
  reveals.forEach(element => {
    const windowHeight = window.innerHeight;
    const elementTop = element.getBoundingClientRect().top;
    const elementVisible = 150;
    
    if (elementTop < windowHeight - elementVisible) {
      element.classList.add('fade-in');
    }
  });
}

window.addEventListener('scroll', revealOnScroll);

// Initial check on page load
window.addEventListener('load', revealOnScroll);

/*=============== THEME CUSTOMIZATION (Optional Enhancement) ===============*/
// You can add theme switching functionality here if desired
// Example: Dark mode toggle, color scheme switcher, etc.

/*
// Example: Simple dark mode toggle
const themeToggle = document.getElementById('theme-toggle'); // You would need to add this button to HTML

if (themeToggle) {
  themeToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    // Save preference to localStorage
    if (document.body.classList.contains('dark-theme')) {
      localStorage.setItem('theme', 'dark');
    } else {
      localStorage.setItem('theme', 'light');
    }
  });
  
  // Check for saved theme preference
  const currentTheme = localStorage.getItem('theme');
  if (currentTheme === 'dark') {
    document.body.classList.add('dark-theme');
  }
}
*/

/*=============== PORTFOLIO FILTER (Optional Enhancement) ===============*/
// You can add portfolio filtering by category here if desired
/*
const filterButtons = document.querySelectorAll('.filter-btn');
const portfolioItems = document.querySelectorAll('.portfolio__item');

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    // Remove active class from all buttons
    filterButtons.forEach(btn => btn.classList.remove('active'));
    // Add active class to clicked button
    button.classList.add('active');
    
    const filterValue = button.getAttribute('data-filter');
    
    portfolioItems.forEach(item => {
      if (filterValue === 'all') {
        item.style.display = 'block';
      } else {
        if (item.classList.contains(filterValue)) {
          item.style.display = 'block';
        } else {
          item.style.display = 'none';
        }
      }
    });
  });
});
*/

/*=============== TYPING ANIMATION (Optional Enhancement) ===============*/
// Add a typing effect to the hero title
/*
function typeWriter(element, text, speed = 100) {
  let i = 0;
  element.innerHTML = '';
  
  function type() {
    if (i < text.length) {
      element.innerHTML += text.charAt(i);
      i++;
      setTimeout(type, speed);
    }
  }
  
  type();
}

// Usage example:
window.addEventListener('load', () => {
  const heroTitle = document.querySelector('.hero__title-accent');
  if (heroTitle) {
    const originalText = heroTitle.textContent;
    typeWriter(heroTitle, originalText, 100);
  }
});
*/

/*=============== LOADING ANIMATION ===============*/
// Optional: Add page loading animation
window.addEventListener('load', () => {
  document.body.classList.add('loaded');
});

/*=============== INTERSECTION OBSERVER (Modern Alternative to Scroll Events) ===============*/
// More performant way to handle scroll animations
/*
const observerOptions = {
  threshold: 0.1,
  rootMargin: '0px 0px -100px 0px'
};

const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add('fade-in');
      observer.unobserve(entry.target);
    }
  });
}, observerOptions);

// Observe all cards
document.querySelectorAll('.skill__card, .portfolio__item, .testimonial__card').forEach(el => {
  observer.observe(el);
});
*/

/*=============== FORM VALIDATION ENHANCEMENT ===============*/
// Add real-time form validation feedback
const formInputs = document.querySelectorAll('.form__input, .form__textarea');

formInputs.forEach(input => {
  input.addEventListener('blur', function() {
    if (this.value.trim() === '') {
      this.style.borderColor = 'hsl(0, 60%, 50%)';
    } else {
      this.style.borderColor = 'var(--border-color)';
    }
  });
  
  input.addEventListener('focus', function() {
    this.style.borderColor = 'var(--primary-color)';
  });
});

// Email validation
const emailInput = document.getElementById('email');
if (emailInput) {
  emailInput.addEventListener('blur', function() {
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (this.value && !emailPattern.test(this.value)) {
      this.style.borderColor = 'hsl(0, 60%, 50%)';
    } else if (this.value) {
      this.style.borderColor = 'hsl(120, 60%, 50%)';
    }
  });
}

/*=============== PREVENT DEFAULT FORM BEHAVIOR ===============*/
// Ensure forms don't submit traditionally
document.querySelectorAll('form').forEach(form => {
  form.addEventListener('submit', function(e) {
    // Form submission is handled by the contact form listener above
    // This ensures no other forms submit unexpectedly
  });
});

/*=============== CONSOLE MESSAGE ===============*/
// Optional: Add a fun console message for developers
console.log('%c🎨 Professional Portfolio Template', 'color: #3b82f6; font-size: 20px; font-weight: bold;');
console.log('%cBuilt with HTML, CSS, and Vanilla JavaScript', 'color: #6b7280; font-size: 14px;');
console.log('%cFeel free to customize and make it your own!', 'color: #10b981; font-size: 14px;');

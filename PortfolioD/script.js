// Smooth Scrolling for Navigation Links
document.querySelectorAll('.menu a').forEach(link => {
    link.addEventListener('click', event => {
      event.preventDefault();
      const targetId = event.target.getAttribute('href').slice(1);
      const targetElement = document.getElementById(targetId);
      
      if (targetElement) {
        window.scrollTo({
          top: targetElement.offsetTop - 70,
          behavior: 'smooth',
        });
      }
    });
  });
  
  // Hero Section Button Hover Effect
  document.querySelectorAll('.hero-buttons .btn').forEach(button => {
    button.addEventListener('mouseenter', () => {
      button.style.transform = 'scale(1.1)';
    });
    button.addEventListener('mouseleave', () => {
      button.style.transform = 'scale(1)';
    });
  });
  
  // Form Submission Handling
  document.querySelector('.contact-form').addEventListener('submit', event => {
    event.preventDefault(); // Prevent default form submission
    alert('Xabaringiz muvaffaqiyatli yuborildi!');
  
    // Clear form fields
    event.target.reset();
  });
  
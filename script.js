const navbarLinks = document.querySelectorAll('.navbar a');

navbarLinks.forEach(link => {
  link.addEventListener('click', function(event) {
    event.preventDefault(); 

    const sectionId = this.getAttribute('href'); 
    const targetSection = document.querySelector(sectionId); 

    targetSection.scrollIntoView({ behavior: 'smooth' }); 
  });
});


const contactForm = document.querySelector('form');

contactForm.addEventListener('submit', function(event) {
  event.preventDefault();
  alert('Form submitted successfully!'); 
  contactForm.reset(); 
});

// JavaScript to handle form submission
document.getElementById("contact-form").addEventListener("submit", function(event) {
    event.preventDefault();
  
    const name = document.getElementById("name").value;
    const email = document.getElementById("email").value;
    const message = document.getElementById("message").value;
  
    // Simple form validation
    if (name && email && message) {
      alert(`Thank you, ${name}! Your message has been sent.`);
      document.getElementById("contact-form").reset(); // Reset the form after submission
    } else {
      alert("Please fill in all fields.");
    }
  });
  
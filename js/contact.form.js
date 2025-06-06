document.getElementById("contact-form").addEventListener("submit", function (e) {
    e.preventDefault(); 
  
    const name = this.name.value.trim();
    const number = this.email.value.trim(); 
    const email = this.subject.value.trim();
    const message = this.message.value.trim();
  
    if (!name || !number || !email || !message) {
      alert("Please fill in all fields.");
      return;
    }
  
    if (!/^\d{7,15}$/.test(number)) {
      alert("Please enter a valid phone number (only digits, 7–15 characters).");
      return;
    }
  
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      alert("Please enter a valid email address.");
      return;
    }
  
    alert("Form submitted successfully!");
    this.reset();
  });
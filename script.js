document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("formMessage").innerText = "Thanks! We'll contact you soon.";
});

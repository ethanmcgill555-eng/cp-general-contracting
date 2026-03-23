document.getElementById("contactForm").addEventListener("submit", function(e) {
  e.preventDefault();
  document.getElementById("msg").innerText = "Thanks! We'll contact you soon.";
});

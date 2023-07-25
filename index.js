document.addEventListener("DOMContentLoaded", function() {
    const contactLink = document.getElementById("contactLink");
    const customModal = document.getElementById("customModal");
  
    // Add event listener to the Contact Us link
    contactLink.addEventListener("click", function (event) {
      event.preventDefault(); // Prevent the link from redirecting (optional)
      // If we are on the index.html (home page), redirect to contact.html
      window.location.href = "contact.html";
    });
  });
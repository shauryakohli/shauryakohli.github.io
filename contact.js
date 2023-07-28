document.addEventListener("DOMContentLoaded", function() {
  const contactLink = document.getElementById("contactLink");
  const customModal = document.getElementById("customModal");

  // Function to show the pop-up (modal)
  function displayModal() {
    customModal.style.display = "block";
  }

  // Close the pop-up when clicking the close button (x)
  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", function() {
    customModal.style.display = "none";
  });

  // Close the pop-up when clicking outside the modal content
  window.addEventListener("click", function(event) {
    if (event.target === customModal) {
      customModal.style.display = "none";
    }
  });

  // Show the pop-up on hover
  contactLink.addEventListener("mouseover", displayModal);

  // Hide the pop-up when mouse is not hovering over the link
  contactLink.addEventListener("mouseout", function() {
    customModal.style.display = "none";
  });
});
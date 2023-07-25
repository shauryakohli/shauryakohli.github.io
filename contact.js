document.addEventListener("DOMContentLoaded", function() {
  const customModal = document.getElementById("customModal");
  const contactLink = document.getElementById("contactLink");
  let timer;

  // Function to display the pop-up (modal)
  function displayModal() {
    customModal.style.display = "block";
    clearTimeout(timer); // Clear the previous timer (if any)
  }

  // Function to hide the pop-up (modal)
  function hideModal() {
    customModal.style.display = "none";
  }

  // Add mouseenter and mouseleave event listeners
  contactLink.addEventListener("mouseenter", function () {
    // Show the modal when the user hovers over the link
    displayModal();
  });

  contactLink.addEventListener("mouseleave", function () {
    // Hide the modal when the user moves the mouse away from the link
    // Set a timer to hide the modal after 1 second (1000 milliseconds)
    timer = setTimeout(hideModal, 3500);
  });

  // Close the pop-up when clicking the close button (x)
  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", hideModal);

  // Close the pop-up when clicking outside the modal content
  window.addEventListener("click", function (event) {
    if (event.target === customModal) {
      hideModal();
    }
  });
});
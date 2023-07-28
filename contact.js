document.addEventListener("DOMContentLoaded", function() {
  const contactLink = document.getElementById("contactLink");
  const customModal = document.getElementById("customModal");
  const closeModalBtn = document.getElementById("closeModal");

  // Function to show the pop-up (modal)
  function displayModal() {
    customModal.style.display = "block";
  }

  // Function to hide the pop-up (modal)
  function hideModal() {
    customModal.style.display = "none";
  }

  // Add event listener to the Contact Us link to show the pop-up on hover
  contactLink.addEventListener("mouseenter", function() {
    displayModal();
  });

  // Add event listener to the X button to hide the pop-up
  closeModalBtn.addEventListener("click", function() {
    hideModal();
  });

  // Close the pop-up when the mouse leaves the link or the modal
  document.addEventListener("mouseleave", function(event) {
    if (
      event.target !== contactLink &&
      event.target !== customModal &&
      !contactLink.contains(event.target) &&
      !customModal.contains(event.target)
    ) {
      hideModal();
    }
  });
});
document.addEventListener("DOMContentLoaded", function() {
  const contactLink = document.getElementById("contactLink");
  const customModal = document.getElementById("customModal");

  // Add event listener to the Contact Us link
  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from redirecting (optional)
    displayModal();
  });

  // Function to display the pop-up (modal)
  function displayModal() {
    customModal.style.display = "block";
  }

  // Close the pop-up when clicking the close button (x)
  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", function () {
    customModal.style.display = "none";
  });
});








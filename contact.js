const contactLink = document.getElementById("contactLink");
const customModal = document.getElementById("customModal");
const closeBtn = document.getElementById("closeModal");
let hoverTimeoutId;

// Function to show the contact box on hover
contactLink.addEventListener("mouseenter", function () {
  customModal.style.display = "block";
});

// Function to hide the contact box when the mouse leaves the link
contactLink.addEventListener("mouseleave", function () {
  clearTimeout(hoverTimeoutId);
  hoverTimeoutId = setTimeout(() => {
    customModal.style.display = "none";
  }, 20000); // Adjust the delay time (in milliseconds) as needed
});

// Function to close the contact box when clicking the close button (x)
closeBtn.addEventListener("click", function () {
  customModal.style.display = "none";
});

// Function to close the contact box when clicking outside the modal content
window.addEventListener("click", function (event) {
  if (event.target === customModal) {
    customModal.style.display = "none";
  }
});







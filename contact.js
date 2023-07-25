document.addEventListener("DOMContentLoaded", function() {
  const contactLink = document.getElementById("contactLink");
  const customModal = document.getElementById("customModal");
  let timeoutId;

  // Function to display the pop-up (modal)
  function displayModal() {
    customModal.style.display = "block";
  }

  // Close the pop-up when clicking the close button (x)
  const closeModalBtn = document.getElementById("closeModal");
  closeModalBtn.addEventListener("click", function () {
    customModal.style.display = "none";
  });

  // Add event listener to the Contact Us link
  contactLink.addEventListener("click", function (event) {
    event.preventDefault(); // Prevent the link from redirecting (optional)
    displayModal();
  });

  // Function to hide the anchor content with a brief delay
  function hideAnchorContent() {
    timeoutId = setTimeout(() => {
      // Set the display property of anchor content to "none"
      // when the mouse leaves the anchor element
      this.style.display = "none";
    }, 600); // Adjust the delay time (in milliseconds) as needed
  }

  // Get all anchor elements on the entire website
  const anchorTags = document.querySelectorAll("a");

  // Add event listeners for hover events for each anchor element
  anchorTags.forEach((anchor) => {
    anchor.classList.add("hover-underline");

    anchor.addEventListener("mouseenter", function() {
      clearTimeout(timeoutId);
      // Set the display property of anchor content to "block"
      // when the mouse enters the anchor element
      this.style.display = "block";
    });

    anchor.addEventListener("mouseleave", hideAnchorContent);
  });
});
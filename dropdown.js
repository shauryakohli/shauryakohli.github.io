const dropdown = document.querySelector(".dropdown");
const dropdownContent = document.querySelector(".dropdown-content");
let timeoutId;

// Function to show the dropdown content
function showDropdownContent() {
  clearTimeout(timeoutId);
  dropdownContent.style.display = "block";
}

// Function to hide the dropdown content with a brief delay
function hideDropdownContent() {
  timeoutId = setTimeout(() => {
    dropdownContent.style.display = "none";
  }, 600); // Adjust the delay time (in milliseconds) as needed
}

// Add event listeners for hover events
dropdown.addEventListener("mouseenter", showDropdownContent);
dropdown.addEventListener("mouseleave", hideDropdownContent);
dropdownContent.addEventListener("mouseenter", showDropdownContent);
dropdownContent.addEventListener("mouseleave", hideDropdownContent);

// Redirect to the respective pages on link click
const dropdownLinks = dropdownContent.querySelectorAll("h3");
dropdownLinks.forEach(link => {
  link.addEventListener("click", function(event) {
    event.preventDefault();
    const linkText = link.textContent.trim().toLowerCase();
    if (linkText === "gallery") {
      window.location.href = "index.html#catg";
    } else {
      // Redirect to the respective page based on the link text
      window.location.href = linkText + ".html";
    }
  });
});
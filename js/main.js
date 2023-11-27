document.addEventListener("DOMContentLoaded", function () {
  // Get the current page URL
  const currentLocation = window.location.href;

  // Select all navigation links
  const navLinks = document.querySelectorAll('.navbar a');

  // Iterate over each link and check if its href matches the current page URL
  navLinks.forEach(link => {
    if (link.href === currentLocation) {
      link.classList.add('active'); // Add 'active' class to the matching link
    }
  });
});

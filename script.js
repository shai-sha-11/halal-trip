// Optional: Toggle the search input visibility when clicking the search icon
document.getElementById('search-btn').addEventListener('click', function () {
  const searchInput = document.getElementById('search-input');
  if (searchInput.style.display === 'none' || searchInput.style.display === '') {
      searchInput.style.display = 'block';
  } else {
      searchInput.style.display = 'none';
  }
});
// Get the button
const backToTopButton = document.getElementById("back-to-top");

// Show the button when scrolling down 200px from the top
window.onscroll = function () {
    if (document.body.scrollTop > 200 || document.documentElement.scrollTop > 200) {
        backToTopButton.classList.add("show");
    } else {
        backToTopButton.classList.remove("show");
    }
};

// Scroll to the top when the button is clicked
backToTopButton.addEventListener("click", function () {
    window.scrollTo({
        top: 0,
        behavior: "smooth"  // Smooth scroll
    });
});
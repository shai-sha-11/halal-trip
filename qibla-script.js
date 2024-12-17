function getQiblaDirection() {
  if (navigator.geolocation) {
    navigator.geolocation.getCurrentPosition(showQiblaDirection, showError);
  } else {
    document.getElementById("location-message").innerText =
      "Geolocation is not supported by your browser.";
  }
}

function showQiblaDirection(position) {
  const userLat = position.coords.latitude;
  const userLng = position.coords.longitude;

  // Kaaba's coordinates
  const kaabaLat = 21.4225;
  const kaabaLng = 39.8262;

  // Calculate Qibla direction using the formula
  const deltaLng = (kaabaLng - userLng) * (Math.PI / 180);
  const userLatRad = userLat * (Math.PI / 180);
  const kaabaLatRad = kaabaLat * (Math.PI / 180);

  const x = Math.sin(deltaLng);
  const y =
    Math.cos(userLatRad) * Math.tan(kaabaLatRad) -
    Math.sin(userLatRad) * Math.cos(deltaLng);
  const qiblaAngle = Math.atan2(x, y) * (180 / Math.PI);

  const qiblaDirection = (qiblaAngle + 360) % 360;

  // Rotate the arrow dynamically
  const qiblaArrow = document.getElementById("qibla-arrow");
  qiblaArrow.style.transform = `translate(-50%, -50%) rotate(${qiblaDirection}deg)`;

  document.getElementById("location-message").innerText =
    "Qibla direction is set. Align yourself with the arrow.";
}

function showError(error) {
  let errorMessage = "Unable to determine location.";
  if (error.code === error.PERMISSION_DENIED) {
    errorMessage =
      "Location permission denied. Please enable location access and try again.";
  }
  document.getElementById("location-message").innerText = errorMessage;
}

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
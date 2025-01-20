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

// Aladhan API endpoint
const API_URL = "https://api.aladhan.com/v1/timings";

// Function to fetch location and prayer times
async function fetchPrayerTimes() {
    const locationInfo = document.getElementById("location-info");
    const prayerGrid = document.getElementById("prayer-grid");

    // Check if geolocation is available
    if (navigator.geolocation) {
        navigator.geolocation.getCurrentPosition(async (position) => {
            const latitude = position.coords.latitude;
            const longitude = position.coords.longitude;

            // Display location coordinates
            locationInfo.textContent = `Location: Latitude ${latitude.toFixed(2)}, Longitude ${longitude.toFixed(2)}`;

            try {
                // Fetch prayer times from Aladhan API
                const response = await fetch(`${API_URL}?latitude=${latitude}&longitude=${longitude}&method=2`);
                const data = await response.json();

                if (data.code === 200) {
                    const timings = data.data.timings;

                    // Map prayer times to HTML
                    const prayerTimesHTML = `
                        <div class="prayer-card">
                            <h3>Fajr</h3>
                            <p>${timings.Fajr}</p>
                        </div>
                        <div class="prayer-card">
                            <h3>Dhuhr</h3>
                            <p>${timings.Dhuhr}</p>
                        </div>
                        <div class="prayer-card">
                            <h3>Asr</h3>
                            <p>${timings.Asr}</p>
                        </div>
                        <div class="prayer-card">
                            <h3>Maghrib</h3>
                            <p>${timings.Maghrib}</p>
                        </div>
                        <div class="prayer-card">
                            <h3>Isha</h3>
                            <p>${timings.Isha}</p>
                        </div>
                    `;

                    prayerGrid.innerHTML = prayerTimesHTML;
                } else {
                    prayerGrid.innerHTML = "<p>Unable to fetch prayer times. Please try again later.</p>";
                }
            } catch (error) {
                console.error("Error fetching prayer times:", error);
                prayerGrid.innerHTML = "<p>Error fetching prayer times. Please try again.</p>";
            }
        }, () => {
            locationInfo.textContent = "Unable to access your location. Please enable location services.";
        });
    } else {
        locationInfo.textContent = "Geolocation is not supported by your browser.";
    }
}

// Call the function on page load
fetchPrayerTimes();

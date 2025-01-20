document.getElementById('trip-form').addEventListener('submit', (e) => {
  e.preventDefault();
});

// Adults count increase/decrease functionality
const adultsPlus = document.getElementById("adults-plus");
const adultsMinus = document.getElementById("adults-minus");
const adultsInput = document.getElementById("adults");

adultsPlus.addEventListener("click", () => {
  let currentValue = parseInt(adultsInput.value);
  adultsInput.value = currentValue + 1;
});

adultsMinus.addEventListener("click", () => {
  let currentValue = parseInt(adultsInput.value);
  if (currentValue > 0) {
    adultsInput.value = currentValue - 1;
  }
});

// Children count increase/decrease functionality
const childrenPlus = document.getElementById("children-plus");
const childrenMinus = document.getElementById("children-minus");
const childrenInput = document.getElementById("children");

childrenPlus.addEventListener("click", () => {
  let currentValue = parseInt(childrenInput.value);
  childrenInput.value = currentValue + 1;
});

childrenMinus.addEventListener("click", () => {
  let currentValue = parseInt(childrenInput.value);
  if (currentValue > 0) {
    childrenInput.value = currentValue - 1;
  }
});

// Predefined list of valid mahram relationships
const validMahrams = [
  "Mother", "Father", "Wife", "Husband", "Daughter", "Son", 
  "Grandmother", "Grandfather", "Grandson", "Granddaughter", 
  "Uncle", "Aunty","Sister","Brother","mother","father","wife","husband",
  "daughter", "son" , "grandmother" , "grandfather" , "grandson" , "granddaughter",
  "uncle","aunty", "sister","brother"
];

// Elements
const mahramInput = document.getElementById('mahram');
const mahramBtn = document.getElementById('add-mahram-btn');
const mahramMessage = document.getElementById('mahram-message');
const mahramsList = document.getElementById('mahrams');

// Function to update the mahram list and show message
function updateMahramsList(mahram, isValid) {
  const listItem = document.createElement('li');
  const deleteBtn = document.createElement('button');

  // If valid mahram, create delete button
  if (isValid) {
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
      listItem.remove();
      mahramMessage.classList.add('hidden');
    });
  }

  // If valid, display the mahram with a green background
  if (isValid) {
    listItem.textContent = `${mahram}`;
    listItem.style.backgroundColor = '#d4edda'; // Green background for valid mahrams
  } else {
    // If invalid, remove the mahram automatically
    mahramMessage.textContent = `${mahram} is not a mahram.`;
    mahramMessage.className = "error";
    mahramMessage.classList.remove('hidden');
    return; // Do not add invalid mahram to the list
  }

  // Append the delete button to the list item (only for valid mahrams)
  listItem.appendChild(deleteBtn);

  // Append the list item to the mahram list
  mahramsList.appendChild(listItem);
}

// Add event listener for button click
mahramBtn.addEventListener('click', () => {
  const mahram = mahramInput.value.trim();

  // Check if mahram is not empty
  if (mahram === "") {
    mahramMessage.textContent = "Please enter a mahram.";
    mahramMessage.className = "error";
    mahramMessage.classList.remove('hidden');
    return;
  }

  // Check if the mahram is valid
  const isValid = validMahrams.includes(mahram);

  // Display the appropriate message and update the list
  if (isValid) {
    mahramMessage.textContent = `${mahram} is a mahram. You can plan your trip with them!`;
    mahramMessage.className = "success";
  } else {
    mahramMessage.textContent = `${mahram} is not mahram. Please choose another person.`;
    mahramMessage.className = "error";
  }
  mahramMessage.classList.remove('hidden');

  // Update the mahram list with the new mahram
  updateMahramsList(mahram, isValid);

  // Clear the input field after adding the mahram
  mahramInput.value = '';
});


// Predefined list of allowed destinations
const allowedDestinations = [
  "Bekal Fort", "bekal fort",
  "Ranipuram Hills", "ranipuram hills",
  "Ranipuram", "ranipuram" , "panathur", "Panathur",
  "Kavvayi Backwaters", "kavvayi backwaters",
  "Kappil Beach", "kappil beach",
  "Malik Deenar Masjid", "malik deenar" , "malik deenar masjid",
  "Parappa Wildlife Sanctuary", "parappa wildlif sancturay",
  "Bekal","bekal",
  "Valiyaparamba","valiyaparamba",
  "Kappil","kappil",
  "Thalangara", "thalangara",
  "Parappa" , "parappa"
];

// Elements
const destinationInput = document.getElementById('destination');
const destinationBtn = document.getElementById('add-destination-btn');
const destinationMessage = document.getElementById('destination-message');
const destinationsList = document.getElementById('destinations');

// Function to update the destination list and show message
function updateDestinationsList(destination, isValid) {
  const listItem = document.createElement('li');
  const deleteBtn = document.createElement('button');

  // If valid destination, create delete button
  if (isValid) {
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => {
      listItem.remove();
      destinationMessage.classList.add('hidden');
    });
  }

  // If valid, display the destination with a green background
  if (isValid) {
    listItem.textContent = `${destination}`;
    listItem.style.backgroundColor = '#d4edda'; // Green background for valid destinations
  } else {
    // If invalid, remove the destination automatically
    destinationMessage.textContent = `${destination} is not a valid destination.`;
    destinationMessage.className = "error";
    destinationMessage.classList.remove('hidden');
    return; // Do not add invalid destination to the list
  }

  // Append the delete button to the list item (only for valid destinations)
  listItem.appendChild(deleteBtn);

  // Append the list item to the destination list
  destinationsList.appendChild(listItem);
}

// Add event listener for button click
destinationBtn.addEventListener('click', () => {
  const destination = destinationInput.value.trim();

  // Check if destination is not empty
  if (destination === "") {
    destinationMessage.textContent = "Please enter a destination.";
    destinationMessage.className = "error";
    destinationMessage.classList.remove('hidden');
    return;
  }

  // Check if the destination is valid
  const isValid = allowedDestinations.includes(destination);

  // Display the appropriate message and update the list
  if (isValid) {
    destinationMessage.textContent = `${destination} is a valid destination. You can plan your trip!`;
    destinationMessage.className = "success";
  } else {
    destinationMessage.textContent = `${destination} is not a valid destination. Choose another place`;
    destinationMessage.className = "error";
  }
  destinationMessage.classList.remove('hidden');

  // Update the destination list with the new destination
  updateDestinationsList(destination, isValid);

  // Clear the input field after adding the destination
  destinationInput.value = '';
});

// Get the budget input field
const budgetInput = document.getElementById('budget');

// Add event listener to update budget when changed
budgetInput.addEventListener('input', () => {
  const budgetValue = parseInt(budgetInput.value);
  console.log("Current budget: $" + budgetValue); // Use this value for further calculations
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


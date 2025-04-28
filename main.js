const navigation = document.getElementById('navigation');
const popupContainer = document.getElementById('popup-container');
const closePopup = document.getElementById('close-popup');

// Show the popup when the navigation button is clicked
navigation.addEventListener('click', () => {
  popupContainer.style.display = 'flex'; // Show the popup
});

// Close the popup when the close button is clicked
closePopup.addEventListener('click', () => {
  popupContainer.style.display = 'none'; // Hide the popup
});
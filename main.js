document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.getElementById('navigation');
  const popupContainer = document.getElementById('popup-container');
  const closePopup = document.getElementById('close-popup');

  // Show the popup when the navigation button is clicked
  if (navigation) {
    navigation.addEventListener('click', () => {
      popupContainer.classList.remove('hidden'); // Show the popup
    });
  }

  // Close the popup when the close button is clicked
  if (closePopup) {
    closePopup.addEventListener('click', () => {
      popupContainer.classList.add('hidden'); // Hide the popup
    });
  }
});
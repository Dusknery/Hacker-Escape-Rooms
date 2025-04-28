document.addEventListener('DOMContentLoaded', () => {
  const navigation = document.getElementById('navigation');
  const popupContainer = document.getElementById('popup-container');
  const closePopup = document.getElementById('close-popup');

  // Show the popup when the navigation button is clicked
  if (navigation) {
    navigation.addEventListener('click', () => {
      console.log('Navigation button clicked'); // Debugging log
      popupContainer.classList.add('show'); // Add the 'show' class
      popupContainer.classList.remove('hidden'); // Remove the 'hidden' class
      console.log('Popup container classes:', popupContainer.className); // Debugging log
    });
  }

  // Close the popup when the close button is clicked
  if (closePopup) {
    closePopup.addEventListener('click', () => {
      console.log('Close button clicked'); // Debugging log
      popupContainer.classList.remove('show'); // Remove the 'show' class
      popupContainer.classList.add('hidden'); // Add the 'hidden' class
      console.log('Popup container classes:', popupContainer.className); // Debugging log
    });
  }
});
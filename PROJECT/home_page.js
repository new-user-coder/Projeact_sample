// Get the destination elements and dialog box elements
const destinations = document.querySelectorAll('.page3_card1, .page3_card2, .page3_card3, .page3_card4, .page3_card5, .page3_card6');
const dialogs = document.querySelectorAll('.dialog');

// Add event listeners to the destination elements to open the dialog box
destinations.forEach((destination, index) => {
  destination.onclick = function() {
    dialogs[index].style.display = 'block';
  };
});

// Add event listeners to the close buttons to close the dialog box
dialogs.forEach((dialog) => {
  const closeButton = dialog.querySelector('.close');
  closeButton.onclick = function() {
    dialog.style.display = 'none';
  };
});
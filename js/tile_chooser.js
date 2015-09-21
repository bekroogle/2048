var tileChooser = function() {
  // Use the radio buttons for now.
  if (document.querySelector('form input').checked) {
    return 2;
  } else {
    return 4;
  }
};

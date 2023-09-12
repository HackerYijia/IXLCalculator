// Function to create the calculator
function createCalculator() {
  // Create the calculator element
  var calculator = document.createElement('div');
  calculator.id = 'calculator';
  // Add calculator functionality here...

  // Append the calculator to the document body
  document.body.appendChild(calculator);
}

// Function to remove the calculator
function removeCalculator() {
  var calculator = document.getElementById('calculator');
  if (calculator) {
    // Remove the calculator element
    calculator.parentNode.removeChild(calculator);
  }
}

// Function to open Google search in a new tab
function openGoogleSearch() {
  var searchTerm = prompt('Enter your search term:');
  if (searchTerm) {
    window.open('https://www.google.com/search?q=' + encodeURIComponent(searchTerm), '_blank');
  }
}

// Function to open YouTube videos as a popup
function openYouTubePopup() {
  var videoUrl = prompt('Enter the YouTube video URL:');
  if (videoUrl) {
    var popupWindow = window.open(videoUrl, 'YouTube Popup', 'width=800,height=600');
    popupWindow.focus();
  }
}

// Main function
function main() {
  var choice = prompt('Enter your choice: 1 for create calculator, 2 for remove calculator');

  if (choice === '1') {
    createCalculator();
  } else if (choice === '2') {
    removeCalculator();
  } else {
    alert('Invalid choice!');
  }

  var searchChoice = prompt('Enter your choice: 1 for Google search, 2 for YouTube popup');

  if (searchChoice === '1') {
    openGoogleSearch();
  } else if (searchChoice === '2') {
    openYouTubePopup();
  } else {
    alert('Invalid choice!');
  }
}

// Call the main function
main();

// scripts.js
function openDay(evt, dayName) {
    // Hide all tabcontent elements
    var i, tabcontent, tablinks;
    tabcontent = document.getElementsByClassName("tabcontent");
    for (i = 0; i < tabcontent.length; i++) {
      tabcontent[i].style.display = "none";
    }
  
    // Remove active class from all tablinks
    tablinks = document.getElementsByClassName("tablinks");
    for (i = 0; i < tablinks.length; i++) {
      tablinks[i].className = tablinks[i].className.replace(" active", "");
    }
  
    // Show the current tab and add an active class to the button
    document.getElementById(dayName).style.display = "block";
    evt.currentTarget.className += " active";
  }
  
  // Automatically display Monday by default on page load
  document.addEventListener("DOMContentLoaded", function() {
    document.getElementsByClassName("tablinks")[0].click();
  });
  
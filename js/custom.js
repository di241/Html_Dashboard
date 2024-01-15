function toggleSidebar() {
  var sidebar = document.getElementById("sidebar");
  var content = document.getElementById("content");

  // Check if the sidebar is currently visible
  if (sidebar.style.display !== "none") {
    // Hide the sidebar
    sidebar.style.display = "none";
    // Move content to the right
    content.style.marginLeft = "0";
  } else {
    // Show the sidebar
    sidebar.style.display = "block";
    // Move content to the left (adjust the width based on your sidebar width)
    content.style.marginLeft = "50px";
  }
}


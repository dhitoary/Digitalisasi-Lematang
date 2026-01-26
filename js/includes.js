/* ========================================
   HTML INCLUDES LOADER
   Load navbar and footer from external files
   ======================================== */

// Function to load HTML includes
function loadIncludes() {
  // Load Navbar
  fetch("includes/navbar.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("navbar-placeholder").innerHTML = data;
      // Set active menu after navbar is loaded
      setActiveMenu();
      // Initialize navigation after navbar is loaded
      if (typeof NavigationModule !== "undefined") {
        NavigationModule.init();
      }
    })
    .catch((error) => console.error("Error loading navbar:", error));

  // Load Footer
  fetch("includes/footer.html")
    .then((response) => response.text())
    .then((data) => {
      document.getElementById("footer-placeholder").innerHTML = data;
      // Initialize scroll to top button after footer is loaded
      if (typeof ScrollToTopModule !== "undefined") {
        ScrollToTopModule.init();
      }
    })
    .catch((error) => console.error("Error loading footer:", error));
}

// Function to set active menu based on current page
function setActiveMenu() {
  const currentPage = window.location.pathname.split("/").pop() || "index.html";
  const menuLinks = document.querySelectorAll(".nav-menu a");

  menuLinks.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href") === currentPage) {
      link.classList.add("active");
    }
  });
}

// Load includes when DOM is ready
if (document.readyState === "loading") {
  document.addEventListener("DOMContentLoaded", loadIncludes);
} else {
  loadIncludes();
}

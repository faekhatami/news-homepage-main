// Select the necessary elements
const menuToggle = document.querySelector(".menu-toggle");
const closeMenu = document.querySelector(".mobile-nav .menu");
const mobileNav = document.querySelector(".mobile-nav");

// Function to open the menu
function openMenu() {
  mobileNav.classList.add("open");
}

// Function to close the menu
function closeMenuFunc() {
  mobileNav.classList.remove("open");
}

// Add event listeners for menu toggle and close button
menuToggle.addEventListener("click", openMenu);
closeMenu.addEventListener("click", closeMenuFunc);

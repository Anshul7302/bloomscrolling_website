// Select all bloom items
const bloomItems = document.querySelectorAll(".bloom-item");

// Function to check if an element is in the viewport
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return rect.top < window.innerHeight && rect.bottom > 0;
}

// Trigger animations on scroll
function handleScroll() {
  bloomItems.forEach((item) => {
    if (isInViewport(item)) {
      item.classList.add("active");
    }
  });
}

// Add scroll event listener
window.addEventListener("scroll", handleScroll);

// Trigger animations on initial load
handleScroll();

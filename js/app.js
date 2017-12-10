// Get the navbar
const navbar = document.querySelector('header');
// Shrink when the user scrolled 100px
const shrinkOn = 100;

window.addEventListener('scroll', () => {
  // Track scroll position
  let distanceY = window.scrollY;

  window.requestAnimationFrame(() => {
    // If the user scrolled more than the treshold, add class
    if (distanceY > shrinkOn) {
      navbar.classList.add('shrink');
    } else {
      navbar.classList.remove('shrink');
    }
  });
});

// Call smoothie for smooth scroll
smoothie();

// Call turtle for lazy loading
turtle();

// Call mango to zoom your images
mango();

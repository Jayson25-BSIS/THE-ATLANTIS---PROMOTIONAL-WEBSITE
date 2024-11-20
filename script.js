const navbarLinks = document.querySelectorAll(".nav-menu .nav-link");
const menuOpenButton = document.querySelector("#menu-open-button");
const menuCloseButton = document.querySelector("#menu-close-button");


const phrases = [" TO THE ATLANTIS", " ATLANTINICIANS", " AQUASNAPPERS"];
let index = 0;
let charIndex = 0;
let typingForward = true;
const typeAnimationElement = document.querySelector('.type-animation');

function typeAnimation() {
    const currentPhrase = phrases[index];
    
    // Handle typing and erasing
    if (typingForward) {
        typeAnimationElement.textContent = currentPhrase.slice(0, charIndex);
        charIndex++;

        if (charIndex > currentPhrase.length) {
            typingForward = false; // Start erasing after typing is done
            setTimeout(typeAnimation, 2000); // Pause before erasing
            return;
        }
    } else {
        typeAnimationElement.textContent = currentPhrase.slice(0, charIndex);
        charIndex--;

        if (charIndex === 0) {
            typingForward = true; // Switch back to typing mode
            index = (index + 1) % phrases.length; // Move to the next phrase
        }
    }

    setTimeout(typeAnimation, typingForward ? 100 : 50); // Typing speed vs. erasing speed
}

// Start the animation
typeAnimation();



var myIndex = 0;
carousel();

function carousel() {
  var i;
  var x = document.getElementsByClassName("about-image");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";  
  }
  myIndex++;
  if (myIndex > x.length) {myIndex = 1}    
  x[myIndex-1].style.display = "block";  
  setTimeout(carousel, 2000);
}

const text = document.querySelector(".sec-text");
        const textLoad = () => {
            setTimeout(() => {
                text.textContent = "to The ATLANTIS";
            }, 0);
            setTimeout(() => {
                text.textContent = "ATLANTINACIANS";
            }, 4000);
            setTimeout(() => {
                text.textContent = "AQUASNAPPERS";
            }, 8000); //1s = 1000 milliseconds
        }
        textLoad();
        setInterval(textLoad, 12000);

menuOpenButton.addEventListener("click", () => {
  // Toggle mobile menu visibility
  document.body.classList.toggle("show-mobile-menu");
});

// Close menu when the close button is clicked
menuCloseButton.addEventListener("click", () => menuOpenButton.click());

// Close menu when nav link is clicked
navbarLinks.forEach((link) => {
  link.addEventListener("click", () => menuOpenButton.click());
});

/* Initializing Swiper */
let swiper = new Swiper(".slider-wrapper", {
  loop: true,
  grabCursor: true,
  spaceBetween: 25,

  // Pagination bullets
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
    dynamicBullets: true,
  },

  // Navigation arrows
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },

  /* Responsive breakpoints */
  breakpoints: {
    0: {
      slidesPerView: 1,
    },
    768: {
      slidesPerView: 2,
    },
    1024: {
      slidesPerView: 3,
    },
  },
});




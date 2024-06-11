/* gsap.registerPlugin(ScrollTrigger);

const sections = document.querySelectorAll("ommig");

sections.forEach((section) => {
  const h2 = section.querySelector("h2");
  const ps = section.querySelectorAll("p");
  gsap
    .timeline({
      scrollTrigger: {
        trigger: section,
        start: "top 50%", // Animationen sættes igang, når toppen a section-elementet rammer 50% ind i viewporten
        end: "+=200px", // Animationen er slut, når man har scrollet 200px ned
        scrub: true, // Animationen bindes op på scrollbaren
      },
    })
    .from(h2, {
      opacity: 0,
    })
    .from(ps, {
      opacity: 0,
      y: 100,
      stagger: 0.5,
    });
}); */

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");
}

function myFunction() {
  var element = document.body;
  element.classList.toggle("dark-mode");

  var image = document.getElementById("modeIcon");
  var currentSrc = image.getAttribute("src");
  if (currentSrc.includes("moon")) {
    var newSrc = currentSrc.replace("moon", "sun");
    image.setAttribute("src", newSrc);
    image.style.filter = "brightness(0) invert(1) sepia(10000%) hue-rotate(180deg)";
  } else {
    var newSrc = currentSrc.replace("sun", "moon");
    image.setAttribute("src", newSrc);
    image.style.filter = "none";
  }
}

//projectdisplay
//projektillustration
function hoverSwitch() {
  const links = document.querySelectorAll(".projectdisplay a");
  links.forEach((link) => {
    link.addEventListener("mouseenter", (e) => {
      document.querySelector(".projektillustration").src = e.target.dataset.image;
    });
  });
}
hoverSwitch();

document.querySelectorAll('.accordion-button').forEach(button => {
  button.addEventListener('click', () => {
    const accordionContent = button.nextElementSibling;
    const projectImage = document.querySelector('.projektillustration');
    
    // Toggle active class and accordion content display
    button.classList.toggle('active');
    if (button.classList.contains('active')) {
      accordionContent.style.display = 'block';
    } else {
      accordionContent.style.display = 'none';
    }

    // Update the image on the right
    projectImage.src = button.getAttribute('data-image');

    // Close other accordion items
    document.querySelectorAll('.accordion-button').forEach(otherButton => {
      if (otherButton !== button) {
        otherButton.classList.remove('active');
        otherButton.nextElementSibling.style.display = 'none';
      }
    });
  });
});

// document.addEventListener('DOMContentLoaded', () => {
//   const container = document.querySelector('.container');

//   function createParticle() {
//       const particle = document.createElement('div');
//       particle.classList.add('particle');
//       container.appendChild(particle);

//       particle.style.left = `${Math.random() * 100}vw`;
//       particle.style.top = `${Math.random() * 100}vh`;

//       particle.style.animationDuration = `${Math.random() * 3 + 2}s`;
//       particle.style.animationDelay = `${Math.random() * 5}s`;

//       particle.addEventListener('animationend', () => {
//           particle.remove();
//       });
//   }

//   setInterval(createParticle, 300);
//     // Stop genereringen af partikler efter 10 sekunder
//     setTimeout(() => {
//       clearInterval(particleInterval);
//     }, 10000); // 10000 ms = 10 sekunder
//   });


let currentIndex = 0;

document.querySelector('.prev').addEventListener('click', () => {
    const testimonials = document.querySelectorAll('.testamonial');
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = testimonials.length - 1;
    }
    updateSwiper();
});

document.querySelector('.next').addEventListener('click', () => {
    const testimonials = document.querySelectorAll('.testamonial');
    if (currentIndex < testimonials.length - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSwiper();
});

function updateSwiper() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
    swiperWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
}

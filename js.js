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

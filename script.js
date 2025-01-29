window.onload = function () {
  document.body.classList.add("no-scroll");

  setTimeout(function () {
    document.getElementById("loader").style.display = "none";

    document.getElementById("content-portfolio").classList.remove("hidden");

    document.body.classList.remove("no-scroll");
  }, 5000);
};

window.addEventListener("load", function () {
  new Glider(this.document.querySelector(".carousel-item"), {
    slidesToShow: 2,
    slidesToScroll: 2,
    exactWidth: true,
    itemWidth: 570,
    dots: ".certification-indicadores",
    arrows: {
      prev: ".btn-prev",
      next: ".btn-next",
    },
  });

});

window.addEventListener("scroll", function() {
  const sections = document.querySelectorAll("section");
  const links = document.querySelectorAll(".navbar a");

  let currentSection = "";

  sections.forEach((section) => {
    const sectionTop = section.offsetTop;
    const sectionHeight = section.offsetHeight;
    if (window.scrollY >= sectionTop - sectionHeight / 3) {
      currentSection = section.getAttribute("id");
    }
  });

  links.forEach((link) => {
    link.classList.remove("active");
    if (link.getAttribute("href").includes(currentSection)) {
      link.classList.add("active");
    }
  });
});








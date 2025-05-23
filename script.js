window.addEventListener("scroll", function () {
    const navbar = document.getElementById("navbar");
    if (window.scrollY > 50) {
      navbar.classList.add("sticky-nav");
    } else {
      navbar.classList.remove("sticky-nav");
    }
  });
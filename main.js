// Page Scrolling
const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".navbar .nav-link");

window.addEventListener("load", () => {
  navLinks.forEach(link => link.classList.remove("active"));
  document.querySelector('.navbar .nav-link[href="#home"]').classList.add("active");
});
window.addEventListener("scroll", () => {
  let current = "";
  sections.forEach(section => {
    const sectionTop = section.offsetTop - 150; 
    const sectionHeight = section.clientHeight;
    if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
      current = section.getAttribute("id");
    }
  });
  navLinks.forEach(link => {
    link.classList.remove("active");
    if (link.getAttribute("href") === "#" + current) {
      link.classList.add("active");
    }
  });
});
navLinks.forEach(link => {
  link.addEventListener("click", function (e) {
    e.preventDefault();
    const targetId = this.getAttribute("href").substring(1);
    const targetSection = document.getElementById(targetId);

    window.scrollTo({
      top: targetSection.offsetTop - 100, 
      behavior: "smooth"
    });
  });
});

// Footer
document.getElementById("year").textContent = new Date().getFullYear();
// scroll to top
function scrollToTop() {
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

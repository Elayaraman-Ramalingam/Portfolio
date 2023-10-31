function toggleMenu() {
  const menu = document.querySelector(".menu-links");
  const icon = document.querySelector(".hamburger-icon");
  menu.classList.toggle("open");
  icon.classList.toggle("open");
}
// const carousel = document.querySelector(".marquee-container");
// const child1 = document.querySelector(".marquee");
// const child2 = document.querySelector(".marquee2");

// function removeAndAppend() {
//   const firstChild = carousel.firstElementChild;
//   carousel.removeChild(firstChild); 
//   carousel.insertBefore(firstChild, child2.nextSibling);
// }

// setInterval(removeAndAppend, 16000);

document.addEventListener("DOMContentLoaded", (e) => {
  const headerLinks = document.querySelectorAll(".header-list-item");
  const burgerIcon = document.querySelector(".burger-header");
  const burgerDropDownLinks = document.querySelectorAll(".modal-menu-item");

  headerLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      dropDownHandler(link, ".dropdown");
    });
  });

  burgerIcon.addEventListener("click", burgerMenuHandler);

  burgerDropDownLinks.forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault();
      dropDownHandler(link, ".modal-submenu-list");
    });
  });
});

function clearAllClasses() {
  const allDropDowns = document.querySelectorAll(".dropdown");
  const arrows = document.querySelectorAll(".arrow");
  arrows.forEach((arrow) => {
    arrow.classList.remove("active");
  });
  allDropDowns.forEach((dropDown) => {
    dropDown.classList.remove("active");
  });
}

function dropDownHandler(link, selector) {
  const dropDown = link.querySelector(selector);
  const arrow = link.querySelector(".arrow");
  if (dropDown.classList.contains("active")) {
    dropDown.classList.remove("active");
    arrow.classList.remove("active");
  } else {
    clearAllClasses();
    dropDown.classList.add("active");
    arrow.classList.add("active");
  }
}
function burgerMenuHandler() {
  const modal = document.querySelector(".modal");
  const burgerMenu = document.querySelector(".burger-menu");
  const closeModalBtn = document.querySelector(".close-modal-btn");

  closeModalBtn.classList.toggle("active");
  burgerMenu.classList.toggle("active");
  modal.classList.toggle("active");
}

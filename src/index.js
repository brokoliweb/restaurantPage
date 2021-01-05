import { loadPage } from "./modules/initialPageLoad";
import { home } from "./modules/home";
import { createMenu } from "./modules/menu";
import { createContacts } from "./modules/contact";

init();

function addNavEvents() {
  const homeLink = document.getElementById("home");
  const menuLink = document.getElementById("menu");
  const contactLink = document.getElementById("contact");

  // add event listeners

  homeLink.addEventListener('click', home);
  menuLink.addEventListener('click', createMenu);
  contactLink.addEventListener("click", createContacts);
}

function init() {
  loadPage();
  addNavEvents();
  home();
}

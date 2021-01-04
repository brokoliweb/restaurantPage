import {home} from './home';
import {createMenu} from './menu';
import {createContacts} from './contact';

function createH1() {
    const h1 = document.createElement('H1');

    h1.innerHTML = "Welcome to our Restaurant";

    document.getElementById('header').appendChild(h1);
}

function createNav() {
    const navMenu = document.createElement('nav');

    navMenu.innerHTML = '<a id="home" href="">Home</a><a id="menu" href="">Menu</a><a id="contact" href="">Contact</a>';
    document.getElementById('header').appendChild(navMenu);
}

createH1();
createNav();

const homeLink = document.getElementById("home");
const menuLink = document.getElementById("menu");
const contactLink = document.getElementById("contact");

// add event listeners

homeLink.addEventListener("click", home);
menuLink.addEventListener("click", createMenu);
contactLink.addEventListener("click", createContacts);








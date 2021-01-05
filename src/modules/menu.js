function createMenu() {
  const content = document.getElementById("content");

  content.textContent = "";

  const menu = document.createElement("p");

  menu.innerHTML = "Hamburger";

  content.appendChild(menu);
}

export { createMenu };

function createMenu() {

    document.getElementById('content').innerHTML = "";

    const menu = document.createElement('p');

    menu.innerHTML = "Hamburger";

    document.getElementById('content').appendChild(menu);
}

export {createMenu};
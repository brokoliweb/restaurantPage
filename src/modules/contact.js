function createContacts() {
  document.getElementById("content").innerHTML = "";

  const contacts = document.createElement("p");

  contacts.innerHTML = "Phones: +90 848 39 93";

  document.getElementById("content").appendChild(contacts);
}

export { createContacts };

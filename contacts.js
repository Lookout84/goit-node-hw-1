const fs = require("fs").promises;
const path = require("path");

const contactsPath = path.basename("./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  fs.readFile(contactsPath, (err, data) => {
    if (err) {
      console.error(err.message);
    }
    return;
  });
  // ...твой код
}

function getContactById(contactId) {
  // ...твой код
}

function removeContact(contactId) {
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

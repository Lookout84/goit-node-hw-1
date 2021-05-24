const fs = require("fs").promises;
const path = require("path");
const { v4: uuid } = require('uuid')

const contactsPath = path.join(__dirname, "./db/contacts.json");

// TODO: задокументировать каждую функцию
function listContacts() {
  const data = fs.readFile(contactsPath, 'utf8')
  return JSON.parse(data)

  // fs.readFile(contactsPath, (err, data) => {
  //   if (err) {
  //     console.error(err.message);
  //   }
  //   return;
  // };
  // ...твой код
}

function getContactById(contactId) {
  const data = listContacts()
  const [result] = data.filter((contact) => contact.contactId === contactId)
  return result
  // ...твой код
}

function removeContact(contactId) {
  const data = listContacts()
  const index = data.findIndex((contact) => contact.contactId === contactId)
  if (index !== -1) {
    const result = data.splice(index, 1)
    fs.writeFile(contactsPath, JSON.stringify(data))
    return result
  }
  return null
  // ...твой код
}

function addContact(name, email, phone) {
  // ...твой код
}

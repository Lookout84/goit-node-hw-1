const fs = require("fs/promises");
const path = require("path");
const { v4: uuid } = require("uuid");

const contactsPath = path.join(__dirname, "db", "contacts.json");

const getData = () => {
  const data = fs.readFile(contactsPath, "utf8");
  return data;
};

const listContacts = async () => {
  try {
    const data = await getData();
    return console.log(JSON.parse(data));
  } catch (error) {
    return console.log(error.message);
  }
};

const getContactById = async (contactId) => {
  try {
    const data = await getData();
    const parsedData = JSON.parse(data);
    const dataOfId = parsedData.find(
      (contact) => String(contact.id) === contactId
    );
    return console.log(dataOfId);
  } catch (error) {
    return console.log(error.message);
  }
};

const removeContact = async (contactId) => {
  try {
    const data = await getData();
    const parsedData = JSON.parse(data);
    const filterdDataOfId = parsedData.filter(
      (contact) => String(contact.id) !== contactId
    );
    await fs.writeFile(contactsPath, JSON.stringify(filterdDataOfId, null, 2));
    return console.log(`Contact with id = ${contactId} is removed`);
  } catch (error) {
    return console.log(error.message);
  }
};

const addContact = async (name, email, phone) => {
  try {
    const data = await getData();
    const parsedData = JSON.parse(data);
    const newContact = {
      id: uuid(),
      name,
      email,
      phone,
    };
    const addNewContact = [...parsedData, newContact];
    await fs.writeFile(contactsPath, JSON.stringify(addNewContact, null, 2));
    return console.log(`${name} added`);
  } catch (error) {
    return console.log(error.message);
  }
};

module.exports = { listContacts, getContactById, removeContact, addContact };

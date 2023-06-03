const fs = require("fs").promises;
const path = require("path");
/*
 * Розкоментуйте і запиши значення
 * const contactsPath = ;
 */

// TODO: задокументувати кожну функцію
function listContacts() {
  // ...твій код
}

function getContactById(contactId) {
  // ...твій код
}

function removeContact(contactId) {
  // ...твій код
}

function addContact(name, email, phone) {
  // ...твій код
}

const functions = { listContacts, getContactById, removeContact, addContact };
// module.exports = listContacts;
// module.exports = getContactById;
// module.exports = removeContact;
// module.exports = addContact;

module.exports = functions;

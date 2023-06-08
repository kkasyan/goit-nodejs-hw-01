const {
  listContacts,
  getContactById,
  removeContact,
  addContact,
} = require("./db/contacts");

const yargs = require("yargs/yargs");
const { hideBin } = require("yargs/helpers");
const arr = hideBin(process.argv);
const { argv } = yargs(arr);

const invokeAction = async ({ action, id, name, email, phone }) => {
  switch (action) {
    case "list":
      const allContacts = await listContacts();
      return console.table(allContacts);
    case "get":
      const oneContact = await getContactById(id);
      return console.log(oneContact);
    case "add":
      const newContact = await addContact({ name, email, phone });
      return console.log(newContact);
    case "remove":
      const deletedContact = await removeContact(id);
      return console.log(deletedContact);
    default:
      console.warn("\x1B[31m Unknown action type!");
  }
};

invokeAction(argv);

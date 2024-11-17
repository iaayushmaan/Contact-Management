const ContactController = require("../controllers/Contact.controllers");
const express = require("express");
const ContactRouter = express.Router();

ContactRouter.get("/contacts", ContactController.getAllContacts);
ContactRouter.post("/contacts", ContactController.createContact);
ContactRouter.put("/contacts/:id", ContactController.updateContact);
ContactRouter.delete("/contacts/:id", ContactController.deleteContact);

module.exports = ContactRouter;

const express = require('express');
const routes = express.Router();
const contactsController = require('../controllers/contactsController');

routes.get(
  '/',
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Get all contacts from database' */
  contactsController.getContacts
);

routes.get(
  '/:id',
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Get a single contact by ID' */
  contactsController.getContactByiD
);

routes.post(
  '/',
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Create a new contact'
     #swagger.parameters['body'] = {
         in: 'body',
         description: 'Contact data',
         required: true,
         schema: {
           firstname: "John",
           lastname: "Doe",
           email: "john@example.com",
           favorite: true,
           birthday: "2000-01-01"
         }
     } */
  contactsController.createContact
);

routes.put(
  '/:id',
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Update a contact by ID' */
  contactsController.updateContact
);


routes.delete(
  '/:id',
  /* #swagger.tags = ['Contacts']
     #swagger.description = 'Delete a contact by ID' */
  contactsController.deleteContact
);

module.exports = routes;

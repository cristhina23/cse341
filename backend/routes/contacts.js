const express = require('express');
const routes = require('express').Router();
const contactsController = require('../controllers/contactsController');

routes.get('/', contactsController.getContacts);
routes.get('/:id', contactsController.getContactByiD);

module.exports = routes;
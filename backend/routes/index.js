const routes = require('express').Router();
const { homeController } = require('../controllers/contactsController');

routes.get('/', homeController);


module.exports = routes;
const mongodb = require('../db/connect');
const { ObjectId } = require('mongodb');

const homeController = async (req, res, next) => {
  res.send('Home page');
}
const getContacts = async (req, res, next) => {
  try {
    const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .find();
  result.toArray().then((lists) => {
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(lists); 
  });
  } catch (err) {
    console.log(err);
  }
};

const getContactByiD = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const result = await mongodb
    .getDb()
    .db()
    .collection('contacts')
    .findOne({ _id: new ObjectId(contactId) });

    if (!result) {
      res.status(404).send('Contact not found');
    } 

      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result);
    

  
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
};

module.exports = { getContacts, getContactByiD, homeController };
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
    .collection('contact')
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
    .collection('contact')
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

const createContact = async (req, res, next) => {
  try {
    const contact = req.body;
    const newContact = {
      firstname: contact.firstname,
      lastname: contact.lastname,
      email: contact.email,
      favorite: contact.favorite,
      birthday: contact.birthday,
    };
    const result = await 
    mongodb
    .getDb()
    .db()
    .collection('contact')
    .insertOne(newContact);
    res.status(201).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

const updateContact = async (req, res, next) => {
   try {
    const contactId = req.params.id;

    if (!ObjectId.isValid(contactId)) {
      return res.status(400).json({ message: 'Invalid contact ID' });
    }
   
    const newContact = {
      firstname: req.body.firstname,
      lastname: req.body.lastname,
      email: req.body.email,
      favorite: req.body.favorite,
      birthday: req.body.birthday,
    };
    const result = await mongodb
    .getDb()
    .db()
    .collection('contact')
    .updateOne({ _id: new ObjectId(contactId) }, { $set: newContact });
    res.status(200).json(result);
    
    if (result.matchedCount === 0) {
      return res.status(404).json({ message: 'Contact not found' });
    }

  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

const deleteContact = async (req, res, next) => {
  try {
    const contactId = req.params.id;
    const result = await mongodb
    .getDb()
    .db()
    .collection('contact')
    .deleteOne({ _id: new ObjectId(contactId) });
    res.status(200).json(result);
  } catch (err) {
    console.log(err);
    res.status(500).send(err);
  }
}

module.exports = { getContacts, getContactByiD, homeController, createContact, updateContact, deleteContact };
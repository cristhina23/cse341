const contactSchema = new mongoose.Schema({
  firstname: String,
  lastname: String,
  email: String,
  favorite: String,
  birthday: String
});

const Contact = mongoose.model('Contact', contactSchema);

module.exports = Contact;
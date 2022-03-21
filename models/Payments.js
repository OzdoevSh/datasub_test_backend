const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const schema = new Schema({
  card_number: {
    type: Number,
    required: true
  },
  expiration_date: {
    type: String,
    required: true
  },
  cvv: {
    type: Number,
    required: true
  },
  amount: {
    type: Number,
    required: true
  }

})

const Payments = mongoose.model('Payment', schema);

module.exports = Payments;
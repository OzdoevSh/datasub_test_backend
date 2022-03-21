const router = require("express").Router();
const Payments = require('../models/Payments')
const bodyParser = require("body-parser");

router.use(bodyParser.json());

router.get('/payments', async (req, res) => {
  await Payments.find()
    .then(payments => res.json(payments))
    .catch(err => res.status(400).json('Error: ' + err));
})

router.post('/add', async (req, res)=>{
  const {
    card_number,
    expiration_date,
    cvv,
    amount
  } = req.body
  
  const payment = new Payments({
    card_number,
    expiration_date,
    cvv,
    amount
  })
  await payment.save()
    .then(() => res.json({
      "requestId": payment._id,
      "amount": payment.amount
    }))
    .catch(err => res.status(400).json('Error: ' + err));
})

module.exports = router
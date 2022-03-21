require('dotenv').config()
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors')
const paymentRoutes = require('./routes/payments')


const PORT = process.env.PORT
const DB_CLUSTER = process.env.DB_CLUSTER

const app = express() 
app.use(cors())
app.use(express.urlencoded({extended: true}))
app.use(paymentRoutes)


async function start(){
  try {
    await mongoose.connect(DB_CLUSTER, {
      useNewUrlParser: true,
    })
    app.listen(PORT, () => {
      console.log(`Server has been started`)
    })
  } catch (e) {
    console.log(e)
  }
}

start()

const express = require('express');
const router = express.Router();
const  {Orders}= require('../db');

router.get('/', async (req, res) => {
  try {
    const allOrders = await Orders.findAll();
    res.json(allOrders);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;

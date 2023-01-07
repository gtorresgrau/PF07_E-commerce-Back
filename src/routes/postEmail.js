const express = require('express');
const router = express.Router();
const { sendEmail } = require('../controllers/sendEmail');

router.post('/', (req, res) => {
  const { email } = req.body;
  console.log('email', email)
  sendEmail(email)
  res.send('ok')
})

module.exports = router;

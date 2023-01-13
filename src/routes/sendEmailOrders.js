const express = require('express');
const router = express.Router();
const { sendEmail2 } = require('../controllers/sendEmailOrder');

router.post('/', (req, res) => {
    const { email } = req.body;
    console.log('email', email)
    sendEmail2(email)
    res.send('ok')
})

module.exports = router;
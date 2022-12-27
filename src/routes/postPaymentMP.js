const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/postPayment.js");
const PaymentService = require("../controllers/postPaymentaService.js");

const PaymentInstance = new PaymentController(new PaymentService());


router.get("/", function (req, res, next) {
  const {productMp} = req.body;
  console.log('prodcuctMp:',productMp)
  console.log('postPaymentMP: estoy aca')
  PaymentInstance.getPaymentLink(req, res);
});



module.exports = router;
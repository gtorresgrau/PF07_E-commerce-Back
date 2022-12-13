const express = require("express");
const router = express.Router();

const PaymentController = require("../controllers/postPayment.js");
const PaymentService = require("../controllers/postPaymentaService.js");

const PaymentInstance = new PaymentController(new PaymentService());


router.get("/", function (req, res, next) {
  PaymentInstance.getPaymentLink(req, res);
});



module.exports = router;
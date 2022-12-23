const axios = require("axios");

class PaymentService {
  async createPayment() {
  const prod  = req.body;
    console.log('createPaymet: estamos en post Service')
    const url = "https://api.mercadopago.com/checkout/preferences";
    console.log('prodPos:',prod);

    const preference = {
      payer_email: "test_user_22979686@testuser.com",
      items: [
        {
          currency_id:'USD',
          title: prod.title,
          description: prod.description,
          category_id:'Sneakers',
          picture_url: prod.image,
          quantity: prod.quantity,
          unit_price: prod.price
        }
      ],
      back_urls: {
        failure: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        pending: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        success: "https://pf-07-e-commerce-front.vercel.app/sneakers"
      },
      auto_return: "approved",
      binary_mode: true,
    };

    const payment = await axios.post(url, preference, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }

 
}

module.exports = PaymentService;
const axios = require("axios");

class PaymentService {
  async createPayment() {
    console.log('createPaymet: estamos en post Service')
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_22979686@testuser.com",
      items:[
        {
          currency_id:'ARS',
          title: 'Puma',
          description: 'Zapas Puma',
          category_id:'Sneakers',
          picture_url: 'https://www.tradeinn.com/f/13810/138104676/adidas-zapatillas-running-runfalcon-2.0.jpg',
          quantity: 1,
          unit_price: 50
        }
      ],
      back_urls: {
        failure: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        pending: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        success: "https://pf-07-e-commerce-front.vercel.app/sneakers"
      },
      auto_return: "approved",
    };

    const payment = await axios.post(url, body, {
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${process.env.ACCESS_TOKEN}`
      }
    });

    return payment.data;
  }

 
}

module.exports = PaymentService;
const axios = require("axios");

class PaymentService {
  async createPayment() {
    const url = "https://api.mercadopago.com/checkout/preferences";

    const body = {
      payer_email: "test_user_22979686@testuser.com",
      items: [
        {
          title: "Dummy Title",
          description: "Dummy description",
          picture_url: "http://www.myapp.com/myimage.jpg",
          category_id: "category123",
          quantity: 1,
          unit_price: 1
        }
      ],
      back_urls: {
        failure: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        pending: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        success: "https://pf-07-e-commerce-front.vercel.app/sneakers"
      }
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
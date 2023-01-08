const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { sendEmail } = require('../controllers/sendEmail')

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })
router.post('/', (req, res) => {
    const prod = req.body
    /* const user = req.body
    console.log("USERRRRRRRRRRRR", user) */

    let preference = {
        payer: {
            name: "Juan",
            surname: "Lopez",
            email: "user@email.com",
            phone: {
                area_code: "11",
                number: 4444 - 4444
            },
            identification: {
                type: "DNI",
                number: "12345678"
            },
            address: {
                street_name: "Street",
                street_number: 123,
                zip_code: "5700"
            }
        },
        items: prod.map(e => ({
            title: e.title,
            picture_url: e.image,
            quantity: e.quantity,
            unit_price: e.price
        })),

        back_urls: {
            failure: "http://localhost:3000/sneakers",
            success: "http://localhost:3000/sneakers"
        },
        notification_url: "https://8f3b-2803-9800-9993-7c0a-756c-9b90-8872-5c9a.sa.ngrok.io/notificar",
        binary_mode: true
    }

    mercadopago.preferences.create(preference)
        .then((response) => {
            console.log('respuesta cuando hace el post del link de pago', response);
            res.status(200).send({ response });
        })
        .catch(function (e) {
            console.error(e);
        })

    setTimeout(() => {
        console.log("Envio de Email");
        sendEmail()
    }, "6000")
});


// mercadopago.merchant_orders.findById(id)
//     .then(res=>console.log(res.body))



module.exports = router;
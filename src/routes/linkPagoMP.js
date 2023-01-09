const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

const { sendEmail } = require('../controllers/sendEmail');

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })
router.post('/', (req, res) => {
    const data = req.body
    /* const user = req.body*/
    console.log("USER", data)

    const user = data.pop();
    console.log('user:', user)


    let preference = {
        payer: {
            name: user.name,
            surname: user.family_name,
            email: user.email,


        },

        items: data.map(e => ({

            title: e.title,
            picture_url: e.image,
            quantity: e.quantity,
            unit_price: e.price
        })),

        back_urls: {
            failure: "https://pf-07-e-commerce-front.vercel.app/sneakers",
            success: "https://pf-07-e-commerce-front.vercel.app/sneakers"
        },
        notification_url: `https://pf-07-e-commerce-front.vercel.app/sneakers/notificar?email=${user.user.email}`,
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
        console.log(`se envio un email a ${user.user.email}`);

        sendEmail(user.user.email)

    }, "6000")
});


// mercadopago.merchant_orders.findById(id)
//     .then(res=>console.log(res.body))



module.exports = router;
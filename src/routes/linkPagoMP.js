const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

mercadopago.configure({ access_token: process.env.ACCESS_TOKEN })
router.post('/', (req, res) => {
    const data = req.body
    /* const user = req.body*/
    console.log("DATA:", data)

    const user = data.pop();
    //console.log('user:', user)


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
        notification_url: `https://pf07e-commerce-back-production.up.railway.app/notificar?email=${user.emailAddress}`,
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
});


module.exports = router;
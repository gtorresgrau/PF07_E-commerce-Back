const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})
router.post('/',(req,res)=>{
   const prod= req.body
   console.log('producto clg:',prod)
    let preference={
    payer: {
        name: "Juan",
        surname: "Lopez",
        email: "user@email.com",
        phone: {
            area_code: "11",
            number: 4444-4444
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
    items:prod.map(e=> ({ 
        title: e.title,
        picture_url: e.image,
        quantity: e.quantity,
        unit_price: e.price
    })),
    
    back_urls: {
        failure: "http://localhost:3000/sneakers",
        success: "http://localhost:3000/sneakers"
    },
    notification_url: "https://pf-07-e-commerce-front.vercel.app/notificar",
    binary_mode:true 
   }

   mercadopago.preferences.create(preference)
   .then((response)=>{
    console.log(response.body.init_point);
    res.status(200).send({response});
    })
    .catch(function(e){
        console.error(e);
    })

});


// mercadopago.merchant_orders.findById(id)
//     .then(res=>console.log(res.body))



module.exports = router;
const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})
router.post('/',(req,res)=>{
   const prod = req.body
 /*  console.log('usuario', prod[0] )
  console.log('producto', prod[1] ) */
    let preference={
    payer: {
        name: prod[0].given_name,
        surname: prod[0].family_name,
        email: prod[0].email
    },
    items:prod[1].map(e=> ({ 
        title: e.title,
        picture_url: e.image,
        quantity: e.quantity,
        unit_price: e.price
    })),
    
    back_urls: {
        failure: "http://localhost:3000/sneakers",
        success: "http://localhost:3000/sneakers"
    },
    notification_url: `https://1dd6-2803-9800-9993-7c0a-102d-3989-2956-1cc2.sa.ngrok.io/notificar`,
    binary_mode:true 
   }

   mercadopago.preferences.create(preference)
   .then((response)=>{
    /* console.log('respuesta cuando hace el post del link de pago',response); */
    res.status(200).send({response});
    })
    .catch(function(e){
        console.error(e);
    })

});


// mercadopago.merchant_orders.findById(id)
//     .then(res=>console.log(res.body))



module.exports = router;
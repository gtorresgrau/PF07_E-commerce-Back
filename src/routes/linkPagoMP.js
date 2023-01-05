const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})
router.post('/',(req,res)=>{
   const prod= req.body
   console.log('producto clg:',prod)
    let preference={
    items:prod.map(e=> ({
        
        title: e.title,
        picture_url: e.image,
        quantity: e.quantity,
        unit_price: e.price
    })),
        
        
        
    back_urls: {
        failure: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        pending: "https://pf-07-e-commerce-front.vercel.app/sneakers",
        success: "https://pf-07-e-commerce-front.vercel.app/sneakers"
      },
    notification_url:  "https://pf-07-e-commerce-front.vercel.app/sneakers",
      binary_mode:true 
   }
   mercadopago.preferences.create(preference)
   .then((response)=>{res.status(200).send({response})
   console.log(response) }
   )

})

module.exports = router;
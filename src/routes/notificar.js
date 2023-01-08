const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})

router.post('/',async(req,res)=>{
    const {body,query} = req;
    
    console.log('query:',query)
    console.log('body:',body)
    
    if(query.topic==='payment'){
        var payment = await mercadopago.payment.findById(query.id) 
        console.log('info payment:',payment.mercadopagoResponse);
     } 
    
     if(query.topic==='merchant_orders'){
        var merchant = await mercadopago.payment.findById(query.id) 
        console.log('info merchant:',merchant);
     } 
        
    res.send();

     
})
 


module.exports = router;
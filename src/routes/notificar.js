const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})




router.post('/',async(req,res)=>{
    const {body,query} = req;
    
    console.log('query:',query)
    console.log('body:',body)
    
   
        var payment = await mercadopago.payment.findById(query.id) 
       
        
       
       /*  console.log(`email: ${query.email},
        items: ${payment.body.additional_info.items},
        status: ${payment.body.status}`); */
     
    
    
    res.send();

     
})
 


module.exports = router;
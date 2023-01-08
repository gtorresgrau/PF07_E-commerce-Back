const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { sendEmail } = require('../controllers/sendEmail');

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})




router.post('/',async(req,res)=>{
    const {body,query} = req;
    
   console.log('query: ', query)
   console.log('queryEmail: ', query.email)
  
   if(query.topic==='payment'){
      var pay = await mercadopago.payment.findById(query.id) 
       
       console.log('query.id : ',query.id)
       
       console.log('notificar: ',pay)
       console.log(`status: ${pay.body.status}`);
       if(pay.body.status==='approved'){
           sendEmail(query.email)
       }
    }

       
        
       
     
    
    
    res.send();

     
})
 


module.exports = router;
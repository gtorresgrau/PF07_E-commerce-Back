const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { sendEmail } = require('../controllers/sendEmail');

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})




router.post('/',async(req,res)=>{
    const {body,query} = req;
    
//    console.log('query: ', query)
//    console.log('queryEmail: ', query.email)
//    console.log('BodyEmail: ', body.email)
   
  
   if(query.topic==='merchant_order'){
      var pay_merc = await mercadopago.merchant_orders.findById(query.id) 
       //console.log('query.id : ',query.id)
       console.log('preference: ',pay_merc.body.preference_id)
       
       //const payId = query.id
       const statusMer = pay_merc.body.status
      
      // if(status === 'approved') sendEmail(query.email);
    }
    if(query.topic==='payment'){
        var pay_payment = await mercadopago.payment.findById(query.id) 
         //console.log('query.id : ',query.id)
         
         //const payId = query.id
         const statusPay = pay_payment.body.status
         console.log('statusPay:',statusPay)
        if(statusPay === 'approved') sendEmail(query.email);
      }

    res.send();

})
 


module.exports = router;

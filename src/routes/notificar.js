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
       console.log('notificarMerc: ',pay_merc)
       console.log('Merc_status:',pay_merc.body);
       //const payId = query.id
       const statusMer = pay_merc.body.status
       console.log('statusMer:',statusMer)
      // if(status === 'approved') sendEmail(query.email);
    }
    if(query.topic==='payment'){
        var pay_payment = await mercadopago.payment.findById(query.id) 
         //console.log('query.id : ',query.id)
         console.log('notificarPay: ',pay_payment)
         console.log('Payment_status:',pay_payment.body);
         //const payId = query.id
         const statusPay = pay_payment.body.status
         console.log('statusPay:',statusPay)
        if(statusPay === 'approved') sendEmail(query.email);
      }

    res.send();

})
 


module.exports = router;
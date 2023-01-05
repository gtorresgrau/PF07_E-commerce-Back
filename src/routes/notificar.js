const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})

router.post('/',(req,res)=>{
    console.log('notificar');
    const {body, query} = req;
    console.log({body, query});
    res.send();
})



module.exports = router;
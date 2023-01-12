const { Router } = require('express');
const mercadopago = require('mercadopago');
const router = Router();
const { sendEmail } = require('../controllers/sendEmail');
const { Orders } = require("../db");

mercadopago.configure({access_token:process.env.ACCESS_TOKEN})

router.post('/',async(req,res)=>{
    const {body,query} = req;
    
    console.log('query: ', query)
    console.log('queryEmail: ', query.email)

    if(query.topic==='payment'){
        // Verificamos que se haya enviado un id de pago
        if(!query.id){
            return res.status(400).json({ error: 'No se ha proporcionado un id de pago' });
        }
        // Buscamos el pago en MercadoPago
        var payment = await mercadopago.payment.findById(query.id) 
        console.log(`status: ${payment.body.status}`);
        // Verificamos el estado del pago
        if(payment.body.status==='approved'){
            //Enviamos correo
            sendEmail(query.email);
            // Creamos la orden en la base de datos
            const orderDb = await Orders.create({
                detail: JSON.stringify(req.body),
                payment: JSON.stringify(payment),
                user_id: req.user.id
            });
            res.status(200).json({ orderDb });
        } else {
            res.status(200).json({error:'Pago no fue aprobado'})
        }
    } else {
        // Si no se especifica un topic 'payment'
        return res.status(400).json({ error: 'No se especifico un topic de pago' });
    }
});

module.exports = router;

const { Router } = require("express");
const router = Router();
const { createOrder }= require("../controllers/createOrder.js");

router.post("/", async (req,res)=>{
  const data = req.body;

  const client_id = data.pop()
  console.log('client_id:',client_id)

  const prefId = data.pop()
  console.log('prefId:',prefId)

  const items = data[0]
  console.log('items:',items) 

  const payer = data[1]
  console.log('payer:',payer)

  const email = payer.emailAddress

  try{
    const newOrder = await createOrder({
        email,
        client_id,
        prefId,
        items,
        status:'pending',
        payer
    });

    console.log(newOrder);
    if(newOrder) res.status(201).send('Order added successfuly');
        
    }catch(error){
        // return res.status(400).json(error);
        console.error("OrderPost", error);
    }
})

module.exports = router;

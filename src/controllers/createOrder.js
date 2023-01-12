const { Orders } = require("../db");

const createOrder = async({client_id, prefId, items, status, payer, email})=>{
    const [newOrder] = await Orders.findOrCreate({
        where:{email: email},
        defaults:{
            email,
            client_id,
            prefId,
            items,
            status,
            payer
        }
    })

return newOrder;
}

module.exports = { createOrder };
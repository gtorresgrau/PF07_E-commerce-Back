const { Orders } = require("../db");

const createOrder = async ({ client_id, prefId, items, status, payer, email, delivered }) => {
    
    

    
    const [newOrder] = await Orders.findOrCreate({
        where: { prefId: prefId },
        defaults: {
            email,
            client_id,
            prefId,
            items,
            status: "approved",
            payer,
            delivered
        }
    })

    return newOrder;
}

module.exports = { createOrder };
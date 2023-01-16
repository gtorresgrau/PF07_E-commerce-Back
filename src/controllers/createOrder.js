const { Orders } = require("../db");

const createOrder = async ({ client_id, prefId, items, status, payer, emailAddress, delivered }) => {
    
    

    
    const [newOrder] = await Orders.findOrCreate({
        where: { prefId: prefId },
        defaults: {
            emailAddress,
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
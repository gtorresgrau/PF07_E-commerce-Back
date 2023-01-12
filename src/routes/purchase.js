const { Router } = require('express');
const router = Router();
const { Orders } = require("../db");

router.get('/', async (req, res) => {
    try {
        const userId = req.user.id; //obtener el id del usuario autenticado
        const purchases = await Orders.findAll({
            where: { user_id: userId },
            order: [['created_at', 'DESC']],
            include: [Payment]  // include the payment informations
        });
        res.status(200).json({ purchases });
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Error al obtener el historial de compras' });
    }
});

module.exports = router;
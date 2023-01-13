const { Router } = require("express");
const { sendEmail2 } = require('../controllers/sendEmailOrder')
const router = Router();

const { Orders } = require("../db");

router.put("/:id", async (req, res) => {

    const id = req.params.id;
    const { email, delivered } = req.body

    try {
        if (delivered === false) {
            const statusAprob = await Orders.update({ delivered: true }, { where: { id: id } })
            sendEmail2(email);
            res.status(200).json(statusAprob);
        }

    } catch (error) {
        return res.status(404).json({ error: error.message });
    }
})

module.exports = router;
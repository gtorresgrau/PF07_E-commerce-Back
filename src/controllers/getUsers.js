const { User } = require("../db");

const allUsers = async () => {
    const usersDB = await User.findAll();
    const users = usersDB.map(e => {
        return {
            id: e.id,
            userName: e.userName || '',
            fullName: e.fullName || '',
            image: e.image || '',
            email: e.email || '',
            shippingAddress: e.shippingAddress || '',
            country: e.country || '',
            city: e.city || '',
            phoneNumber: e.phoneNumber,
            orders: e.orders || [],
            isAdmin: e.isAdmin,
            isBanned: e.isBanned,
            superAdmin: e.superAdmin,
        }
    })
    return users;
}

const userById = async (id) => {
    return await User.findByPk(id);
}

module.exports = {
    allUsers,
    userById
}
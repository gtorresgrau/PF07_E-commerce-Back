const nodemailer = require('nodemailer');



const sendEmail2 = async (email) => {
    const config = {
        host: 'smtp.gmail.com',
        port: 587,
        auth: {
            user: 'henrysneakersshop@gmail.com',
            pass: 'ymjwyqnirhlhwddw'
        }
    }

    const mensaje = {
        from: 'henrysneakersshop@gmail.com',
        to: email,//'arux595@gmail.com',
        subject: 'HENRY SNEAKERS',
        html: `
            <h3>Tu pedido esta en camino!!!</h3>
            <h3>Llegara en las proximas 72hs.</h3>
            <h4>El personal del correo se pondra en contacto 
            contigo mediante el numero de telefono que se te solicito en el checkout.</h4>
            <h3>Muchas gracias por elegirnos.</h3>
            <h4>Team Henry Sneakers.</h4>    
    `
    }

    const transport = nodemailer.createTransport(config);

    const info = await transport.sendMail(mensaje);
    //console.log("SENDEMAIL", info)
};

//sendEmail2()
module.exports = {
    sendEmail2
}
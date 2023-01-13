const nodemailer = require('nodemailer');



const sendEmail = async (email) => {
  //console.log('sendEmail:', email)
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'henrysneakersshop@gmail.com',
      pass: 'ovxiwtxagvrqeiwm'
    }
  }

  const mensaje = {
    from: 'henrysneakersshop@gmail.com',
    to: email,//'arux595@gmail.com', email
    subject: 'HENRY SNEAKERS',
    html: `
      <h3>Se realizo tu compra exitosamente!!!</h3>
      <span>Volveras a recibir un email cuando el producto sea despachado.</span>
      <h3>Muchas gracias por elegirnos.</h3>
      <h4>Team Henry Sneakers.</h4>    
    `
  }

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje);
  console.log("SENDEMAIL", info)
};
//sendEmail()
module.exports = {
  sendEmail
}
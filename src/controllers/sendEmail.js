const nodemailer = require('nodemailer');

const sendEmail = async (email) => {
  console.log('sendEmail:',email)
  const config = {
    host: 'smtp.gmail.com',
    port: 587,
    auth: {
      user: 'arieltrangoni1@gmail.com',
      pass: 'xtvbaxaxlpkrddjj'
    }
  }

  const mensaje = {
    from: 'arieltrangoni1@gmail.com',
    to: email,
    subject: 'se realizo la compra correctacmenet',
    text: 'Se realizo la compra exitosamente en Henry Sneakers'
  }

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje);

};

module.exports = {
  sendEmail
}
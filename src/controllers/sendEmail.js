const nodemailer = require('nodemailer');

const sendEmail = async (email) => {
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
    subject: 'Correo de pruebas',
    text: 'Se realizo la compra exitosamente'
  }

  const transport = nodemailer.createTransport(config);

  const info = await transport.sendMail(mensaje);
  console.log(info)
};

module.exports = {
  sendEmail
}
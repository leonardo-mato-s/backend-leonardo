const nodemailer = require("nodemailer");
export const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for 465, false for other ports
    auth: {
      user: 'leonardomatos@upeu.edu.pe', // generated ethereal user
      pass: 'mcekphyeykeuksao', // generated ethereal password
    },
    tls: {
      rejectUnauthorized: false
    }
  });

  transporter.verify().then(()=>{
      console.log("SE PUEDE ENVIAR LOS EMAILS");
  });
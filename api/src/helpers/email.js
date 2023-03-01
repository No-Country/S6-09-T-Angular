import nodemailer from "nodemailer";

const enviar = (user, template, token) => {
  let templates = [
    {
      id: "bienvenida",
      subject: "Bienvenido a ClasseMote", //rellenar con objeto datos
      text: "Este es un texto de prueba",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>Hello ${user.name},</p>
      <p>This is template 1.</p>
    </body>
  </html>
  `,
    },
    {
      id: "despedida",
      subject: "Sending with SendGrid is Fun", //rellenar con objeto datos
      text: "and easy to do anywhere, even with Node.js",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>Hello ${user.name},</p>
      <p>This is template 1.</p>
    </body>
  </html>
  `,
    },
    {
      id: "invitacion",
      subject: "Sending with SendGrid is Fun", //rellenar con objeto datos
      text: "and easy to do anywhere, even with Node.js",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>Hello ${user.name},</p>
      <p>This is template 1.</p>
    </body>
  </html>
  `,
    },
    {
      id: "resetPs",
      subject: "Recuperacion de passwod ClasseMote", //rellenar con objeto datos
      text: "Password",
      html: `
  <html>
    <head>
      <title>hola</title>
    </head>
    <body>
      <p>Hello ${user.name},</p>
      <p>Has solicitado la recuperacion de tu contraseña; para resetear tu password ingresa en el siguiente link, si no fuiste tu ignora el mensaje</p>
      <p>${process.env.URL_front}/auth/actualizar-contrasena/${token}</p>
    </body>
  </html>
  `,
    },
  ];

  let datos = templates.filter((dato) => dato.id === template);

  if (datos.length == 0) {
    return console.log("No se ha seleccionado ningun template");
  }
  let transport = nodemailer.createTransport({
    host: "smtp.gmail.com", //Servidor del email.
    post: 465,
    secure: false,
    auth: {
      user: process.env.user,
      pass: process.env.pass,
    },
  });

  let mailOptions = {
    form: "remitente",
    to: user.email,
    subject: datos[0].subject,
    html: datos[0].html,
  };

  transport.sendMail(mailOptions, (error) => {
    if (error) {
      console.log(error.message);
    } else {
      console.log("email enviado");
    }
  });
};

export { enviar };

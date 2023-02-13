// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail from '@sendgrid/mail'
/*sendEmail funciona con dos parametros el usuario y un string que puede variar segun el caso
bienvenida, despedida, invitcion */
const sendEmail = (user, template) => {

  let templates = [{
    id: "bienvenida",
    subject: 'Bienvenido a ClasseMote',//rellenar con objeto datos
    text: 'Este es un texto de prueba',
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
`
  }, {
    id: "despedida",
    subject: 'Sending with SendGrid is Fun',//rellenar con objeto datos
    text: 'and easy to do anywhere, even with Node.js',
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
`
  },
  {
    id: "holaK",
    subject: 'Probando, probando',
    text: 'A ver.',
    html: `
<html>
  <head>
    <title>hola</title>
  </head>
  <body>
    <p>Probando correo para Kim</p>
    <p>This is template 1.</p>
  </body>
</html>
`
  }, {
    id: "invitacion",
    subject: 'Sending with SendGrid is Fun',//rellenar con objeto datos
    text: 'and easy to do anywhere, even with Node.js',
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
`
  }
  ]

  //let datos = templates.filter((dato) => dato.id === template)
  sgMail.setApiKey(process.env.SENDGRID_API_KEY)
  console.log(process.env.SENDGRID_API_KEY);
  console.log(user);

  const msg = {
    to: 'yannokaiserfrom@gmail.com', // email del emisor
    //from: `${user.email} `, // email del receptor user.email
    from: 'cbrnka1997@duck.com',
    //subject: datos[0].subject,//rellenar con objeto datos
    subject: "Ayuda",
    //text: datos[0].text,//rellenar con objeto datos
    text: "Hola, según Migue.",
    //html: `${datos[0].html} `,//body
    html: "<h1>Hola</h1>"
  }
  try {
    sgMail.send(msg)
    console.log('Email sent')
  } catch (error) {
    console.error(error.message)
  }
}

export { sendEmail }

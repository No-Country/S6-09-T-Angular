// using Twilio SendGrid's v3 Node.js Library
// https://github.com/sendgrid/sendgrid-nodejs

import sgMail  from '@sendgrid/mail'
/*sendEmail funciona con dos parametros el usuario y un string que puede variar segun el caso
bienvenida, despedida, invitcion */
const senEmail=(user,template)=>{

let templates=[{
  id:"bienvenida",
  subject: 'Bienvenido a ClasseMote',//rellenar con objeto datos
  text: 'Este es un texto de prueba',
  html:`
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
},{
  id:"despedida",
  subject: 'Sending with SendGrid is Fun',//rellenar con objeto datos
  text: 'and easy to do anywhere, even with Node.js',
  html:`
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
},{
  id:"invitacion",
  subject: 'Sending with SendGrid is Fun',//rellenar con objeto datos
  text: 'and easy to do anywhere, even with Node.js',
  html:`
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

let datos= templates.filter((dato)=>dato.id === template)
sgMail.setApiKey(process.env.SENDGRID_API_KEY)

const msg = {
  to: 'yannokaiserfrom@gmail.com', // email del emisor
  from:  `${user.correo} `, // email del receptor user.email
  subject: datos[0].subject,//rellenar con objeto datos
  text: datos[0].text,//rellenar con objeto datos
  html: `${datos[0].html} `,//body
}
try {
    sgMail.send(msg)
    console.log('Email sent')
} catch (error) {
    console.error(error)
}
}

export {senEmail}

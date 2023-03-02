import nodemailer from "nodemailer";

const enviar = (user, template, token) => {
  let templates = [
    {
      id: "bienvenida",
      subject: "Bienvenido a ClasseMote",
      text: "Bienvenido a ClasseMote",
      html: `
    <html>
    <head>
    <meta charset="UTF-8">
    <meta content="width=device-width, initial-scale=1" name="viewport">
    <meta name="x-apple-disable-message-reformatting">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <title>Bienvenido a Classemote</title>
    <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
    </head>

    <body
      style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
      <div class="es-wrapper-color" style="background-color:#F4F4F4">
        <!--[if gte mso 9]>
          <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
            <v:fill type="tile" color="#f4f4f4"></v:fill>
          </v:background>
        <![endif]-->
        <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
          style="border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F4F4F4">
          <tr class="gmail-fix" height="0" style="border-collapse:collapse">
            <td style="padding:0;Margin:0">
              <table cellspacing="0" cellpadding="0" border="0" align="center"
                style="border-collapse:collapse;border-spacing:0px;width:600px">
                <tr style="border-collapse:collapse">
                  <td cellpadding="0" cellspacing="0" border="0" style="padding:0;Margin:0;line-height:1px;min-width:600px"
                    height="0"><img src="img/41521605538834349.png"
                      style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px"
                      alt width="600" height="1"></td>
                </tr>
              </table>
            </td>
          </tr>
          <tr style="border-collapse:collapse">
            <td valign="top" style="padding:0;Margin:0">
              <table class="es-header" cellspacing="0" cellpadding="0" align="center"
                style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top">
                <tr style="border-collapse:collapse">
                  <td style="padding:0;Margin:0;background-color:#fec310" bgcolor="#FEC310" align="center">
                    <table class="es-header-body" cellspacing="0" cellpadding="0" align="center"
                      style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                      <tr style="border-collapse:collapse">
                        <td align="left"
                          style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px">
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                <tr style="border-collapse:collapse">
                  <td style="padding:0;Margin:0;background-color:#fec310" bgcolor="#FEC310" align="center">
                    <table class="es-content-body"
                      style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                      cellspacing="0" cellpadding="0" align="center">
                      <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0">
                          <table width="100%" cellspacing="0" cellpadding="0"
                            style="border-collapse:collapse;border-spacing:0px">
                            <tr style="border-collapse:collapse">
                              <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                                <table
                                  style="border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px"
                                  width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
                                  <tr style="border-collapse:collapse">
                                    <td align="center"
                                      style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px">
                                      <h1
                                        style="Margin:0;line-height:58px;font-family:georgia, times, 'times new roman', serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">
                                        ¡Bienvenido!</h1>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse:collapse">
                                    <td
                                      style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"
                                      bgcolor="#ffffff" align="center">
                                      <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"
                                        role="presentation" style="border-collapse:collapse;border-spacing:0px">
                                        <tr style="border-collapse:collapse">
                                          <td
                                            style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                <tr style="border-collapse:collapse">
                  <td align="center" style="padding:0;Margin:0">
                    <table class="es-content-body"
                      style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                      cellspacing="0" cellpadding="0" align="center">
                      <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0">
                          <table width="100%" cellspacing="0" cellpadding="0"
                            style="border-collapse:collapse;border-spacing:0px">
                            <tr style="border-collapse:collapse">
                              <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                                <table
                                  style="border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff"
                                  width="100%" cellspacing="0" cellpadding="0" bgcolor="#ffffff" role="presentation">
                                  <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-l" bgcolor="#ffffff" align="left"
                                      style="Margin:0;padding-top:0px;padding-bottom:20px;padding-left:30px;padding-right:30px">
                                      <p
                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                        Hey, ${user.name}, estamos muy felices de que decidieras unirte a la comunidad
                                        Classemotiana. Aprovechamos en comunicarte que tu cuenta
                                        ha sido creada correctamente, por favor, dale clic al botón de abajo para iniciar tu
                                        aventura con nosotros:</p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse:collapse">
                                    <td align="center" style="Margin:0;padding:10px">
                                      <span class="es-button-border"
                                        style="border-style:solid;border-color:#FFA73B;background:1px;border-width:1px;display:inline-block;border-radius:2px;width:auto"><a
                                          href="#" class="es-button es-button-1" target="_blank"
                                          style="text-decoration:none;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;color:#FFFFFF;font-size:16px;border-style:solid;border-color:#FFA73B;border-width:15px 30px;display:inline-block;background:#FFA73B;border-radius:2px;font-family:'trebuchet ms', 'lucida grande', 'lucida sans unicode', 'lucida sans', tahoma, sans-serif;font-weight:bold;font-style:normal;line-height:19px;width:auto;text-align:center">Iniciar
                                          sesión</a></span>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-l" align="left"
                                      style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px">
                                      <p
                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                        Si el botón no funciona, copia y pega el siguiente URL en tu navegador:<br></p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-l" align="left"
                                      style="padding:0;Margin:0;padding-top:0px;padding-left:30px;padding-right:30px"><a
                                        target="_blank" href="#"
                                        style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;text-decoration:underline;color:#FFA73B;font-size:18px">XXX.XXXXXXX.XXX
                                        / XXXXXXXXXXXXX</a></td>
                                  </tr>
                                  <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-l" align="left"
                                      style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px">
                                      <p
                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                        Si tuvieras alguna duda o pregunta, envíala al siguiente correo:
                                        support@classemote.com<br></p>
                                      <p
                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                        Estaremos contentos de poder ayudarte.</p>
                                    </td>
                                  </tr>
                                  <tr style="border-collapse:collapse">
                                    <td class="es-m-txt-l" align="left"
                                      style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px">
                                      <p
                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                        Saludos ,</p>
                                      <p
                                        style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                        El equipo classemotiano.<br></p>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
              <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                <tr style="border-collapse:collapse">
                  <td align="center" style="padding:0;Margin:0">
                    <table class="es-content-body"
                      style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                      cellspacing="0" cellpadding="0" align="center">
                      <tr style="border-collapse:collapse">
                        <td align="left" style="padding:0;Margin:0">
                          <table width="100%" cellspacing="0" cellpadding="0"
                            style="border-collapse:collapse;border-spacing:0px">
                            <tr style="border-collapse:collapse">
                              <td valign="top" align="center" style="padding:0;Margin:0;width:600px">
                                <table width="100%" cellspacing="0" cellpadding="0" role="presentation"
                                  style="border-collapse:collapse;border-spacing:0px">
                                  <tr style="border-collapse:collapse">
                                    <td
                                      style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0"
                                      align="center">
                                      <table width="100%" height="100%" cellspacing="0" cellpadding="0" border="0"
                                        role="presentation" style="border-collapse:collapse;border-spacing:0px">
                                        <tr style="border-collapse:collapse">
                                          <td
                                            style="padding:0;Margin:0;border-bottom:1px solid #f4f4f4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                          </td>
                                        </tr>
                                      </table>
                                    </td>
                                  </tr>
                                </table>
                              </td>
                            </tr>
                          </table>
                        </td>
                      </tr>
                    </table>
                  </td>
                </tr>
              </table>
            </td>
          </tr>
        </table>
      </div>
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
      subject: "ClasseMote: Recuperacion de contraseña", //rellenar con objeto datos
      text: "ClasseMote: Recuperacion de contraseña",
      html: `
      <html>

      <head>
          <meta charset="UTF-8">
          <meta content="width=device-width, initial-scale=1" name="viewport">
          <meta name="x-apple-disable-message-reformatting">
          <meta http-equiv="X-UA-Compatible" content="IE=edge">
          <title>Bienvenido a Classemote</title>
          <link href="https://fonts.googleapis.com/css?family=Lato:400,400i,700,700i" rel="stylesheet">
      </head>
      
      <body
          style="width:100%;-webkit-text-size-adjust:100%;-ms-text-size-adjust:100%;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;padding:0;Margin:0">
          <div class="es-wrapper-color" style="background-color:#F4F4F4">
              <!--[if gte mso 9]>
                <v:background xmlns:v="urn:schemas-microsoft-com:vml" fill="t">
                  <v:fill type="tile" color="#f4f4f4"></v:fill>
                </v:background>
              <![endif]-->
              <table class="es-wrapper" width="100%" cellspacing="0" cellpadding="0"
                  style="border-collapse:collapse;border-spacing:0px;padding:0;Margin:0;width:100%;height:100%;background-repeat:repeat;background-position:center top;background-color:#F4F4F4">
                  <tr class="gmail-fix" height="0" style="border-collapse:collapse">
                      <td style="padding:0;Margin:0">
                          <table cellspacing="0" cellpadding="0" border="0" align="center"
                              style="border-collapse:collapse;border-spacing:0px;width:600px">
                              <tr style="border-collapse:collapse">
                                  <td cellpadding="0" cellspacing="0" border="0"
                                      style="padding:0;Margin:0;line-height:1px;min-width:600px" height="0"><img
                                          src="img/41521605538834349.png"
                                          style="display:block;border:0;outline:none;text-decoration:none;-ms-interpolation-mode:bicubic;max-height:0px;min-height:0px;min-width:600px;width:600px"
                                          alt width="600" height="1"></td>
                              </tr>
                          </table>
                      </td>
                  </tr>
                  <tr style="border-collapse:collapse">
                      <td valign="top" style="padding:0;Margin:0">
                          <table class="es-header" cellspacing="0" cellpadding="0" align="center"
                              style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%;background-color:#FFA73B;background-repeat:repeat;background-position:center top">
                              <tr style="border-collapse:collapse">
                                  <td style="padding:0;Margin:0;background-color:#fec310" bgcolor="#FEC310" align="center">
                                      <table class="es-header-body" cellspacing="0" cellpadding="0" align="center"
                                          style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px">
                                          <tr style="border-collapse:collapse">
                                              <td align="left"
                                                  style="Margin:0;padding-bottom:10px;padding-left:10px;padding-right:10px;padding-top:20px">
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                          <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                              style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                              <tr style="border-collapse:collapse">
                                  <td style="padding:0;Margin:0;background-color:#fec310" bgcolor="#FEC310" align="center">
                                      <table class="es-content-body"
                                          style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                          cellspacing="0" cellpadding="0" align="center">
                                          <tr style="border-collapse:collapse">
                                              <td align="left" style="padding:0;Margin:0">
                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                      style="border-collapse:collapse;border-spacing:0px">
                                                      <tr style="border-collapse:collapse">
                                                          <td valign="top" align="center"
                                                              style="padding:0;Margin:0;width:600px">
                                                              <table
                                                                  style="border-collapse:separate;border-spacing:0px;background-color:#ffffff;border-radius:4px"
                                                                  width="100%" cellspacing="0" cellpadding="0"
                                                                  bgcolor="#ffffff" role="presentation">
                                                                  <tr style="border-collapse:collapse">
                                                                      <td align="center"
                                                                          style="Margin:0;padding-bottom:5px;padding-left:30px;padding-right:30px;padding-top:35px">
                                                                          <h1
                                                                              style="Margin:0;line-height:58px;font-family:georgia, times, 'times new roman', serif;font-size:48px;font-style:normal;font-weight:normal;color:#111111">
                                                                              Recuperar contraseña</h1>
                                                                      </td>
                                                                  </tr>
                                                                  <tr style="border-collapse:collapse">
                                                                      <td style="Margin:0;padding-top:5px;padding-bottom:5px;padding-left:20px;padding-right:20px;font-size:0"
                                                                          bgcolor="#ffffff" align="center">
                                                                          <table width="100%" height="100%" cellspacing="0"
                                                                              cellpadding="0" border="0" role="presentation"
                                                                              style="border-collapse:collapse;border-spacing:0px">
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td
                                                                                      style="padding:0;Margin:0;border-bottom:1px solid #ffffff;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                          <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                              style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                              <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0">
                                      <table class="es-content-body"
                                          style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                          cellspacing="0" cellpadding="0" align="center">
                                          <tr style="border-collapse:collapse">
                                              <td align="left" style="padding:0;Margin:0">
                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                      style="border-collapse:collapse;border-spacing:0px">
                                                      <tr style="border-collapse:collapse">
                                                          <td valign="top" align="center"
                                                              style="padding:0;Margin:0;width:600px">
                                                              <table
                                                                  style="border-collapse:separate;border-spacing:0px;border-radius:4px;background-color:#ffffff"
                                                                  width="100%" cellspacing="0" cellpadding="0"
                                                                  bgcolor="#ffffff" role="presentation">
                                                                  <tr style="border-collapse:collapse">
                                                                      <td class="es-m-txt-l" bgcolor="#ffffff" align="left"
                                                                          style="Margin:0;padding-top:0px;padding-bottom:20px;padding-left:30px;padding-right:30px">
                                                                          <p
                                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                                                              Hola, ${user.name}. <br> Has solicitado la
                                                                              recuperación de tu contraseña para lo cual debes
                                                                              ingresar al siguiente URL:</p>
                                                                      </td>
                                                                  </tr>
                                                                  <tr style="border-collapse:collapse">
                                                                      <td class="es-m-txt-l" align="left"
                                                                          style="padding:0;Margin:0;padding-top:0px;padding-left:30px;padding-right:30px">
                                                                          <a target="_blank" href="#"
                                                                              style="-webkit-text-size-adjust:none;-ms-text-size-adjust:none;text-decoration:underline;color:#FFA73B;font-size:18px">
                                                                              ${process.env.URL_front}/auth/actualizar-contrasena/${token}</a>
                                                                      </td>
                                                                  </tr>
                                                                  <tr style="border-collapse:collapse">
                                                                      <td class="es-m-txt-l" align="left"
                                                                          style="padding:0;Margin:0;padding-top:20px;padding-left:30px;padding-right:30px">
                                                                          <p
                                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                                                              Si no fuiste tú ignora el mensaje. <br>
                                                                              O si tuvieras alguna pregunta, envíala al
                                                                              siguiente correo:
                                                                              support@classemote.com<br></p>
                                                                          <p
                                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                                                              Estaremos contentos de poder ayudarte.</p>
                                                                      </td>
                                                                  </tr>
                                                                  <tr style="border-collapse:collapse">
                                                                      <td class="es-m-txt-l" align="left"
                                                                          style="Margin:0;padding-top:20px;padding-left:30px;padding-right:30px;padding-bottom:40px">
                                                                          <p
                                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                                                              Saludos ,</p>
                                                                          <p
                                                                              style="Margin:0;-webkit-text-size-adjust:none;-ms-text-size-adjust:none;font-family:lato, 'helvetica neue', helvetica, arial, sans-serif;line-height:27px;color:#666666;font-size:18px">
                                                                              El equipo classemotiano.<br></p>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                          <table class="es-content" cellspacing="0" cellpadding="0" align="center"
                              style="border-collapse:collapse;border-spacing:0px;table-layout:fixed !important;width:100%">
                              <tr style="border-collapse:collapse">
                                  <td align="center" style="padding:0;Margin:0">
                                      <table class="es-content-body"
                                          style="border-collapse:collapse;border-spacing:0px;background-color:transparent;width:600px"
                                          cellspacing="0" cellpadding="0" align="center">
                                          <tr style="border-collapse:collapse">
                                              <td align="left" style="padding:0;Margin:0">
                                                  <table width="100%" cellspacing="0" cellpadding="0"
                                                      style="border-collapse:collapse;border-spacing:0px">
                                                      <tr style="border-collapse:collapse">
                                                          <td valign="top" align="center"
                                                              style="padding:0;Margin:0;width:600px">
                                                              <table width="100%" cellspacing="0" cellpadding="0"
                                                                  role="presentation"
                                                                  style="border-collapse:collapse;border-spacing:0px">
                                                                  <tr style="border-collapse:collapse">
                                                                      <td style="Margin:0;padding-top:10px;padding-bottom:20px;padding-left:20px;padding-right:20px;font-size:0"
                                                                          align="center">
                                                                          <table width="100%" height="100%" cellspacing="0"
                                                                              cellpadding="0" border="0" role="presentation"
                                                                              style="border-collapse:collapse;border-spacing:0px">
                                                                              <tr style="border-collapse:collapse">
                                                                                  <td
                                                                                      style="padding:0;Margin:0;border-bottom:1px solid #f4f4f4;background:#FFFFFF none repeat scroll 0% 0%;height:1px;width:100%;margin:0px">
                                                                                  </td>
                                                                              </tr>
                                                                          </table>
                                                                      </td>
                                                                  </tr>
                                                              </table>
                                                          </td>
                                                      </tr>
                                                  </table>
                                              </td>
                                          </tr>
                                      </table>
                                  </td>
                              </tr>
                          </table>
                      </td>
                  </tr>
              </table>
          </div>
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

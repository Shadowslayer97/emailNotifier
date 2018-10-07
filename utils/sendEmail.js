var nodemailer = require('nodemailer');
var config = require('../config');

module.exports = {
    send:function(mailObj){
      // var transporter = nodemailer.createTransport({
      //   // service:"gmail",
      //   // auth: {
      //   //   type: 'OAuth2',
      //   //    user: config["systemEmail"],
      //   //    clientId: config["client_id"],
      //   //    clientSecret: config["client_secret"],
      //   //    accessToken: config["accessToken"],
      //   // }
      //
      // });
      nodemailer.createTestAccount((err, account) => {
    // create reusable transporter object using the default SMTP transport
      var transporter = nodemailer.createTransport({
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false, // true for 465, false for other ports
          auth: {
              user: account.user, // generated ethereal user
              pass: account.pass  // generated ethereal password
          }
      });

      var mailOptions = {
        from: '"Info" <info@example.com>',
        to: config.config["testEmail"],
        subject: mailObj.subject,
        text: mailObj.text,
        html: mailObj.htmlText
      };

      transporter.sendMail(mailOptions, function(error, info){
        if (error) {
          console.log(error);
        } else {
          console.log('Email sent: ' + info.response);
        }
      });
    });
  }
}

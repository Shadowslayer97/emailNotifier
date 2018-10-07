var amqp = require('amqplib/callback_api');
var Renderer = require('../utils/templateParser');
var sendEmail = require('../utils/sendEmail');

amqp.connect('amqp://localhost', function(err, conn) {
  conn.createChannel(function(err, ch) {
    var q = 'recruiter';
    ch.assertQueue(q, {durable: false});
    console.log(" [*] Waiting for messages in %s. To exit press CTRL+C", q);
    ch.consume(q, function(msg) {
      // Check message
      Renderer.renderTemplate(JSON.parse(msg.content),function(err,result){
        console.log(result);
        sendEmail.send(result);
      });

    }, {noAck: true});
  });

});

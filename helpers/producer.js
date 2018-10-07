var amqp = require('amqplib/callback_api');

var incomingData = require('../producerExample');

var incomingRecruiterData = incomingData["producer"];

var Producer = {
  jobSeeker : function(method){
    amqp.connect('amqp://localhost', function(err, conn) {
      conn.createChannel(function(err, ch) {
        var q = 'seeker';
        // Forming queue data:
        var queryData = incomingRecruiterData[method];

        ch.assertQueue(q, {durable: false});
        // Note: on Node 6 Buffer.from(msg) should be used
        ch.sendToQueue(q, new Buffer(JSON.stringify(queryData)));
        console.log(" [x] Sent to seeker");
      });
    });
  },
  jobGiver : function(method){
    amqp.connect('amqp://localhost', function(err, conn) {
      conn.createChannel(function(err, ch) {
        var q = 'recruiter';

        var queryData = incomingRecruiterData[method];

        ch.assertQueue(q, {durable: false});
        // Note: on Node 6 Buffer.from(msg) should be used
        ch.sendToQueue(q, new Buffer(JSON.stringify(queryData)));
        console.log(" [x] Sent to recruiter");
      });
    });
  }
};

//Running producer script
Producer.jobGiver("jobApplied");

exports.Producer = Producer;

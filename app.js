var express = require('express');

// Install jade , nodemailer, html2Text

var app = express();
var PORT = 3000;

app.set('view engine','jade');
app.use(express.static(path.join(__dirname, 'views')));

app.listen(PORT,function(){
  console.log('Server running at port',PORT);
})

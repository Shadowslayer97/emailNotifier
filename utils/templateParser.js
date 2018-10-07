var jade = require('jade');
var htmlToText = require('html-to-text');
var templates = require('../constants/templateConstants');

var renderTemplate = function(templateObject,callback){
    var chosenTemplate = templates.templateConstants.templateViewConstants[templateObject.message];
    console.log(templateObject.message);
    var text,htmlText;
    console.log(templateObject);
    jade.renderFile(chosenTemplate,{query:templateObject},function(err,html){
      if(err){
        console.log(err);
        callback(err);
      }
      else {
        htmlText = html;
        text = htmlToText.fromString(html);
      }
      console.log(html);
      var returnObj = {
        "email":templateObject.email,
        "subject":templates.templateConstants.templateSubjectsConstants[templateObject.message],
        "text":text,
        "htmlText":htmlText
      };
      callback(0,returnObj);
    })
}

exports.renderTemplate = renderTemplate;

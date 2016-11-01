
/*

Send SMS via #AppsScript
=========================

Written by Amit Agarwal
Website: ctrlq.org
Email: amit@labol.org
Twitter: @labnol

*/


function sendSMS(toNumber, fromNumber, smsText) {
  var fromNumber = "+xxx"
  var toNumber = "+xxx"
  var smsText = 'Régate CNC N°8 du 9 juin 2015 Start 19:00 -->Neuchâtel-3 bouées à tribord-2 tours-passage par le START à chaque tour/Vent ENE 060° 12knt Bise avec rafales'
  Logger.log(smsText.length)
  
  if (smsText.length > 160) {
    Logger.log("The text should be limited to 160 characters");
    return;
  }
  
  var accountSID = "sid";
  var authToken = "token";
  
  var url = "https://api.twilio.com/2010-04-01/Accounts/" + accountSID + "/Messages.json";
  
  var options = {
    method: "POST",
    headers: {
      Authorization: "Basic " + Utilities.base64Encode(accountSID + ":" + authToken)
    },
    payload: {
      "From" : fromNumber,
      "To"   : toNumber,
      "Body" : smsText
    },
    muteHttpExceptions: true
  };
  
  var response = JSON.parse(UrlFetchApp.fetch(url, options).getContentText());
  
  if (response.hasOwnProperty("sid")) {
    Logger.log("Message sent successfully.");
  }
  
  Utilities.sleep(1000);
  
}

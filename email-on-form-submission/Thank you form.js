function sendThankYouEmail() {
  const formResponsesSheet = SpreadsheetApp.getActiveSpreadsheet().getActiveSheet();
  const dataRange = formResponsesSheet.getDataRange();
  const data = dataRange.getValues();

  const lastRowIndex = dataRange.getLastRow();
  const lastResponse = data[lastRowIndex - 1];

  const name = lastResponse[1]; 
  const email = lastResponse[2]; 

  const subject = "Thank you!!";
  const body = "Dear ${name},\n\Thank you for submitting form.\n\nBest regards,\nShisam Gyawali";

  MailApp.sendEmail(email, subject, body);
  Logger.log(email, subject, body)
}

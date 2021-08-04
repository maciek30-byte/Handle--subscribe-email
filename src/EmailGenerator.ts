import {confirmMessage, host, htmlLink} from "./EmailBase";
import EmailSender from "./EmailSender";

class EmailGenerator {
  static async sendFirstEmail(subscriberEmail:string) {
    try {
      console.log(EmailSender.createTransporter(host))
      await EmailSender.createTransporter(host).sendMail({
        //zdebugowac to
        from: host,
        to: subscriberEmail,
        subject: `Hello in Newsletter`,
        text:'Newsetler Data',
        html: htmlLink,
      });
    } catch (e) {
      console.error('tutaj sie cos wyjebalo',e.message);
      // throw new Error('Something went wrong')
    }
  }

  static async sendSecondEmail(recivedSubsriberEmail:string) {
    try {
      await EmailSender.createTransporter(host).sendMail({
        from: host,
        to: recivedSubsriberEmail,
        subject: "subscribe is completed",
        text:'Newsleter Data',
        html: confirmMessage,
      });

    } catch (e) {
      // throw new Error(e.message);
      console.log(e.message);
    }
  }
}
export default EmailGenerator;

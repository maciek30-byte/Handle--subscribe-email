import {confirmMessage, host, htmlLink, subscriber} from "./EmailBase";
import EmailSender from "./EmailSender";

class EmailGenerator {
  static async sendFirstEmail(subscriberEmail:string) {
    try {
      await EmailSender.createTransporter(host).sendMail({
        from: host,
        to: subscriberEmail,
        subject: `Hello in Newsletter`,
        html: htmlLink,
      });
    } catch (e) {
      console.error(e.message);
      // throw new Error('Something went wrong')
    }
  }

  static async sendSecondEmail() {
    try {
      await EmailSender.createTransporter(host).sendEmail({
        from: host,
        to: subscriber,
        subject: "subscribe is completed",
        html: confirmMessage,
      });
    } catch (e) {
      // throw new Error(e.message);
      console.log(e.message);
    }
  }
}
export default EmailGenerator;

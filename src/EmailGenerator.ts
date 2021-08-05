import { confirmMessage, host, htmlLink } from "./EmailBase";
import EmailSender from "./EmailSender";

class EmailGenerator {
  static async sendFirstEmail(subscriberEmail: string) {
    try {
      const transporter = EmailSender.createTransporter(host);
      await transporter.sendMail({
        from: host,
        to: subscriberEmail,
        subject: "Welcome subscribent",
        text: "Welcome",
        html: htmlLink,
      });
    } catch (e) {
      console.error("tutaj sie cos wyjebalo", e.message);
      // throw new Error('Something went wrong')
    }
  }

  static async sendSecondEmail(recivedSubsriberEmail: string) {
    try {
      const transporter = EmailSender.createTransporter(host);
      await transporter.sendMail({
        from: host,
        to: recivedSubsriberEmail,
        subject: "subscribe is completed",
        text: "Newsleter Data",
        html: confirmMessage,
      });
    } catch (e) {
      // throw new Error(e.message);
      console.log(e.message);
    }
  }
}
export default EmailGenerator;

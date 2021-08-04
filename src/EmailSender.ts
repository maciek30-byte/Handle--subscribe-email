import {User} from "./EmailBase";
import {nodemailer} from "../config";

class EmailSender {
    static createTransporter(host: User) {
        return nodemailer.createTransport({
            host: "smtp.gmail.com",
            port: 587,
            secure: false, // true for 465, false for other ports
            auth: {
                user: host.username, // generated ethereal user
                pass: host.pass, // generated ethereal password
            },
        });
    }
}
export default EmailSender
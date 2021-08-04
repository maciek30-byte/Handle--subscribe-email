// import { User } from "./EmailBase";
// const nodemailer = require("nodemailer");
//
// class EmailCreator {
//   static createTransporter(host: User) {
//     return nodemailer.createTransport({
//       host: "smtp.gmail.com",
//       port: 587,
//       secure: false, // true for 465, false for other ports
//       auth: {
//         user: host.username, // generated ethereal user
//         pass: host.pass, // generated ethereal password
//       },
//     });
//   }
//
//   static async sendEmail(
//     host: string,
//     subscriber: string,
//     message: unknown,
//     transporterObj: any
//   ) {
//     try {
//       await transporterObj.sendMail({
//         from: host,
//         to: subscriber,
//         subject: `Hello in Newsletter`,
//         html: message,
//       });
//     } catch (e) {
//       console.error('something went wrong', e.message)
//     }
//   }
// }
// export default EmailCreator

// import { User} from "./EmailBase";
// const nodemailer = require("nodemailer");
//
// export const createTransporter = (sender:User) => {
//   return nodemailer.createTransport({
//     host: "smtp.gmail.com",
//     port: 587,
//     secure: false, // true for 465, false for other ports
//     auth: {
//       user: sender.username, // generated ethereal user
//       pass: sender.pass, // generated ethereal password
//     },
//   });}
//
//    export  const sendEmail = async (from:User, to: unknown, message: unknown,transporter:any) => {
//     try {
//       await transporter.sendMail({
//         from: from.username, // sender address
//         to: to, // list of receivers
//         subject: `Hello  `, // Subject line
//         html: message,
//       });
//     } catch (e) {
//       console.error("something went wrong",e.message);
//     }
//   };
//



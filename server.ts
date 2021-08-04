// import { host, User } from "./src/EmailBase";
//
//
//
// const express = require("express");
// const path = require("path");
// const app = express();
// const PORT = process.env.PORT || 3000;
// const bodyParser = require("body-parser");
//
//
//
// //Data Parsing
// app.use(bodyParser.urlencoded({ extended: false }));
// app.use(express.json());
// app.use(express.static(path.join(__dirname, "public")));
//
// const sendSecondEmail = async (subscriberEmail: string, transporter: any) => {
//
// };
//
//
// // EmailGenerator
// // -> sendFirstEmail
// // -> sendSecondEmail
//
// // EmailSender
// // -> createTransporter
//
// // const emailRouter = express.Router()
//
// // app.use(emailRouter)
//
//
// app.get("/confirm", (req: any, res: any) => {
//
//
//   EmailCreator.sendEmail(
//     host.username,
//     subscriberEmail,
//     "<p>subscribe is completed<p/>>",
//     transporter
//   );
//   res.send("subscribe completed");
// });
//
// app.post("/email", async (req: any, res: any) => {
//   const message: string = `<a href='http://localhost:3000/confirm'>Click me</a>`;
//   try {
//     const subscriberEmail: string = req.body.userEmail;
//     const transporter = EmailCreator.createTransporter(host);
//     await EmailCreator.sendEmail(
//       host.username,
//       subscriberEmail,
//       message,
//       transporter
//     );
//     await sendSecondEmail(subscriberEmail, transporter);
//     await res.redirect(`http://http://busko.com.pl/`);
//   } catch (e) {
//     console.error(e.message);
//   }
// });
//
// app.listen(PORT, () => {
//   console.log(`server is running at http://localhost:${PORT}`);
// });

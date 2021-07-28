
import { host, User} from "./src/EmailBase";

import EmailCreator from "./src/EmailCreator";

const express = require("express");
const path = require("path");
const app = express();
const PORT = process.env.PORT || 3000;
const bodyParser = require("body-parser");

const message:string = `<a href='http://localhost:3000/confirm'>Click me</a>`
//Data Parsing
app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "public")));


app.post("/email", async (req: any, res: any) => {
  const subscriberEmail:string = req.body.userEmail;
  const transporter = EmailCreator.createTransporter(host);
  await EmailCreator.sendEmail(host.username,subscriberEmail,message,transporter)





});

// async function sendSecondEmail(subscriber:User) {
//   app.get("/confirm", (req: any, resp: any) => {
//    Subscribe.getSubscribeByUser(host,subscriber,'<p>subscribe is success<p/>')
//   });
// }

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

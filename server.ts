import { express, PORT, startConfig } from "./config";
import EmailGenerator from "./src/EmailGenerator";
import EmailSender from "./src/EmailSender";

const app = express();

startConfig(app);

let subscriberEmail:string;

app.post("/email", async (req: any, resp: any) => {
  try {
    subscriberEmail = req.body.userEmail;
    await EmailGenerator.sendFirstEmail(subscriberEmail);
    await resp.send('check your inbox')
  } catch (e) {
    console.error("error occured", e.message);
  }
});

app.get("/confirm", async (req: any, res: any) => {
    await EmailGenerator.sendSecondEmail(subscriberEmail);
   await res.send('your  add to subscribent list')


});

app.listen(PORT, () => {
  console.log(`server is running at http://localhost:${PORT}`);
});

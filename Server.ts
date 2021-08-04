import { express, startConfig } from "./config";
import EmailGenerator from "./src/EmailGenerator";

const app = express();

startConfig(app);

app.post("/email", async (req: any, resp: any) => {
  const subscribeEmail: string = req.body.userEmail;
  await EmailGenerator.sendFirstEmail(subscribeEmail);
});

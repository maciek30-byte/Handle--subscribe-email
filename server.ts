import {express, PORT, startConfig} from "./config";
import EmailGenerator from "./src/EmailGenerator";
import EmailSender from "./src/EmailSender";

const app = express();

startConfig(app);

app.post("/email", async (req: any, resp: any) => {
  const subscribedEmail: string = req.body.userEmail;
  await EmailGenerator.sendFirstEmail(subscribedEmail);
  await resp.redirect('/confirm')
});

// app.get('/confirm',async (req:any,res:any)=> {
//    await EmailGenerator.sendSecondEmail(req.body.userEmail)
// })

app.listen(PORT, ()=>{
    console.log(`server is running at http://localhost:${PORT}`);
})

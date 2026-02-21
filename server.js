import express from "express";
import OpenAI from "openai";
import twilio from "twilio";

const app = express();
app.use(express.urlencoded({ extended: false }));
app.use(express.json());

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

const accountSid = process.env.TWILIO_ACCOUNT_SID;
const authToken = process.env.TWILIO_AUTH_TOKEN;
const twilioNumber = process.env.TWILIO_PHONE_NUMBER;

const client = twilio(accountSid, authToken);

app.post("/voice", async (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  const userInput = req.body.SpeechResult || "Bonjour";

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Tu es un assistant vocal naturel et professionnel." },
      { role: "user", content: userInput }
    ],
  });

  const reply = completion.choices[0].message.content;

  twiml.say(reply, { voice: "alice", language: "fr-FR" });

  twiml.gather({
    input: "speech",
    action: "/voice",
    method: "POST",
  });

  res.type("text/xml");
  res.send(twiml.toString());
});

app.get("/call", async (req, res) => {
  const to = req.query.to;

  await client.calls.create({
    url: "https://TON-PROJET.vercel.app/voice",
    to: to,
    from: twilioNumber,
  });

  res.send("Appel lancé !");
});

app.listen(3000, () => {
  console.log("Serveur lancé");
});

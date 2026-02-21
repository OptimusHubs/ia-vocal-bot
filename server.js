import express from "express";
import OpenAI from "openai";
import twilio from "twilio";

const app = express();
app.use(express.urlencoded({ extended: false }));

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
});

app.post("/voice", async (req, res) => {
  const twiml = new twilio.twiml.VoiceResponse();

  const userInput = req.body.SpeechResult || "Bonjour";

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Tu es un assistant vocal professionnel et naturel." },
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

app.listen(3000, () => {
  console.log("Serveur lancé sur port 3000");
});

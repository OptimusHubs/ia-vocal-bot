import OpenAI from "openai";
import twilio from "twilio";

export default async function handler(req, res) {
  if (req.method !== "POST") {
  req.method = "POST";
}

  const openai = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
  });

  const twiml = new twilio.twiml.VoiceResponse();

  const userInput = "Bonjour, présente-toi en 2 phrases.";

  const completion = await openai.chat.completions.create({
    model: "gpt-4o-mini",
    messages: [
      { role: "system", content: "Tu es un assistant vocal naturel et professionnel." },
      { role: "user", content: userInput }
    ],
  });

  const reply = completion.choices[0].message.content;

  twiml.say(reply, { voice: "alice", language: "fr-FR" });

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(twiml.toString());
}

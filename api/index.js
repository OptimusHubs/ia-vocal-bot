import twilio from "twilio";

export default async function handler(req, res) {

  const twiml = new twilio.twiml.VoiceResponse();

  twiml.say(
    "Bonjour Alexandre. Ton bot vocal fonctionne parfaitement.",
    { voice: "alice", language: "fr-FR" }
  );

  twiml.pause({ length: 1 });

  twiml.say(
    "Nous pouvons maintenant construire un vrai agent conversationnel.",
    { voice: "alice", language: "fr-FR" }
  );

  res.setHeader("Content-Type", "text/xml");
  res.status(200).send(twiml.toString());
}

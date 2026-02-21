import twilio from "twilio";

export default async function handler(req, res) {
  const { to } = req.query;

  if (!to) {
    return res.status(400).json({ error: "Missing 'to' parameter" });
  }

  const client = twilio(
    process.env.account_sid,
    process.env.Auth_Token
  );

  try {
    const call = await client.calls.create({
      url: "https://ia-vocal-bot.vercel.app/api",
      to: to,
      from: process.env.TWILIO_PHONE,
    });

    return res.status(200).json({ success: true, sid: call.sid });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
}

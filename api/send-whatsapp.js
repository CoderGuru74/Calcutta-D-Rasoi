// server.js
import express from "express";
import cors from "cors";
import twilio from "twilio";
import dotenv from "dotenv";

dotenv.config();

const app = express();
const PORT = process.env.PORT || 5000;

// ✅ Load Twilio credentials from .env
const accountSid = process.env.TWILIO_SID;
const authToken = process.env.TWILIO_AUTH;
const client = twilio(accountSid, authToken);

app.use(cors());
app.use(express.json());

app.post("/send-whatsapp", async (req, res) => {
  const { name, phone, date, time, guests } = req.body;

  try {
    const formattedPhone = `whatsapp:+91${phone}`;
    const message = await client.messages.create({
      from: "whatsapp:+14155238886",
      to: formattedPhone,
      body: `🍽️ *New Table Booking!*\n\n👤 Name: ${name}\n📅 Date: ${date}\n🕒 Time: ${time}\n👥 Guests: ${guests}\n\n✅ Sent via Calcutta-D-Rasoi`,
    });

    console.log("✅ WhatsApp sent:", message.sid);
    res.json({ success: true, sid: message.sid });
  } catch (error) {
    console.error("❌ WhatsApp send failed:", error);
    res.status(500).json({ success: false, error: error.message });
  }
});

app.listen(PORT, () => console.log(`🚀 Server running on http://localhost:${PORT}`));

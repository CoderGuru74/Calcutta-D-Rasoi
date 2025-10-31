import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

const BookTableForm: React.FC = () => {
  const form = useRef<HTMLFormElement>(null);

  const sendEmailAndWhatsApp = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.current) return;

    const formData = new FormData(form.current);
    const name = formData.get("name") as string;
    const phone = formData.get("phone") as string;
    const date = formData.get("date") as string;
    const time = formData.get("time") as string;
    const guests = formData.get("guests") as string;

    // ✅ Send Email using EmailJS
    try {
      await emailjs.sendForm(
        "service_1yaqp9d", // Your EmailJS Service ID
        "template_ak9edbq", // Your EmailJS Template ID
        form.current,
        "dj9-PXBKkF17KAJHb" // Your EmailJS Public Key
      );
      console.log("✅ Email sent successfully");
    } catch (err) {
      console.error("❌ Email send failed:", err);
    }

    // ✅ Send WhatsApp using your backend
    try {
      const response = await fetch("https://calcutta-d-rasoi.vercel.app/send-whatsapp", {

        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, phone, date, time, guests }),
      });

      const result = await response.json();

      if (result.success) {
        alert("✅ Booking sent successfully via Email & WhatsApp!");
      } else {
        alert("⚠️ WhatsApp message failed: " + result.error);
      }
    } catch (err) {
      console.error("❌ WhatsApp send failed:", err);
      alert("❌ WhatsApp message failed. Check server.");
    }

    form.current?.reset();
  };

  return (
    <div
      className="min-h-screen flex items-center justify-center bg-cover bg-center p-6"
      style={{
        backgroundImage: "url('/book.jpg')",
      }}
    >
      <form
        ref={form}
        onSubmit={sendEmailAndWhatsApp}
        className="bg-white bg-opacity-90 p-8 rounded-2xl shadow-xl max-w-md w-full space-y-4"
      >
        <h2 className="text-2xl font-semibold text-center text-green-700">
          Book a Table 🍽️
        </h2>

        <input
          type="text"
          name="name"
          placeholder="Full Name"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="tel"
          name="phone"
          placeholder="Phone Number (without +91)"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email Address"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="date"
          name="date"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="time"
          name="time"
          className="w-full p-2 border rounded"
          required
        />
        <input
          type="number"
          name="guests"
          placeholder="No. of Guests"
          className="w-full p-2 border rounded"
          required
        />
        <textarea
          name="message"
          placeholder="Special requests..."
          className="w-full p-2 border rounded"
        />

        <button
          type="submit"
          className="w-full bg-green-600 text-white py-2 rounded hover:bg-green-700 transition"
        >
          Send Booking 📩
        </button>
      </form>
    </div>
  );
};

export default BookTableForm;

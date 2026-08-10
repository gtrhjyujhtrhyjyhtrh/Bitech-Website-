import React, { useState } from 'react';
import 'bootstrap-icons/font/bootstrap-icons.css';
import axios from "axios";
import Footer from './Footer';


const initialForm = { name: '', email: '', phone: '', subject: '', message: '' };

function Contact({ navigate }) {
  const [form, setForm] = useState(initialForm);
  const [sent, setSent] = useState(false);

  const updateField = (event) => {
    setForm({ ...form, [event.target.name]: event.target.value });
  };




  const sendMessage = async (event) => {
  event.preventDefault();

  try {
    await axios.post(
      "http://localhost:5000/api/contacts",
      {
        name: form.name,
        email: form.email,
        phone: form.phone,
        subject: form.subject,
        message: form.message,
      }
    );

    alert(
      "Message sent successfully. Please wait for our reply."
    );

    setSent(true);

    setForm({
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    });
  } catch (error) {
    console.error(error);

    alert("Failed to send message.");
  }
};




  return (
    <main className="contact-page">
      <section className="contact-section">
        <div className="contact-heading">
          <p>Contact Us</p>
          <h1>Get in Touch with Us</h1>
        </div>

        <div className="contact-layout">
          <aside className="contact-details">
            <div>
              <h3>Address</h3>
              <p>Serene Plaza, Building No. C 6, 7, 2nd Floor, Sector F, DHA Phase 1, Islamabad, Pakistan.</p>
            </div>
            <div>
              <h3>Contact</h3>
              <p><i className="bi bi-telephone-fill" /> +92 300 5005086</p>
              <p><i className="bi bi-envelope-fill" /> info@bitechglobal.com</p>
            </div>
            <div>
              <h3>Open Time</h3>
              <p>Monday - Friday: 9:00 am - 6:00 pm</p>
            </div>
            <div>
              <h3>Follow Us</h3>
              <a href="https://www.facebook.com" target="_blank" rel="noreferrer" aria-label="Facebook"><i className="bi bi-facebook" /></a>
              <a href="https://www.linkedin.com" target="_blank" rel="noreferrer" aria-label="LinkedIn"><i className="bi bi-linkedin" /></a>
            </div>
          </aside>

          <form className="contact-form" onSubmit={sendMessage}>
            <div className="contact-fields">
              <label>Your Name *<input name="name" value={form.name} onChange={updateField} placeholder="Ex. Jhon Doe" required /></label>
              <label>Email *<input name="email" type="email" value={form.email} onChange={updateField} placeholder="example@gmail.com" required /></label>
              <label>Phone *<input name="phone" type="tel" value={form.phone} onChange={updateField} placeholder="Enter Phone Number" required /></label>
              <label>Subject *<input name="subject" value={form.subject} onChange={updateField} placeholder="Enter subject" required /></label>
            </div>
            <label>Your Message *<textarea name="message" value={form.message} onChange={updateField} placeholder="Enter here..." rows="6" required /></label>
            <button type="submit"><i className="bi bi-send-fill" /> Send Message</button>


            {sent && (
  <p className="contact-success">
    Message sent successfully. Please wait for our reply.
  </p>
)}

          </form>
        </div>
      </section>

      <Footer navigate={navigate} />

      
    </main>
  );
}

export default Contact;

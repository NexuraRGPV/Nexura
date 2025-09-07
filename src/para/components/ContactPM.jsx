import React, { useState } from "react";
import styles from "../assets/ContactPM.module.css";

const ContactPM = () => {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.id]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("Form submitted with values:", formData);
    alert("Message Sent!");
  };

  return (
    <section id="contact" className={styles.contact}>
      <h2>Get In Touch</h2>
      <div className={styles.contactContainer}>
        <form className={styles.contactForm} onSubmit={handleSubmit}>
          <div className={styles.formGroup}>
            <label htmlFor="name">Name</label>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              value={formData.name}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="email">Email</label>
            <input
              type="text"
              id="email"
              placeholder="Your Email"
              value={formData.email}
              onChange={handleChange}
            />
          </div>
          <div className={styles.formGroup}>
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              placeholder="Your Message"
              value={formData.message}
              onChange={handleChange}
            ></textarea>
          </div>
          <button type="submit" className={styles.submitBtn}>
            Send Message
          </button>
        </form>

        <div className={styles.contactInfo}>
          <div className={styles.infoItem}>
            <h3>Email</h3>
            <p>nexurargpv@gmail.com</p>
          </div>
          <div className={styles.infoItem}>
            <h3>Instagram</h3>
            <p>
              <a href="https://www.instagram.com/nexura_rgpv/" target="_blank" rel="noreferrer">
                @nexura_rgpv
              </a>
            </p>
          </div>
          <div className={styles.infoItem}>
            <h3>GitHub</h3>
            <p>
              <a href="https://github.com/NexuraRGPV" target="_blank" rel="noreferrer">
                NexuraRGPV
              </a>
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactPM;

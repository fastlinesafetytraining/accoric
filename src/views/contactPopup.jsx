import React, { useState } from "react";
import toast from "react-hot-toast";
import Modal from "react-modal";


Modal.setAppElement("#root");

function ContactPopup({ isOpen, onClose }) {
  const [form, setForm] = useState({
    name: "",
    email: "",
    message: ""
  });

const handleChange = (e) => {
  setForm({
    ...form,
    [e.target.name]: e.target.value
  });
};

  const handleSubmit = async (e) => {
    e.preventDefault();

    const response = await fetch("https://www.accoric.com/Default/Contact", {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: JSON.stringify(form)
    });

if (response.ok) {
  toast.success("Message sent successfully!");
  onClose();
} else {
  toast.error("Failed to send your message. Please try again.");
}
  };

  return (
    <Modal isOpen={isOpen} onRequestClose={onClose} className="contact-modal"
  overlayClassName="contact-overlay">
      <h2>Contact Us</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Your Name"
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Your Email"
          onChange={handleChange}
          required
        />

        <textarea
          name="message"
          placeholder="Message"
          onChange={handleChange}
          required
        />
       <div class="btn-wrap d-flex justify-content-end gap-2" >
   
        <button type="button" className=" btn btn-secondary" onClick={onClose}>Close</button>
        <button className="btn btn-outline-primary" type="submit">
          <span>Send</span>
          </button>
        </div>
      </form>
    </Modal>
  );
}

export default ContactPopup;
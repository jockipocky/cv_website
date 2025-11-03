import React, { useRef, useState } from "react";
import emailjs from "emailjs-com";

export function ContactForm() {
  const form = useRef();

  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    message: "",
  });

  const [isSending, setIsSending] = useState(false);
  const [toast, setToast] = useState(null);

  function showToast(type, message) {
    setToast({ type, message });
    setTimeout(() => setToast(null), 3000);
  }

  function handleChange(e) {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  }

  function isFormValid() {
    return (
      formData.firstName.trim() !== "" &&
      formData.lastName.trim() !== "" &&
      formData.email.trim() !== "" &&
      formData.message.trim() !== ""
    );
  }

  function handleSubmit(e) {
    e.preventDefault();
    if (!isFormValid()) {
      showToast("error", "Please fill in all fields before sending.");
      return;
    }

    setIsSending(true);

    // 🧩 Your EmailJS credentials:
    const serviceID = "service_pxflgfo";   // example: service_gmail123
    const templateID = "template_ll4kdpb"; // example: template_portfolioContact
    const publicKey = "EZlDR-_brwM6b8lhU";   // from EmailJS account → API Keys section

    emailjs.sendForm(serviceID, templateID, form.current, publicKey).then(
      function () {
        showToast("success", "Message sent successfully!");
        setFormData({ firstName: "", lastName: "", email: "", message: "" });
        form.current.reset();
        setIsSending(false);
      },
      function (error) {
        console.error("EmailJS Error:", error);
        showToast("error", "Failed to send message. Please try again.");
        setIsSending(false);
      }
    );
  }

  return (
    <>
      <form
        ref={form}
        className="formCard"
        onSubmit={handleSubmit}
        noValidate
      >
        <h3 className="cardTitle">Send me a message</h3>
        <div className="formGrid">
          <div className="fieldRow two">
            <label className="label" htmlFor="firstName">
              First name
            </label>
            <input
              className="input"
              id="firstName"
              name="firstName"
              type="text"
              placeholder="First name"
              value={formData.firstName}
              onChange={handleChange}
              required
            />

            <label className="label" htmlFor="lastName">
              Last name
            </label>
            <input
              className="input"
              id="lastName"
              name="lastName"
              type="text"
              placeholder="Last name"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>

          <div className="fieldRow">
            <label className="label" htmlFor="email">
              Email
            </label>
            <input
              className="input"
              id="email"
              name="email"
              type="email"
              placeholder="email@example.com"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>

          <div className="fieldRow">
            <label className="label" htmlFor="message">
              Message
            </label>
            <textarea
              className="textarea"
              id="message"
              name="message"
              placeholder="Write your message..."
              rows={5}
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>

          <div className="actions">
            <button
              className="btnPrimary"
              type="submit"
              disabled={!isFormValid() || isSending}
            >
              {isSending ? "Sending..." : "Send"}
            </button>
          </div>
        </div>
      </form>

      {/* Toast notification */}
      {toast && (
        <div className={`toast ${toast.type}`}>
          <p>{toast.message}</p>
        </div>
      )}
    </>
  );
}
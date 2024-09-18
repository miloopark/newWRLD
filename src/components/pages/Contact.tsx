import React, { useState } from 'react';
import emailjs from 'emailjs-com';
import './Contact.css'; // Updated CSS file

const Contact: React.FC = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [isSending, setIsSending] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    setIsSending(true);

    // Accessing environment variables
    const serviceID = process.env.REACT_APP_EMAILJS_SERVICE_ID;
    const templateID = process.env.REACT_APP_EMAILJS_TEMPLATE_ID;
    const userID = process.env.REACT_APP_EMAILJS_USER_ID;

    const templateParams = {
      from_name: name,
      from_email: email,
      from_phone: phone,
      to_name: 'Your Name', // Replace with your name or recipient's name
      subject: 'New Contact Form Submission',
      message: message,
    };

    // Check if environment variables are defined
    if (!serviceID || !templateID || !userID) {
      console.error('EmailJS credentials are not defined in the .env file.');
      alert('Failed to send email. Please contact the website administrator.');
      setIsSending(false);
      return;
    }

    emailjs.send(serviceID, templateID, templateParams, userID)
      .then((response) => {
        console.log('Email sent successfully!', response.status, response.text);
        alert('Email sent successfully!');
        setName('');
        setEmail('');
        setPhone('');
        setMessage('');
      })
      .catch((error) => {
        console.error('Failed to send email:', error);
        alert('Failed to send email. Please try again.');
      })
      .finally(() => {
        setIsSending(false);
      });
  };

  return (
    <div className="contact-container">
      <form className="contact-form" onSubmit={handleSubmit}>
        <div className="input-row">
          <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            className="input-box" 
            placeholder="Name"
            required 
          />
          <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            className="input-box" 
            placeholder="Email *"
            required 
          />
        </div>
        <input 
          type="text" 
          value={phone} 
          onChange={(e) => setPhone(e.target.value)} 
          className="input-box-full" 
          placeholder="Phone number"
        />
        <textarea 
          value={message} 
          onChange={(e) => setMessage(e.target.value)} 
          className="input-box-full" 
          rows={4} 
          placeholder="Comment"
          required 
        />
        <button type="submit" className="send-button" disabled={isSending}>
          {isSending ? 'Sending...' : 'Send'}
        </button>
      </form>
    </div>
  );
};

export default Contact;
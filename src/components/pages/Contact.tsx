import './Contact.css';

const Contact: React.FC = () => {
  const emailAddress = 'milopark3@gmail.com';

  return (
    <div className="contact-container">
      <div className="contact-header">
        <h2>Let’s connect</h2>
        <p className="contact-subtitle">Connect with me on Email, GitHub, and LinkedIn.</p>
      </div>
      <div className="social-links">
        <a
          href={`mailto:${emailAddress}`}
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Email"
          className="social-icon"
          title={emailAddress}
        >
          {/* Email (envelope) icon */}
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20 4H4c-1.1 0-2 .9-2 2v12c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2Zm0 4-8 5L4 8V6l8 5 8-5v2Z" />
          </svg>
        </a>
        <a
          href="https://github.com/miloopark"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="GitHub"
          className="social-icon"
          title="GitHub"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M12 .5C5.73.5.99 5.24.99 11.52c0 4.86 3.15 8.98 7.52 10.43.55.1.75-.24.75-.53 0-.26-.01-1.15-.02-2.08-3.06.66-3.71-1.28-3.71-1.28-.5-1.27-1.22-1.6-1.22-1.6-.99-.68.08-.66.08-.66 1.1.08 1.67 1.13 1.67 1.13.98 1.67 2.57 1.19 3.2.9.1-.71.38-1.19.69-1.46-2.44-.28-5.01-1.22-5.01-5.43 0-1.2.43-2.19 1.13-2.96-.11-.28-.49-1.41.11-2.94 0 0 .92-.29 3.02 1.13.87-.24 1.8-.36 2.73-.36.93 0 1.86.12 2.73.36 2.09-1.42 3.01-1.13 3.01-1.13.6 1.53.22 2.66.11 2.94.7.77 1.12 1.76 1.12 2.96 0 4.22-2.57 5.15-5.02 5.42.39.33.73.98.73 1.99 0 1.44-.01 2.6-.01 2.95 0 .29.2.64.75.53 4.37-1.45 7.52-5.57 7.52-10.43C23.01 5.24 18.27.5 12 .5Z"/>
          </svg>
        </a>
        <a
          href="https://www.linkedin.com/in/milopark/"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="LinkedIn"
          className="social-icon"
          title="LinkedIn"
        >
          <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
            <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.45-2.13 2.94v5.67H9.37V9h3.41v1.56h.05c.48-.9 1.65-1.85 3.4-1.85 3.63 0 4.3 2.39 4.3 5.5v6.24zM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12zM7.12 20.45H3.56V9h3.56v11.45z"/>
          </svg>
        </a>
      </div>
    </div>
  );
};

export default Contact;

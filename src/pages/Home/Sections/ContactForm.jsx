import React from 'react'

const LocationIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/>
    <circle cx="12" cy="10" r="3"/>
  </svg>
)
const EmailIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/>
    <polyline points="22,6 12,13 2,6"/>
  </svg>
)
const PhoneIcon = () => (
  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
    <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 9.82a19.79 19.79 0 01-3.07-8.67A2 2 0 012 1h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 8.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z"/>
  </svg>
)

const InfoRow = ({ icon, label, value }) => (
  <div className="cf-info-row">
    <span className="cf-info-icon">{icon}</span>
    <div>
      <div className="cf-info-label">{label}</div>
      <div className="cf-info-value">{value}</div>
    </div>
  </div>
)

export default function ContactForm() {
  return (
    <section className="contact-section">
      <div className="container cf-grid">

        <div className="cf-form-panel">
          <div className="cf-form-header">
            <span className="eyebrow" style={{ color: 'var(--cta)' }}>Get in Touch</span>
            <h2>Send us a message</h2>
            <p className="muted">Our team will get back to you within 24 hours.</p>
          </div>

          <form className="cf-form">
            <div className="cf-row cf-cols-2">
              <div className="cf-field">
                <label>Full Name</label>
                <input placeholder="John Smith" />
              </div>
              <div className="cf-field">
                <label>Email Address</label>
                <input type="email" placeholder="john@example.com" />
              </div>
            </div>

            <div className="cf-row cf-cols-2">
              <div className="cf-field">
                <label>Phone Number</label>
                <input placeholder="+971 50 000 0000" />
              </div>
              <div className="cf-field">
                <label>Subject</label>
                <input placeholder="How can we help?" />
              </div>
            </div>

            <div className="cf-row">
              <div className="cf-field">
                <label>Message</label>
                <textarea placeholder="Tell us about your shipment, inquiry, or any special requirement..." rows={5} />
              </div>
            </div>

            <div className="cf-actions">
              <button type="submit" className="cta primary">Send Message</button>
              <button type="reset" className="cta ghost">Clear</button>
            </div>
          </form>
        </div>

        <aside className="cf-info-panel">
          <h3>Contact Information</h3>
          <p className="cf-info-desc">
            Reach out for shipments, rate negotiations, logistics, product queries, or any special requirements.
          </p>

          <div className="cf-info-rows">
            <InfoRow
              icon={<LocationIcon />}
              label="Dubai"
              value="Warehouse #10, Eternity Warehouses, Ras Al Khor Industrial Area, Dubai, UAE"
            />
            <InfoRow
              icon={<LocationIcon />}
              label="Ajman"
              value="Al Jurf Industrial Area, Bahia, Ajman, UAE"
            />
            <InfoRow
              icon={<EmailIcon />}
              label="Official Email"
              value="sales@gmitrading.me"
            />
            <InfoRow
              icon={<PhoneIcon />}
              label="Phone"
              value="+971 4 509 5923"
            />
          </div>

          <a href="mailto:sales@gmitrading.me" className="cta primary cf-email-btn">
            Email Us Directly
          </a>
        </aside>

      </div>
    </section>
  )
}

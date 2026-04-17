import { useState } from 'react'
import { ArrowRight, Mail, Phone, Clock, Check } from 'lucide-react'

const COUNTRIES = [
  'United Arab Emirates', 'Saudi Arabia', 'Kuwait', 'Qatar', 'Bahrain',
  'Oman', 'India', 'Pakistan', 'United Kingdom', 'United States', 'Other',
]

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <label style={{
        fontSize: 12, fontWeight: 700, color: '#1a2e26',
        marginBottom: 6, letterSpacing: '0.2px',
      }}>
        {label}
      </label>
      {children}
      {error && <span style={{ fontSize: 11, color: '#e53e3e', marginTop: 4 }}>{error}</span>}
    </div>
  )
}

const inputStyle = {
  width: '100%', padding: '12px 14px',
  border: '1.5px solid #dde8e3', background: '#fafcfb',
  borderRadius: 9, fontSize: 14, color: '#1a2e26',
  outline: 'none', boxSizing: 'border-box',
  transition: 'border-color 0.18s, box-shadow 0.18s',
  fontFamily: 'inherit',
}

function Input({ onFocus, onBlur, ...props }) {
  return (
    <input
      style={inputStyle}
      onFocus={e => { e.target.style.borderColor = '#1f7a5a'; e.target.style.boxShadow = '0 0 0 3px rgba(31,122,90,0.08)'; onFocus?.(e) }}
      onBlur={e => { e.target.style.borderColor = '#dde8e3'; e.target.style.boxShadow = 'none'; onBlur?.(e) }}
      {...props}
    />
  )
}

function Select({ children, ...props }) {
  return (
    <select
      style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }}
      onFocus={e => { e.target.style.borderColor = '#1f7a5a'; e.target.style.boxShadow = '0 0 0 3px rgba(31,122,90,0.08)' }}
      onBlur={e => { e.target.style.borderColor = '#dde8e3'; e.target.style.boxShadow = 'none' }}
      {...props}
    >
      {children}
    </select>
  )
}

export default function ContactForm() {
  const [form, setForm] = useState({
    name: '', email: '', phone: '',
    address1: '', address2: '', city: '', state: '', zip: '', country: '',
    subject: '', message: '',
  })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)

  const set = (k) => (e) => setForm(f => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const e = {}
    if (!form.name.trim())    e.name    = 'Name is required'
    if (!form.phone.trim())   e.phone   = 'Contact number is required'
    if (!form.city.trim())    e.city    = 'City is required'
    if (!form.state.trim())   e.state   = 'State is required'
    if (!form.country)        e.country = 'Country is required'
    if (!form.subject.trim()) e.subject = 'Subject is required'
    if (!form.message.trim()) e.message = 'Message is required'
    if (form.email && !/\S+@\S+\.\S+/.test(form.email)) e.email = 'Enter a valid email'
    return e
  }

  const handleSubmit = (e) => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
  }

  const INFO = [
    {
      icon: <Mail size={18} strokeWidth={2} />,
      label: 'Email Us',
      value: 'info@gmitrading.me',
      href: 'mailto:info@gmitrading.me',
    },
    {
      icon: <Phone size={18} strokeWidth={2} />,
      label: 'Call Us',
      value: '+971 4 509 5923',
      href: 'tel:+97145095923',
    },
    {
      icon: <Clock size={18} strokeWidth={2} />,
      label: 'Response Time',
      value: 'Within 2 business hours',
      href: null,
    },
  ]

  return (
    <section style={{ padding: '72px 0', background: '#f4f7f5' }}>
      <style>{`
        .contact-two-col { display: flex; gap: 28px; align-items: flex-start; flex-wrap: wrap; }
        .contact-info-panel { flex: 0 0 300px; display: flex; flex-direction: column; gap: 16px; }
        @media (max-width: 900px) {
          .contact-info-panel { flex: 1 1 100%; }
        }
      `}</style>
      <div style={{
        position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw', background: '#f4f7f5', padding: '72px 0',
      }}>
        <div className="container">

          {/* header */}
          <div style={{ textAlign: 'center', marginBottom: 52 }}>
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              letterSpacing: '2px', textTransform: 'uppercase',
              color: '#2aa05a', background: 'rgba(42,160,90,0.1)',
              border: '1px solid rgba(42,160,90,0.25)',
              borderRadius: 999, padding: '4px 16px', marginBottom: 14,
            }}>
              Contact Us
            </span>
            <h2 style={{ margin: '0 0 12px', fontSize: 'clamp(24px,3vw,36px)', fontWeight: 700, color: '#0f1f18' }}>
              Send Us a Message
            </h2>
            <p style={{ maxWidth: 480, margin: '0 auto', fontSize: 15, color: '#6b7280', lineHeight: 1.65 }}>
              Fill in the form and our team will get back to you within 2 business hours.
            </p>
          </div>

          {/* two-column */}
          <div className="contact-two-col">

            {/* ── FORM ── */}
            <div style={{
              flex: '1 1 540px',
              background: 'rgba(255,255,255,0.7)',
              backdropFilter: 'blur(20px)',
              WebkitBackdropFilter: 'blur(20px)',
              borderRadius: 20,
              padding: '44px 40px',
              boxShadow: '0 8px 40px rgba(0,0,0,0.08), inset 0 1px 0 rgba(255,255,255,0.95)',
              border: '1px solid rgba(255,255,255,0.85)',
            }}>
              {submitted ? (
                <div style={{ textAlign: 'center', padding: '40px 0' }}>
                  <div style={{
                    width: 72, height: 72, borderRadius: '50%',
                    background: 'rgba(42,160,90,0.1)', border: '2px solid #2aa05a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 20px',
                  }}>
                    <Check size={32} color="#2aa05a" strokeWidth={2.5} />
                  </div>
                  <h3 style={{ margin: '0 0 8px', color: '#0f1f18' }}>Message Sent!</h3>
                  <p style={{ color: '#6b7280', fontSize: 14 }}>We'll get back to you within 2 business hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name:'',email:'',phone:'',address1:'',address2:'',city:'',state:'',zip:'',country:'',subject:'',message:'' }) }}
                    style={{ marginTop: 20, background: 'none', border: 'none', color: '#2aa05a', fontWeight: 700, cursor: 'pointer', fontSize: 14 }}
                  >
                    Send another message <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} noValidate>

                  {/* Row: Name + Email */}
                  <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                    <Field label="Full Name *" error={errors.name}>
                      <Input type="text" placeholder="Mohamed Al Rashid" value={form.name} onChange={set('name')} />
                    </Field>
                    <Field label="Email Address" error={errors.email}>
                      <Input type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} />
                    </Field>
                  </div>

                  {/* Contact Number */}
                  <div style={{ marginBottom: 18 }}>
                    <Field label="Contact Number *" error={errors.phone}>
                      <Input type="tel" placeholder="+971 50 000 0000" value={form.phone} onChange={set('phone')} />
                    </Field>
                  </div>

                  {/* Address */}
                  <div style={{ marginBottom: 6 }}>
                    <label style={{ fontSize: 12, fontWeight: 700, color: '#2aa05a', letterSpacing: '1.5px', textTransform: 'uppercase', display: 'block', marginBottom: 12 }}>
                      Address
                    </label>
                    <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                      <Input type="text" placeholder="Address Line 1" value={form.address1} onChange={set('address1')} />
                      <Input type="text" placeholder="Address Line 2 (optional)" value={form.address2} onChange={set('address2')} />
                      <div style={{ display: 'flex', gap: 14 }}>
                        <Field label="City *" error={errors.city}>
                          <Input type="text" placeholder="Dubai" value={form.city} onChange={set('city')} />
                        </Field>
                        <Field label="State *" error={errors.state}>
                          <Input type="text" placeholder="Dubai" value={form.state} onChange={set('state')} />
                        </Field>
                        <Field label="Zip Code">
                          <Input type="text" placeholder="00000" value={form.zip} onChange={set('zip')} />
                        </Field>
                      </div>
                      <Field label="Country *" error={errors.country}>
                        <Select value={form.country} onChange={set('country')}>
                          <option value="">Select country…</option>
                          {COUNTRIES.map(c => <option key={c} value={c}>{c}</option>)}
                        </Select>
                      </Field>
                    </div>
                  </div>

                  {/* Subject */}
                  <div style={{ margin: '18px 0' }}>
                    <Field label="Subject *" error={errors.subject}>
                      <Input type="text" placeholder="e.g. Bulk sugar sourcing enquiry" value={form.subject} onChange={set('subject')} />
                    </Field>
                  </div>

                  {/* Message */}
                  <div style={{ marginBottom: 24 }}>
                    <Field label="Message *" error={errors.message}>
                      <textarea
                        rows={5}
                        placeholder="Tell us about your requirements…"
                        value={form.message}
                        onChange={set('message')}
                        style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                        onFocus={e => { e.target.style.borderColor = '#1f7a5a'; e.target.style.boxShadow = '0 0 0 3px rgba(31,122,90,0.08)' }}
                        onBlur={e => { e.target.style.borderColor = '#dde8e3'; e.target.style.boxShadow = 'none' }}
                      />
                    </Field>
                  </div>

                  {/* Actions */}
                  <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                    <button
                      type="submit"
                      style={{
                        background: 'linear-gradient(135deg, #2aa05a, #1f7a5a)',
                        color: '#fff', border: 'none',
                        padding: '13px 36px', borderRadius: 9,
                        fontWeight: 700, fontSize: 14, cursor: 'pointer',
                        boxShadow: '0 6px 20px rgba(42,160,90,0.3)',
                        transition: 'transform 0.2s, box-shadow 0.2s',
                        fontFamily: 'inherit',
                      }}
                      onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 10px 28px rgba(42,160,90,0.4)' }}
                      onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 20px rgba(42,160,90,0.3)' }}
                    >
                      Submit Form
                    </button>
                    <button
                      type="button"
                      onClick={() => setForm({ name:'',email:'',phone:'',address1:'',address2:'',city:'',state:'',zip:'',country:'',subject:'',message:'' })}
                      style={{
                        background: 'transparent', color: '#6b7280',
                        border: '1.5px solid #e2e8e3', padding: '12px 20px',
                        borderRadius: 9, fontWeight: 600, fontSize: 14,
                        cursor: 'pointer', fontFamily: 'inherit',
                      }}
                    >
                      Clear
                    </button>
                  </div>

                </form>
              )}
            </div>

            {/* ── INFO PANEL ── */}
            <div className="contact-info-panel">

              {/* contact cards */}
              {INFO.map((item, i) => (
                <div key={i} style={{
                  background: 'rgba(255,255,255,0.65)',
                  backdropFilter: 'blur(14px)',
                  WebkitBackdropFilter: 'blur(14px)',
                  borderRadius: 16, padding: '22px 24px',
                  border: '1px solid rgba(255,255,255,0.8)',
                  boxShadow: '0 2px 16px rgba(0,0,0,0.06), inset 0 1px 0 rgba(255,255,255,0.9)',
                  display: 'flex', alignItems: 'center', gap: 16,
                }}>
                  <div style={{
                    width: 46, height: 46, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(42,160,90,0.1)',
                    border: '1px solid rgba(42,160,90,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#2aa05a',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1px', marginBottom: 4 }}>
                      {item.label}
                    </div>
                    {item.href ? (
                      <a href={item.href} style={{ fontSize: 14, fontWeight: 600, color: '#0f1f18', textDecoration: 'none' }}
                        onMouseEnter={e => e.currentTarget.style.color = '#2aa05a'}
                        onMouseLeave={e => e.currentTarget.style.color = '#0f1f18'}
                      >
                        {item.value}
                      </a>
                    ) : (
                      <div style={{ fontSize: 14, fontWeight: 600, color: '#0f1f18' }}>{item.value}</div>
                    )}
                  </div>
                </div>
              ))}

              {/* quick note */}
              <div style={{
                background: 'rgba(13,35,24,0.82)',
                backdropFilter: 'blur(18px)',
                WebkitBackdropFilter: 'blur(18px)',
                border: '1px solid rgba(255,255,255,0.1)',
                borderRadius: 16, padding: '28px 24px',
                color: '#fff',
                boxShadow: '0 8px 32px rgba(0,0,0,0.18), inset 0 1px 0 rgba(255,255,255,0.07)',
              }}>
                <div style={{
                  fontSize: 11, fontWeight: 700, letterSpacing: '1.5px',
                  textTransform: 'uppercase', color: '#7ee8a2', marginBottom: 10,
                }}>
                  Why Choose GMI?
                </div>
                {[
                  '500+ vetted global suppliers',
                  '10,000+ active UAE customers',
                  '99% on-time-in-full delivery',
                  'HACCP & ISO 22000 in progress',
                ].map((t, i) => (
                  <div key={i} style={{
                    display: 'flex', alignItems: 'center', gap: 9,
                    fontSize: 13, color: 'rgba(255,255,255,0.75)',
                    marginBottom: 10,
                  }}>
                    <span style={{
                      width: 16, height: 16, borderRadius: '50%',
                      background: 'rgba(42,160,90,0.25)',
                      border: '1px solid rgba(42,160,90,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                      flexShrink: 0,
                    }}>
                      <svg width="8" height="8" viewBox="0 0 8 8" fill="none">
                        <path d="M1.5 4l2 2 3-3.5" stroke="#2aa05a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </span>
                    {t}
                  </div>
                ))}
              </div>

            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

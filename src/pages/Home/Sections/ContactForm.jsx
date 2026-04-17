import { useState, useEffect } from 'react'
import { motion, AnimatePresence } from 'framer-motion'
import { ArrowRight, Phone, Mail, MapPin, X, Check } from 'lucide-react'

const cubicBezier = [0.16, 1, 0.3, 1]

function Toast({ visible, onClose }) {
  useEffect(() => {
    if (!visible) return
    const t = setTimeout(onClose, 4000)
    return () => clearTimeout(t)
  }, [visible, onClose])

  return (
    <div style={{
      position: 'fixed', bottom: 32, right: 32, zIndex: 9999,
      transform: visible ? 'translateY(0)' : 'translateY(120%)',
      opacity: visible ? 1 : 0,
      transition: 'transform 0.4s cubic-bezier(0.34,1.56,0.64,1), opacity 0.3s ease',
      pointerEvents: visible ? 'auto' : 'none',
    }}>
      <div style={{
        display: 'flex', alignItems: 'center', gap: 14,
        background: '#fff',
        border: '1px solid #e8f0eb',
        borderRadius: 16,
        padding: '16px 20px',
        boxShadow: '0 16px 48px rgba(0,0,0,0.12), 0 0 0 1px rgba(42,160,90,0.1)',
        minWidth: 300, maxWidth: 380,
      }}>
        {/* icon */}
        <div style={{
          width: 40, height: 40, borderRadius: 10, flexShrink: 0,
          background: 'rgba(42,160,90,0.1)',
          border: '1.5px solid rgba(42,160,90,0.25)',
          display: 'flex', alignItems: 'center', justifyContent: 'center',
        }}>
          <Check size={18} color="#2aa05a" strokeWidth={2.5} />
        </div>

        {/* text */}
        <div style={{ flex: 1 }}>
          <div style={{ fontSize: 14, fontWeight: 700, color: '#0f1f18', marginBottom: 3 }}>
            Message Sent!
          </div>
          <div style={{ fontSize: 12, color: '#6b7280', lineHeight: 1.5 }}>
            We'll get back to you within 2 business hours.
          </div>
        </div>

        {/* progress bar */}
        <div style={{ position: 'absolute', bottom: 0, left: 0, right: 0, height: 3, borderRadius: '0 0 16px 16px', overflow: 'hidden' }}>
          <div style={{
            height: '100%',
            background: 'linear-gradient(90deg, #2aa05a, #7ee8a2)',
            animation: visible ? 'toastProgress 4s linear forwards' : 'none',
          }} />
        </div>

        {/* close */}
        <button
          onClick={onClose}
          style={{
            background: 'none', border: 'none', cursor: 'pointer',
            color: '#9ca3af', padding: 4, flexShrink: 0,
            display: 'flex', alignItems: 'center', justifyContent: 'center',
            borderRadius: 6, transition: 'color 0.2s',
          }}
          onMouseEnter={e => e.currentTarget.style.color = '#0f1f18'}
          onMouseLeave={e => e.currentTarget.style.color = '#9ca3af'}
        >
          <X size={14} strokeWidth={2.5} />
        </button>
      </div>

      <style>{`
        @keyframes toastProgress {
          from { width: 100%; }
          to   { width: 0%; }
        }
      `}</style>
    </div>
  )
}

const inputStyle = {
  width: '100%',
  padding: '13px 16px',
  border: '1.5px solid #dde8e3',
  background: '#fafcfb',
  borderRadius: 10,
  fontSize: 14,
  color: '#0f1f18',
  outline: 'none',
  boxSizing: 'border-box',
  transition: 'border-color 0.18s, box-shadow 0.18s',
  fontFamily: 'inherit',
}

function Field({ label, error, children }) {
  return (
    <div style={{ display: 'flex', flexDirection: 'column', flex: 1 }}>
      <label style={{ fontSize: 12, fontWeight: 700, color: '#1a2e26', marginBottom: 6, letterSpacing: '0.2px' }}>
        {label}
      </label>
      {children}
      {error && <span style={{ fontSize: 11, color: '#e53e3e', marginTop: 4 }}>{error}</span>}
    </div>
  )
}

function Input(props) {
  return (
    <input
      style={inputStyle}
      onFocus={e => { e.target.style.borderColor = '#2aa05a'; e.target.style.boxShadow = '0 0 0 3px rgba(42,160,90,0.1)'; e.target.style.background = '#fff' }}
      onBlur={e => { e.target.style.borderColor = '#dde8e3'; e.target.style.boxShadow = 'none'; e.target.style.background = '#fafcfb' }}
      {...props}
    />
  )
}

const CONTACT_ITEMS = [
  {
    icon: <Phone size={20} strokeWidth={2} />,
    label: 'Call Us',
    value: '+971 4 509 5923',
    href: 'tel:+97145095923',
  },
  {
    icon: <Mail size={20} strokeWidth={2} />,
    label: 'Email Us',
    value: 'sales@gmitrading.me',
    href: 'mailto:sales@gmitrading.me',
  },
  {
    icon: <MapPin size={20} strokeWidth={2} />,
    label: 'Head Office',
    value: 'Ras Al Khor Industrial Area, Dubai, UAE',
    href: 'https://maps.google.com/?q=Ras+Al+Khor+Industrial+Area+Dubai',
  },
]

export default function ContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', subject: '', message: '' })
  const [errors, setErrors] = useState({})
  const [submitted, setSubmitted] = useState(false)
  const [toast, setToast] = useState(false)

  const set = k => e => setForm(f => ({ ...f, [k]: e.target.value }))

  const validate = () => {
    const errs = {}
    if (!form.name.trim())    errs.name    = 'Required'
    if (!form.email.trim())   errs.email   = 'Required'
    else if (!/\S+@\S+\.\S+/.test(form.email)) errs.email = 'Enter a valid email'
    if (!form.subject.trim()) errs.subject = 'Required'
    if (!form.message.trim()) errs.message = 'Required'
    return errs
  }

  const handleSubmit = e => {
    e.preventDefault()
    const errs = validate()
    if (Object.keys(errs).length) { setErrors(errs); return }
    setErrors({})
    setSubmitted(true)
    setToast(true)
  }

  return (
    <>
    <Toast visible={toast} onClose={() => setToast(false)} />
    <section style={{ padding: 0 }}>
      {/* Full-bleed wrapper */}
      <div style={{
        position: 'relative', left: '50%', right: '50%',
        marginLeft: '-50vw', marginRight: '-50vw',
        width: '100vw',
        background: '#f4f7f5',
        padding: '96px 0',
        overflow: 'hidden',
      }}>

        {/* decorative circles */}
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, ease: cubicBezier }}
          style={{ position: 'absolute', top: -120, right: -120, width: 500, height: 500, borderRadius: '50%', background: 'rgba(42,160,90,0.06)', pointerEvents: 'none' }} 
        />
        <motion.div 
          initial={{ opacity: 0, scale: 0.8 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5, delay: 0.2, ease: cubicBezier }}
          style={{ position: 'absolute', bottom: -80, left: -80, width: 360, height: 360, borderRadius: '50%', background: 'rgba(42,160,90,0.05)', pointerEvents: 'none' }} 
        />

        <div className="container" style={{ position: 'relative', zIndex: 1 }}>

          {/* ── Section header ── */}
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, ease: cubicBezier }}
            style={{ textAlign: 'center', marginBottom: 64 }}
          >
            <span style={{
              display: 'inline-block', fontSize: 11, fontWeight: 700,
              letterSpacing: '2.5px', textTransform: 'uppercase',
              color: '#2aa05a', background: 'rgba(42,160,90,0.1)',
              border: '1px solid rgba(42,160,90,0.25)',
              borderRadius: 999, padding: '5px 18px', marginBottom: 18,
            }}>
              Get in Touch
            </span>
            <h2 style={{
              margin: '0 0 16px',
              fontSize: 'clamp(28px, 3.5vw, 44px)',
              fontWeight: 700, color: '#0f1f18', lineHeight: 1.15, letterSpacing: '-0.5px',
            }}>
              Let's Start a Conversation
            </h2>
            <p style={{ maxWidth: 480, margin: '0 auto', fontSize: 16, color: '#6b7280', lineHeight: 1.7 }}>
              Whether you're sourcing commodities or optimising your supply chain — our team responds within 2 hours.
            </p>
          </motion.div>

          {/* ── Two-column layout ── */}
          <div style={{ display: 'flex', gap: 32, alignItems: 'stretch', flexWrap: 'wrap' }}>

            {/* ── LEFT: info panel ── */}
            <motion.div 
              style={{ flex: '0 0 320px', display: 'flex', flexDirection: 'column', gap: 16 }}
              initial={{ opacity: 0, x: -30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: cubicBezier }}
            >

              {/* Contact cards */}
              {CONTACT_ITEMS.map((item, i) => (
                <motion.a
                  key={i}
                  href={item.href}
                  target={item.label === 'Head Office' ? '_blank' : undefined}
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.6, delay: 0.3 + (i * 0.1), ease: cubicBezier }}
                  style={{
                    display: 'flex', alignItems: 'center', gap: 16,
                    background: '#fff',
                    border: '1px solid #e8f0eb',
                    borderRadius: 16, padding: '20px 22px',
                    textDecoration: 'none',
                    transition: 'background 0.2s, border-color 0.2s, box-shadow 0.2s',
                    boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                  }}
                  onMouseEnter={e => { e.currentTarget.style.background = 'rgba(42,160,90,0.05)'; e.currentTarget.style.borderColor = 'rgba(42,160,90,0.35)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(42,160,90,0.1)' }}
                  onMouseLeave={e => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#e8f0eb'; e.currentTarget.style.boxShadow = '0 2px 12px rgba(0,0,0,0.05)' }}
                >
                  <div style={{
                    width: 48, height: 48, borderRadius: 12, flexShrink: 0,
                    background: 'rgba(42,160,90,0.1)',
                    border: '1px solid rgba(42,160,90,0.2)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    color: '#2aa05a',
                  }}>
                    {item.icon}
                  </div>
                  <div>
                    <div style={{ fontSize: 11, fontWeight: 700, color: '#9ca3af', textTransform: 'uppercase', letterSpacing: '1.2px', marginBottom: 4 }}>
                      {item.label}
                    </div>
                    <div style={{ fontSize: 14, fontWeight: 600, color: '#0f1f18', lineHeight: 1.45 }}>
                      {item.value}
                    </div>
                  </div>
                </motion.a>
              ))}

              {/* Why choose GMI */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: 0.6, ease: cubicBezier }}
                style={{
                  background: '#fff',
                  border: '1px solid #e8f0eb',
                  borderRadius: 16, padding: '24px 22px',
                  marginTop: 4,
                  boxShadow: '0 2px 12px rgba(0,0,0,0.05)',
                }}
              >
                <div style={{ fontSize: 12, fontWeight: 700, letterSpacing: '1.5px', textTransform: 'uppercase', color: '#2aa05a', marginBottom: 14 }}>
                  Why GMI Trading?
                </div>
                {[
                  '500+ vetted global suppliers',
                  '10,000+ active UAE customers',
                  '99% on-time-in-full delivery',
                  'Reply within 2 business hours',
                ].map((t, i) => (
                  <motion.div 
                    key={i} 
                    initial={{ opacity: 0, x: -10 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.4, delay: 0.7 + (i * 0.1), ease: cubicBezier }}
                    style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 11 }}
                  >
                    <div style={{
                      width: 18, height: 18, borderRadius: '50%', flexShrink: 0,
                      background: 'rgba(42,160,90,0.25)', border: '1px solid rgba(42,160,90,0.5)',
                      display: 'flex', alignItems: 'center', justifyContent: 'center',
                    }}>
                      <svg width="9" height="9" viewBox="0 0 9 9" fill="none">
                        <path d="M1.5 4.5l2 2 4-4" stroke="#2aa05a" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                      </svg>
                    </div>
                    <span style={{ fontSize: 13, color: '#6b7280', lineHeight: 1.4 }}>{t}</span>
                  </motion.div>
                ))}
              </motion.div>
            </motion.div>

            {/* ── RIGHT: form card ── */}
            <motion.div 
              initial={{ opacity: 0, x: 30 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.8, delay: 0.2, ease: cubicBezier }}
              style={{
                flex: '1 1 480px',
                background: '#fff',
                borderRadius: 24,
                padding: '44px 40px',
                boxShadow: '0 4px 32px rgba(0,0,0,0.08)',
                border: '1px solid #e8f0eb',
              }}
            >
              <AnimatePresence mode="wait">
              {submitted ? (
                <motion.div 
                  key="success"
                  initial={{ opacity: 0, scale: 0.95 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.95 }}
                  transition={{ duration: 0.4, ease: cubicBezier }}
                  style={{ textAlign: 'center', padding: '48px 0' }}
                >
                  <div style={{
                    width: 80, height: 80, borderRadius: '50%',
                    background: 'rgba(42,160,90,0.1)', border: '2px solid #2aa05a',
                    display: 'flex', alignItems: 'center', justifyContent: 'center',
                    margin: '0 auto 24px',
                  }}>
                    <Check size={36} color="#2aa05a" strokeWidth={2.5} />
                  </div>
                  <h3 style={{ margin: '0 0 10px', fontSize: 22, color: '#0f1f18', fontWeight: 700 }}>Message Sent!</h3>
                  <p style={{ color: '#6b7280', fontSize: 14, margin: '0 0 28px' }}>We'll get back to you within 2 business hours.</p>
                  <button
                    onClick={() => { setSubmitted(false); setForm({ name: '', email: '', phone: '', subject: '', message: '' }) }}
                    style={{ background: 'none', border: 'none', color: '#2aa05a', fontWeight: 700, cursor: 'pointer', fontSize: 14, fontFamily: 'inherit' }}
                  >
                    Send another message <ArrowRight size={14} style={{ display: 'inline', verticalAlign: 'middle' }} />
                  </button>
                </motion.div>
              ) : (
                <motion.div
                  key="form"
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.4 }}
                >
                  <div style={{ marginBottom: 32 }}>
                    <h3 style={{ margin: '0 0 8px', fontSize: 22, fontWeight: 700, color: '#0f1f18' }}>Send Us a Message</h3>
                    <p style={{ margin: 0, fontSize: 14, color: '#6b7280', lineHeight: 1.6 }}>Fill in the form and our team will respond promptly.</p>
                  </div>

                  <form onSubmit={handleSubmit} noValidate>
                    {/* Name + Email */}
                    <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                      <Field label="Full Name *" error={errors.name}>
                        <Input type="text" placeholder="Mohamed Al Rashid" value={form.name} onChange={set('name')} />
                      </Field>
                      <Field label="Email Address *" error={errors.email}>
                        <Input type="email" placeholder="you@company.com" value={form.email} onChange={set('email')} />
                      </Field>
                    </div>

                    {/* Phone + Subject */}
                    <div style={{ display: 'flex', gap: 16, marginBottom: 18 }}>
                      <Field label="Phone Number">
                        <Input type="tel" placeholder="+971 50 000 0000" value={form.phone} onChange={set('phone')} />
                      </Field>
                      <Field label="Subject *" error={errors.subject}>
                        <Input type="text" placeholder="e.g. Bulk sugar sourcing" value={form.subject} onChange={set('subject')} />
                      </Field>
                    </div>

                    {/* Message */}
                    <div style={{ marginBottom: 28 }}>
                      <Field label="Message *" error={errors.message}>
                        <textarea
                          rows={5}
                          placeholder="Tell us about your requirements…"
                          value={form.message}
                          onChange={set('message')}
                          style={{ ...inputStyle, resize: 'vertical', minHeight: 120 }}
                          onFocus={e => { e.target.style.borderColor = '#2aa05a'; e.target.style.boxShadow = '0 0 0 3px rgba(42,160,90,0.1)'; e.target.style.background = '#fff' }}
                          onBlur={e => { e.target.style.borderColor = '#dde8e3'; e.target.style.boxShadow = 'none'; e.target.style.background = '#fafcfb' }}
                        />
                      </Field>
                    </div>

                    {/* Actions */}
                    <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
                      <motion.button
                        whileHover={{ scale: 1.02 }}
                        whileTap={{ scale: 0.98 }}
                        type="submit"
                        style={{
                          background: 'linear-gradient(135deg, #2aa05a, #1f7a5a)',
                          color: '#fff', border: 'none',
                          padding: '14px 40px', borderRadius: 10,
                          fontWeight: 700, fontSize: 15, cursor: 'pointer',
                          boxShadow: '0 6px 24px rgba(42,160,90,0.35)',
                          transition: 'transform 0.2s, box-shadow 0.2s',
                          fontFamily: 'inherit', letterSpacing: '0.2px',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.transform = 'translateY(-2px)'; e.currentTarget.style.boxShadow = '0 12px 32px rgba(42,160,90,0.45)' }}
                        onMouseLeave={e => { e.currentTarget.style.transform = 'translateY(0)'; e.currentTarget.style.boxShadow = '0 6px 24px rgba(42,160,90,0.35)' }}
                      >
                        Send Message
                      </motion.button>
                      <button
                        type="button"
                        onClick={() => { setForm({ name: '', email: '', phone: '', subject: '', message: '' }); setErrors({}) }}
                        style={{
                          background: 'transparent', color: '#6b7280',
                          border: '1.5px solid #e2e8e3', padding: '13px 22px',
                          borderRadius: 10, fontWeight: 600, fontSize: 14,
                          cursor: 'pointer', fontFamily: 'inherit',
                          transition: 'border-color 0.2s, color 0.2s',
                        }}
                        onMouseEnter={e => { e.currentTarget.style.borderColor = '#2aa05a'; e.currentTarget.style.color = '#2aa05a' }}
                        onMouseLeave={e => { e.currentTarget.style.borderColor = '#e2e8e3'; e.currentTarget.style.color = '#6b7280' }}
                      >
                        Clear
                      </button>
                    </div>
                  </form>
                </motion.div>
              )}
              </AnimatePresence>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
    </>
  )
}

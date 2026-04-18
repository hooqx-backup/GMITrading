import { useState, useRef } from "react";
import { Link } from "react-router-dom";
import { motion, useInView, AnimatePresence } from "framer-motion";
import { ChevronRight, Check, ArrowRight, Phone, Star } from "lucide-react";

import brand1 from "../../assets/logos/Brand1-300x174.png";
import brand2 from "../../assets/logos/Brand2.png";
import brand3 from "../../assets/logos/Brand3-300x61.png";
import brand4 from "../../assets/logos/Brand4.png";
import brand7 from "../../assets/logos/brand7.jpg";
import brand8 from "../../assets/logos/brand8-300x51.png";
import brand10 from "../../assets/logos/brand10.png";
import brand11 from "../../assets/logos/brand11.webp";
import brand12 from "../../assets/logos/brand12.webp";
import brand13 from "../../assets/logos/brand13-300x61.png";
import brand14 from "../../assets/logos/brand14-300x176.png";
import brand15 from "../../assets/logos/brand15.png";
import brand17 from "../../assets/logos/brand17-300x195.png";
import brand18 from "../../assets/logos/brand18-300x124.webp";
import brand19 from "../../assets/logos/brand19.jpeg";
import brand20 from "../../assets/logos/brand20-300x140.png";
import brand21 from "../../assets/logos/brand21.jpg";
import brand24 from "../../assets/logos/brand24.webp";

const PARTNER_LOGOS = [
  brand1, brand2, brand3, brand4, brand7, brand8, brand10,
  brand11, brand12, brand13, brand14, brand15, brand17,
  brand18, brand19, brand20, brand21, brand24,
];

/* ─────────────────────────────────────────────
   EASING + SPRING CONSTANTS
───────────────────────────────────────────── */
const EASE = [0.16, 1, 0.3, 1];
const SPRING = { type: "spring", stiffness: 260, damping: 24, mass: 1 };

/* ─────────────────────────────────────────────
   ANIMATION VARIANTS
───────────────────────────────────────────── */
const fadeUp = {
  hidden: { opacity: 0, y: 36 },
  visible: (d = 0) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.7, ease: EASE, delay: d },
  }),
};
const fadeLeft = {
  hidden: { opacity: 0, x: -44 },
  visible: (d = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: EASE, delay: d },
  }),
};
const fadeRight = {
  hidden: { opacity: 0, x: 44 },
  visible: (d = 0) => ({
    opacity: 1,
    x: 0,
    transition: { duration: 0.72, ease: EASE, delay: d },
  }),
};
const staggerContainer = {
  hidden: {},
  visible: { transition: { staggerChildren: 0.09, delayChildren: 0.08 } },
};
const staggerItem = {
  hidden: { opacity: 0, y: 24 },
  visible: { opacity: 1, y: 0, transition: { duration: 0.55, ease: EASE } },
};

/* ─────────────────────────────────────────────
   HELPERS
───────────────────────────────────────────── */
function InView({
  children,
  variants = fadeUp,
  delay = 0,
  style = {},
  className = "",
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });
  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={inView ? "visible" : "hidden"}
      custom={delay}
      variants={variants}
      style={style}
      className={className}
    >
      {children}
    </motion.div>
  );
}

function hexToRgb(hex) {
  const r = parseInt(hex.slice(1, 3), 16);
  const g = parseInt(hex.slice(3, 5), 16);
  const b = parseInt(hex.slice(5, 7), 16);
  return `${r},${g},${b}`;
}

/* Pill / label chip */
function Chip({ text, color }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: 6,
        fontSize: 10,
        fontWeight: 700,
        letterSpacing: "2px",
        textTransform: "uppercase",
        color,
        background: color + "14",
        border: `1px solid ${color}30`,
        borderRadius: 999,
        padding: "5px 16px",
      }}
    >
      <span
        style={{
          width: 5,
          height: 5,
          borderRadius: "50%",
          background: color,
          display: "inline-block",
        }}
      />
      {text}
    </span>
  );
}

/* Section divider line */
function Divider({ color = "#e5e7eb" }) {
  return (
    <div style={{ width: "100%", height: 1, background: color, margin: "0" }} />
  );
}

/* ══════════════════════════════════════════════
   MAIN COMPONENT
══════════════════════════════════════════════ */
export default function ProjectPage({ project }) {
  const {
    title,
    tagline,
    heroImage,
    accentColor = "#2aa05a",
    overview,
    stats,
    pillars,
    process,
    features,
    cta,
    category,
    year,
  } = project;

  const rgb = hexToRgb(accentColor);

  return (
    <div style={{ background: "#ffffff" }}>
      {/* ══════════════════════════════════
          1. HERO  — split layout
      ══════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          overflow: "hidden",
          background: "#ffffff",
          borderBottom: "1px solid #f0f0f0",
        }}
      >
        {/* subtle dot-grid background */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(${rgb},0.06) 1px, transparent 1px)`,
            backgroundSize: "36px 36px",
            pointerEvents: "none",
          }}
        />

        {/* accent gradient blobs */}
        <motion.div
          initial={{ opacity: 0, scale: 0.6 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 1.6, ease: EASE }}
          style={{
            position: "absolute",
            top: -120,
            right: "10%",
            width: 520,
            height: 520,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accentColor}0d 0%, transparent 68%)`,
            pointerEvents: "none",
          }}
        />
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 1.8, delay: 0.3 }}
          style={{
            position: "absolute",
            bottom: -60,
            left: "5%",
            width: 360,
            height: 360,
            borderRadius: "50%",
            background: `radial-gradient(circle, ${accentColor}08 0%, transparent 70%)`,
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <div
            className="proj-page-hero-grid"
            style={{
              display: "grid",
              gridTemplateColumns: "1fr 1fr",
              gap: 48,
              alignItems: "center",
              minHeight: 600,
              padding: "80px 0",
            }}
          >
            {/* LEFT — text side */}
            <div>
              {/* breadcrumb */}
              <motion.div
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.1 }}
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 6,
                  marginBottom: 28,
                }}
              >
                <Link
                  to="/"
                  style={{
                    fontSize: 12,
                    color: "#9ca3af",
                    textDecoration: "none",
                    fontWeight: 500,
                  }}
                >
                  Home
                </Link>
                
                
                <ChevronRight size={12} color="#d1d5db" strokeWidth={1.5} />
                <span
                  style={{ fontSize: 12, color: accentColor, fontWeight: 600 }}
                >
                  {title}
                </span>
              </motion.div>

              {/* badges */}
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: 0.22 }}
                style={{
                  display: "flex",
                  gap: 8,
                  marginBottom: 24,
                  flexWrap: "wrap",
                }}
              >
                <Chip text={category} color={accentColor} />
                <Chip text={`Est. ${year}`} color="#94a3b8" />
              </motion.div>

              {/* title */}
              <div
                className="proj-page-hero-title-mask"
                style={{
                  overflow: "hidden",
                  marginBottom: 20,
                  paddingBottom: "0.38em",
                }}
              >
                <motion.h1
                  className="proj-page-hero-title"
                  initial={{ y: "110%" }}
                  animate={{ y: "0%" }}
                  transition={{ duration: 0.85, ease: EASE, delay: 0.3 }}
                  style={{
                    fontSize: "clamp(38px, 5.5vw, 72px)",
                    fontWeight: 900,
                    color: "#0f172a",
                    margin: 0,
                    lineHeight: 1.15,
                    letterSpacing: "-1.8px",
                  }}
                >
                  {title}
                </motion.h1>
              </div>

              {/* tagline */}
              <motion.p
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.65, delay: 0.5 }}
                style={{
                  fontSize: 17,
                  color: "#64748b",
                  margin: "0 0 44px",
                  lineHeight: 1.75,
                  maxWidth: 480,
                }}
              >
                {tagline}
              </motion.p>

              {/* stat chips */}
              {stats && (
                <motion.div
                  variants={staggerContainer}
                  initial="hidden"
                  animate="visible"
                  style={{ display: "flex", gap: 12, flexWrap: "wrap" }}
                >
                  {stats.map((s, i) => (
                    <motion.div
                      key={i}
                      variants={staggerItem}
                      whileHover={{
                        y: -3,
                        boxShadow: `0 12px 36px rgba(${rgb},0.18)`,
                      }}
                      transition={SPRING}
                      style={{
                        background: "#ffffff",
                        border: `1.5px solid #f0f0f0`,
                        borderRadius: 14,
                        padding: "14px 22px",
                        textAlign: "center",
                        minWidth: 100,
                        boxShadow: "0 2px 12px rgba(0,0,0,0.06)",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 22,
                          fontWeight: 800,
                          color: accentColor,
                          lineHeight: 1,
                          letterSpacing: "-0.5px",
                        }}
                      >
                        {s.value}
                      </div>
                      <div
                        style={{
                          fontSize: 11,
                          color: "#94a3b8",
                          marginTop: 5,
                          fontWeight: 600,
                          letterSpacing: "0.3px",
                        }}
                      >
                        {s.label}
                      </div>
                    </motion.div>
                  ))}
                </motion.div>
              )}
            </div>

            {/* RIGHT — image */}
            <motion.div
              initial={{ opacity: 0, scale: 0.94, x: 40 }}
              animate={{ opacity: 1, scale: 1, x: 0 }}
              transition={{ duration: 0.9, ease: EASE, delay: 0.2 }}
              style={{ position: "relative" }}
            >
              {/* main image */}
              <motion.div
                whileHover={{ scale: 1.02 }}
                transition={{ duration: 0.6, ease: EASE }}
                style={{
                  borderRadius: 24,
                  overflow: "hidden",
                  boxShadow: `0 24px 80px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)`,
                  aspectRatio: "4/3",
                  position: "relative",
                }}
              >
                <img
                  src={heroImage}
                  alt={title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                    display: "block",
                  }}
                />
                {/* subtle tint overlay */}
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: `linear-gradient(180deg, transparent 60%, ${accentColor}18 100%)`,
                  }}
                />
              </motion.div>

              {/* floating accent badge */}
              <motion.div
                initial={{ opacity: 0, y: 20, scale: 0.85 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.6, delay: 0.75, ease: EASE }}
                style={{
                  position: "absolute",
                  bottom: -20,
                  left: -20,
                  background: "#ffffff",
                  borderRadius: 16,
                  padding: "16px 22px",
                  boxShadow:
                    "0 12px 40px rgba(0,0,0,0.12), 0 0 0 1px rgba(0,0,0,0.05)",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <div
                  style={{
                    width: 40,
                    height: 40,
                    borderRadius: 10,
                    flexShrink: 0,
                    background: `linear-gradient(135deg, ${accentColor}, ${accentColor}bb)`,
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                  }}
                >
                  <Star size={18} color="white" strokeWidth={2.5} />
                </div>
                <div>
                  <div
                    style={{ fontSize: 12, fontWeight: 700, color: "#0f172a" }}
                  >
                    Premium Grade
                  </div>
                  <div
                    style={{ fontSize: 11, color: "#94a3b8", fontWeight: 500 }}
                  >
                    {category}
                  </div>
                </div>
              </motion.div>

              {/* top-right tag */}
              <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.5, delay: 0.9 }}
                style={{
                  position: "absolute",
                  top: 16,
                  right: 16,
                  background: "rgba(255,255,255,0.92)",
                  backdropFilter: "blur(12px)",
                  WebkitBackdropFilter: "blur(12px)",
                  borderRadius: 10,
                  padding: "8px 14px",
                  fontSize: 11,
                  fontWeight: 700,
                  color: accentColor,
                  border: `1px solid ${accentColor}25`,
                  letterSpacing: "1px",
                  textTransform: "uppercase",
                }}
              >
                {category}
              </motion.div>
            </motion.div>
          </div>
        </div>

        {/* responsive hero styles */}
        <style>{`
          @media (max-width: 820px) {
            .proj-page-hero-grid { grid-template-columns: 1fr !important; padding: 48px 0 !important; }
          }
          @media (max-width: 640px) {
            .proj-page-hero-grid { gap: 32px !important; }
            .proj-page-hero-title-mask { padding-bottom: 0.52em !important; }
            .proj-page-hero-title { line-height: 1.2 !important; letter-spacing: -1px !important; }
          }
        `}</style>
      </div>

      {/* ══════════════════════════════════
          2. OVERVIEW
      ══════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          background: "#f8fafc",
          padding: "96px 0",
          borderBottom: "1px solid #f0f2f4",
        }}
      >
        <div className="container">
          <div
            style={{
              display: "flex",
              gap: 56,
              alignItems: "flex-start",
              flexWrap: "wrap",
            }}
          >
            {/* left */}
            <InView variants={fadeLeft} style={{ flex: "1 1 420px" }}>
              <Chip text="Overview" color={accentColor} />
              <h2
                style={{
                  fontSize: "clamp(26px,3vw,42px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "16px 0 20px",
                  letterSpacing: "-0.8px",
                  lineHeight: 1.15,
                }}
              >
                {overview.heading}
              </h2>
              <p
                style={{
                  fontSize: 15.5,
                  color: "#64748b",
                  lineHeight: 1.85,
                  margin: "0 0 32px",
                }}
              >
                {overview.body}
              </p>

              {overview.bullets && (
                <motion.ul
                  variants={staggerContainer}
                  initial="hidden"
                  whileInView="visible"
                  viewport={{ once: true, margin: "-40px" }}
                  style={{
                    listStyle: "none",
                    padding: 0,
                    margin: 0,
                    display: "flex",
                    flexDirection: "column",
                    gap: 14,
                  }}
                >
                  {overview.bullets.map((b, i) => (
                    <motion.li
                      key={i}
                      variants={staggerItem}
                      style={{
                        display: "flex",
                        gap: 12,
                        alignItems: "flex-start",
                        fontSize: 14.5,
                        color: "#374151",
                        fontWeight: 500,
                      }}
                    >
                      <span
                        style={{
                          width: 22,
                          height: 22,
                          borderRadius: "50%",
                          flexShrink: 0,
                          marginTop: 1,
                          background: accentColor + "14",
                          border: `1.5px solid ${accentColor}40`,
                          display: "flex",
                          alignItems: "center",
                          justifyContent: "center",
                        }}
                      >
                        <Check size={10} color={accentColor} strokeWidth={2} />
                      </span>
                      {b}
                    </motion.li>
                  ))}
                </motion.ul>
              )}
            </InView>

            {/* right — highlights card */}
            <InView
              variants={fadeRight}
              delay={0.15}
              style={{ flex: "0 1 320px" }}
            >
              <motion.div
                whileHover={{
                  y: -6,
                  boxShadow: `0 32px 72px rgba(${rgb},0.14), 0 0 0 1px ${accentColor}20`,
                }}
                transition={SPRING}
                style={{
                  background: "#ffffff",
                  border: `1.5px solid #e8ecf0`,
                  borderRadius: 22,
                  overflow: "hidden",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.07)",
                }}
              >
                {/* card header */}
                <div
                  style={{
                    background: `linear-gradient(135deg, ${accentColor}10 0%, ${accentColor}06 100%)`,
                    borderBottom: `1px solid ${accentColor}18`,
                    padding: "20px 38px",
                  }}
                >
                  <span
                    style={{
                      fontSize: 11,
                      fontWeight: 700,
                      letterSpacing: "1.5px",
                      textTransform: "uppercase",
                      color: accentColor,
                    }}
                  >
                    Key Highlights
                  </span>
                </div>

                {/* metrics */}
                <div style={{ padding: "8px 0" }}>
                  {overview.highlights?.map((h, i) => (
                    <motion.div
                      key={i}
                      initial={{ opacity: 0, x: 16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                      whileHover={{
                        background: `${accentColor}06`,
                        paddingLeft: 34,
                      }}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "18px 28px",
                        borderBottom:
                          i < (overview.highlights?.length ?? 0) - 1
                            ? "1px solid #f0f2f4"
                            : "none",
                        transition: "background 0.25s, padding-left 0.25s",
                      }}
                    >
                      <div
                        style={{
                          fontSize: 30,
                          fontWeight: 900,
                          color: accentColor,
                          lineHeight: 1,
                          minWidth: 88,
                          letterSpacing: "-1px",
                        }}
                      >
                        {h.value}
                      </div>
                      <div
                        style={{
                          fontSize: 13,
                          color: "#64748b",
                          lineHeight: 1.5,
                          fontWeight: 500,
                        }}
                      >
                        {h.label}
                      </div>
                    </motion.div>
                  ))}
                </div>
              </motion.div>
            </InView>
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          3. THREE PILLARS
      ══════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          background: "#ffffff",
          padding: "96px 0",
          borderBottom: "1px solid #f0f2f4",
        }}
      >
        <div className="container">
          <InView
            variants={fadeUp}
            style={{ textAlign: "center", marginBottom: 60 }}
          >
            <Chip text="Core Capabilities" color={accentColor} />
            <h2
              style={{
                fontSize: "clamp(26px,3vw,40px)",
                fontWeight: 800,
                color: "#0f172a",
                margin: "16px 0 14px",
                letterSpacing: "-0.8px",
              }}
            >
              {pillars.heading}
            </h2>
            <p
              style={{
                maxWidth: 500,
                margin: "0 auto",
                fontSize: 15.5,
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              {pillars.subheading}
            </p>
          </InView>

          <motion.div
            variants={staggerContainer}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, margin: "-60px" }}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(300px, 1fr))",
              gap: 24,
            }}
          >
            {pillars.items.map((p, i) => (
              <PillarCard key={i} item={p} index={i} accent={accentColor} />
            ))}
          </motion.div>
        </div>
      </div>

      {/* ══════════════════════════════════
          4. PROCESS TIMELINE
      ══════════════════════════════════ */}
      {process && (
        <div
          style={{
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            width: "100vw",
            background: "#f8fafc",
            padding: "96px 0",
            borderBottom: "1px solid #f0f2f4",
          }}
        >
          <div className="container">
            <InView
              variants={fadeUp}
              style={{ textAlign: "center", marginBottom: 64 }}
            >
              <Chip text="How It Works" color={accentColor} />
              <h2
                style={{
                  fontSize: "clamp(26px,3vw,40px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "16px 0 0",
                  letterSpacing: "-0.8px",
                }}
              >
                {process.heading}
              </h2>
            </InView>

            <div style={{ position: "relative" }}>
              {/* horizontal connector line — desktop */}
              <motion.div
                initial={{ scaleX: 0 }}
                whileInView={{ scaleX: 1 }}
                viewport={{ once: true }}
                transition={{ duration: 1.4, ease: EASE, delay: 0.3 }}
                style={{
                  position: "absolute",
                  top: 36,
                  left: "5%",
                  right: "5%",
                  height: 1.5,
                  background: `linear-gradient(90deg, transparent, ${accentColor}35, ${accentColor}70, ${accentColor}35, transparent)`,
                  transformOrigin: "left",
                  pointerEvents: "none",
                }}
              />

              <div
                style={{
                  display: "flex",
                  gap: 16,
                  flexWrap: "wrap",
                  position: "relative",
                  zIndex: 1,
                }}
              >
                {process.steps.map((s, i) => (
                  <ProcessStep
                    key={i}
                    step={s}
                    index={i}
                    total={process.steps.length}
                    accent={accentColor}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════
          5. FEATURES GRID
      ══════════════════════════════════ */}
      {features && (
        <div
          style={{
            position: "relative",
            left: "50%",
            right: "50%",
            marginLeft: "-50vw",
            marginRight: "-50vw",
            width: "100vw",
            background: "#ffffff",
            padding: "96px 0",
            borderBottom: "1px solid #f0f2f4",
          }}
        >
          <div className="container">
            <InView
              variants={fadeUp}
              style={{ textAlign: "center", marginBottom: 56 }}
            >
              <Chip text="Features" color={accentColor} />
              <h2
                style={{
                  fontSize: "clamp(26px,3vw,40px)",
                  fontWeight: 800,
                  color: "#0f172a",
                  margin: "16px 0 0",
                  letterSpacing: "-0.8px",
                }}
              >
                {features.heading}
              </h2>
            </InView>

            <motion.div
              variants={staggerContainer}
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, margin: "-60px" }}
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(280px, 1fr))",
                gap: 20,
              }}
            >
              {features.items.map((f, i) => (
                <FeatureCard key={i} item={f} accent={accentColor} />
              ))}
            </motion.div>
          </div>
        </div>
      )}

      {/* ══════════════════════════════════
          6. OUR PARTNERS
      ══════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          background: "#f8fafc",
          padding: "80px 0",
          borderBottom: "1px solid #f0f2f4",
          overflow: "hidden",
        }}
      >
        <style>{`
          @keyframes marquee {
            0%   { transform: translateX(0); }
            100% { transform: translateX(-50%); }
          }
          .partners-track {
            display: flex;
            align-items: center;
            gap: 48px;
            width: max-content;
            animation: marquee 32s linear infinite;
          }
          .partners-track:hover { animation-play-state: paused; }
        `}</style>

        <div className="container" style={{ marginBottom: 48 }}>
          <InView variants={fadeUp} style={{ textAlign: "center" }}>
            <Chip text="Our Partners" color={accentColor} />
            <h2
              style={{
                fontSize: "clamp(24px,2.8vw,38px)",
                fontWeight: 800,
                color: "#0f172a",
                margin: "16px 0 12px",
                letterSpacing: "-0.8px",
              }}
            >
              Trusted by Industry Leaders
            </h2>
            <p
              style={{
                maxWidth: 460,
                margin: "0 auto",
                fontSize: 15,
                color: "#64748b",
                lineHeight: 1.7,
              }}
            >
              We collaborate with world-class brands to deliver unmatched value across every sector we serve.
            </p>
          </InView>
        </div>

        {/* fade edges */}
        <div
          style={{
            position: "absolute",
            top: 0,
            left: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to right, #f8fafc, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            bottom: 0,
            width: 120,
            background: "linear-gradient(to left, #f8fafc, transparent)",
            zIndex: 2,
            pointerEvents: "none",
          }}
        />

        <div style={{ overflow: "hidden", width: "100%" }}>
          <div className="partners-track">
            {[...PARTNER_LOGOS, ...PARTNER_LOGOS].map((src, i) => (
              <div
                key={i}
                style={{
                  flexShrink: 0,
                  width: 140,
                  height: 72,
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  background: "#ffffff",
                  borderRadius: 14,
                  padding: "12px 20px",
                  border: "1.5px solid #eef0f3",
                  boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
                }}
              >
                <img
                  src={src}
                  alt={`Partner ${i + 1}`}
                  style={{
                    maxWidth: "100%",
                    maxHeight: "100%",
                    objectFit: "contain",
                    filter: "grayscale(100%)",
                    opacity: 0.6,
                    transition: "filter 0.3s, opacity 0.3s",
                  }}
                  onMouseEnter={e => {
                    e.currentTarget.style.filter = "grayscale(0%)";
                    e.currentTarget.style.opacity = "1";
                  }}
                  onMouseLeave={e => {
                    e.currentTarget.style.filter = "grayscale(100%)";
                    e.currentTarget.style.opacity = "0.6";
                  }}
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* ══════════════════════════════════
          7. CTA BANNER
      ══════════════════════════════════ */}
      <div
        style={{
          position: "relative",
          left: "50%",
          right: "50%",
          marginLeft: "-50vw",
          marginRight: "-50vw",
          width: "100vw",
          overflow: "hidden",
          background: `linear-gradient(135deg, ${accentColor} 0%, ${accentColor}cc 100%)`,
          padding: "96px 0",
        }}
      >
        {/* subtle pattern */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `radial-gradient(circle, rgba(255,255,255,0.08) 1px, transparent 1px)`,
            backgroundSize: "32px 32px",
            pointerEvents: "none",
          }}
        />

        {/* decorative circles */}
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4 }}
          style={{
            position: "absolute",
            top: -160,
            right: -80,
            width: 480,
            height: 480,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.12)",
            pointerEvents: "none",
          }}
        />
        <motion.div
          initial={{ opacity: 0, scale: 0.5 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.4, delay: 0.15 }}
          style={{
            position: "absolute",
            bottom: -100,
            left: -60,
            width: 320,
            height: 320,
            borderRadius: "50%",
            border: "1px solid rgba(255,255,255,0.1)",
            pointerEvents: "none",
          }}
        />

        <div className="container" style={{ position: "relative", zIndex: 1 }}>
          <InView variants={fadeUp}>
            <div
              style={{
                maxWidth: 680,
                margin: "0 auto",
                textAlign: "center",
              }}
            >
              <motion.span
                initial={{ opacity: 0, y: 10 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5 }}
                style={{
                  display: "inline-block",
                  fontSize: 10,
                  fontWeight: 700,
                  letterSpacing: "2.5px",
                  textTransform: "uppercase",
                  color: "rgba(255,255,255,0.75)",
                  background: "rgba(255,255,255,0.14)",
                  border: "1px solid rgba(255,255,255,0.25)",
                  borderRadius: 999,
                  padding: "5px 16px",
                  marginBottom: 20,
                }}
              >
                Partnership
              </motion.span>

              <h2
                style={{
                  fontSize: "clamp(26px,3.5vw,48px)",
                  fontWeight: 800,
                  color: "#ffffff",
                  margin: "0 0 18px",
                  letterSpacing: "-1px",
                  lineHeight: 1.1,
                }}
              >
                {cta.heading}
              </h2>
              <p
                style={{
                  fontSize: 16,
                  color: "rgba(255,255,255,0.78)",
                  maxWidth: 480,
                  margin: "0 auto 44px",
                  lineHeight: 1.75,
                }}
              >
                {cta.body}
              </p>

              <motion.div
                variants={staggerContainer}
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true }}
                style={{
                  display: "flex",
                  gap: 14,
                  justifyContent: "center",
                  flexWrap: "wrap",
                }}
              >
                <motion.div variants={staggerItem}>
                  <motion.div
                    whileHover={{
                      y: -4,
                      scale: 1.03,
                      boxShadow: "0 20px 48px rgba(0,0,0,0.2)",
                    }}
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING}
                  >
                    <Link
                      to="/contact"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 10,
                        background: "#ffffff",
                        color: accentColor,
                        padding: "16px 36px",
                        borderRadius: 12,
                        fontWeight: 700,
                        fontSize: 15,
                        textDecoration: "none",
                        boxShadow: "0 8px 32px rgba(0,0,0,0.15)",
                      }}
                    >
                      {cta.primary}
                      <ArrowRight size={15} strokeWidth={2.5} />
                    </Link>
                  </motion.div>
                </motion.div>

                <motion.div variants={staggerItem}>
                  <motion.div
                    whileHover={{ y: -4, scale: 1.03 }}
                    whileTap={{ scale: 0.97 }}
                    transition={SPRING}
                  >
                    <a
                      href="tel:+97145095923"
                      style={{
                        display: "inline-flex",
                        alignItems: "center",
                        gap: 9,
                        background: "rgba(255,255,255,0.15)",
                        border: "1.5px solid rgba(255,255,255,0.35)",
                        color: "#ffffff",
                        padding: "15px 28px",
                        borderRadius: 12,
                        fontWeight: 600,
                        fontSize: 15,
                        textDecoration: "none",
                      }}
                    >
                      <Phone size={16} />
                      Request a Callback
                    </a>
                  </motion.div>
                </motion.div>
              </motion.div>
            </div>
          </InView>
        </div>
      </div>
    </div>
  );
}

/* ══════════════════════════════════════════════
   SUB-COMPONENTS
══════════════════════════════════════════════ */

function PillarCard({ item, index, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={staggerItem}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -10,
        boxShadow: `0 24px 64px rgba(0,0,0,0.10), 0 0 0 1.5px ${accent}30`,
      }}
      transition={SPRING}
      style={{
        background: "#ffffff",
        border: `1.5px solid ${hovered ? accent + "28" : "#eef0f3"}`,
        borderRadius: 22,
        padding: "36px 30px",
        position: "relative",
        overflow: "hidden",
        cursor: "default",
        boxShadow: hovered
          ? `0 24px 64px rgba(0,0,0,0.10), 0 0 0 1.5px ${accent}30`
          : "0 2px 16px rgba(0,0,0,0.05)",
        transition: "border-color 0.3s",
      }}
    >
      {/* top accent bar animates in on hover */}
      <motion.div
        animate={{ scaleX: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.35, ease: EASE }}
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          right: 0,
          height: 3,
          background: `linear-gradient(90deg, ${accent}, ${accent}77)`,
          transformOrigin: "left",
          borderRadius: "0 0 4px 4px",
        }}
      />

      {/* bg glow */}
      <motion.div
        animate={{ opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.4 }}
        style={{
          position: "absolute",
          top: -60,
          right: -60,
          width: 180,
          height: 180,
          borderRadius: "50%",
          background: `radial-gradient(circle, ${accent}0e 0%, transparent 70%)`,
          pointerEvents: "none",
        }}
      />

      {/* index number */}
      <div
        style={{
          position: "absolute",
          top: 22,
          right: 26,
          fontSize: 48,
          fontWeight: 900,
          color: `${accent}0c`,
          lineHeight: 1,
          letterSpacing: "-2px",
          userSelect: "none",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </div>

      {/* icon container */}
      <motion.div
        animate={{
          background: hovered ? accent : accent + "12",
          color: hovered ? "#fff" : accent,
          boxShadow: hovered ? `0 10px 24px ${accent}40` : "none",
        }}
        transition={{ duration: 0.3 }}
        style={{
          width: 54,
          height: 54,
          borderRadius: 15,
          flexShrink: 0,
          border: `1.5px solid ${accent}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          marginBottom: 20,
          fontSize: 24,
          position: "relative",
          zIndex: 1,
        }}
      >
        {item.icon}
      </motion.div>

      <span
        style={{
          fontSize: 9.5,
          fontWeight: 700,
          letterSpacing: "1.8px",
          textTransform: "uppercase",
          color: accent,
          background: accent + "10",
          border: `1px solid ${accent}22`,
          borderRadius: 999,
          padding: "3px 11px",
          display: "inline-block",
          marginBottom: 12,
          position: "relative",
          zIndex: 1,
        }}
      >
        {item.tag}
      </span>

      <h3
        style={{
          margin: "0 0 10px",
          fontSize: 18,
          fontWeight: 700,
          color: "#0f172a",
          letterSpacing: "-0.3px",
          position: "relative",
          zIndex: 1,
        }}
      >
        {item.title}
      </h3>
      <p
        style={{
          margin: 0,
          fontSize: 14,
          color: "#64748b",
          lineHeight: 1.7,
          position: "relative",
          zIndex: 1,
        }}
      >
        {item.desc}
      </p>
    </motion.div>
  );
}

function ProcessStep({ step, index, total, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-40px" }}
      transition={{ duration: 0.6, delay: 0.1 + index * 0.1, ease: EASE }}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -8,
        boxShadow: `0 24px 56px rgba(0,0,0,0.09), 0 0 0 1.5px ${accent}28`,
      }}
      style={{
        flex: "1 1 150px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
        padding: "36px 18px 28px",
        background: "#ffffff",
        border: `1.5px solid ${hovered ? accent + "25" : "#eef0f3"}`,
        borderRadius: 20,
        boxShadow: "0 2px 12px rgba(0,0,0,0.05)",
        cursor: "default",
        transition: "border-color 0.3s",
      }}
    >
      {/* step number circle */}
      <motion.div
        animate={{
          background: hovered
            ? `linear-gradient(135deg, ${accent}, ${accent}cc)`
            : "#ffffff",
          color: hovered ? "#fff" : accent,
          boxShadow: hovered
            ? `0 12px 32px ${accent}50`
            : `0 0 0 1.5px ${accent}35`,
        }}
        transition={{ duration: 0.3 }}
        style={{
          width: 54,
          height: 54,
          borderRadius: "50%",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontWeight: 800,
          fontSize: 15,
          marginBottom: 22,
          flexShrink: 0,
          letterSpacing: "-0.5px",
          background: "#ffffff",
        }}
      >
        {String(index + 1).padStart(2, "0")}
      </motion.div>

      <h4
        style={{
          margin: "0 0 10px",
          fontSize: 14,
          fontWeight: 700,
          color: "#0f172a",
          letterSpacing: "-0.2px",
        }}
      >
        {step.title}
      </h4>
      <p
        style={{
          margin: 0,
          fontSize: 12.5,
          color: "#94a3b8",
          lineHeight: 1.65,
        }}
      >
        {step.desc}
      </p>
    </motion.div>
  );
}

function FeatureCard({ item, accent }) {
  const [hovered, setHovered] = useState(false);
  return (
    <motion.div
      variants={staggerItem}
      onHoverStart={() => setHovered(true)}
      onHoverEnd={() => setHovered(false)}
      whileHover={{
        y: -6,
        boxShadow: `0 20px 48px rgba(0,0,0,0.09), 0 0 0 1.5px ${accent}25`,
      }}
      transition={SPRING}
      style={{
        background: "#ffffff",
        border: `1.5px solid ${hovered ? accent + "22" : "#eef0f3"}`,
        borderRadius: 18,
        padding: "24px 22px",
        display: "flex",
        gap: 16,
        alignItems: "flex-start",
        cursor: "default",
        boxShadow: "0 2px 12px rgba(0,0,0,0.04)",
        transition: "border-color 0.3s",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* accent line left */}
      <motion.div
        animate={{ scaleY: hovered ? 1 : 0, opacity: hovered ? 1 : 0 }}
        transition={{ duration: 0.3 }}
        style={{
          position: "absolute",
          left: 0,
          top: 8,
          bottom: 8,
          width: 3,
          background: accent,
          borderRadius: 4,
          transformOrigin: "top",
        }}
      />

      <motion.div
        animate={{
          background: hovered ? accent : accent + "12",
          color: hovered ? "#fff" : accent,
          boxShadow: hovered ? `0 6px 18px ${accent}40` : "none",
        }}
        transition={{ duration: 0.3 }}
        style={{
          width: 38,
          height: 38,
          borderRadius: 10,
          flexShrink: 0,
          border: `1px solid ${accent}22`,
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 17,
        }}
      >
        {item.icon}
      </motion.div>

      <div>
        <h4
          style={{
            margin: "0 0 6px",
            fontSize: 14.5,
            fontWeight: 700,
            color: "#0f172a",
            letterSpacing: "-0.2px",
          }}
        >
          {item.title}
        </h4>
        <p
          style={{
            margin: 0,
            fontSize: 13,
            color: "#64748b",
            lineHeight: 1.65,
          }}
        >
          {item.desc}
        </p>
      </div>
    </motion.div>
  );
}

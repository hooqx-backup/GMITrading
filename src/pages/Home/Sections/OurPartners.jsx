import { useRef } from "react";
import { motion, useInView } from "framer-motion";

import brand1 from "../../../assets/logos/Brand1-300x174.png";
import brand2 from "../../../assets/logos/Brand2.png";
import brand3 from "../../../assets/logos/Brand3-300x61.png";
import brand4 from "../../../assets/logos/Brand4.png";
import brand7 from "../../../assets/logos/brand7.jpg";
import brand8 from "../../../assets/logos/brand8-300x51.png";
import brand10 from "../../../assets/logos/brand10.png";
import brand11 from "../../../assets/logos/brand11.webp";
import brand12 from "../../../assets/logos/brand12.webp";
import brand13 from "../../../assets/logos/brand13-300x61.png";
import brand14 from "../../../assets/logos/brand14-300x176.png";
import brand15 from "../../../assets/logos/brand15.png";
import brand17 from "../../../assets/logos/brand17-300x195.png";
import brand18 from "../../../assets/logos/brand18-300x124.webp";
import brand19 from "../../../assets/logos/brand19.jpeg";
import brand20 from "../../../assets/logos/brand20-300x140.png";
import brand21 from "../../../assets/logos/brand21.jpg";
import brand24 from "../../../assets/logos/brand24.webp";

const LOGOS = [
  brand1, brand2, brand3, brand4, brand7, brand8, brand10,
  brand11, brand12, brand13, brand14, brand15, brand17,
  brand18, brand19, brand20, brand21, brand24,
];

const ACCENT = "#2aa05a";
const EASE = [0.16, 1, 0.3, 1];

export default function OurPartners() {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: "-64px" });

  return (
    <section
      style={{
        position: "relative",
        background: "#f8fafc",
        padding: "88px 0",
        overflow: "hidden",
        borderTop: "1px solid #f0f2f4",
        borderBottom: "1px solid #f0f2f4",
      }}
    >
      <style>{`
        @keyframes gmi-marquee {
          0%   { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .gmi-partners-track {
          display: flex;
          align-items: center;
          gap: 40px;
          width: max-content;
          animation: gmi-marquee 34s linear infinite;
        }
        .gmi-partners-track:hover { animation-play-state: paused; }
      `}</style>

      {/* heading */}
      <div className="container" style={{ marginBottom: 52 }}>
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 28 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, ease: EASE }}
          style={{ textAlign: "center" }}
        >
          <span
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 6,
              fontSize: 10,
              fontWeight: 700,
              letterSpacing: "2px",
              textTransform: "uppercase",
              color: ACCENT,
              background: ACCENT + "14",
              border: `1px solid ${ACCENT}30`,
              borderRadius: 999,
              padding: "5px 16px",
              marginBottom: 18,
            }}
          >
            <span
              style={{
                width: 5,
                height: 5,
                borderRadius: "50%",
                background: ACCENT,
                display: "inline-block",
              }}
            />
            Our Partners
          </span>

          <h2
            style={{
              fontSize: "clamp(24px, 2.8vw, 40px)",
              fontWeight: 800,
              color: "#0f172a",
              margin: "0 0 14px",
              letterSpacing: "-0.8px",
              lineHeight: 1.15,
            }}
          >
            Trusted by Industry Leaders
          </h2>
          <p
            style={{
              maxWidth: 480,
              margin: "0 auto",
              fontSize: 15.5,
              color: "#64748b",
              lineHeight: 1.75,
            }}
          >
            We collaborate with world-class brands to deliver unmatched quality and value across every sector we serve.
          </p>
        </motion.div>
      </div>

      {/* fade masks */}
      <div
        style={{
          position: "absolute",
          top: 0,
          left: 0,
          bottom: 0,
          width: 140,
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
          width: 140,
          background: "linear-gradient(to left, #f8fafc, transparent)",
          zIndex: 2,
          pointerEvents: "none",
        }}
      />

      {/* marquee track */}
      <div style={{ overflow: "hidden", width: "100%" }}>
        <div className="gmi-partners-track">
          {[...LOGOS, ...LOGOS].map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: 148,
                height: 76,
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
                alt={`Partner ${(i % LOGOS.length) + 1}`}
                style={{
                  maxWidth: "100%",
                  maxHeight: "100%",
                  objectFit: "contain",
                  transition: "transform 0.3s, opacity 0.3s",
                  opacity: 1,
                }}
                onMouseEnter={e => {
                  e.currentTarget.style.transform = "scale(1.08)";
                }}
                onMouseLeave={e => {
                  e.currentTarget.style.transform = "scale(1)";
                }}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

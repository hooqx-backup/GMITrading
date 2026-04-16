import { useState, useEffect, useRef } from "react";
import "../styles/ScrollFAB.css";

export default function ScrollToggleButton() {
  const [isPastHalfway, setIsPastHalfway] = useState(false);
  const [visible, setVisible] = useState(false);
  const [clicked, setClicked] = useState(false);
  const [progress, setProgress] = useState(0);
  const btnRef = useRef(null);

  useEffect(() => {
    const handleScrollOrResize = () => {
      const scrollY = window.scrollY;
      
      // Robust calculation for max height across all browsers
      const scrollHeight = Math.max(
        document.documentElement.scrollHeight,
        document.body.scrollHeight
      );
      const docHeight = scrollHeight - window.innerHeight;
      
      setVisible(scrollY > 80);
      
      if (docHeight > 0) {
        setProgress(Math.min(scrollY / docHeight, 1));
        // True if scrolled past 50% of the page
        setIsPastHalfway(scrollY >= docHeight * 0.5);
      } else {
        setProgress(0);
        setIsPastHalfway(false);
      }
    };

    window.addEventListener("scroll", handleScrollOrResize, { passive: true });
    window.addEventListener("resize", handleScrollOrResize);
    
    handleScrollOrResize(); // Run on mount
    
    return () => {
      window.removeEventListener("scroll", handleScrollOrResize);
      window.removeEventListener("resize", handleScrollOrResize);
    };
  }, []);

  const handleClick = () => {
    setClicked(true);
    setTimeout(() => setClicked(false), 600);

    const lenis = window.__lenis;

    if (isPastHalfway) {
      // Scroll to top
      if (lenis) {
        lenis.scrollTo(0);
      } else {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }
    } else {
      // Scroll to bottom
      if (lenis) {
        lenis.scrollTo("bottom");
      } else {
        window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
      }
    }
  };

  /* SVG arc progress ring */
  const R = 20;
  const CIRC = 2 * Math.PI * R;
  const dash = CIRC * progress;
  const gap  = CIRC - dash;

  return (
    <button
      ref={btnRef}
      className={[
        "stb-btn",
        visible ? "stb-btn--visible" : "",
        isPastHalfway ? "stb-btn--bottom" : "",
        clicked ? "stb-btn--clicked" : "",
      ].join(" ")}
      onClick={handleClick}
      aria-label={isPastHalfway ? "Back to top" : "Scroll down"}
    >
      {/* Pulse ring */}
      <span className="stb-pulse" />

      {/* SVG: progress arc + arrow icon together */}
      <svg className="stb-svg" viewBox="0 0 50 50">
        {/* Track */}
        <circle
          className="stb-track"
          cx="25" cy="25" r={R}
          fill="none"
          strokeWidth="2"
        />
        {/* Progress arc */}
        <circle
          className="stb-arc"
          cx="25" cy="25" r={R}
          fill="none"
          strokeWidth="2"
          strokeDasharray={`${dash} ${gap}`}
          strokeLinecap="round"
          transform="rotate(-90 25 25)"
        />
        {/* Arrow — chevron UP if <50%, DOWN if >50% */}
        <polyline
          className="stb-arrow"
          points={isPastHalfway ? "17 28 25 20 33 28" : "17 22 25 30 33 22"}
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </button>
  );
}
import { useState, useEffect } from "react";
import "./FloatingCta.css";

export function FloatingCta() {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const triggers = document.querySelectorAll("[data-cta-bar]");
    const observer = new IntersectionObserver(
      (entries) => {
        const anyVisible = entries.some((entry) => entry.isIntersecting);
        setIsVisible(!anyVisible);
      },
      { rootMargin: "65px 0px 0px 0px" },
    );

    triggers.forEach((trigger) => observer.observe(trigger));
    return () => observer.disconnect();
  }, []);

  return (
    <div className={`c-floating-cta${isVisible ? " c-floating-cta--visible" : ""}`}>
      <button type="button" className="c-floating-cta__btn c-btn c-btn--full c-btn--lg">
        Get Started
      </button>
    </div>
  );
}

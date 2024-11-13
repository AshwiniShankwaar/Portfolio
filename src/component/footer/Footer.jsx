import React, { useRef, useEffect, useState } from "react";
import style from "./footer.module.css";
import heroSection from "../../data/heroSection.json";

function Footer() {
  const { mail_to } = heroSection[0];
  const msgRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setIsVisible(true);
            observer.unobserve(entry.target); // Stop observing after animation starts
          }
        });
      },
      { threshold: 0.5 } // Trigger when 50% of the element is in view
    );

    if (msgRef.current) {
      observer.observe(msgRef.current);
    }

    return () => {
      if (msgRef.current) {
        observer.unobserve(msgRef.current);
      }
    };
  }, []);

  return (
    <div className={style.footer}>
      <div
        ref={msgRef}
        className={`${style.msg} ${isVisible ? style.typing : ""}`}
      >
        <p>If you loved my work, feel free to connect me.</p>
        <a href={`mailto:${mail_to}`} className={style.contactBtn}>
          Contact Me
          <i className="fas fa-paper-plane"></i>
        </a>
      </div>
      <p>
        &copy; 2024 by <b>Ashwini Kumar</b>. All Rights Reserved.
      </p>
    </div>
  );
}

export default Footer;

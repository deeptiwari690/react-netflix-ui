import { useState } from "react";
import { LanguagePicker } from "./LanguagePicker";
import type { FooterLink } from "../types";
import "./Footer.css";

const footerLinks: FooterLink[] = [
  { href: "https://help.netflix.com/support/412", label: "FAQ" },
  { href: "https://help.netflix.com", label: "Help Centre" },
  { href: "/youraccount", label: "Account" },
  { href: "https://media.netflix.com/", label: "Media Centre" },
  { href: "http://ir.netflix.com/", label: "Investor Relations" },
  { href: "https://jobs.netflix.com/jobs", label: "Jobs" },
  { href: "/watch", label: "Ways to Watch" },
  { href: "https://help.netflix.com/legal/termsofuse", label: "Terms of Use" },
  { href: "https://help.netflix.com/legal/privacy", label: "Privacy" },
  { href: "#", label: "Cookie Preferences" },
  { href: "https://help.netflix.com/legal/corpinfo", label: "Corporate Information" },
  { href: "https://help.netflix.com/contactus", label: "Contact Us" },
  { href: "https://fast.com", label: "Speed Test" },
  { href: "https://help.netflix.com/legal/notices", label: "Legal Notices" },
  { href: "https://www.netflix.com/in/browse/genre/839338", label: "Only on Netflix" },
];

export function Footer() {
  const [isDisclosureExpanded, setIsDisclosureExpanded] = useState(false);
  return (
    <footer className="o-section c-footer">
      <p className="c-footer__tagline">
        Questions? Call <a href="tel:000-800-919-1743">000-800-919-1743</a>
      </p>
      <p>Netflix India</p>
      <ul className="c-footer__links">
        {footerLinks.map(({ href, label }) => (
          <li key={href} className="c-footer__links-item">
            <a href={href}>{label}</a>
          </li>
        ))}
      </ul>
      <LanguagePicker id="footer-language-select" />
      <div className="c-footer__recaptcha-notice">
        <p>
          This page is protected by Google reCAPTCHA to ensure you're not a bot.&nbsp;
          {!isDisclosureExpanded && (
            <button
              className="c-footer__recaptcha-disclosure-trigger"
              type="button"
              aria-controls="recaptcha-disclosure"
              onClick={() => setIsDisclosureExpanded(true)}
            >
              Learn more.
            </button>
          )}
        </p>
        <p className="c-footer__recaptcha-disclosure" id="recaptcha-disclosure" data-expanded={isDisclosureExpanded}>
          The information collected by Google reCAPTCHA is subject to the Google
          <a href="https://policies.google.com/privacy" target="_blank">
            Privacy Policy
          </a>
          and
          <a href="https://policies.google.com/terms" target="_blank" rel="noopener noreferrer">
            Terms of Service
          </a>
          , and is used for providing, maintaining, and improving the reCAPTCHA service and for general security
          purposes (it is not used for personalized advertising by Google).
        </p>
      </div>
    </footer>
  );
}

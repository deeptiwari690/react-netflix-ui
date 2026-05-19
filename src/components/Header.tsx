import "./Header.css";
import { LanguagePicker } from "./LanguagePicker";

export function Header() {
  return (
    <header className="c-hero__header c-header">
      <svg className="c-header__logo c-site-logo" width={89} height={24} role="img" aria-label="Netflix">
        <use href="/icons.svg#icon-site-logo" />
      </svg>
      <div className="c-header__actions">
        <LanguagePicker id="header-language-select" />
        <a href="#" className="c-header__cta c-btn">
          Sign In
        </a>
      </div>
    </header>
  );
}

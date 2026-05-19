import "./CtaBar.css";

type CtaBarProps = {
  centered?: boolean;
  id: string;
};

export function CtaBar({ centered, id }: CtaBarProps) {
  return (
    <form className={`c-cta-bar${centered ? " c-cta-bar--centered" : ""}`} aria-labelledby={`${id}-title`} data-cta-bar>
      <h2 id={`${id}-title`} className="c-cta-bar__title">
        Ready to watch? Enter your email to create or restart your membership.
      </h2>
      <div className="c-cta-bar__actions">
        <div className="c-cta-bar__input">
          <label htmlFor={`${id}-email`} className="c-cta-bar__input-label">
            Email address
          </label>
          <input
            id={`${id}-email`}
            type="email"
            name="email"
            autoComplete="email"
            minLength={5}
            maxLength={50}
            required
            className="c-cta-bar__input-field"
            placeholder=""
          />
        </div>
        <button className="c-cta-bar__btn c-btn c-btn--lg" type="submit">
          Get Started
          <svg className="c-btn__icon" aria-hidden="true" width={24} height={24}>
            <use href="./icons.svg#icon-chevron-right" />
          </svg>
        </button>
      </div>
    </form>
  );
}

import "./LanguagePicker.css";

type LanguagePickerProps = {
  id: string;
};

export function LanguagePicker({ id }: LanguagePickerProps) {
  return (
    <div className="c-language-picker c-language-picker--compact">
      <label className="u-sr-only" htmlFor={id}>
        Select Language
      </label>
      <svg className="c-language-picker__language-icon" aria-hidden="true" width={16} height={16}>
        <use href="./icons.svg#icon-language-select" />
      </svg>
      <select className="c-language-picker__select" id={id} name="language_selected" defaultValue="en-IN">
        <option lang="en" label="English" value="en-IN">
          English
        </option>
        <option lang="hi" label="हिन्दी" value="hi-IN">
          हिन्दी
        </option>
      </select>
      <svg className="c-language-picker__caret-icon" aria-hidden="true" width={16} height={16}>
        <use href="./icons.svg#icon-caret-down" />
      </svg>
    </div>
  );
}

import { useState } from "react";
import "./FaqAccordionItem.css";

type FaqItemProps = {
  question: string;
  answer: string;
  id: string;
};

export function FaqAccordionItem({ question, answer, id }: FaqItemProps) {
  const [isExpanded, setIsExpanded] = useState(false);
  return (
    <li className="c-faq-accordion__item">
      <h3 className="c-faq-accordion__question">
        <button
          className="c-faq-accordion__toggle"
          type="button"
          aria-expanded={isExpanded}
          aria-controls={`${id}-answer`}
          onClick={() => setIsExpanded(!isExpanded)}
        >
          {question}
          <svg className="c-faq-accordion__icon" width={36} height={36} aria-hidden="true">
            <use href="/icons.svg#icon-plus" />
          </svg>
        </button>
      </h3>
      <p className="c-faq-accordion__answer" id={`${id}-answer`} data-expanded={isExpanded}>
        {answer}
      </p>
    </li>
  );
}

import "./ValuePropsCard.css";

type ValuePropsCardProps = {
  title: string;
  description: string;
  icon: string;
};

export function ValuePropsCard({ title, description, icon }: ValuePropsCardProps) {
  return (
    <div className="c-value-props__card">
      <div className="c-value-props__content">
        <h3 className="c-value-props__card-title">{title}</h3>
        <p className="c-value-props__card-description">{description}</p>
      </div>
      <svg className="c-value-props__icon" width={72} height={72} aria-hidden="true">
        <use href={`/icons.svg#${icon}`} />
      </svg>
    </div>
  );
}

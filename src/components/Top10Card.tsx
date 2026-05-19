import "./Top10Card.css";

type Top10CardProps = {
  rank: number;
  poster: string;
  label: string;
};

export function Top10Card({ rank, poster, label }: Top10CardProps) {
  return (
    <button className="c-top-10__btn" type="button">
      <div className="c-top-10__poster" style={{ backgroundImage: `url(./posters/${poster}.webp)` }}>
        <span className="u-sr-only">{label}</span>
      </div>
      <span className="c-top-10__rank" data-content={rank}>
        {rank}
      </span>
    </button>
  );
}

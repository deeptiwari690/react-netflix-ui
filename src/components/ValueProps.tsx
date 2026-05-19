import { ValuePropsCard } from "./ValuePropsCard";
import type { ValuePropsItem } from "../types";

const valuePropsItems: ValuePropsItem[] = [
  {
    title: "Enjoy on your TV",
    description: "Watch on smart TVs, PlayStation, Xbox, Chromecast, Apple TV, Blu-ray players and more.",
    icon: "icon-television",
  },
  {
    title: "Download your shows to watch offline",
    description: "Save your favorites easily and always have something to watch.",
    icon: "icon-download",
  },
  {
    title: "Watch everywhere",
    description: "Stream unlimited movies and TV shows on your phone, tablet, laptop, and TV.",
    icon: "icon-telescope",
  },
  {
    title: "Create profiles for kids",
    description:
      "Send kids on adventures with their favourite characters in a space made just for them — free with your membership.",
    icon: "icon-profiles",
  },
];

export function ValueProps() {
  return (
    <section className="o-section c-value-props" aria-labelledby="value-props-title">
      <h2 className="c-value-props__title" id="value-props-title">
        More reasons to join
      </h2>
      <div className="c-value-props__wrapper">
        {valuePropsItems.map((item) => (
          <ValuePropsCard key={item.title} {...item} />
        ))}
      </div>
    </section>
  );
}
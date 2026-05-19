import { useRef, useState } from "react";
import type { SwiperRef } from "swiper/react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Top10Card } from "./Top10Card";
import type { Top10Item } from "../types";
import "swiper/css";
import "./Top10.css";

const top10Items: Top10Item[] = [
  {
    rank: 1,
    poster: "dhurandhar",
    label: "Dhurandhar",
  },
  {
    rank: 2,
    poster: "taskari",
    label: "Taskari",
  },
  {
    rank: 3,
    poster: "tere-ishk-mein",
    label: "Tere ishk mein",
  },
  {
    rank: 4,
    poster: "the-great-indian-kapil-show",
    label: "The great indian kapil show",
  },
  {
    rank: 5,
    poster: "koharra",
    label: "Koharra",
  },
  {
    rank: 6,
    poster: "with-love",
    label: "With love",
  },
  {
    rank: 7,
    poster: "war-machine",
    label: "War machine",
  },
  {
    rank: 8,
    poster: "stranger-things",
    label: "Stranger things",
  },
  {
    rank: 9,
    poster: "jolly-llb3",
    label: "Jolly llb3",
  },
  {
    rank: 10,
    poster: "one-piece",
    label: "One piece",
  },
];

export function Top10() {
  const [isBeginning, setIsBeginning] = useState(true);
  const [isEnd, setIsEnd] = useState(false);
  const swiperRef = useRef<SwiperRef>(null);
  return (
    <section className="o-section c-top-10" aria-labelledby="top-10-title">
      <h2 className="c-top-10__title" id="top-10-title">
        Trending Now
      </h2>
      <div className="c-top-10__viewport">
        <button
          className="c-top-10__control c-top-10__control--prev"
          onClick={() => swiperRef.current?.swiper.slidePrev()}
          disabled={isBeginning}
        >
          <svg className="c-top-10__control-icon" aria-hidden="true" width={24} height={24}>
            <use href="/icons.svg#icon-chevron-left" />
          </svg>
        </button>
        <Swiper
          ref={swiperRef}
          slidesPerView="auto"
          slidesPerGroupAuto
          speed={500}
          grabCursor
          onSwiper={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
          onSlideChange={(swiper) => {
            setIsBeginning(swiper.isBeginning);
            setIsEnd(swiper.isEnd);
          }}
        >
          {top10Items.map((item) => (
            <SwiperSlide key={item.rank}>
              <Top10Card {...item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          className="c-top-10__control c-top-10__control--next"
          onClick={() => swiperRef.current?.swiper.slideNext()}
          disabled={isEnd}
        >
          <svg className="c-top-10__control-icon" aria-hidden="true" width={24} height={24}>
            <use href="/icons.svg#icon-chevron-right" />
          </svg>
        </button>
      </div>
    </section>
  );
}

import React, { useState } from "react";
import { useMedia } from "react-media";
import { Carousel } from "react-bootstrap";

import { getCarousleItemsAmount, calculateCardsPerPage } from "utils/carousel";
import Card from "components/Card/Card";
import offers from "offers.json";

import "./CarouselWrapper.scss";

const GLOBAL_MEDIA_QUERIES = {
  small: "(max-width: 768px)",
  medium: "(min-width: 768px) and (max-width: 1919px)",
  large: "(min-width: 1919px)",
};

export default function CarouselWrapper() {
  const [index, setIndex] = useState(0);
  const handleSelect = (selectedIndex, e) => setIndex(selectedIndex);
  const matches = useMedia({ queries: GLOBAL_MEDIA_QUERIES });

  const numberOfItems = getCarousleItemsAmount(matches);
  const cardsPerPage = calculateCardsPerPage(numberOfItems);

  const items = Array.from({ length: numberOfItems });
  const cards = offers.map((offer, index) => <Card key={index} data={offer} />);

  return (
    <Carousel
      activeIndex={index}
      onSelect={handleSelect}
      slide={true}
      interval={500000}
      fade={false}
    >
      {items.map((_, index) => {
        return (
          <Carousel.Item key={index}>
            <div className="carousel-item-wrapper">
              {Array.from({ length: cardsPerPage }).map(() => cards.shift())}
            </div>
          </Carousel.Item>
        );
      })}
    </Carousel>
  );
}

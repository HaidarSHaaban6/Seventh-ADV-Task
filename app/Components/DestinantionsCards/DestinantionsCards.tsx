"use client";
import React, { useState, useEffect } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";
import Image from "next/image";
import { StaticImageData } from "next/image";

interface CardsDataProps {
  imgSrc: string | StaticImageData;
  price: React.ReactNode;
  title: string;
  infoChild: React.ReactNode;
  description: string;
}

interface DestinantionsCardsProps {
  cardsData: CardsDataProps[];
}

const DestinantionsCards: React.FC<DestinantionsCardsProps> = ({
  cardsData,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Update the number of cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(4); // lg
      else if (window.innerWidth >= 500) setCardsToShow(2);
      else setCardsToShow(1); // smaller screens
    };

    updateCardsToShow(); // Initial check
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Visible cards based on current startIndex
  const visibleCards = cardsData.slice(startIndex, startIndex + cardsToShow);

  // Handler to navigate to the previous card
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Handler to navigate to the next card
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, cardsData.length - cardsToShow)
    );
  };

  return (
    <div className="max-w-[1419px] mx-auto px-[40px]">
      <div className="flex justify-between items-center pt-[120px] mb-[57px]">
        <h2 className="text-[32px] font-extrabold">
          Explore Our Popular Destinations
        </h2>
        <div className="flex items-center gap-5">
          <button
            onClick={handlePrev}
            className="w-[50px] h-[50px] text-dark-gray rounded-full bg-light-gray flex justify-center items-center hover:cursor-pointer hover:bg-pumpkin-orange hover:text-white transition-colors duration-300 ease-in-out"
            disabled={startIndex === 0}
          >
            <IoIosArrowBack />
          </button>
          <button
            onClick={handleNext}
            className="w-[50px] h-[50px] text-dark-gray rounded-full bg-light-gray flex justify-center items-center hover:cursor-pointer hover:bg-pumpkin-orange hover:text-white transition-colors duration-300 ease-in-out"
            disabled={startIndex + cardsToShow >= cardsData.length}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="grid lg:grid-cols-4 gap-[33px] grid-cols-1 screen:grid-cols-2">
        {visibleCards.map((cardItem, index) => (
          <div key={index}>
            <Image
              src={cardItem.imgSrc}
              alt={cardItem.title}
              className="w-full h-[404px] object-cover rounded-3xl"
            />
            <h2 className="text-2xl font-semibold mt-4">{cardItem.title}</h2>
            {cardItem.price}
            {cardItem.infoChild}
            <p className="mt-3">{cardItem.description}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DestinantionsCards;

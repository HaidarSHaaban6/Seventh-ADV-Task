"use client";
import Image, { StaticImageData } from "next/image";
import React, { useEffect, useState } from "react";
import { FaQuoteLeft, FaQuoteRight } from "react-icons/fa";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface customersDataType {
  user_image: string | StaticImageData;
  user_name: string;
  comment: string;
}

interface customersDataProps {
  customersData: customersDataType[];
}

const CustomersComponent: React.FC<customersDataProps> = ({
  customersData,
}) => {
  const [startIndex, setStartIndex] = useState(0);
  const [cardsToShow, setCardsToShow] = useState(1);

  // Update the number of cards to show based on screen size
  useEffect(() => {
    const updateCardsToShow = () => {
      if (window.innerWidth >= 1024) setCardsToShow(2); // lg
      else setCardsToShow(1); // smaller screens
    };

    updateCardsToShow(); // Initial check
    window.addEventListener("resize", updateCardsToShow);

    return () => window.removeEventListener("resize", updateCardsToShow);
  }, []);

  // Visible cards based on current startIndex
  const visibleCards = customersData.slice(
    startIndex,
    startIndex + cardsToShow
  );

  // Handler to navigate to the previous card
  const handlePrev = () => {
    setStartIndex((prevIndex) => Math.max(prevIndex - 1, 0));
  };

  // Handler to navigate to the next card
  const handleNext = () => {
    setStartIndex((prevIndex) =>
      Math.min(prevIndex + 1, customersData.length - cardsToShow)
    );
  };

  return (
    <div className="max-w-[1420px] mx-auto mb-40 px-[40px] 2xl:px-0">
      <div className="flex items-center justify-between mb-[60px]">
        <h2 className="text-[32px] font-extrabold text-dark-gray">
          Happy Customers Says
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
            disabled={startIndex + cardsToShow >= customersData.length}
          >
            <IoIosArrowForward />
          </button>
        </div>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
        {visibleCards.map((item, index) => (
          <div key={index} className="border rounded-3xl p-[30px]">
            <Image
              src={item.user_image}
              alt={item.user_name}
              className="w-20 h-20 mx-auto mb-[15px]"
            />
            <p className="text-lg w-fit mx-auto text-dark-gray">
              {item.user_name}
            </p>
            <p className="text-lg text-dark-gray relative leading-[30px] mb-[30px]">
              <FaQuoteRight className="w-10 h-7 text-pumpkin-orange/15 mb-[10px]" />
              {item.comment}
              <FaQuoteRight className="w-10 h-7 text-pumpkin-orange/15 absolute right-0 mt-[10px]" />
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CustomersComponent;

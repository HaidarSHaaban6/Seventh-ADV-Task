"use client";
import React, { useEffect, useRef, useState } from "react";
import CustomDropdown from "../DropDownComponent/DropDownComponent";
import { FaAngleDown, FaCalendarAlt } from "react-icons/fa";

interface servicesDataArrayProps {
  servicesDataArray: string[];
}

const FormComponent: React.FC<servicesDataArrayProps> = ({
  servicesDataArray,
}) => {
  const [selectedOption, setSelectedOption] = useState<string>(
    servicesDataArray[0]
  );
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  return (
    <form className="lg:w-[734px] w-full bg-white/25 rounded-3xl px-[34px] py-[30px] mb-[60px]">
      <div className="grid sm:grid-cols-2 grid-cols-1 sm:gap-[30px] gap-2">
        <div>
          <label htmlFor="name" className="font-semibold text-lg mb-2">
            Name and Surname
          </label>
          <input
            type="text"
            id="name"
            className="w-full h-[50px] placeholder:text-dark-gray placeholder:text-sm sm:placeholder:text-base rounded-lg pl-6 mt-2"
            placeholder="Enter your name and surname"
          />
        </div>
        <div>
          <label htmlFor="email" className="font-semibold text-lg mb-2">
            Email Address
          </label>
          <input
            type="email"
            id="email"
            className="w-full h-[50px] placeholder:text-dark-gray rounded-lg pl-6 placeholder:text-sm sm:placeholder:text-base mt-2"
            placeholder="Enter your email address"
          />
        </div>
        <div>
          <label htmlFor="telephone" className="font-semibold text-lg">
            Telephone Number
          </label>
          <input
            type="number"
            id="telephone"
            className="w-full h-[50px] placeholder:text-dark-gray placeholder:text-sm sm:placeholder:text-base rounded-lg pl-6 mt-2"
            placeholder="Enter your telephone number"
          />
        </div>
        <div>
          <label htmlFor="serviceType" className="font-semibold text-lg">
            Service Type
          </label>
          <div
            className="relative bg-white rounded-lg px-6 h-[50px] mt-2"
            ref={dropdownRef}
            aria-expanded={isOpen}
            aria-controls="service-type-options"
          >
            <div
              onClick={toggleDropdown}
              className="bg-transparent cursor-pointer text-sm sm:text-base flex items-center text-dark-gray justify-between h-full"
            >
              {selectedOption}
              <FaAngleDown />
            </div>
            {isOpen && (
              <div
                id="service-type-options"
                className="absolute z-10 rounded-md shadow-2xl w-11/12 text-sm sm:text-base"
              >
                {servicesDataArray.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => handleOptionClick(option)}
                    className="hover:bg-gray-200 px-5 py-3 cursor-pointer text-dark-gray bg-white"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
        <div>
          <label
            htmlFor="date"
            className="font-semibold text-lg cursor-pointer"
          >
            Date
          </label>
          <input
            type="date"
            id="date"
            className="w-full h-[50px] placeholder:text-dark-gray rounded-lg px-6 mt-2"
            lang="en"
          />
        </div>
        <div>
          <label
            htmlFor="time"
            className="font-semibold text-lg cursor-pointer"
          >
            Time
          </label>
          <input
            type="time"
            id="time"
            className="w-full h-[50px] placeholder:text-dark-gray rounded-lg px-6 mt-2"
            lang="en"
          />
        </div>
      </div>
      <button className="text-white bg-pumpkin-orange text-xl font-semibold w-[212px] h-[47px] rounded-[50px] mx-auto block mt-[30px]">
        Book Now
      </button>
    </form>
  );
};

export default FormComponent;

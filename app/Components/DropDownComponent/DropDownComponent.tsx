"use client";
import React, { useState, useRef, useEffect } from "react";
import { FaAngleDown } from "react-icons/fa";

interface CustomDropdownProps {
  options: string[];
  custom: boolean;
}

const CustomDropdown: React.FC<CustomDropdownProps> = ({ options, custom }) => {
  const [selectedOption, setSelectedOption] = useState<string>(options[0]);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const [screenHeight, setScreenHeight] = useState<number>(window.innerHeight);
  const [scrollY, setScrollY] = useState<number>(0);

  const toggleDropdown = () => setIsOpen(!isOpen);

  const handleOptionClick = (option: string) => {
    setSelectedOption(option);
    setIsOpen(false);
  };

  useEffect(() => {
    // Function to handle clicks outside the dropdown
    const handleClickOutside = (event: MouseEvent) => {
      if (
        dropdownRef.current &&
        !dropdownRef.current.contains(event.target as Node)
      ) {
        setIsOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);

    return () =>
      document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  useEffect(() => {
    const handleScreenResize = () => {
      setScreenHeight(window.innerHeight);
    };

    const handleScroll = () => {
      setScrollY(window.scrollY);
    };

    window.addEventListener("resize", handleScreenResize);
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("resize", handleScreenResize);
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className="relative" ref={dropdownRef}>
      <div
        onClick={toggleDropdown}
        className={`p-2 cursor-pointer flex items-center ${
          custom ? "text-gray-500 text-lg" : "text-white text-xl font-semibold"
        }`}
      >
        {selectedOption}
        <FaAngleDown />
      </div>
      {isOpen && (
        <div
          className={`absolute z-10 mt-1 rounded-md shadow-2xl 
          ${scrollY > 0 ? "bg-white" : custom ? "bg-white" : "bg-transparent"}`}
        >
          {options.map((option, index) => (
            <div
              key={index}
              onClick={() => handleOptionClick(option)}
              className={`px-5 py-3 cursor-pointer ${
                custom || scrollY > 0 ? "text-gray-500" : "text-white font-semibold text-xl"
              } hover:bg-gray-200`}
            >
              {option}
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default CustomDropdown;

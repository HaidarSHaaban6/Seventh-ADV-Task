import Image, { StaticImageData } from "next/image";
import Link from "next/link";
import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaPhoneAlt,
  FaTwitter,
} from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { MdEmail } from "react-icons/md";

interface FooterProps {
  logo: string | StaticImageData;
}

const FooterComponent: React.FC<FooterProps> = ({ logo }) => {
  const footerColOne = [
    { link: "#", text: "Bike and Rickshaw rental" },
    { link: "#", text: "Guided Tours of Lucca" },
    { link: "#", text: "Guided Bike Tour of Lucca" },
    { link: "#", text: "Trip In The Tuscan Hills" },
    { link: "#", text: "Transportation With Luxury Cars" },
    { link: "#", text: "Wine Tours By Bus With Guide" },
  ];

  const footerColTwo = [
    { path: "/", text: "Home" },
    { path: "/aboutus", text: "About Us" },
    { path: "/tourpackages", text: "Tour Packages" },
  ];

  const footerColThree = [
    { link: "#", text: "Terms of Use" },
    { link: "#", text: "Provicy Policy" },
  ];

  const footerCOlFour = [
    {
      link: "#",
      text: (
        <p className="flex items-center">
          <span>
            <FaLocationDot className="text-pumpkin-orange text-2xl mr-[10px]" />
          </span>
          Piazza Napoleone, Lucca, Tuscany
        </p>
      ),
    },
    {
      link: "tel:+39 346 368 5708",
      text: (
        <p className="flex items-center">
          <span>
            <FaPhoneAlt className="text-pumpkin-orange text-2xl mr-[10px]" />
          </span>
          +39 346 368 5708
        </p>
      ),
    },
    {
      link: "mailto:italiainlimo@gmail.com",
      text: (
        <p className="flex items-center">
          <span>
            <MdEmail className="text-pumpkin-orange text-2xl mr-[10px]" />
          </span>
          italiainlimo@gmail.com
        </p>
      ),
    },
  ];

  const footerColFive = [
    { link: "#", icon: <FaTwitter className="text-dark-gray" /> },
    { link: "#", icon: <FaFacebookF className="text-dark-gray" /> },
    { link: "#", icon: <FaInstagram className="text-dark-gray" /> },
  ];

  return (
    <div className="bg-dark-gray">
      <div className="max-w-[1420px] mx-auto pt-10 2xl:px-0 px-[40px]">
        <Image
          src={logo}
          alt="Logo"
          className="mb-[33px] w-[133px] h-[130px]"
        />
        <div className="grid border-t border-b py-[33px] xl:grid-cols-5 lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 mb-[33px] gap-y-5">
          <ul className="text-white">
            <li className="font-extrabold text-xl mb-5">Services</li>
            {footerColOne.map((item, index) => (
              <li key={index} className="font-semibold text-lg mb-[10px]">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>

          <ul className="text-white">
            <li className="font-extrabold text-xl mb-5">Home</li>
            {footerColTwo.map((item, index) => (
              <li key={index} className="font-semibold text-lg mb-[10px]">
                <Link href={item.path}>{item.text}</Link>
              </li>
            ))}
          </ul>

          <ul className="text-white">
            <li className="font-extrabold text-xl mb-5">Help</li>
            {footerColThree.map((item, index) => (
              <li key={index} className="font-semibold text-lg mb-[10px]">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>

          <ul className="text-white">
            <li className="font-extrabold text-xl mb-5">Contacts</li>
            {footerCOlFour.map((item, index) => (
              <li key={index} className="font-semibold text-lg mb-[10px]">
                <a href={item.link}>{item.text}</a>
              </li>
            ))}
          </ul>

          <ul className="text-white">
            <li className="font-extrabold text-xl mb-5 w-fit xl:mx-auto">
              Social Media
            </li>
            <ul className="flex items-center gap-[20px] w-fit xl:mx-auto">
              {footerColFive.map((item, index) => (
                <li key={index} className="font-semibold text-2xl mb-[10px]">
                  <a
                    className="w-[43.75px] h-[43.75px] rounded-full bg-pumpkin-orange flex justify-center items-center"
                    href={item.link}
                  >
                    {item.icon}
                  </a>
                </li>
              ))}
            </ul>
          </ul>
        </div>
        <p className="text-white w-fit mx-auto pb-10">
          Copyright © 2022. All rights reserved.
        </p>
      </div>
    </div>
  );
};

export default FooterComponent;

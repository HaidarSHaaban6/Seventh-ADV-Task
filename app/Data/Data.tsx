import {
  IoCalendarOutline,
  IoCarSportOutline,
  IoEarthSharp,
} from "react-icons/io5";
import { GrGroup } from "react-icons/gr";
import { CiCalendarDate, CiClock2 } from "react-icons/ci";
import { LiaFontAwesomeFlag } from "react-icons/lia";
import TapContent from "./../Components/TapContent/TapContent";
import destCard1 from "@/public/img/destCard1.png";
import destCard2 from "@/public/img/destCard2.png";
import destCard3 from "@/public/img/destCard3.png";
import destCard4 from "@/public/img/destCard4.png";
import transportImageOne from "@/public/img/transportImg1.png";
import transportImageTwo from "@/public/img/transportImg2.png";
import transportImageThree from "@/public/img/transportImg3.png";
import transportImageFour from "@/public/img/transportImg4.png";
import packageImg1 from "@/public/img/packages1.png";
import packageImg2 from "@/public/img/package2.png";
import packageImg3 from "@/public/img/package3.png";
import packageImg4 from "@/public/img/package4.png";
import userImg from "@/public/img/userImg.png";
import {
  FaBottleWater,
  FaLocationDot,
  FaMapLocationDot,
} from "react-icons/fa6";
import { BiCycling, BiSolidDiscount } from "react-icons/bi";
import { TfiHeadphoneAlt } from "react-icons/tfi";
import { FaAward, FaBusAlt, FaUserTie } from "react-icons/fa";
import { HiOutlineTicket } from "react-icons/hi";
import { TbFriends, TbMapRoute } from "react-icons/tb";
import { PiHandCoinsBold, PiHandCoinsLight } from "react-icons/pi";
import { GiBodyBalance } from "react-icons/gi";

// NavBar Variables
export const webLang = ["Eng", "Ar", "Fr", "Es", "De", "Ru"];

export const liContent = [
  { list: "Home", path: "/" },
  { list: "About Us", path: "/aboutus" },
  { list: "Tour Packages", path: "/tourpackages" },
  { list: "Contact Us", path: "/contactus" },
];

// Tabs Data
export const tabs = [
  {
    id: 1,
    label: (
      <h5 className="flex items-center">
        <IoEarthSharp className="mr-2" /> Public Tours
      </h5>
    ),
    content: <TapContent />,
  },
  {
    id: 2,
    label: (
      <h5 className="flex items-center">
        <GrGroup className="mr-3" /> Public Tours
      </h5>
    ),
    content: <TapContent />,
  },
];

// Destinantions Cards Data
export const destCardData = [
  {
    imgSrc: destCard1,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Lucca Bike Tour",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> EVERY DAY
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 3-10 PP
        </p>
      </div>
    ),
    description:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    imgSrc: destCard2,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Wine tasting In Tuscany",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> MONDAY
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 10-30 PP
        </p>
      </div>
    ),
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    imgSrc: destCard3,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Cinque Terre Tour",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> TO BE DECIDED
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 10-50 PP
        </p>
      </div>
    ),
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    imgSrc: destCard4,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Siena and Surroundings",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> TO BE DECIDED
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 5-10 PP
        </p>
      </div>
    ),
    description:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
  },
  {
    imgSrc: destCard1,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Lucca Bike Tour",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> EVERY DAY
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 3-10 PP
        </p>
      </div>
    ),
    description:
      "A tour of the city and its surroundings led by a professional guide ...",
  },
  {
    imgSrc: destCard2,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Wine tasting In Tuscany",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> MONDAY
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 10-30 PP
        </p>
      </div>
    ),
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    imgSrc: destCard3,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Cinque Terre Tour",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> TO BE DECIDED
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 10-50 PP
        </p>
      </div>
    ),
    description:
      "The real magic is here where you can enjoy the best Tuscan wine and eat ...",
  },
  {
    imgSrc: destCard4,
    price: (
      <p className="text-lg my-3">
        from
        <span className="text-pumpkin-orange font-extrabold text-2xl inline-block ml-2">
          34 €
        </span>
      </p>
    ),
    title: "Siena and Surroundings",
    infoChild: (
      <div className="flex justify-between items-center text-pumpkin-orange">
        <p className="flex items-center">
          <IoCalendarOutline className="mr-2" /> TO BE DECIDED
        </p>
        <p className="flex items-center">
          <GrGroup className="mr-2" /> 5-10 PP
        </p>
      </div>
    ),
    description:
      "Visit the beautiful Siena and the cities that surround it to experience ...",
  },
];

// Tap Content Data
export const tapContentData = [
  {
    label: (
      <h5 className="flex items-center font-bold text-lg">
        <GrGroup className="mr-2 text-2xl" />
        Number of people
      </h5>
    ),
    data: ["Choose number", 1, 2, 4, 10],
  },
  {
    label: (
      <h5 className="flex items-center font-bold text-lg">
        <IoCalendarOutline className="mr-2 text-2xl" /> Date
      </h5>
    ),
    data: [
      "Choose Date",
      "Saturday, November 19, 2024",
      "Sunday, October 30, 2024",
      "Monday, November 10, 2024",
      "Saturday, November 2, 2024",
    ],
  },
  {
    label: (
      <h5 className="flex items-center font-bold text-lg">
        <CiClock2 className="mr-2 text-2xl" /> Time
      </h5>
    ),
    data: ["Choose Time", "14:30", "10:00", "12:50", "10:50"],
  },
  {
    label: (
      <h5 className="flex items-center font-bold text-lg">
        <LiaFontAwesomeFlag className="mr-2 text-2xl" />
        Tour
      </h5>
    ),
    data: ["Select Tour", "Rome", "Serengeti", "Kyoto", "Paris", "Las Vegas"],
  },
  {
    label: (
      <h5 className="flex items-center font-bold text-lg">
        <IoCarSportOutline className="mr-2 text-2xl" />
        Transportation
      </h5>
    ),
    data: [
      "Select Transportation",
      "Bicycle",
      "Private Car",
      "Long-Distance Bus",
      "Helicopter Transfers",
      "Private Yacht",
      "Scooter",
    ],
  },
];

// Transport Section Data
export const transportData = [
  {
    img: transportImageThree,
    title: "Bus Package",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    img: transportImageFour,
    title: "Taxi and NCC service",
    description:
      "Do you need not only a bike but also a driver? Then you have found the right place!",
  },
  {
    img: transportImageTwo,
    title: "Guided tour of the countryside",
    description:
      "Live the real Luchese experience by visiting the suburbs by bike!",
  },
  {
    img: transportImageOne,
    title: "Bike and rickshaw rental",
    description: "Book your quality vehicle quickly for an hour or all day!",
  },
];

// Services Data
export const servicesDataArray = [
  "Select the service types",
  "Flight Booking",
  "Hotel Reservations",
  "Car Rentals",
  "Tour Packages",
];

// Packages Data
export const PackagesData = [
  {
    img: packageImg4,
    title: "BIKE / RICKSHAW",
    price: (
      <p className="text-lg text-dark-gray mb-4 relative ml-3">
        <span className="absolute top-[-16px] left-[-11px]">€</span>
        <span className="text-[48px] font-bold text-pumpkin-orange">10</span>
        /day
      </p>
    ),
    dataList: (
      <ul className="text-lg text-dark-gray">
        <li className="flex">
          <CiCalendarDate className="text-pumpkin-orange text-2xl mr-4" />
          Your bike for a day
        </li>
        <li className="flex mt-8">
          <FaMapLocationDot className="text-pumpkin-orange text-2xl mr-4" />
          City App
        </li>
        <li className="flex mt-8">
          <BiSolidDiscount className="text-pumpkin-orange text-2xl mr-4" />
          Discount on Rickshaw
        </li>
        <li className="flex mt-8">
          <TfiHeadphoneAlt className="text-pumpkin-orange text-2xl mr-4" />
          Guaranteed Support
        </li>
      </ul>
    ),
  },
  {
    img: packageImg3,
    title: "BIKE TOURS",
    price: (
      <p className="text-lg text-dark-gray mb-4 relative ml-3">
        <span className="absolute top-[-16px] left-[-11px]">€</span>
        <span className="text-[48px] font-bold text-pumpkin-orange">30</span>
        /day
      </p>
    ),
    dataList: (
      <ul className="text-lg text-dark-gray">
        <li className="flex">
          <BiCycling className="text-pumpkin-orange text-2xl mr-4" />A Mountain
          Bike Included
        </li>
        <li className="flex mt-8">
          <FaUserTie className="text-pumpkin-orange text-2xl mr-4" />A Guide For
          You
        </li>
        <li className="flex mt-8">
          <FaBottleWater className="text-pumpkin-orange text-2xl mr-4" />
          Bottle of water
        </li>
        <li className="flex mt-8">
          <TfiHeadphoneAlt className="text-pumpkin-orange text-2xl mr-4" />
          Guaranteed Support
        </li>
      </ul>
    ),
  },
  {
    img: packageImg2,
    title: "BUS TRIPS",
    price: (
      <p className="text-lg text-dark-gray mb-4 relative ml-3">
        <span className="absolute top-[-16px] left-[-11px]">€</span>
        <span className="text-[48px] font-bold text-pumpkin-orange">45</span>
        /day
      </p>
    ),
    dataList: (
      <ul className="text-lg text-dark-gray">
        <li className="flex">
          <HiOutlineTicket className="text-pumpkin-orange text-2xl mr-4" />
          Park ticket
        </li>
        <li className="flex mt-8">
          <FaBusAlt className="text-pumpkin-orange text-2xl mr-4" />
          Return bus
        </li>
        <li className="flex mt-8">
          <TbFriends className="text-pumpkin-orange text-2xl mr-4" />
          Companion
        </li>
        <li className="flex mt-8">
          <TfiHeadphoneAlt className="text-pumpkin-orange text-2xl mr-4" />
          Guaranteed Support
        </li>
      </ul>
    ),
  },
  {
    img: packageImg1,
    title: "TRANSFER",
    price: (
      <p className="text-lg text-dark-gray mb-4 relative ml-3">
        <span className="absolute top-[-16px] left-[-11px]">€</span>
        <span className="text-[48px] font-bold text-pumpkin-orange">10</span>
        /day
      </p>
    ),
    dataList: (
      <ul className="text-lg text-dark-gray">
        <li className="flex">
          <FaUserTie className="text-pumpkin-orange text-2xl mr-4" />
          Personal Driver
        </li>
        <li className="flex mt-8">
          <FaLocationDot className="text-pumpkin-orange text-2xl mr-4" />
          Wherever You Want
        </li>
        <li className="flex mt-8">
          <PiHandCoinsLight className="text-pumpkin-orange text-2xl mr-4" />
          At the best price
        </li>
        <li className="flex mt-8">
          <TfiHeadphoneAlt className="text-pumpkin-orange text-2xl mr-4" />
          Guaranteed Support
        </li>
      </ul>
    ),
  },
];

// Customers Data
export const customersData = [
  {
    user_image: userImg,
    user_name: "Lyod Gomez",
    comment:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes, or avoids pleasure itself, because it is pleasure",
  },
  {
    user_image: userImg,
    user_name: "Lyod Gomez",
    comment:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness.",
  },
  {
    user_image: userImg,
    user_name: "Lyod Gomez",
    comment:
      "But I must explain to you how all this mistaken idea of denouncing pleasure and praising pain was born and I will give you a complete account of the system, and expound the actual teachings of the great explorer of the truth, the master-builder of human happiness. No one rejects, dislikes.",
  },
];

// Award Section Data
export const awardData = [
  {
    icon: <TbMapRoute className="text-6xl text-pumpkin-orange" />,
    text: "Complete Packages For All Your Wishes",
  },
  {
    icon: <FaAward className="text-6xl text-pumpkin-orange" />,
    text: "Over 30 Years Of Experience",
  },
  {
    icon: <GiBodyBalance className="text-6xl text-pumpkin-orange" />,
    text: "Expert Guides For You",
  },
  {
    icon: <PiHandCoinsBold className="text-6xl text-pumpkin-orange" />,
    text: "Guaranteed fun at the best price!f",
  },
];

"use client";
import type { StaticImageData } from "next/image";
import Image from "next/image";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CustomDropdown from "../DropDownComponent/DropDownComponent";
import { FaBarsStaggered } from "react-icons/fa6";
import { FaTimes } from "react-icons/fa";
import { FcGoogle } from "react-icons/fc";

interface MenuItem {
  list: string;
  path: string;
}

interface NavBarComponentProps {
  img: StaticImageData | string;
  webLang: string[];
  liContent: MenuItem[];
}

const NavBarComponent: React.FC<NavBarComponentProps> = ({
  img,
  webLang,
  liContent,
}) => {
  const [screenWidth, setScreenWidth] = useState<number>(window.innerWidth);
  const [showToggle, setShowToggle] = useState<boolean>(false);
  const [customNavBar, setCustomNavBar] = useState<boolean>(false);
  const [showSignUpPopup, setShowSignUpPopup] = useState<boolean>(false);
  const [showLogInPopup, setShowLogInPopup] = useState<boolean>(false);

  useEffect(() => {
    const handleScreenWidth = () => {
      const width = window.innerWidth;
      setScreenWidth(width);
      if (width > 1050) {
        setShowToggle(false);
      }
    };

    window.addEventListener("resize", handleScreenWidth);

    return () => {
      window.removeEventListener("resize", handleScreenWidth);
    };
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      if (!showToggle) {
        setCustomNavBar(window.scrollY > 100);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [showToggle]);

  const toggleMenu = () => {
    setShowToggle((prev) => !prev);
    if (!showToggle) {
      setCustomNavBar(true);
    } else if (window.scrollY <= 100) {
      setCustomNavBar(false);
    }
  };

  const handleSignUpClick = () => {
    setShowSignUpPopup(true);
  };

  const closeSignUpPopup = () => {
    setShowSignUpPopup(false);
  };

  const handleLogInClick = () => {
    setShowLogInPopup(true);
  };

  const closeLogInPopup = () => {
    setShowLogInPopup(false);
  };

  return (
    <>
      <nav
        className={`md:fixed sticky top-0 w-full z-50 transition-colors duration-300 h-[170px] ${
          customNavBar
            ? "bg-pumpkin-orange"
            : "md:bg-transparent bg-pumpkin-orange"
        }`}
      >
        <div className="max-w-[1420px] mx-auto flex justify-between items-center h-full px-4">
          <Image
            src={img}
            alt="Logo"
            width={100}
            height={100}
            className="mt-5"
          />
          <div className="flex xl:gap-[167px] gap-16 items-center">
            {screenWidth >= 1050 && (
              <ul className="flex gap-10 font-semibold text-xl text-white">
                {liContent.map((liItem, index) => (
                  <li key={index}>
                    <Link href={liItem.path}>{liItem.list}</Link>
                  </li>
                ))}
              </ul>
            )}
            <div className="flex items-center">
              <CustomDropdown options={webLang} custom={false} />
              {screenWidth >= 1050 && (
                <>
                  <button
                    className="text-white text-xl font-semibold px-3"
                    onClick={handleLogInClick}
                  >
                    Login
                  </button>
                  <button
                    onClick={handleSignUpClick}
                    className={`text-xl font-semibold ${
                      customNavBar
                        ? "bg-white text-pumpkin-orange"
                        : "md:bg-pumpkin-orange md:text-white bg-white text-pumpkin-orange"
                    } w-[168px] h-[47px] rounded-[50px]`}
                  >
                    Sign Up
                  </button>
                </>
              )}
              {screenWidth < 1050 && (
                <button
                  className="text-white text-3xl ml-5"
                  onClick={toggleMenu}
                >
                  {showToggle ? <FaTimes /> : <FaBarsStaggered />}
                </button>
              )}
            </div>
          </div>
        </div>
        <div
          className={`fixed top-[170px] left-0 w-full bg-pumpkin-orange transition-transform duration-300 ease-in-out transform ${
            showToggle ? "translate-x-0" : "-translate-x-full"
          }`}
        >
          <ul className="flex flex-col gap-6 p-7 font-semibold text-xl text-white items-center">
            {liContent.map((liItem, index) => (
              <li key={index}>
                <Link href={liItem.path} onClick={toggleMenu}>
                  {liItem.list}
                </Link>
              </li>
            ))}
            <button
              className="text-white text-xl font-semibold px-3"
              onClick={handleLogInClick}
            >
              Login
            </button>
            <button
              onClick={handleSignUpClick}
              className={`text-xl font-semibold ${
                customNavBar
                  ? "bg-white text-pumpkin-orange"
                  : "md:bg-pumpkin-orange md:text-white bg-white text-pumpkin-orange"
              } w-[168px] h-[47px] rounded-[50px]`}
            >
              Sign Up
            </button>
          </ul>
        </div>
      </nav>

      {showSignUpPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 bg-opacity-50 backdrop-blur-sm px-3 py-10">
          <div className="bg-white p-8 rounded-3xl sm:w-[488px] w-full">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-[32px]">Create Account</h2>
              <button
                onClick={closeSignUpPopup}
                className=" text-gray-500 text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            <form action="">
              <div className="mt-5">
                <label
                  htmlFor="text"
                  className="block text-lg font-semibold text-dark-gray"
                >
                  Name and Surname
                </label>
                <input
                  type="text"
                  id="text"
                  className="w-full border border-gray-300 h-[50px] rounded-lg mt-[10px] placeholder:text-dark-gray pl-6"
                  placeholder="Enter your name and surname"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-dark-gray"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 h-[50px] rounded-lg mt-[10px] placeholder:text-dark-gray pl-6"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="block text-lg font-semibold text-dark-gray"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 h-[50px] rounded-lg mt-[10px] placeholder:text-dark-gray pl-6"
                  placeholder="Enter your password"
                />
              </div>
              <div className="mt-5">
                <input type="checkbox" name="" id="checkbox" />
                <label
                  htmlFor="password"
                  className="text-sm font-semibold text-dark-gray ml-[10px]"
                >
                  I agree with{" "}
                  <span className="text-pumpkin-orange">Terms</span> and{" "}
                  <span className="text-pumpkin-orange">Privacy</span>
                </label>
              </div>
              <button className="text-white bg-pumpkin-orange w-full h-[47px] rounded-[50px] font-semibold text-xl mt-5">
                Sign Up
              </button>
              <p className="text-dark-gray w-fit mx-auto my-[6px]">or</p>
              <button className="w-full h-[45px] rounded-[50px] font-semibold text-xl relative border border-[#33333333]">
                <FcGoogle className="absolute top-[10px] left-6 text-2xl" />
                Sign Up with Google
              </button>
            </form>
            <p className="w-fit mx-auto text-dark-gray mt-5">
              Already have an account?{" "}
              <button
                className="text-pumpkin-orange"
                onClick={() => {
                  closeSignUpPopup();
                  handleLogInClick();
                }}
              >
                Log In
              </button>
            </p>
          </div>
        </div>
      )}

      {showLogInPopup && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-white/5 bg-opacity-50 backdrop-blur-sm px-3 py-10">
          <div className="bg-white p-8 rounded-3xl w-full sm:w-[488px]">
            <div className="flex items-center justify-between">
              <h2 className="font-bold text-[32px]">Login</h2>
              <button
                onClick={closeLogInPopup}
                className=" text-gray-500 text-2xl"
              >
                <FaTimes />
              </button>
            </div>
            <form action="">
              <div className="mt-5">
                <label
                  htmlFor="email"
                  className="block text-lg font-semibold text-dark-gray"
                >
                  Email Address
                </label>
                <input
                  type="email"
                  id="email"
                  className="w-full border border-gray-300 h-[50px] rounded-lg mt-[10px] placeholder:text-dark-gray pl-6"
                  placeholder="Enter your email address"
                />
              </div>
              <div className="mt-5">
                <label
                  htmlFor="password"
                  className="block text-lg font-semibold text-dark-gray"
                >
                  Password
                </label>
                <input
                  type="password"
                  id="password"
                  className="w-full border border-gray-300 h-[50px] rounded-lg mt-[10px] placeholder:text-dark-gray pl-6"
                  placeholder="Enter your password"
                />
              </div>
              <a href="#" className="text-dark-gray block text-end mt-5">
                Forgot your password?
              </a>
              <button className="text-white bg-pumpkin-orange w-full h-[47px] rounded-[50px] font-semibold text-xl mt-5">
                Sign In
              </button>
              <p className="text-dark-gray w-fit mx-auto my-[6px]">or</p>
              <button className="w-full h-[45px] rounded-[50px] font-semibold text-xl relative border border-[#33333333]">
                <FcGoogle className="absolute top-[10px] left-6 text-2xl" />
                Sign Up with Google
              </button>
            </form>
            <p className="w-fit mx-auto text-dark-gray mt-5">
              Don’t have an account?{" "}
              <button
                className="text-pumpkin-orange"
                onClick={() => {
                  closeLogInPopup();
                  handleSignUpClick();
                }}
              >
                Sign Up
              </button>
            </p>
          </div>
        </div>
      )}
    </>
  );
};

export default NavBarComponent;

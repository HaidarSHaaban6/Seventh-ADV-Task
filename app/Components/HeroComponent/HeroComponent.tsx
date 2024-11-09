import { StaticImageData } from "next/image";
import React from "react";

interface HeroComponentProps {
  img: string | StaticImageData;
  children: React.ReactNode;
}

const HeroComponent: React.FC<HeroComponentProps> = ({ img, children }) => {
  return (
    <div
      style={{ backgroundImage: `url(${img})` }}
      className="flex justify-center items-center bg-cover bg-center h-screen px-[40px] lg:px-0"
    >
      <div className="grow md:grow-0 w-ful mx-auto">{children}</div>
    </div>
  );
};

export default HeroComponent;

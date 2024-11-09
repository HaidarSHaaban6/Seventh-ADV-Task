import Image, { StaticImageData } from "next/image";
import React from "react";

interface OrangePGTemplateProps {
  bgImg: StaticImageData;
  children: React.ReactNode;
  img: StaticImageData | string;
  custom: boolean;
}

const OrangePGTemplate = ({
  bgImg,
  children,
  img,
  custom,
}: OrangePGTemplateProps) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center h-screen relative screen-1024:h-fit px-[40px]"
    >
      <div className="max-w-[1419px] mx-auto h-full flex sm:justify-between justify-center items-center relative">
        <div>{children}</div>
        <div
          className={`absolute bottom-0 right-0 ${
            custom
              ? "xl:w-[48%] bottom-[-30px] w-[40%]"
              : "lg:w-[427px] md:w-[300px] w-[200px]"
          } hidden sm:block`}
        >
          <Image src={img} alt="About Picture" />
        </div>
      </div>
    </div>
  );
};

export default OrangePGTemplate;

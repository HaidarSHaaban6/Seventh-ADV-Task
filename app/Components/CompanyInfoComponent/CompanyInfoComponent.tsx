import React from "react";
import aboutPicture from "@/public/img/aboutpicture.png";
import Image, { StaticImageData } from "next/image";

interface dataType {
  number: string;
  text: string;
}

interface CompanyInfoComponentProps {
  img: StaticImageData;
  subTitle: string;
  title: string;
  paragraph: string;
  data: dataType[];
  custom: boolean;
}

const CompanyInfoComponent: React.FC<CompanyInfoComponentProps> = ({
  img,
  subTitle,
  title,
  paragraph,
  data,
  custom,
}) => {
  return (
    <div className="flex mt-[120px] items-center mx-auto max-w-[1419px] justify-between flex-col lg:flex-row mb-[217px] gap-7 px-[40px] 2xl:px-0">
      <Image
        src={img}
        alt="About Picture"
        className={`object-fill ${
          custom ? "sm:!w-[600px]" : "w-[450px] h-[650px]"
        }`}
      />
      <div className="lg:w-[49.4%] w-full">
        <p className="font-semibold text-dark-gray mb-[6px] screen-1024:mx-0 mx-auto w-fit">
          {subTitle}
        </p>
        <h2 className="text-[32px] font-extrabold mb-8 screen-1024:mx-0 text-center md:text-left mx-auto w-fit">
          {title}
        </h2>
        <p className="text-lg mb-8 text-center screen-1024:text-left">
          {paragraph}
        </p>
        <div className="flex items-center md:gap-[50px] gap-2 justify-center screen-1024:justify-start">
          {data.map((item, index) => (
            <div className="w-[83px]" key={index}>
              <p className="font-bold md:text-[32px] text-2xl text-pumpkin-orange">
                {item.number}
              </p>
              <p className="text-dark-gray text-sm md:text-base">{item.text}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CompanyInfoComponent;

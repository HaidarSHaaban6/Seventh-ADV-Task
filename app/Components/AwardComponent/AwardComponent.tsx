import { StaticImageData } from "next/image";
import React from "react";

interface AwardComponentType {
  icon: React.ReactNode;
  text: string;
}

interface AwardComponentProps {
  awardData: AwardComponentType[];
  bgImg: StaticImageData;
}

const AwardComponent: React.FC<AwardComponentProps> = ({
  awardData,
  bgImg,
}) => {
  return (
    <div
      style={{ backgroundImage: `url(${bgImg.src})` }}
      className="bg-cover bg-center relative screen-1024:h-fit px-[40px] mb-[120px]"
    >
      <div className="max-w-[1419px] grid xl:grid-cols-4 md:grid-cols-2 grid-cols-1 mx-auto justify-items-center py-[83px] gap-y-6">
        {awardData.map((item, index) => (
          <div
            key={index}
            className="xl:w-[292.5px] w-3/4 h-[189px] flex flex-col justify-center items-center bg-white/40 rounded-3xl px-[30px]"
          >
            {item.icon}
            <p className="font-semibold text-xl mt-[15px] text-center">
              {item.text}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AwardComponent;

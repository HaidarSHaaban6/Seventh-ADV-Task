import React from "react";
import Image, { StaticImageData } from "next/image";

interface transportDataInterface {
  img: string | StaticImageData;
  title: string;
  description: string;
}

interface CardDataProps {
  transportData: transportDataInterface[];
}

const TransportCardsComponent: React.FC<CardDataProps> = ({
  transportData,
}) => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 max-w-[1419px] mx-auto gap-[33px] mt-[120px] mb-[63px] px-[40px] xl:px-0">
      {transportData.map((item, index) => (
        <div key={index}>
          <Image
            src={item.img}
            alt={item.title}
            className="h-[302px] w-full object-cover rounded-3xl"
          />
          <h4 className="font-bold text-2xl mt-[20px] mb-3">{item.title}</h4>
          <p className="text-lg text-dark-gray">{item.description}</p>
        </div>
      ))}
    </div>
  );
};

export default TransportCardsComponent;

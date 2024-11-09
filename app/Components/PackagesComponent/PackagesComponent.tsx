import { PackagesData } from "@/app/Data/Data";
import Image, { StaticImageData } from "next/image";
import React from "react";

interface PackagesDataType {
  img: string | StaticImageData;
  title: string;
  price: React.ReactNode;
  dataList: React.ReactNode;
}

interface PackagesDataProps {
  PackagesData: PackagesDataType[];
}

const PackagesComponent: React.FC<PackagesDataProps> = ({ PackagesData }) => {
  return (
    <div className="max-w-[1420px] mx-auto my-[120px] px-[40px] lg:px-0">
      <h2 className="text-[32px] font-extrabold text-dark-gray mb-[60px]">
        The Most Popular Packages
      </h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5 w-11/12 sm:w-full mx-auto sm:mx-0">
        {PackagesData.map((item, index) => (
          <div key={index} className="border border-[#EFEFEF] rounded-3xl">
            <Image src={item.img} alt={item.title} className="w-full" />
            <div className="px-[25px]">
              <h2 className="text-xl font-extrabold mt-[25px] mb-4">
                {item.title}
              </h2>
              <div>{item.price}</div>
              <div>{item.dataList}</div>
              <button className="w-full h-[51px] rounded-[50px] border border-pumpkin-orange text-pumpkin-orange text-[20px] font-semibold mt-8 mb-[25px]">
                Book Now
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PackagesComponent;

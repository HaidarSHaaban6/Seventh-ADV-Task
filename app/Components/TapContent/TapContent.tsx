import React from "react";
import DropDownComponent from "./../DropDownComponent/DropDownComponent";
import { SlMagnifier } from "react-icons/sl";
import { tapContentData } from "@/app/Data/Data";

const TapContent = () => {
  return (
    <div className="custom-screen:flex grid custom-screen-2:grid-rows-2 custom-screen-2:grid-cols-3 grid-col-1 grid-rows-6 !bg-white rounded-xl rounded-tl-none p-3 custom-screen:gap-6 items-center">
      {tapContentData.map((item) => (
        <div className="custom-screen-2:my-3 mx-5">
          <div>{item.label}</div>
          <div className="ml-6">
            <DropDownComponent options={item.data} custom={true} />
          </div>
        </div>
      ))}
      <div className="bg-pumpkin-orange flex justify-center items-center custom-screen-2:w-[80px] custom-screen-2:h-[80px] w-[40px] h-[40px] rounded-xl hover:cursor-pointer mx-auto custom-screen:mx-0">
        <SlMagnifier className="custom-screen-2:text-[32px] text-white" />
      </div>
    </div>
  );
};

export default TapContent;

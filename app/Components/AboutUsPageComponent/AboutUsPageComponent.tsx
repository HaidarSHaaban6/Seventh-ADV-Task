import React from "react";
import HeroComponent from "../HeroComponent/HeroComponent";
import heroImage from "@/public/img/hero2Img.png";
import villaImg from "@/public/img/villaImg.png";
import CompanyInfoComponent from "../CompanyInfoComponent/CompanyInfoComponent";
import { awardData, customersData } from "@/app/Data/Data";
import CustomersComponent from "../CustomersComponent/CustomersComponent";
import AwardComponent from "../AwardComponent/AwardComponent";
import orangePG from "@/public/img/orangeBackground.jpg";

const AboutUsPageComponent = () => {
  const subTitle = "WELCOME TO OUR SITE!";
  const title = "We Are The Center Of Lucca To Offer You The Best";
  const paragraph =
    "We are right in the center of Lucca to offer you the real city life! With years of experience in practically every tourism sector, with us you can find complete packages at the lowest price, to travel and learn and have fun all without worries and without stress. What are you waiting for, book a bright evening, a trip to beautiful Tuscany or a personal tour for you!";
  const data = [
    { number: "20+", text: "Years Experience" },
    { number: "100+", text: "Happy Customer" },
    { number: "15+", text: "Choice of Services" },
    { number: "10+", text: "Professional Guides" },
  ];
  return (
    <div>
      <HeroComponent img={heroImage.src}>
        <h1 className="md:text-[72px] sm:text-[60px] text-[40px] font-podcast text-white text-center">
          Our team cares about your full relax
        </h1>
        <p className="text-white md:text-2xl text-lg text-center font-bold lg:w-[49.1145%] mx-auto">
          But I must explain to you how all this mistaken idea of denouncing
          pleasure and praising pain was born and I will give you a complete
          account of the system, and expound the actual teachings of the great
          explorer of the truth, the master-builder of human happiness.
        </p>
        <button className="border-[1.5px] text-white w-[278.25px] h-[55px] rounded-[50px] mx-auto font-semibold text-xl block mt-6">
          View our Tour Packages
        </button>
      </HeroComponent>
      <CompanyInfoComponent
        subTitle={subTitle}
        title={title}
        data={data}
        paragraph={paragraph}
        img={villaImg}
        custom={true}
      />
      <AwardComponent awardData={awardData} bgImg={orangePG} />
      <CustomersComponent customersData={customersData} />
    </div>
  );
};

export default AboutUsPageComponent;

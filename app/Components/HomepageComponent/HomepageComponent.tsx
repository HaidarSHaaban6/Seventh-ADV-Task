import React from "react";
import HeroComponent from "../HeroComponent/HeroComponent";
import heroImage from "./../../../public/img/mainHero.png";
import TapComponent from "../TapComponent/TapComponent";
import {
  tabs,
  destCardData,
  transportData,
  servicesDataArray,
  PackagesData,
  customersData,
} from "@/app/Data/Data";
import DestinantionsCards from "../DestinantionsCards/DestinantionsCards";
import CompanyInfoComponent from "../CompanyInfoComponent/CompanyInfoComponent";
import OrangePGTemplate from "../OrangePGTemplate/OrangePGTemplate";
import orangeBgImg from "@/public/img/orangeBackground.jpg";
import girlImg from "@/public/img/girlOneImg.png";
import bikeImage from "@/public/img/bikepicture.png";
import TransportCardsComponent from "../TransportCardsComponent/TransportCardsComponent";
import FormComponent from "../FormComponent/FormComponent";
import PackagesComponent from "../PackagesComponent/PackagesComponent";
import CustomersComponent from "../CustomersComponent/CustomersComponent";
import aboutPicture from "@/public/img/aboutpicture.png";

const HomepageComponent = () => {
  const subTitle = "WELCOME TO OUR SITE!";
  const title = "We are the best company for your visit";
  const paragraph =
    "After decades of experience, and a whole life in Lucca, we offer you the most complete tourism service in the city. In addition to having bikes and rickshaws to have as much fun as you want, you have the choice of tour guides with whom to tour and drivers for your every need! We offer packages in the way that you get the most at the lowest price. Book with us and we will always be available for you!";
  const data = [
    { number: "20+", text: "Years Experience" },
    { number: "100+", text: "Happy Customer" },
    { number: "15+", text: "Choice of Services" },
    { number: "10+", text: "Professional Guides" },
  ];
  return (
    <>
      <HeroComponent img={heroImage.src}>
        <h1 className="md:text-[72px] sm:text-[60px] text-[40px] font-podcast text-white text-center">
          Enjoy in the best way!
        </h1>
        <p className="text-white md:text-2xl text-lg text-center font-bold">
          Enjoy our services for your trip anytime
        </p>
        <div className="xl:max-w-[1383px] w-full bg-white/25 rounded-xl md:mt-[60px] mt-8">
          <TapComponent tabs={tabs} />
        </div>
      </HeroComponent>
      <DestinantionsCards cardsData={destCardData} />
      <CompanyInfoComponent
        subTitle={subTitle}
        title={title}
        data={data}
        paragraph={paragraph}
        img={aboutPicture}
        custom={false}
      />
      <OrangePGTemplate img={girlImg} bgImg={orangeBgImg} custom={false}>
        <div className="md:w-[569px] w-full rounded-3xl p-[30px] bg-white/25 my-[60px]">
          <h3 className="font-extrabold text-[32px] text-center mb-8">
            Get Special Offers for Organizations
          </h3>
          <p className="text-center text-lg mb-8">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industry's standard dummy text
            ever since the 1500s.
          </p>
          <button className="w-[212px] h-[47px] rounded-[50px] text-white bg-pumpkin-orange block mx-auto font-semibold text-[20px]">
            Contact Us
          </button>
        </div>
      </OrangePGTemplate>
      <TransportCardsComponent transportData={transportData} />
      <OrangePGTemplate img={bikeImage} bgImg={orangeBgImg} custom={true}>
        <h2 className="w-fit mx-auto font-extrabold text-[36px] mt-[60px] mb-9">
          Book Now Bike
        </h2>
        <FormComponent servicesDataArray={servicesDataArray} />
      </OrangePGTemplate>
      <PackagesComponent PackagesData={PackagesData} />
      <CustomersComponent customersData={customersData} />
    </>
  );
};

export default HomepageComponent;

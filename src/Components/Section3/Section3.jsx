import React from "react";
import locationIcon from "./../../assets/imges/landing-page/location.png";
import carIcon from "./../../assets/imges/landing-page/car-icon.png";
import volvo from "./../../assets/imges/landing-page/volvo.png";

import nissan from "./../../assets/imges/landing-page/nissan.png";
import jaguar from "./../../assets/imges/landing-page/jaguar.png";
import audi from "./../../assets/imges/landing-page/audi.png";

export default function Section3() {
  const rent = [
    {
      icon: locationIcon,
      heading: "Choose location",
      pragraph: "Choose your and find your best car",
    },
    {
      icon: carIcon,
      heading: "Pick-up date",
      pragraph: "Select your pick up date and time to book your car",
    },
    {
      icon: locationIcon,
      heading: "Book your car",
      pragraph: "Book your car and we will deliver it directly to you",
    },
  ];
  const logos = [
    {
      logo: jaguar,
    },
    {
      logo: nissan,
    },
    {
      logo: volvo,
    },
    {
      logo: audi,
    },
  ];
  return (
    <section className="py-[2%]">
      <button className="px-5 block mx-auto mt-6 bg-[#E7F1FB] py-2 text-sm font-normal  text-[#0B5ED7]  rounded-lg   ">
        {" "}
        HOW IT WORK{" "}
      </button>
      <h1 className="text-center mt-10 text-3xl lg:text-4xl font-semibold">
        Most popular cars rental deals
      </h1>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 mx-auto w-[50%]  ">
        {rent.map((item, index) => (
          <div key={index} className="flex flex-col max-w-[200px]  p-4 m-4">
            <img
              className="w-[75%]   rounded-lg self-center"
              src={item.icon}
              alt=""
            />
            <h1 className="text-xl font-medium text-center mt-5">
              {item.heading}
            </h1>
            <p className="text-sm font-normal text-gray-500 text-center mt-1 ">
              {item.pragraph}
            </p>
          </div>
        ))}
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 my-5 2xl:grid-cols-4 mx-auto w-[50%]">
        {logos.map((item, index) => (
          
            <img
            key={index}
              className="w-[75%]  object-cover py-5 rounded-lg self-center"
              src={item.logo}
              alt=""
            />
         
        ))}
      </div>
     
    </section>
  );
}

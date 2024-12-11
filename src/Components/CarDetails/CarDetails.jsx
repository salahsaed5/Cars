import React from "react";
import style from "./CarDetails.module.css";
import carImg from "./../../assets/imges/landing-page/sec-5/Audi1.png";
import avatar from "./../../assets/imges/card/user.png";
import ice from "./../../assets/imges/card/d8wxke_2_.png";
import frame from "./../../assets/imges/card/Frame.png";
import door from "./../../assets/imges/card/doors.png";
export default function CarDetails() {
  return (
    <section className="flex flex-col xl:flex-row w-full py-20">
      <div className={`w-full lg:w-1/2 ${style.bg}`}>
        <img src={carImg} className={`${style.carImgclass} w-[70%]`} alt="" />
      </div>
      <div className="w-full xl:w-1/2 px-6">
        {" "}
        <button className="px-5 block  mt-6 bg-[#E7F1FB] py-2 text-sm font-normal  text-[#0B5ED7]  rounded-lg   ">
          {" "}
          WHY CHOOSE US{" "}
        </button>
        <h1 className=" mt-7 text-xl xl:text-3xl font-semibold">
          We offer the best experience with our rental deals
        </h1>
         <p className=" text-sm text-gray-500 my-4"><img className="inline pb-1"  src={avatar} alt="" /> 2 Passanger</p>
         <p className=" text-sm text-gray-500 my-4"><img className="inline pb-1"  src={ice} alt="" /> Air conditioning</p>
         <p className=" text-sm text-gray-500 my-4"><img className="inline pb-1"  src={frame} alt="" /> Manual</p>
         <p className=" text-sm text-gray-500 my-4"><img className="inline pb-1"  src={door} alt="" /> Doors</p>
      </div>
    </section>
  );
}

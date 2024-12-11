import React from "react";
import style from "./Section5.module.css";
import girlImg from "./../../assets/imges/landing-page/sec-6/girl.png";
import manImg from "./../../assets/imges/landing-page/sec-6/Rectangle 8 (1).png";
import starImg from "./../../assets/imges/card/star.png";
export default function Section5() {
  return (
    <section className={`py-[2%] ${style.bg} bg[#F7FBFF] `}>
      <button className="px-5 block mx-auto mt-6  bg-[#E7F1FB] py-2 text-sm font-normal  text-[#0B5ED7]  rounded-lg   ">
        {" "}
        TESTIMONIALS{" "}
      </button>
      <h1 className="text-center mt-10 text-3xl lg:text-4xl font-semibold">
        Most popular cars rental deals
      </h1>
      <div className="flex mt-10 flex-col xl:flex-row p-4  md:px-[30%] lg:px-[30%] xl:px-0 justify-around">
        <div className="mb-4 mx-2   rounded-tl-3xl w-full  xl:w-[35%]  bg-white  rounded-bl-3xl shadow-md flex flex-col xl:flex-row">
          <div className="">
            <img className="w-full h-[100%]" src={manImg} alt="" />
          </div>
          <div className="w-[50%] p-5">
            <h1 className="text-4xl font-semibold">
              5.5 <small className="">star</small>
            </h1>
            <div>
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
            </div>
            <p className="mt-10">
              “I feel very secure when using caretall's services. Your customer
              care team is very enthusiastic and the driver is always on time.”
            </p>
            <h3 className="mt-10">Charlie Johnson</h3>
            <h4 className="text-sm text-gray-500">Last updated 3 mins ago</h4>
          </div>
        </div>
        <div className="mb-4 mx-2  rounded-tl-3xl w-full xl:w-[35%] bg-white rounded-bl-3xl shadow-md flex flex-col xl:flex-row">
          <div className="">
            <img className="w-full" src={girlImg} alt="" />
          </div>
          <div className="w-[50%] p-5">
            <h1 className="text-4xl font-semibold">
              5.5 <small className="">star</small>
            </h1>
            <div>
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
              <img src={starImg} className="inline" alt="" />
            </div>
            <p className="mt-10">
              “I feel very secure when using caretall's services. Your customer
              care team is very enthusiastic and the driver is always on time.”
            </p>
            <h3 className="mt-10">Charlie Johnson</h3>
            <h4 className="text-sm text-gray-500">Last updated 3 mins ago</h4>
          </div>
        </div>
      </div>
    </section>
  );
}

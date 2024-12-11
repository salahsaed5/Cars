import React from 'react'
import style from "./Section1.module.css";
import carImg from "./../../assets/imges/landing-page/car 2 1.png";
import AppNavbar from "../AppNavbar/AppNavbar";
export default function Section1() {
  return (
    <div className={`${style.bg}    `}>
    <AppNavbar />
    <section className="flex lg:flex-row flex-col-reverse justify-between items-center ">
      <div className="max-w-full lg:max-w-[23%] ml-[10vw]">
          <h1 className="font-bold text-4xl  mb-2">
          Find, book and rent a car <span className="text-[#1572D3]">Easily</span>
          </h1>
          <p className=" mb-4">Get a car wherever and whenever you need it with your IOS and Android device.</p>
      </div>

      <img src={carImg} className={`lg:w-[45%]  ${style.carImgclass} self-end w-[75%]`} alt="" />
    </section>
    
  </div>
  )
}

import React, { useEffect, useState } from "react";
import car1 from "./../../assets/imges/landing-page/car1.png";
import car2 from "./../../assets/imges/landing-page/car2.png";
import car3 from "./../../assets/imges/landing-page/car3.png";
import axios from "axios";
import star from "./../../assets/imges/card/star.png";
import avatar from "./../../assets/imges/card/user.png";
import ice from "./../../assets/imges/card/d8wxke_2_.png";
import frame from "./../../assets/imges/card/Frame.png";
import arrow from "./../../assets/imges/card/arrow-right.png";
import { useNavigate } from "react-router-dom";

export default function Section2() {
  const carImages = [
    { carImg: car1 },
    { carImg: car2 },
    { carImg: car3 },
    { carImg: car3 },
  ];
  const navigate = useNavigate();
  const [carDetails, setCarDetails] = useState([]);
  async function getCardetails() {
    try {
      const { data } = await axios.get(
    `https://myfakeapi.com/api/cars/`
      );
      
      setCarDetails(data.cars.splice(0, 4));
    } catch (error) {
      console.log(error);
    }
  }

  function navigateToDetails() {
    navigate("/details");
  }
  function navigateToAllVehicales() {
    navigate("/all-vehicles");
  }
  useEffect(() => {
    getCardetails();
  }, []);

  return (
    <section className="py-[2%]">
      <div className="flex shadow-lg mx-[7%] rounded-md">
        <div className="flex-shrink-0 z-10 inline-flex items-center py-2.5 px-4 text-sm font-medium text-center text-gray-900 bg-gray-100 border border-e-0 border-gray-300 dark:border-gray-700 dark:text-white rounded-s-lg hover:bg-gray-200 focus:ring-4 focus:outline-none focus:ring-gray-300 dark:bg-gray-600 dark:hover:bg-gray-700 dark:focus:ring-gray-800">
          <i className="fa-solid fa-magnifying-glass"></i>
        </div>
        <div
          id="dropdown"
          className="z-10 hidden bg-white divide-y divide-gray-100 rounded-lg shadow w-44 dark:bg-gray-700"
        ></div>
        <div className="relative w-full">
          <input
            type="search"
            id="search-dropdown"
            className="block p-2.5 w-full z-20 text-sm text-gray-900 bg-gray-50 rounded-e-lg rounded-s-gray-100 rounded-s-2 border border-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:border-blue-500"
            placeholder="Search by name"
            
            required
          />
          <button
            type="submit"
            className="absolute top-0 end-0 p-2.5 h-full text-sm font-medium text-white bg-blue-700 rounded-e-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          
          >
            Search
          </button>
        </div>
      </div>
      <button className="px-5 block mx-auto mt-6 bg-[#E7F1FB] py-2 text-sm font-normal  text-[#0B5ED7]  rounded-lg   ">
        {" "}
        POPULAR RENTAL DEALS{" "}
      </button>
      <h1 className="text-center mt-10 text-3xl lg:text-4xl font-semibold">
        Most popular cars rental deals
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  px-[12%] mt-10">
        {carDetails.length === 0 ? (
          <div className="col-span-4 text-center text-red-500">
            No cars available with this name.
          </div>
        ) : carDetails.map((car, index) => (
          <div
            key={index}
            className="  bg-white border rounded-lg shadow-lg m-3"
          >
            <div className="flex flex-col border-b  p-4 m-4">
              <img
                className="w-[100%] rounded-lg self-center"
                src={carImages[index].carImg}
                alt=""
              />
              <h5 className="text-xl font-medium mt-5">
                {car.car} {car.car_model}
              </h5>
              <p className="text-sm font-medium  mt-1 ">
                <img src={star} className="inline pb-1" alt="" /> 4.6{" "}
                <span className="text-gray-500 font-normal">
                  (1345 reviews)
                </span>
              </p>
              <div className="flex flex-row justify-between">
                <div className="flex  flex-col">
                  {" "}
                  <p className="mt-1 text-sm text-gray-500">
                    <img className="inline pb-1" src={avatar} alt="" /> 2
                    Passanger
                  </p>
                  <p className="mt-1 text-sm text-gray-500">
                    <i className="fa-solid fa-calendar-days "></i> {car.car_model_year}
                  </p>
                </div>

                <div className="flex flex-col ">
                  {" "}
                  <p className="mt-1 text-sm text-gray-500">
                    <img className="inline pb-1" src={frame} alt="" />
                    manual
                  </p>{" "}
                  <p className="mt-1 text-sm text-gray-500">
                    <img className="inline pb-1" src={ice} alt="" />
                    Air conditioning
                  </p>
                </div>
              </div>
            </div>
            <div className=" m-4 flex flex-col">
              <div className="flex w-full justify-between">
                <h1 className="text-gray-500">Price</h1>
                <h1 className="">
                  {" "}
                  {car.price} <span className="text-gray-500"> /day</span>
                </h1>
              </div>
              <button
                onClick={navigateToDetails}
                className="bg-[#0B5ED7] text-white p-2 rounded-lg mt-2 flex justify-center items-center"
              >
                view details <img className="mx-3" src={arrow} alt="" />
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={navigateToAllVehicales} className="border border-[#6C757D] text-[#6C757D] hover:bg-[#6C757D] hover:text-white duration-200 px-10 py-[6px] mx-auto mt-10 rounded-lg  flex justify-center items-center">
        Show all vehicles <i className="fa-solid fa-right-long mt-1 ml-2"></i>
      </button>
    </section>
  );
}

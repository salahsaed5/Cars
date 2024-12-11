import React from "react";
import style from "./Section4.module.css";
import audiImg from "./../../assets/imges/landing-page/sec-5/Audi1.png";
import userIcon from "./../../assets/imges/landing-page/sec-5/user.png";
import chatIcon from "./../../assets/imges/landing-page/sec-5/chat.png";
import messageIcon from "./../../assets/imges/landing-page/sec-5/message.png";
export default function Section4() {
  const data = [
    {
      icon: userIcon,
      heading: "Best price guaranteed",
      pragraph: "Find a lower price? We’ll refund you 100% of the difference.",
    },
    {
      icon: userIcon,
      heading: "24 hour car delivery",
      pragraph: "Book your car anytime and we will deliver it directly to you.",
    },
    {
      icon: messageIcon,
      heading: "Best price guaranteed",
      pragraph: "Find a lower price? We’ll refund you 100% of the difference.",
    },
    {
      icon: chatIcon,
      heading: "24/7 technical support",
      pragraph:
        "Have a question? Contact Rentcars support any time when you have problem.",
    },
  ];

  return (
    <section className={`flex flex-col xl:flex-row py-[2%]  `}>
      <div className={`w-full xl:w-1/2 flex items-center  ${style.bg}`}>
        <img className="w-[80%]" src={audiImg} alt="" />
      </div>
      <div className="w-full xl:w-[40%] mx-4 py-4">
        {" "}
        <button className="px-5 block  mt-6 bg-[#E7F1FB] py-2 text-sm font-normal  text-[#0B5ED7]  rounded-lg   ">
          {" "}
          WHY CHOOSE US{" "}
        </button>
        <h1 className=" mt-10 text-xl lg:text-3xl font-semibold">
          We offer the best experience with our rental deals
        </h1>
        <div>
          {data.map((item, index) => (
            <div key={index} className="flex flex-row my-7 px-3">
              <img className="w-15" src={item.icon} alt="" />
              <div className="flex flex-col ml-4">
                <h1 className="text-lg font-semibold">{item.heading}</h1>
                <p className="text-sm text-gray-500">{item.pragraph}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

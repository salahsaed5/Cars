import React from "react";
import callImg from "./../../assets/imges/footer/call.png";
import locationImg from "./../../assets/imges/footer/location.png";
import smsImg from "./../../assets/imges/footer/sms.png";
import logoImg from "./../../assets/imges/footer/logo-footer.png";
import facebookImg from "./../../assets/imges/footer/facebook.png";
import instagramImg from "./../../assets/imges/footer/instagram.png";
import youtubeImg from "./../../assets/imges/footer/youtube.png";

const FooterSection = ({ title, items }) => (
  <div className="text-white text-xs mt-5">
    <h3 className="mb-7 text-[16px]">{title}</h3>
    {items.map((item, index) => (
      <h5 key={index} className="my-2">{item}</h5>
    ))}
  </div>
);

const FooterContact = () => (
  <div className="text-white mt-5">
    <img src={logoImg} className="mb-7" alt="Logo" />
    <div className="flex my-2 text-xs">
      <img src={locationImg} className="self-center mr-2" alt="Location" />
      <h5>
        25566 Hc 1, Glenallen, <br /> Alaska, 99588, USA
      </h5>
    </div>
    <div className="flex my-2 text-xs">
      <img src={callImg} className="self-center mr-2" alt="Call" />
      <h5 className="mt-1">+603 4784 273 12</h5>
    </div>
    <div className="flex my-2 text-xs">
      <img src={smsImg} className="self-center mr-2" alt="Email" />
      <h5 className="mt-1">rentcars@gmail.com</h5>
    </div>
  </div>
);

const FooterSocial = () => (
  <div className="text-white text-xs mt-5">
    <h3 className="mb-7 text-[16px]">Follow Us</h3>
    <div className="flex">
      {[facebookImg, instagramImg, youtubeImg].map((img, index) => (
        <img key={index} className="mr-2" src={img} alt="Social Icon" />
      ))}
    </div>
  </div>
);

export default function Footer() {
  return (
    <section className="bg-[#051C34] px-[5%]">
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-5 py-[2%] border-b w-full">
        <FooterContact />
        <FooterSection title="Our Products" items={["Career", "Car", "Packages", "Features", "Priceline"]} />
        <FooterSection title="Resources" items={["Download", "Help Centre", "Guides", "Partner Network", "Cruises", "Developer"]} />
        <FooterSection title="About Rentcars" items={["Why choose us", "Our Story", "Investor Relations", "Press Center", "Advertise"]} />
        <FooterSocial />
      </div>
      <div className="text-white py-7 overflow-auto">
        <small>Copyright 2023 ・ Rentcars, All Rights Reserved</small>
      </div>
    </section>
  );
}

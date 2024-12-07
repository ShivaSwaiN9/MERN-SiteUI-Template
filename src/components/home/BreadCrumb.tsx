import { banner_img } from "@/src/assets/home";
import React from "react";

export default function BreadCrumb() {
  return (
    <section className="flex flex-col lg:flex-row lg:main-container w-full relative px-3">
      <div className="w-full text-white flex flex-col py-20 text-center lg:text-start">
        <p className="text-lg font-bold">One of the Best known security team</p>
        <h1 className="lg:text-6xl text-3xl font-bold">
          Z PLUS SECURITY <br /> MANAGEMENT PRIVATE <br /> LIMITED
        </h1>
        <p className="text-lg font-md ">
          We are a top-ranked private security company, primarily engaged in
          providing premium guard assistance to events, personnel, premises,
          malls security and hospitals, including patrolling services.
        </p>

        <div className="flex gap-4 py-3 justify-center lg:justify-start">
          <p className="py-3 px-7 bg-red-600 rounded-md text-white text-md rounded-md!transition-all!duration-500!ease-in-out hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
            Booking Now
          </p>
          <p className="py-3 px-7 bg-red-600 rounded-md text-white text-md rounded-md!transition-all!duration-500!ease-in-out hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
            About Us
          </p>
        </div>
      </div>

      <div className="w-full  flex justify-center lg:justify-start  lg:relative top-20 -right-10 ">
        <img src={banner_img.src} alt="" className="w-[80%]" />
      </div>
    </section>
  );
}

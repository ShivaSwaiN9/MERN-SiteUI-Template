import React from "react";
import { WhyWeAreArr } from "@/src/utils";

export default function WhyWeAre() {
  return (
    <section className="w-full h-[90%]  bg-[#191919] lg:p-10 p-5">
      <div className="p-4 text-gray-600 relative">
        <h1 className="mb-8 text-center text-3xl font-bold text-[#777777] flex flex-col">
          Why We Are ?
          <div className="absolute  top-14 left-[43%] w-24 h-1 bg-red-600 mt-1"></div>
        </h1>

        <div className="grid lg:grid-cols-4 gap-3 lg:main-container">
          {WhyWeAreArr.map((items) => (
            <div key={items.id} className="flex items-center   group ">
              <div className="px-4 text-3xl font-extralight text-[#777777] group-hover:text-white transition-all duration-500 ease-in-out ">
                {items.id}
              </div>
              <div>
                <div className="text-xl font-bold text-[#777777] group-hover:text-white transition-all duration-500 ease-in-out ">
                  {items.title}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

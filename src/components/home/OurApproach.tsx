import React from "react";
import CommonCard from "../commonComponents/CommonCard";
import { ApproachiconArr } from "@/src/utils";
import { secutiy_img } from "@/src/assets/home";


export default function OurApproach() {
  return (
    <section className="lg:main-container flex flex-col lg:flex-row w-full py-7 px-4">
      <div className="w-full p-7">
        <img src={secutiy_img.src}alt="" />
      </div>

      <div className="text-white py-8">
        <h1 className="text-3xl font-semibold py-4">Our Approach To Security</h1>
        <p>
          Our services are best known for the vigilance of our security team.
          They are competent, motivated, skilled, licensed, and vetted security
          professionals to deal with any sort of circumstance. Dire
        </p>

        <div className=" w-full  flex flex-col  gap-4 py-8">
      {ApproachiconArr.map((item) => (
        <div key={item.id} className="w-full  ">
          <CommonCard data={item} />
        </div>
      ))}
    </div>
      </div>
    </section>
  );
}

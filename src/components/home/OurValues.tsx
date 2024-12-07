import { safer_world } from "@/src/assets/home";
import React from "react";

export default function OurValues() {
  return (
    <section className="w-full flex flex-col lg:flex-row py-20 lg:main-container px-3">
      <div className="w-full">
        <img src={safer_world.src} alt="" className="w-full" />
      </div>

      <div className="w-full flex flex-col gap-3 text-[#777777] leading-7 pt-20">
        <h1 className="text-5xl text-white">Our Values</h1>

        <p className="">
          As a Company, we regard a high place to honesty, integrity,
          professionalism and mutual respect for both of our customers and
          employees.
        </p>

        <div className="flex flex-col lg:flex-row gap-2 ">
          <div>
            <h2 className="text-3xl text-white">Our Mission</h2>
            <p>
              We envision a future of assured security in all the private and
              public sectors. We are dedicated to use the most recent
              technologies and improve our ongoing services. The vision is to
              develop a rewarding space that meets our client expectations. The
              most valuable asset of our company is to build a client base of
              happy customers.
            </p>
          </div>

          <div>
            <h2 className="text-3xl text-white">Our Mission</h2>
            <p>
              Our mission is to bring reliable security protection to safeguard
              the client's privacy. We achieve this by implementing several
              checks and measures. The goal is to strengthen the security
              ecosystem of residential and commercial properties by providing
              premium service within budget. We aim to bring top-notch security
              administration to the affordability of each of our consumers.
            </p>
          </div>
        </div>

        <div className="w-44 py-2 center">
          <p className="py-3 px-3 bg-red-600 rounded-md text-white text-md rounded-md!transition-all!duration-500!ease-in-out hover:bg-yellow-500 hover:text-white transition-all duration-300 hover:-translate-y-1">
            Know More About Us
          </p>
        </div>
      </div>
    </section>
  );
}

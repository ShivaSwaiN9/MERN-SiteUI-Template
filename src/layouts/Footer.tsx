import React from "react";
import { main_logo } from "../assets/home";
import { footerArr, iconArr } from "../utils";

export default function Footer() {
  return (
    <section className="lg:main-container grid grid-cols-4 py-20 gap-24">
      <div className="flex flex-col gap-4">
        <span>
          <img src={main_logo.src} alt="" className="w-36" />
        </span>

        <p className="text-gray-400">
          We are a top-ranked private security company, primarily engaged in
          providing premium guard assistance to events, personnel, premises,
          malls security and hospitals, including patrolling services.
        </p>

        <span className="flex gap-3 text-white">
          {iconArr.map((item) => {
            const IconComponent = item.icon;
            return (
              <p
                key={item.id}
                className="rounded-full  w-8 h-8 center  bg-red-600  transition-all duration-300 hover:-translate-y-1"
              >
                <IconComponent className="text-lg" />
              </p> 
            );
          })}
        </span>
      </div>

      <div className="text-gray-400 flex flex-col gap-3">
        <h3 className="text-xl text-white font-bold">About Us</h3>
        {footerArr.map((items, index) => (
          <p  key={index}
          >{items.title}</p>
        ))}
      </div>

      <div className="flex flex-col gap-3">
        <h3 className="text-xl text-white font-bold">Contact Us</h3>
        <p className="text-gray-400">
          {" "}
          <span className="text-white"> Address: </span> 25 SHEHZADA BAGH EXTN
          DAYA BASTI ,NEW DELHI DL 110035 IN
        </p>
        <p className="text-white">Email: info@zplussecurity.net</p>
      </div>

      <div className="text-gray-400 flex flex-col gap-3">
        <h3 className="text-white">Newsletter</h3>
        <p>Latest resources sent to your inbox weekly</p>

        <input
          className="shadow appearance-none border  border-none rounded w-full py-4 bg-gray-200 px-3 text-black leading-tight focus:outline-none focus:shadow-outline"
          id="username"
          type="text"
          placeholder="Username"
        />

        <p className=" w-full h-[25%] center bg-red-500 text-white rounded-lg ">
          Subscibe Now
        </p>
      </div>
    </section>
  );
}

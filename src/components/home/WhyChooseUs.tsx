import { round_icon1, round_icon2, round_icon3 } from "@/src/assets/home";
import React from "react";
import VerifiedUserRoundedIcon from '@mui/icons-material/VerifiedUserRounded';
import ManageAccountsIcon from '@mui/icons-material/ManageAccounts';

export default function WhyChooseUs() {
  return (
    <section className="lg:main-container flex flex-col lg:flex-row gap-4 mt-28 px-3">
      <div className="lg:w-[50%] w-full  h-fit bg-[#191919] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 rounded-md text-[#777777] p-6 group">
        <div className="w-14 h-14 bg-neutral-800 p-2 center rounded-lg group-hover:bg-red-600">
         <VerifiedUserRoundedIcon className="group-hover:text-white text-3xl"/>
        </div>
        <h1 className="text-2xl font-bold group-hover:text-white ">Security Management</h1>

        <p>
          Z plus believes that a professionally trained security force is the
          need of the hour for the safety and security of assets and life.
          Keeping this in mind, we extend our services in close cooperation with
          our customers by providing them specialized and customized security
          solutions. The service extends from providing both armed and unarmed
          guards to the installation of specialized Security, Safety, Integrated
          Building Management Systems and Fire Protection Systems.
        </p>
      </div>

      <div className="lg:w-[50%] w-full h-fit bg-[#191919] flex flex-col gap-5 transition-all duration-300 hover:-translate-y-2 rounded-md text-[#777777] p-6 group">
        <div className="w-14 h-14 bg-neutral-800 p-2 center rounded-lg group-hover:bg-red-600 transition-all duration-500 ease-in-out">
          <ManageAccountsIcon  className="group-hover:text-white text-3xl"/>
        </div>
        <h1 className="text-2xl font-bold group-hover:text-white">Security Services</h1>

        <p>
          Z plus follows a stringent selection process, and regular & exhaustive
          training in accordance with international standards. We are equally
          flexible in our provision of training services and organize programs
          that can be run at the client's own premises or another convenient
          venue. We conduct regular surprise checks and night patrolling at our
          customer sites. At the customer site, all relevant documents, logbooks
          and registers maintained by our guards are inspected regularly.
        </p>
      </div>
    </section>
  );
}

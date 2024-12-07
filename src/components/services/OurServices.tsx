import React from "react";
import CommonCard from "../commonComponents/CommonCard";
import { ServiceiconArr } from "@/src/utils";




export default function OurServices(props: any) {
  
  return (
    <section className="main-container text-white py-8">
    <div className="text-center py-4 px-8">
        <h1 className="text-4xl font-semibold py-4">Our Services Include</h1>
        <h1>We are a top-ranked private security company, primarily engaged in providing premium guard assistance to events, personnel, premises, malls security and hospitals, including patrolling services.</h1>
    </div>
    <div className=" w-full  grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 py-8">
      {ServiceiconArr.map((item) => (
        <div key={item.id} className="w-full  ">
          <CommonCard data={item} />
        </div>
      ))}
    </div>
    </section>
  );
}

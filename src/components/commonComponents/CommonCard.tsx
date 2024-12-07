import React from "react";

type prop = {
  data: {
    title:string,
    desc?:string,
    icon: React.ComponentType<{ className?: string }>
  }
}


export default function CommonCard({ data }: prop) {
  const IconComponent = data.icon;

  return (
    <section className="">
      <div className="w-full lg:h-40 shadow-[0_3px_10px_rgb(0,0,0,0.2)] flex items-center gap-6 rounded-xl bg-[#191919] p-5 group transition-all duration-300 ease-in-out hover:-translate-y-2">
        <div className="w-14 h-14 bg-neutral-800 center rounded-lg group-hover:bg-red-600">
          <IconComponent className="text-white" />
        </div>

        <div className="text-[#777777] flex flex-col gap-4">
          <h1 className="text-xl font-semibold group-hover:text-white">
            {data.title}
          </h1>
          <p className="">{data.desc}</p>
        </div>
      </div>
    </section>
  );
}




import React from "react";
import { main_logo } from "../assets/home";
import { navArr } from "../utils";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import { useRouter } from "next/router";

export default function Header() {
  const router = useRouter();
  return (
    <section className="main-container lg:flex  w-full h-20 justify-between center hidden">
      <div className="">
        <img src={main_logo.src} alt="" className="w-36" />
      </div>

      <div className="  text-white  center gap-4 justify-start uppercase font-medium">
        {navArr.map((item) => (
          <span
            key={item.id}
            className="flex h-full w-fit items-center p-2 text-sm group cursor-pointer relative hover:text-red-500 !transition-all !duration-500 !ease-in-out text-white z-60"
            onClick={() => {
              router.push(`${item.path}`);
            }}
          >
            <p>{item.title}</p>
            {item.subMenu && <ExpandMoreIcon />}
            {item.subMenu && (
              <div className=" z-50 absolute top-full left-0 w-60  opacity-0 group-hover:opacity-100 !transition-all !duration-500 !ease-in-out ">
                {item.subMenu.map((subItem) => (
                  <h2
                    className="capitalize text-sm   bg-red-900 text-white p-4 w-full hover:text-red-400"
                    key={subItem.id}
                    onClick={() => {
                      router.push(`${subItem.path}`);
                    }}
                  >
                    {subItem.title}
                  </h2>
                ))}
              </div>
            )}
          </span>
        ))}
      </div>

      <div className="cursor-pointer">
        <p className="py-3 px-7 bg-red-600 text-white text-md rounded-md !transition-all !duration-500 !ease-in-out hover:bg-white hover:text-gray-600" onClick={()=>{
          router.push(`contact`)
        }}>
          Contact Us
        </p>
      </div>
    </section>
  );
}

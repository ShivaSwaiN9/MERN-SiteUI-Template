import { post } from "@/src/assets/home";
import Link from "next/link";
import React from "react";
import CommonBlog from "../commonComponents/CommonBlog";

const data = {
  title: "Recent Comments",
  desc: "No comments to show.",
};
const data1 = {
  title: "Archives",
  desc: "December 2023",
};
const data2 = {
  title: "Categories",
  desc: "Uncategorized",
};

export default function Post() {
  return (
    <section className="flex main-container py-8 w-full h-screen">
      <div className="w-full h-full">
        <div className="w-full h-full bg-[#191919] rounded-lg shadow ">
          <img
            className="rounded-t-lg bg-cover bg-center "
            src={post.src}
            alt=""
          />

          <div className="p-5">
            <Link href="#">
              <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-200 dark:text-white">
                Noteworthy technology acquisitions 2021
              </h5>
            </Link>
            <p className="mb-3 font-normal text-gray-200 dark:text-gray-400">
              Here are the biggest enterprise technology acquisitions of 2021 so
              far, in reverse chronological order.
            </p>
            <Link
              href="#"
              className="inline-flex items-center px-3 py-2 text-sm font-medium text-center text-white bg-blue-700 rounded-lg hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              Read more
              <svg
                className="rtl:rotate-180 w-3.5 h-3.5 ms-2"
                aria-hidden="true"
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 14 10"
              >
                <path
                  stroke="currentColor"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M1 5h12m0 0L9 1m4 4L9 9"
                />
              </svg>
            </Link>
          </div>
        </div>
      </div>

      <div className="w-2/3 flex flex-col items-center gap-8">
        <div className="w-[70%] h-[25%] bg-[#191919] p-6 relative border rounded-md">
          <p className="font-bold text-2xl text-white">
            Search
            <div className="absolute rounded-md top-14 left-[7%] w-14 h-1 bg-red-600 mt-1"></div>
          </p>
          <div className="w-full h-[30%] mt-7 flex border  rounded-md">
            <input
              type="text"
              className="w-full h-full   rounded-md bg-[#191919] "
            />
            <button className="h-full px-5 text-white  rounded-md bg-red-700">
              Search
            </button>
          </div>
        </div>
        <div className="w-full ml-40">

        <CommonBlog data={data} />
        </div>
        <div className="w-full ml-40">

        <CommonBlog data={data1} />
        </div>
        <div className="w-full ml-40">

        <CommonBlog data={data2} />
        </div>
      </div>
    </section>
  );
}
import React from "react";
import { Breadcrumbs } from "../Breadcrumbs";
import { useRouter } from "next/router";

export default function Hero({ pageName }) {
  const router = useRouter();
  return (
    <div
      className={`relative ${
        router.pathname.includes("/contact") ||
        router.pathname.includes("/breakdowns")
          ? "bg-hero-2"
          : "bg-hero-1"
      } h-40 md:h-72 lg:h-80 xl:h-96 bg-center bg-cover`}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 md:px-12 lg:px-16 xl:px-20 bg-black/60 text-white  text-sm md:text-base">
        <div>
          <h1 className="uppercase font-bold lg:text-5xl md:text-4xl text-3xl  mb-4">
            {pageName}
          </h1>
          <Breadcrumbs />
        </div>
      </div>
    </div>
  );
}

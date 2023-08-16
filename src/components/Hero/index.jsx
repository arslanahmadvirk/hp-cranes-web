import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsDot } from "react-icons/bs";
export default function Hero({ pageName }) {
  const router = useRouter();
  return (
    <div
      className={`relative ${
        router.pathname.includes("/contact") ||
        router.pathname.includes("/breakdowns")
          ? "bg-hero-2"
          : "bg-hero-1"
      } h-28 md:h-48 lg:h-72 xl:h-80  bg-center bg-cover`}
    >
      <div className="absolute top-0 left-0 w-full h-full flex items-center px-8 md:px-12 lg:px-16 xl:px-20 bg-black/60 text-white  text-sm md:text-base">
        <div>
          <h1 className="uppercase font-bold lg:text-5xl md:text-4xl text-3xl  mb-4">
            {pageName}
          </h1>
          <p>
            <Link href={"/"} className="hover:underline">
              Home
            </Link>
            <BsDot className="inline h-8 w-8" />
            <Link href={router.pathname} className="hover:underline">
              {pageName}
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
}
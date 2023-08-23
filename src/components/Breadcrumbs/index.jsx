import Link from "next/link";
import { useRouter } from "next/router";
import React from "react";
import { BsDot } from "react-icons/bs";
export function Breadcrumbs() {
  const router = useRouter();
  const pathSegments = router.asPath.split("/");
  return (
    <p className="md:text-base text-xs">
      {pathSegments.map((segment, index) => (
        <span key={index}>
          <Link
            href={
              (index === 0 && "/") ||
              `${pathSegments.slice(0, index + 1).join("/")}`
            }
            className="hover:underline capitalize"
          >
            {segment === ""
              ? "Home"
              : segment.includes("_")
              ? segment.split("_").join(" ")
              : segment}
          </Link>
          <BsDot
            className={`inline h-8 w-8 ${
              index === pathSegments.length - 1 && "hidden"
            }`}
          />
        </span>
      ))}
    </p>
  );
}

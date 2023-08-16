import Hero from "@/components/Hero";
import Link from "next/link";

export default function Gallery() {
  const imageCategories = [
    "crane images",
    "sling inspection images",
    "electrical images",
    "factory maintenance images",
    "radio control system images",
    "construction images",
    "rates images",
  ];
  return (
    <div className=" 2xl:max-w-screen-2xl mx-auto">
      <Hero pageName={"Gallery"} />
      <div className="container mx-auto my-24">
        <div className="flex flex-wrap justify-center">
          {imageCategories.map((category, index) => (
            <Link
              key={index}
              href={"#"}
              className="block lg:w-1/4 sm:w-1/2 w-full"
            >
              <div className="p-4">
                <div className="rounded-xl bg-[#FFCB3C] p-4 lg:h-48 h-40  flex justify-center items-center text-center transition duration-300 hover:shadow-custom-md ">
                  <h1 className="font-bold xl:text-2xl lg:text-xl text-lg capitalize">
                    {category}
                  </h1>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}

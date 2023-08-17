import Hero from "@/components/Hero";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Link from "next/link";

export default function Gallery() {
  const imageCategories = [
    {
      name: "crane",
      path: "/gallery/cranes",
    },
    {
      name: "sling inspection",
      path: "/gallery/slings",
    },

    {
      name: "electrical images",
      path: "/gallery/electrical",
    },
    {
      name: "factory maintenance",
      path: "/gallery/maintenance",
    },
    {
      name: "radio control system",
      path: "/gallery/rdc",
    },
    {
      name: "construction",
      path: "/gallery/construction",
    },
    {
      name: "rates",
      path: "/gallery/rates",
    },
  ];
  return (
    <>
      <Head>
        <title>Gallery | HP Cranes</title>
      </Head>
      <WebLayout>
        <div className=" 2xl:max-w-screen-2xl mx-auto">
          <Hero pageName={"Gallery"} />
          <div className="container mx-auto my-24">
            <div className="flex flex-wrap justify-center">
              {imageCategories.map(({ name, path }, index) => (
                <Link
                  key={path}
                  href={path}
                  className="block lg:w-1/4 sm:w-1/2 w-full"
                >
                  <div className="p-4">
                    <div className="rounded-xl bg-[#FFCB3C] p-4 lg:h-48 h-40  flex justify-center items-center text-center transition duration-300 hover:shadow-custom-md ">
                      <h1 className="font-bold xl:text-2xl lg:text-xl text-lg capitalize">
                        {name} images
                      </h1>
                    </div>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </WebLayout>
    </>
  );
}

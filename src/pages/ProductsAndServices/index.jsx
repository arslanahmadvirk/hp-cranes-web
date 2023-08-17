import Hero from "@/components/Hero";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Link from "next/link";

export default function ProductsAndServices() {
  const categories = [
    {
      name: "crane",
      path: "/ProductsAndServices/cranes",
    },
    {
      name: "sling inspection",
      path: "/ProductsAndServices/slings",
    },

    {
      name: "electrical images",
      path: "/ProductsAndServices/electrical",
    },
    {
      name: "factory maintenance",
      path: "/ProductsAndServices/maintenance",
    },
    {
      name: "radio control system",
      path: "/ProductsAndServices/rdc",
    },
    {
      name: "construction",
      path: "/ProductsAndServices/construction",
    },
    {
      name: "rates",
      path: "/ProductsAndServices/rates",
    },
  ];
  return (
    <>
      <Head>
        <title>Product & Services | HP Cranes</title>
      </Head>
      <WebLayout>
        <div className=" 2xl:max-w-screen-2xl mx-auto">
          <Hero pageName={"Products & Services"} />
          <div className="container mx-auto my-24">
            <div className="flex flex-wrap justify-center">
              {categories.map(({ name, path }, index) => (
                <Link
                  key={index}
                  href={path}
                  className="block lg:w-1/4 sm:w-1/2 w-full"
                >
                  <div className="p-4">
                    <div className="rounded-xl bg-[#FFCB3C] p-4 lg:h-48 h-40  flex justify-center items-center text-center transition duration-300 hover:shadow-custom-md ">
                      <h1 className="font-bold xl:text-2xl lg:text-xl text-lg capitalize">
                        {name}
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

import Hero from "@/components/Hero";
import WebLayout from "@/layouts/WebLayout";
import Head from "next/head";
import Link from "next/link";

export default function ProductsAndServices() {
  const categories = [
    {
      name: "crane",
      path: "product_&_services/cranes",
    },
    {
      name: "sling inspection",
      path: "product_&_services/sling_inspection",
    },

    {
      name: "electrical",
      path: "product_&_services/electrical",
    },
    {
      name: "factory maintenance",
      path: "product_&_services/factory_maintenance",
    },
    {
      name: "radio control system",
      path: "product_&_services/radio_control_system",
    },
    {
      name: "construction",
      path: "product_&_services/construction",
    },
    {
      name: "rates",
      path: "product_&_services/rates",
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

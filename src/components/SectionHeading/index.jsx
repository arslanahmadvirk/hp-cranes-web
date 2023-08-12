export default function SectionHeading({ heading }) {
  return (
    <>
      <h1 className="text-center px-8 mb-2 font-bold text-lg lg:text-xl tracking-wider">
        {heading || "Your Heading"}
      </h1>
      <hr className="w-16 mx-auto border-t-3 border-primary-yellow-dark" />
    </>
  );
}
import SectionHeading from "@/components/SectionHeading";
import { useState } from "react";
import { Gallery } from "react-grid-gallery";
import { Lightbox } from "yet-another-react-lightbox";

export function GalleryGrid({ images, galleryName }) {
  const [index, setIndex] = useState(-1);

  const handleClick = (index) => setIndex(index);
  return (
    <div className="container 2xl:max-w-screen-2xl mx-auto lg:py-24 py-14 overflow-hidden">
      <SectionHeading heading={galleryName} />
      <div className="mt-14">
        <Gallery
          images={images}
          margin={4}
          enableImageSelection={false}
          onClick={handleClick}
        />
        <Lightbox
          slides={images}
          open={index >= 0}
          index={index}
          close={() => setIndex(-1)}
        />
      </div>
    </div>
  );
}

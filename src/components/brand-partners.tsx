import React from "react";
import {
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "./ui/section-header";
import Button from "./ui/button";
import {IoIosArrowForward} from "react-icons/io";
import Image from "next/image";

type BrandPartnersProps<T> = {
  data: T[];
  image: (item: T) => string;
  alt: (item: T) => string;
  width: (item: T) => number;
  height: (item: T) => number;
};

function BrandPartners<T>({
  data,
  image,
  alt,
  width,
  height,
}: BrandPartnersProps<T>) {
  return (
    <div className="mx-auto xl:w-wide px-4 xl:px-0 md:flex flex-col gap-3.75 hidden py-10">
      <div className="flex items-center justify-between">
        <SectionHeader className="flex flex-row items-center gap-2">
          <SectionTitle className="text-[16px] text-black font-medium">
            proud to be part of
          </SectionTitle>
          <SectionSubTitle className="text-[24px]">pet sellers</SectionSubTitle>
        </SectionHeader>
        <Button color="primaryColor" iconRight={<IoIosArrowForward />}>
          view all aour sellers
        </Button>
      </div>
      <div className="flex items-center gap-5">
        {data.map((item, index) => (
          <div
            key={index}
            className="p-2.5 w-37.75 h-28 flex items-center justify-center"
          >
            <Image
              src={image(item)}
              alt={alt(item)}
              width={width(item)}
              height={height(item)}
              loading="eager"
            />
          </div>
        ))}
      </div>
    </div>
  );
}

export default BrandPartners;

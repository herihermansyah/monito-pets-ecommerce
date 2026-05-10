import React from "react";
import Breadcrumb from "../breadcrumb";
import Banner from "../ui/banner";
import {
  SectionDescription,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "../ui/section-header";
import Button from "@/components/ui/button";
import {MdOutlinePlayCircle} from "react-icons/md";
import ProductCollection from "../section/product-collection";
import {products} from "@/data/product";

function Category() {
  return (
    <div>
      <Breadcrumb />
      <Banner
        className="mt-2.25 mb-8"
        color="tertiary"
        image="/banner3.png"
        square="tertiary"
        imageClass="min-w-[650px] translate-y-11 md:translate-x-15 "
      >
        <SectionHeader className="items-center md:items-end ">
          <SectionTitle className="text-[36px] md:text-[46px] text-white">
            one more friend
          </SectionTitle>
          <SectionSubTitle className="mt-1 mb-2 text-[24px] md:text-[28px] text-white">
            thousands more fun!
          </SectionSubTitle>
          <SectionDescription className="w-85 md:w-98.5 text-center md:text-right text-white">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </SectionDescription>
          <div className="flex items-center gap-3.25 mt-5">
            <Button
              color="primaryColor"
              className="ring-neutral-color-00 text-neutral-color-00"
              size="large"
              iconRight={<MdOutlinePlayCircle size={24} />}
            >
              view intro
            </Button>
            <Button
              color="darkBlue"
              className="bg-neutral-color-00 text-neutral-color-100"
              size="large"
            >
              explore now
            </Button>
          </div>
        </SectionHeader>
      </Banner>
      <ProductCollection
        data={products}
        title="all products"
        subTitle="take a look at some of our pets"
      />
    </div>
  );
}

export default Category;

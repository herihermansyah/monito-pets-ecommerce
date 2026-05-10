import Banner from "@/components/ui/banner";
import BrandPartners from "@/components/brand-partners";
import {HeroHome} from "@/components/section/hero";
import ProductCollection from "@/components/section/product-collection";
import {products} from "@/data/product";
import React from "react";
import {
  SectionDescription,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "@/components/ui/section-header";
import {partnersData} from "@/data/partners-data";
import BlogCollection from "@/components/section/blog-collection";
import {blogData} from "@/data/blog-data";
import Button from "@/components/ui/button";
import {MdOutlinePlayCircle} from "react-icons/md";

function Home() {
  return (
    <div className="pb-10">
      <HeroHome />
      <ProductCollection
        title="what new?"
        subTitle="take a look at some of our pets"
        data={products.slice(0, 8)}
      />

      {/* banner */}
      <Banner image="/banner1.png">
        <SectionHeader className="items-center md:items-end">
          <SectionTitle className="text-[36px] md:text-[46px]">
            one more friend
          </SectionTitle>
          <SectionSubTitle className="mt-1 mb-2 text-[24px] md:text-[28px]">
            thousands more fun!
          </SectionSubTitle>
          <SectionDescription className="w-85 md:w-98.5 text-center md:text-right">
            Having a pet means you have more joy, a new friend, a happy person
            who will always be with you to have fun. We have 200+ different pets
            that can meet your needs!
          </SectionDescription>
        </SectionHeader>
        <div className="flex items-center gap-3.25">
          <Button
            color="primaryColor"
            size="large"
            iconRight={<MdOutlinePlayCircle size={24} />}
          >
            view intro
          </Button>
          <Button color="darkBlue" size="large">
            explore now
          </Button>
        </div>
      </Banner>

      <ProductCollection
        title="Hard to choose right products for your pets?"
        subTitle="our products"
        data={products.slice(0, 8)}
      />

      <BrandPartners
        data={partnersData}
        image={(item) => item.image}
        alt={(item) => item.alt}
        width={(item) => item.width}
        height={(item) => item.height}
      />

      {/* banner */}
      <Banner
        className="hidden md:block"
        imageStylePosition="right"
        discoveryText="left"
        color="secondary"
        square="secondary"
        image="/banner2.svg"
        imageClass="top-20 md:top-10 -translate-y-10 min-w-[1000px] md:min-w-[600px] rotate-[90deg] md:rotate-[0deg]"
      >
        <SectionHeader className="items-center md:items-start">
          <SectionTitle className="text-[36px] md:text-[46px]">
            Adoption
          </SectionTitle>
          <SectionSubTitle className="mt-1 mb-2 text-[24px] md:text-[28px]">
            We need help. so do they.
          </SectionSubTitle>
          <SectionDescription className="w-85 md:w-98.5 text-center md:text-left">
            Adopt a pet and give it a home, it will be love you back
            unconditionally.
          </SectionDescription>
        </SectionHeader>
        <div className="flex items-center gap-3.25">
          <Button
            color="primaryColor"
            size="large"
            iconRight={<MdOutlinePlayCircle size={24} />}
          >
            view intro
          </Button>
          <Button color="darkBlue" size="large">
            explore now
          </Button>
        </div>
      </Banner>
      <BlogCollection
        data={blogData.slice(0, 3)}
        title="You already know ?"
        subTitle="Useful pet knowledge"
      />
    </div>
  );
}

export default Home;

import React from "react";
import {
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "../ui/section-header";
import Button from "../ui/button";
import {IoIosArrowForward} from "react-icons/io";
import ProductCard from "../product-card";
import {blogDataType} from "@/data/blog-data";

interface BlogCollectionType {
  data: blogDataType[];
  title: string;
  subTitle: string;
}

function BlogCollection({data, title, subTitle}: BlogCollectionType) {
  return (
    <section className="mx-auto xl:w-wide px-4 xl:px-0 flex flex-col gap-7 pt-15 pb-9">
      <div className="flex items-center justify-between">
        <SectionHeader>
          <SectionTitle className="text-[16px] font-medium text-black">
            {title}
          </SectionTitle>
          <SectionSubTitle className="text-[24px] font-bold leading-9">
            {subTitle}
          </SectionSubTitle>
        </SectionHeader>
        <Button color="primaryColor" iconRight={<IoIosArrowForward />}>
          view more
        </Button>
      </div>
      <ProductCard
        className="lg:grid-cols-3"
        data={data}
        thumbnail={(item) => item.thumbnail}
        name={(item) => item.name}
        category={(item) => item.category}
        description={(item) => item.description}
      />
    </section>
  );
}

export default BlogCollection;

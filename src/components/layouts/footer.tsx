import React from "react";
import NewsLetter from "../news-letter";
import MenuHeader from "../menu-header";
import SocialMedia from "../social-media";
import Logo from "../logo";
import Link from "next/link";

function Footer() {
  const currentYear = new Date().getFullYear();
  return (
    <div className="bg-mon-yellow rounded-tr-[30px] rounded-tl-[30px]">
      <div className="mx-auto xl:w-wide px-4 xl:px-0 pt-20 pb-10 flex flex-col gap-10">
        <div className="flex flex-col gap-10 pb-10 border-b-2 border-b-neutral-color-20">
          <NewsLetter />
          <div className="flex flex-col gap-5 md:flex-row items-center justify-between">
            <MenuHeader
              className="flex-row gap-10"
              titleClass="text-[16px] font-medium"
            />
            <SocialMedia />
          </div>
        </div>
        <div className="flex flex-col lg:flex-row items-center justify-between">
          <p className="text-[10px] mt-2 lg:mt-0 lg:text-[14px] font-medium text-neutral-color-60 order-last lg:order-0">
            &copy; {currentYear} 2022 Monito. All rights reserved.
          </p>
          <Logo className="order-first mb-8 lg:mb-0 lg:order-0" />
          <div className=" flex items-center gap-10 text-[12px] lg:text-[14px] font-medium text-neutral-color-60 capitalize">
            <Link href={"/term"}>term of service</Link>
            <Link href={"/privacy"}>privacy policy</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;

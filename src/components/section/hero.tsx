import React from "react";
import {
  SectionDescription,
  SectionHeader,
  SectionSubTitle,
  SectionTitle,
} from "../ui/section-header";
import Button from "../ui/button";
import {FaRegCirclePlay} from "react-icons/fa6";
import Image from "next/image";

function HeroHome() {
  return (
    <section className="bg-mon-yellow-40 pt-26.75 pb-100.75 md:py-47 rounded-br-[30px] rounded-bl-[30px] overflow-hidden">
      <div className="mx-auto xl:w-wide px-2.5 xl:px-0 relative ">
        <div className="flex flex-col gap-8.5 relative z-30">
          <SectionHeader>
            <SectionTitle className="text-[46px] md:text-[60px] md:leading-17">
              one more friend
            </SectionTitle>
            <SectionSubTitle className="md:mt-1 mb-3 md:mb-6 text-[28px] md:text-[46px] md:leading-17">
              thousand more fun!
            </SectionSubTitle>
            <SectionDescription className="sm:w-120 md:text-[16px]">
              Having a pet means you have more joy, a new friend, a happy person
              who will always be with you to have fun. We have 200+ different
              pets that can meet your needs!
            </SectionDescription>
          </SectionHeader>
          <div className="flex items-center gap-5">
            <Button
              size="large"
              color="primaryColor"
              iconRight={<FaRegCirclePlay size={24} />}
            >
              view intro
            </Button>
            <Button size="large" color="darkBlue">
              explore now
            </Button>
          </div>
        </div>
        {/* square element */}
        <div className="w-158.75 h-158.75 bg-mon-yellow rounded-[99px] absolute -top-180 -left-55 md:-top-195 md:-left-90  rotate-[25.23deg]" />
        <div className="hidden md:block w-158.75 h-158.75 bg-mon-yellow rounded-[99px] absolute -bottom-204 -left-26.25 rotate-[56.47deg]" />

        <div className="w-158.75 h-158.75 bg-mon-yellow rounded-[99px] absolute -bottom-185 -right-70  md:-bottom-103.5 z-2 md:-right-8 rotate-[25.23deg]" />
        <div className="w-158.75 h-158.75 bg-dark-blue rounded-[99px] absolute -bottom-190 -right-63 md:-bottom-111 z-1 md:right-6 rotate-[9.35deg]" />

        <div className="hidden md:block w-16.75 h-16.75 bg-mon-yellow rounded-[20px] absolute z-2 top-0 -left-2 rotate-[25.23deg]" />

        <div className="w-3 h-3 md:w-5.25 md:h-5.25 bg-dark-blue rounded-sm md:rounded-md absolute z-2 md:top-0 top-18 right-22 md:right-140 rotate-[25.23deg]" />
        <div className="w-3.75 h-3.75 md:w-6.75 md:h-6.75 bg-mon-yellow rounded-[9px] absolute z-1 top-16 right-21 md:-top-2 md:right-139 rotate-[22.85deg]" />

        <div className="w-3.5 h-3.5 bg-mon-yellow rounded-sm absolute z-1 top-13 right-4 md:-top-15 md:right-139 rotate-[22.85deg]" />

        <div className="absolute -bottom-101 md:-top-26 w-128.5 md:w-236 left-1/2 -translate-x-1/2 md:-translate-x-50 md:-right-30.25 z-3">
          <Image
            src="/herohome.svg"
            alt="hero home"
            width={944}
            height={693}
            loading="eager"
          />
        </div>
      </div>
    </section>
  );
}

export {HeroHome};

import Image from "next/image";
import React from "react";

import {twMerge} from "tailwind-merge";
import {clsx, type ClassValue} from "clsx";

function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

interface BannerType {
  image?: string;
  imageClass?: string;
  color?: "primary" | "secondary" | "tertiary";
  square?: "primay" | "secondary" | "tertiary";
  discoveryText?: "left" | "right";
  imageStylePosition?: "left" | "right";
  children?: React.ReactNode;
  className?: string;
}

function Banner({
  color = "primary",
  image,
  imageClass,
  square = "primay",
  discoveryText = "right",
  imageStylePosition = "left",
  children,
  className,
}: BannerType) {
  const colorStyle = {
    primary: "bg-dark-blue",
    secondary: "bg-mon-yellow-100",
    tertiary: "bg-mon-yellow-40",
  };

  const discoveryStyle = {
    right:
      "right-1/2 translate-x-1/2 md:translate-x-0 md:right-20 md:items-end",
    left: "left-1/2 -translate-x-1/2 md:translate-x-0 md:left-20",
  };

  const imageStyle = {
    left: "md:top-9 md:translate-x-0 md:left-0",
    right: "md:top-9 md:translate-x-0 md:right-0",
  };

  return (
    <div className={cn("px-4 xl:px-0 xl:w-wide mx-auto", className)}>
      <div
        className={cn(
          "h-160 md:h-94.5 rounded-[20px] relative overflow-hidden",
          colorStyle[color],
        )}
      >
        <div className="relative z-5 flex items-center justify-between">
          <Image
            src={image ?? "/default.png"}
            alt="banner image"
            width={513}
            height={342}
            loading="eager"
            className={cn(
              "min-w-128.25 absolute top-75 translate-y-5 -translate-x-1/2 left-1/2",
              imageStyle[imageStylePosition],
              imageClass,
            )}
          />
          <div
            className={cn(
              `absolute top-16 flex flex-col gap-6 ${discoveryStyle[discoveryText]}`,
            )}
          >
            {children}
          </div>
        </div>

        {/* primary */}
        {square === "primay" && (
          <>
            <div className="z-1 w-196.75 h-196.75 bg-dark-blue-80 rounded-[99px] rotate-[28.25deg] absolute top-130 md:top-40 -left-47" />
            <div className="w-196.75 h-196.75 bg-mon-yellow-40 rounded-[99px] rotate-[11.41deg] md:rotate-[25.23deg] absolute -top-110 md:-top-98 -right-25 md:-right-61" />
          </>
        )}

        {/* secondary */}
        {square === "secondary" && (
          <>
            <div className="z-1 w-196.75 h-196.75 bg-mon-yellow-40 rounded-[99px] rotate-[154.77deg] absolute top-130 md:-top-100 -left-47" />
            <div className="w-196.75 h-196.75 bg-mon-yellow opacity-50 rounded-[99px] rotate-[11.41deg] md:rotate-[151.75deg] absolute -top-110 md:top-45 -right-25 md:-right-45" />
          </>
        )}

        {/* tertiary */}
        {square === "tertiary" && (
          <>
            <div className="z-1 w-196.75 h-196.75 bg-dark-blue-80 rounded-[99px] rotate-[160.22deg] absolute top-130 md:-top-10 -right-30" />
          </>
        )}
      </div>
    </div>
  );
}

export default Banner;

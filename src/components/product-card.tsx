import React from "react";
import {Card, CardFooter, ImageCard} from "./ui/card";
import Link from "next/link";
import {twMerge} from "tailwind-merge";
import {clsx, type ClassValue} from "clsx";

type ProductCardType<T> = {
  data: T[];
  thumbnail: (item: T) => string;
  name: (item: T) => string;
  gender?: (item: T) => string;
  age?: (item: T) => number;
  price?: (item: T) => number;
  description?: (item: T) => string;
  category?: (item: T) => string;
  className?: string;
};

function cn(...input: ClassValue[]) {
  return twMerge(clsx(input));
}

function ProductCard<T>({
  data,
  thumbnail,
  name,
  gender,
  age,
  price,
  description,
  category,
  className,
}: ProductCardType<T>) {
  return (
    <div className={cn("grid grid-cols-2 gap-3", className)}>
      {data.map((item, index) => (
        <Card key={index}>
          <ImageCard
            src={thumbnail(item)}
            alt={name(item)}
            width={200}
            height={200}
            className="rounded-xl"
          />
          <Link href={"/"}>
            <CardFooter className="gap-1 px-2 pt-2 pb-5">
              {category && (
                <span className="mb-2.5 bg-blue-sea text-neutral-color-00 px-2.5 py-0.5 text-[10px] font-bold rounded-[28px] w-fit">
                  {category(item)}
                </span>
              )}

              <h4 className="text-[16px] font-bold text-neutral-color-100 capitalize">
                {name(item)}
              </h4>

              {description && (
                <p className="mt-1.5 text-[14px] text-neutral-color-80">
                  {description(item)}
                </p>
              )}
              {(gender ?? age) && (
                <div className="flex flex-col lg:flex-row lg:items-center gap-1 lg:gap-3 text-[12px]  text-neutral-color-60 whitespace-nowrap">
                  {gender && (
                    <span>
                      gender: <span className="font-bold">{gender(item)}</span>
                    </span>
                  )}
                  {age && (
                    <span>
                      age: <span className="font-bold">{age(item)} month</span>
                    </span>
                  )}
                </div>
              )}
              {price && (
                <h5 className="text-[14px] font-bold text-neutral-color-100">
                  {price(item)}
                </h5>
              )}
            </CardFooter>
          </Link>
        </Card>
      ))}
    </div>
  );
}

export default ProductCard;

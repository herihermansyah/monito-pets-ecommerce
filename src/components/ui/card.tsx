import {clsx, type ClassValue} from "clsx";
import Image from "next/image";
import React from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface CardProps {
  children?: React.ReactNode;
  className?: string;
}

function Card({children, className}: CardProps) {
  return (
    <div
      className={cn(
        "flex flex-col gap-2 shadow-custom p-2 rounded-xl",
        className,
      )}
    >
      {children}
    </div>
  );
}

interface imageCardProps extends CardProps {
  src: string;
  alt: string;
  width: number;
  height: number;
}

function ImageCard({src, alt, width, height, className}: imageCardProps) {
  return (
    <Image
      src={src}
      alt={alt}
      width={width}
      height={height}
      className={cn("w-full", className)}
    />
  );
}

function CardFooter({children, className}: CardProps) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}

export {Card, ImageCard, CardFooter};

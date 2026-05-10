import {clsx, type ClassValue} from "clsx";
import React from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface SectionHeaderProps {
  children?: React.ReactNode;
  className?: string;
}

function SectionHeader({children, className}: SectionHeaderProps) {
  return <div className={cn("flex flex-col", className)}>{children}</div>;
}

function SectionTitle({children, className}: SectionHeaderProps) {
  return (
    <h3
      className={cn(
        "font-extrabold leading-15 text-dark-blue-80 capitalize",
        className,
      )}
    >
      {children}
    </h3>
  );
}

function SectionSubTitle({children, className}: SectionHeaderProps) {
  return (
    <h4
      className={cn(
        "font-bold leading-9.5 text-dark-blue-80 capitalize",
        className,
      )}
    >
      {children}
    </h4>
  );
}

function SectionDescription({children, className}: SectionHeaderProps) {
  return (
    <p
      className={cn(
        "text-[12px] font-medium text-neutral-color-80",
        className,
      )}
    >
      {children}
    </p>
  );
}

export {SectionHeader, SectionTitle, SectionSubTitle, SectionDescription};

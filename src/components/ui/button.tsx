import {clsx, type ClassValue} from "clsx";
import React from "react";
import {twMerge} from "tailwind-merge";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  size?: "small" | "large";
  rounded?: "small" | "full";
  circle?: "small" | "large" | "none";
  color?:
    | "darkBlue"
    | "darkBlue40"
    | "darkBlue60"
    | "darkBlue80"
    | "primaryColor";
  iconLeft?: React.ReactNode;
  iconRight?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function Button({
  size = "small",
  rounded = "small",
  color = "primaryColor",
  circle = "none",
  iconLeft,
  iconRight,
  className,
  children,
  disabled,
  ...props
}: ButtonProps) {
  const sizeStyle = {
    small: "px-[28px] py-[12px] text-[14px]",
    large: "px-[28px] pt-[14px] pb-[10px] text-[16px] font-bold",
  };

  const roundedStyle = {
    small: "rounded-[57px]",
    full: "rounded-full",
  };

  const colorStyle = {
    darkBlue: "bg-dark-blue text-neutral-color-00",
    darkBlue40: "bg-dark-blue-40 text-neutral-color-00",
    darkBlue60:
      "bg-dark-blue-60 text-neutral-color-00 ring-2 ring-inset ring-dark-blue-40",
    darkBlue80: "bg-dark-blue-80 text-neutral-color-00",
    primaryColor:
      "ring-2 ring-inset ring-dark-blue text-dark-blue",
  };

  const disableStyle = `bg-neutral-color-20 ring-none text-neutral-color-60`;
  const finalStyle = disabled ? disableStyle : colorStyle[color];

  const isCircle = circle !== "none";

  const circleStyle = {
    small: "w-[48px] h-[48px] p-0 rounded-full ",
    large: "w-[48px] h-[48px] p-0 rounded-full",
    none: "",
  };

  const baseStyle = `active:scale-99 font-medium cursor-pointer inline-flex items-center justify-center gap-2 transition focus:outline-none disabled:opacity-50 disabled:cursor-not-allowed`;
  return (
    <button
      disabled={disabled}
      className={cn(
        `${isCircle ? circleStyle[circle] : `${sizeStyle[size]} ${roundedStyle[rounded]}`} ${finalStyle} ${baseStyle} ${className}`,
      )}
      {...props}
    >
      {iconLeft && <span className="flex items-center">{iconLeft}</span>}
      {!isCircle && <span className="capitalize whitespace-nowrap">{children}</span>}
      {iconRight && <span className="flex items-center">{iconRight}</span>}
    </button>
  );
}

export default Button;

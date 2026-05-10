import {clsx, type ClassValue} from "clsx";
import React from "react";
import {twMerge} from "tailwind-merge";
import {PiWarningCircle} from "react-icons/pi";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface InputProps extends Omit<
  React.InputHTMLAttributes<HTMLInputElement>,
  "size"
> {
  label?: string;
  size?: "small" | "large";
  error?: string;
  labelClassName?: string;
  iconleft?: React.ReactNode;
  iconright?: React.ReactNode;
}

function Input({
  label,
  size = "small",
  error,
  className,
  labelClassName,
  iconleft,
  iconright,
  ...props
}: InputProps) {
  const sizeStyle = {
    small: "px-[22px] py-[12px] text-[14px]",
    large: "px-[28px] py-[14px] text-[14px]",
  };

  const baseInputStyle =
    "w-full h-[48px] border-[1px] rounded-[8px] bg-neutral-color-00 font-medium outline-none";

  const stateStyle = error
    ? "border-red-500 focus:ring-red-500"
    : "border-neutral-color-40 focus:border-neutral-color-40";

  const isIconActive = iconleft || iconright ? "pl-10" : sizeStyle[size];

  return (
    <div className="flex flex-col gap-2.5 w-full">
      {/* label line */}
      {label && (
        <label
          className={cn(
            "text-[14px] font-medium capitalize text-neutral-color-80",
            labelClassName,
          )}
        >
          {label}
        </label>
      )}

      {/* input line*/}
      <div className="relative flex items-center">
        {/* icon left */}
        {iconleft && (
          <span className="absolute left-4 text-neutral-color-60">
            {iconleft}
          </span>
        )}
        <input
          className={cn(baseInputStyle, stateStyle, isIconActive, className)}
          {...props}
        />
        {/* icon right */}
        {iconright && (
          <span className="absolute right-4 text-neutral-color-60 cursor-pointer">
            {iconright}
          </span>
        )}
      </div>

      {/* error line */}
      {error && (
        <div className="text-red-500 text-xs flex items-center gap-1">
          <span>{<PiWarningCircle size={18} />}</span>
          <span>{error}</span>
        </div>
      )}
    </div>
  );
}

export default Input;

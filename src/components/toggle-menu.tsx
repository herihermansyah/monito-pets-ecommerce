import {clsx, type ClassValue} from "clsx";
import React, {ButtonHTMLAttributes} from "react";
import {twMerge} from "tailwind-merge";

interface TogglMenuProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  click?: boolean;
  iconOn?: React.ReactNode;
  iconOff?: React.ReactNode;
  className?: string;
}

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function ToggleMenu({
  iconOn,
  iconOff,
  className,
  click,
  ...props
}: TogglMenuProps) {
  return (
    <button
      className={cn(
        "text-neutral-color-100 active:scale-90 cursor-pointer",
        className,
      )}
      {...props}
    >
      {click ? iconOn || "open" : iconOff || "close"}
    </button>
  );
}

export default ToggleMenu;

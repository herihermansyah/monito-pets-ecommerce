"use client";
import Link from "next/link";
import React from "react";
import {twMerge} from "tailwind-merge";
import {clsx, type ClassValue} from "clsx";
import {usePathname} from "next/navigation";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MenuNavigationProps {
  children?: React.ReactNode;
  className?: string;
}

function MenuNavigation({className, children, ...props}: MenuNavigationProps) {
  return (
    <nav className={cn(className)} {...props}>
      {children}
    </nav>
  );
}

// menu title
function MenuTitle({children, className}: MenuNavigationProps) {
  return <h4 className={cn(className)}>{children}</h4>;
}

// menu list
function MenuList({children, className}: MenuNavigationProps) {
  return (
    <ul className={cn(`flex items-center gap-4`, className)}>{children}</ul>
  );
}

// menu item
function MenuItem({children, className}: MenuNavigationProps) {
  return <li className={cn(className)}>{children}</li>;
}

// menu link
interface MenuLinkProps extends MenuNavigationProps {
  className?: string;
  activeClassName?: string;
  href: string;
}

function MenuLink({children, className, href, activeClassName}: MenuLinkProps) {
  const pathname = usePathname();
  const isActive = pathname === href;
  return (
    <Link
      href={href}
      className={cn(
        "text-[18px] font-semibold capitalize rounded-md transition-all duration-300 ease-in-out",
        isActive
          ? cn("text-neutral-color-60", activeClassName)
          : cn(className),
      )}
    >
      {children}
    </Link>
  );
}

export {MenuNavigation, MenuTitle, MenuList, MenuItem, MenuLink};

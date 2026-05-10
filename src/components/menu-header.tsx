import React from "react";
import {
  MenuItem,
  MenuLink,
  MenuList,
  MenuNavigation,
} from "./ui/menu-navigation";
import {twMerge} from "tailwind-merge";
import {clsx, type ClassValue} from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

interface MenuHeaderProps {
  id: number;
  title: string;
  href: string;
}

const menuHeaderData: MenuHeaderProps[] = [
  {id: 1, title: "home", href: "/"},
  {id: 2, title: "category", href: "/category"},
  {id: 3, title: "about", href: "/about"},
  {id: 4, title: "contact", href: "/contact"},
];

interface HeaderMenuType {
  titleClass?: string;
  className?: string;
}

function MenuHeader({titleClass, className}: HeaderMenuType) {
  return (
    <div>
      <MenuNavigation>
        <MenuList
          className={cn("xl:gap-10 xl:flex-row flex-col gap-8", className)}
        >
          {menuHeaderData.map((item) => (
            <MenuItem key={item.id}>
              <MenuLink className={cn(titleClass)} href={item.href}>
                {item.title}
              </MenuLink>
            </MenuItem>
          ))}
        </MenuList>
      </MenuNavigation>
    </div>
  );
}

export default MenuHeader;

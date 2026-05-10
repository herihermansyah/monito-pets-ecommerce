"use client";

import React from "react";
import MenuHeader from "../menu-header";
import Logo from "../logo";
import Button from "../ui/button";
import Input from "../ui/input";
import {FiSearch} from "react-icons/fi";
import {FiMenu} from "react-icons/fi";
import {MdCloseFullscreen} from "react-icons/md";
import ToggleMenu from "../toggle-menu";
import {twMerge} from "tailwind-merge";
import {clsx, type ClassValue} from "clsx";

function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);
  const [isSearch, setIsSearch] = React.useState(false);
  return (
    <>
      {/* desktop */}
      <div className="hidden container mx-auto xl:w-wide py-7 xl:flex items-center justify-between gap-8">
        <div className="flex items-center gap-12">
          <Logo />
          <MenuHeader />
        </div>
        <div className="flex items-center gap-3.5">
          <Input
            className="rounded-[46px]"
            placeholder="Search something here!"
            size="large"
            iconleft={<FiSearch size={20} />}
          />
          <Button
            size="large"
            color="darkBlue"
            rounded="small"
            className="whitespace-nowrap "
          >
            Join the community
          </Button>
          <div className="bg-red-300 px-4.75 pt-2.5 pb-2 rounded-full">
            <span>vnd</span>
          </div>
        </div>
      </div>

      {/* mobile */}
      <div className="flex z-50 items-center justify-between mx-auto px-2.5 py-4 mt-4 xl:hidden relative">
        <ToggleMenu
          onClick={() => {
            const isCurrentNext = !isOpen;

            setIsOpen(isCurrentNext);

            if (isCurrentNext) {
              setIsSearch(false);
            }
          }}
          click={isOpen}
          iconOn={<MdCloseFullscreen size={32} />}
          iconOff={<FiMenu size={32} />}
        />
        <Logo />
        <button
          onClick={() => {
            const isCurrentNext = !isSearch;
            setIsSearch(isCurrentNext);

            if (isCurrentNext) {
              setIsOpen(false);
            }
          }}
          className="text-neutral-color-100 active:scale-90 cursor-pointer"
        >
          {isSearch ? <MdCloseFullscreen size={32} /> : <FiSearch size={32} />}
        </button>
        <div
          className={cn(
            "flex flex-col items-center bg-neutral-color-00/70 rounded-br-4xl rounded-bl-4xl gap-8 absolute left-1/2 -translate-x-1/2 -z-10 w-full pt-30 pb-10 transition-all duration-700 ease-in-out",
            isOpen ? "translate-y-42" : "-translate-y-full",
          )}
        >
          <MenuHeader />
          <Button
            size="large"
            color="darkBlue"
            rounded="small"
            className="whitespace-nowrap "
          >
            Join the community
          </Button>
        </div>
        <div
          className={cn(
            "absolute  left-1/2 -translate-x-1/2 transition-all duration-500 ease-in-out",
            isSearch ? "translate-y-20" : "-translate-y-50",
          )}
        >
          <Input
            className="rounded-[46px] md:w-175"
            placeholder="Search something here!"
            size="large"
            iconleft={<FiSearch size={20} />}
          />
        </div>
      </div>
    </>
  );
}

export default Header;

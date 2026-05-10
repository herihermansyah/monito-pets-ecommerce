"use client";
import Link from "next/link";
import {usePathname} from "next/navigation";
import React from "react";
import {MdKeyboardArrowRight} from "react-icons/md";

function Breadcrumb() {
  const pathname = usePathname();
  const segments = pathname.split("/").filter((item) => item !== "");

  return (
    <nav className="flex items-center gap-2 text-[14px] font-medium text-neutral-color-60 capitalize mx-auto xl:w-wide px-4 xl:px-0">
      <Link href={"/"}>Home</Link>
      {segments.map((item, index) => {
        const href = `/${segments.slice(0, index + 1).join("/")}`;
        const isLast = index === segments.length - 1;
        const label = item.replace(/-/g, " ");
        return (
          <div className="flex items-center gap-2" key={href}>
            <MdKeyboardArrowRight size={18} />
            {isLast ? <span>{label}</span> : <Link href={href}>{label}</Link>}
          </div>
        );
      })}
    </nav>
  );
}

export default Breadcrumb;

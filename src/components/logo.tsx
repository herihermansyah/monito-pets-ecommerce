import Image from "next/image";
import React from "react";

type LogoType = {
  className?: string;
};

function Logo({className}: LogoType) {
  return (
    <div className={className}>
      <Image
        src="/logo.svg"
        alt="logo"
        width={115}
        height={40}
        priority
        className="min-w-28.75 min-h-10"
      />
    </div>
  );
}

export default Logo;

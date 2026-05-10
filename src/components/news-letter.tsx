import React from "react";
import Input from "./ui/input";
import Button from "./ui/button";

function NewsLetter() {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between bg-dark-blue rounded-2xl p-8 gap-5">
      <h4 className="md:w-150 text-[20px] md:text-[24px] font-bold leading-8 md:leading-9 text-neutral-color-00">
        Register now so you dont miss our programs
      </h4>
      <div className="flex md:flex-row flex-col items-center gap-3 p-3 bg-white w-full rounded-[14px]">
        <Input placeholder="Enter your Email" />
        <Button
          color="darkBlue"
          size="large"
          className="rounded-lg w-full md:w-fit"
        >
          subscribe now
        </Button>
      </div>
    </div>
  );
}

export default NewsLetter;

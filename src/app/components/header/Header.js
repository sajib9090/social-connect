import React from "react";
import { BsSearch } from "react-icons/bs";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import { GoHomeFill } from "react-icons/go";
import Link from "next/link";

const Header = () => {
  return (
    <div className="h-[70px] bg-white shadow-2xl md:hidden grid grid-cols-12 items-center sticky top-0 left-0 z-50">
      <div className="col-span-2 mx-auto">
        <Link href={"/"}>
          <h3 className="font-bold text-xl cursor-pointer">Logo</h3>
        </Link>
      </div>
      <div className="col-span-2 mx-auto">
        <BsSearch className="w-8 h-8 cursor-pointer hover:scale-110 duration-500" />
      </div>
      <div className="col-span-2 mx-auto">
        <Link href={"/"}>
          <GoHomeFill className="w-9 h-9 cursor-pointer hover:scale-110 duration-500" />
        </Link>
      </div>
      <div className="col-span-2 mx-auto">
        <Link href={"/messages"}>
          <BiSolidMessageRoundedDots className="w-9 h-9 cursor-pointer hover:scale-110 duration-500" />
        </Link>
      </div>
      <div className="col-span-2 mx-auto">
        <Link href={"/notification"}>
          <MdNotifications className="w-9 h-9 cursor-pointer hover:scale-110 duration-500" />
        </Link>
      </div>
      <div className="col-span-2 mx-auto">
        <div className="w-[60px] h-[60px] border border-black rounded-full cursor-pointer hover:scale-110 duration-500">
          p
        </div>
      </div>
    </div>
  );
};

export default Header;

import React from "react";
import { GoHomeFill } from "react-icons/go";
import { BsSearch } from "react-icons/bs";
import { BiSolidMessageRoundedDots } from "react-icons/bi";
import { MdNotifications } from "react-icons/md";
import Link from "next/link";

const Sidebar = () => {
  return (
    <div className="h-screen flex flex-col justify-center px-4 sticky z-50 top-0 left-0">
      <div className="mb-auto pt-6">
        <h1>SocialGram</h1>
      </div>
      <div className="space-y-4">
        <div className=" cursor-pointer hover:bg-gray-200 hover:rounded-sm duration-500 py-2">
          <Link href={"/"} className="flex items-center">
            <GoHomeFill className="w-6 h-6 ml-2" />
            <h3 className="font-semibold ml-2 text-lg">Home</h3>
          </Link>
        </div>
        <div className=" cursor-pointer hover:bg-gray-200 hover:rounded-sm duration-500 py-2">
          <Link href={"#"} className="flex items-center">
            <BsSearch className="w-6 h-6 ml-2" />
            <h3 className="font-semibold ml-2 text-lg">Search</h3>
          </Link>
        </div>
        <div className=" cursor-pointer hover:bg-gray-200 hover:rounded-sm duration-500 py-2">
          <Link href={"/messages"} className="flex items-center">
            <BiSolidMessageRoundedDots className="w-6 h-6 ml-2" />
            <h3 className="font-semibold ml-2 text-lg">Messages</h3>
          </Link>
        </div>
        <div className=" cursor-pointer hover:bg-gray-200 hover:rounded-sm duration-500 py-2">
          <Link href={"/notification"} className="flex items-center">
            <MdNotifications className="w-6 h-6 ml-2" />
            <h3 className="font-semibold ml-2 text-lg">Notifications</h3>
          </Link>
        </div>
      </div>
      <div className="mt-auto pb-6">
        <h3>Profile</h3>
      </div>
    </div>
  );
};

export default Sidebar;

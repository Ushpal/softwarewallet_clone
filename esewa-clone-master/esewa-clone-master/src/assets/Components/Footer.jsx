import React from "react";

import { LuScrollText } from "react-icons/lu";
import { BiSolidContact } from "react-icons/bi";
import { RiQrScan2Line } from "react-icons/ri";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div className="flex justify-around space-x-2 w-full lg:w-[30rem] drop-shadow-md border-t-2 items-center sticky bottom-0 px-5 py-3 bg-white ">
      <Link to="statement">
        <div className="flex flex-col  justify-center items-center">
          <LuScrollText size={25} color={"gray"} />

          <h1 className="text-sm font-semibold text-gray-800">Statement</h1>
        </div>
      </Link>
      <Link
        to="/qr"
        className="flex flex-col absolute cursor-pointer bottom-10 border-2 border-gray-200 rounded-full p-2 bg-green-500  justify-center items-center"
      >
        <RiQrScan2Line size={45} color={"white"} />
      </Link>

      <Link to="contact">
        <div className="flex flex-col  justify-center items-center">
          <BiSolidContact size={25} color={"gray"} />

          <h1 className="text-sm text-gray-800 font-semibold">Contact</h1>
        </div>
      </Link>
    </div>
  );
};

export default Footer;

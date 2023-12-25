import React from "react";
import { Link, useLocation } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import { IoMdNotifications } from "react-icons/io";
import { BiArrowBack } from "react-icons/bi";
import Web3 from "web3" ; 
export const Navbar = () => {
  const { pathname } = useLocation();

  const provider = new Web3.providers.HttpProvider("http://3.7.247.248:8545") ; 
  const web3 = new Web3(provider);




  
    return (
    <div className="w-full md:w-[30rem] flex flex-col  bg-green-500  items-center text-white  sticky top-0 z-[500]  ">
      <div className="   flex justify-between p-5 w-full items-center h-20  ">
        <section className="">
          <Link to="/" className="flex items-center justify-around space-x-2">
            {pathname === "/" && (
              <div className="flex items-center justify-around space-x-2">
                <h1 className="text-white  text-2xl w-max font-bold shadow-2xl text-center px-4 py-2   border-2 rounded-full hover:opacity-80 ">
                  P
                </h1>
                <h1 className="text-white w-full font-semibold">Hi Prashant</h1>
              </div>
            )}
          </Link>
          <div className="flex  items-center justify-around space-x-2">
            {pathname != "/" && (
              <Link
                to="/"
                className="flex items-center justify-around space-x-2"
              >
                <h1 className="text-white  text-xl w-max font-bold shadow-2xl text-center">
                  <BiArrowBack />
                </h1>
              </Link>
            )}

            {pathname === "/contact" && (
              <div className="flex items-center justify-around space-x-2">
                <h1 className="text-white w-full font-semibold text-lg ">
                  Contact
                </h1>
              </div>
            )}
            {pathname === "/statement" && (
              <div className="flex items-center justify-around space-x-2">
                <h1 className="text-white w-full font-semibold text-lg">
                  Statement
                </h1>
              </div>
            )}
            {pathname === "/qr" && (
              <div className="flex items-center justify-around space-x-2">
                <h1 className="text-white w-full font-semibold text-lg">
                  Scan
                </h1>
              </div>
            )}
            {pathname === "/confirm" && (
              <div className="flex items-center justify-around space-x-2">
                <h1 className="text-white w-full font-semibold text-lg">
                  Confirm
                </h1>
              </div>
            )}
          </div>
        </section>

        <div
          className={`flex    items-center space-x-3
   justify-center`}
        >
          <Link to="/contact">
            <BsSearch size={25} className="text-white" />
          </Link>
          <Link to="/statement">
            <IoMdNotifications size={25} className="text-white" />
          </Link>
        </div>
      </div>
    </div>
  );
};

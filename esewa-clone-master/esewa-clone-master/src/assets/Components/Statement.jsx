import React from "react";
import { Link } from "react-router-dom";
import { AiFillCaretDown, AiFillCaretUp } from "react-icons/ai";
const Card = ({ to, from, time, rate, bal }) => {
  return (
    <div className=" rounded-lg bg-white text-black p-5 w-11/12 mt-5">
      <div className="flex">
        <div className=" w-full">
          {to ? (
            <h1 className="w-full text-lg font-semibold">
              Fund Transferred to
              <br /> {to}
            </h1>
          ) : (
            <h1 className="w-full text-lg font-semibold">
              Fund Transferred from
              <br /> {from}
            </h1>
          )}
          <p className="text-sm">{time}</p>
        </div>
        <div className=" flex justify-center">
          {to && <AiFillCaretDown className="text-red-500 mt-1 mr-1" />}
          {from && <AiFillCaretUp className="text-green-500 mt-1 mr-1" />}
          <h1 className="text-gray-600 font-bold">{rate}</h1>
        </div>
      </div>
      <div className="mt-5 flex items-center space-x-2">
        <h1 className=" font-semibold">Balance:</h1>
        <span className=" text-lg text-gray-600 font-bold">{bal}</span>
      </div>
    </div>
  );
};
const Statement = () => {
  return (
    <div className="w-full over  px-2 py-5 flex flex-col relative h-full items-center ">
      <Card to={"Ayan Siddiquie"} time={"7:45 AM"} rate={270} bal={3208.94} />
      <Card from={"Ayan Siddiquie"} time={"7:45 AM"} rate={270} bal={3208.94} />
      <Card from={"Ayan Siddiquie"} time={"7:45 AM"} rate={270} bal={3208.94} />
      <Card from={"Ayan Siddiquie"} time={"7:45 AM"} rate={270} bal={3208.94} />
      <Card from={"Ayan Siddiquie"} time={"7:45 AM"} rate={270} bal={3208.94} />
    </div>
  );
};

export default Statement;

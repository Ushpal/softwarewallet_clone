import React, { useRef, useState } from "react";
import { MdOutlineFlipCameraIos } from "react-icons/md";
import { QrReader } from "react-qr-reader";
import { Link } from "react-router-dom";

const Scanner = () => {
  const [data, setData] = useState();

  const [delayScan, setDelayScan] = useState(500);
  const [toggle, setToggle] = useState(false);
  const ref = useRef(null);
  return (
    <div className="w-full  mt-2 flex flex-col relative h-screen items-center ">
      {data && (
        <div className="text-gray-600 mt-10 absolute top-32 z-50">
          <h1 className="text-xl font-semibold"> Result</h1> <p>{data}</p>
          <div className="w-max m-auto ">
            <Link to="/confirm">
              <button className="z-50  py-2 w-32 px-4 bg-green-600 text-white rounded-lg hover:opacity-90 mt-5">
                Proceed
              </button>
            </Link>
          </div>
        </div>
      )}
      {!data && (
        <>
          <MdOutlineFlipCameraIos
            onClick={() => setToggle(!toggle)}
            className="text-white  mt-4 rounded-full p-2 hover:scale-105 bg-green-500 cursor-pointer z-50 "
            size={50}
          />
          <div ref={ref} className="w-full">
            {toggle && (
              <QrReader
                key="user"
                constraints={{ facingMode: "user" }}
                scanDelay={delayScan}
                delay={500}
                legacyMode={true}
                onResult={(result, error) => {
                  if (!!result) {
                    setData(result?.text);
                    // console.log(result?.text)
                    localStorage.setItem("receiver", result?.text);
                    // window.location.assign("/");
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                className="w-full absolute  "
              />
            )}
            {!toggle && (
              <QrReader
                key="environment"
                constraints={{ facingMode: "environment" }}
                scanDelay={delayScan}
                delay={500}
                legacyMode={true}
                onResult={(result, error) => {
                  if (!!result) {
                    setData(result?.text);
                    // console.log(result?.text)
                    localStorage.setItem("receiver", result?.text);
                    // window.location.assign("/");
                  }

                  if (!!error) {
                    console.info(error);
                  }
                }}
                className="w-full absolute  "
              />
            )}
          </div>
        </>
      )}
    </div>
  );
};

export default Scanner;

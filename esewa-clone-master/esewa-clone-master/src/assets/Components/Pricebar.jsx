import React, { useEffect } from "react";
import { FaMoneyBill } from "react-icons/fa";
import { AiFillEye, AiFillEyeInvisible } from "react-icons/ai";
import { useState } from "react";
import { BiSolidCoinStack } from "react-icons/bi";



import Web3 from "web3" ; 


const Pricebar = () => {
  const provider = new Web3.providers.HttpProvider("http://3.7.247.248:8545") ; 
  const web3 = new Web3(provider);
  const [price, setprice] = useState(0);
  useEffect(() => {
    // first
    var wallet = localStorage.getItem("new_wallet") ;

    if(!wallet && typeof(wallet) != "string" ) {
      const my_wallet = web3.eth.wallet.create(1)[0];
      console.log(my_wallet.address)
      localStorage.setItem("new_wallet" , JSON.stringify(my_wallet)) ; 
      wallet = localStorage.getItem("new_wallet") ;
    }
    else{
      console.log(JSON.parse(wallet).address) 
    }


    web3.eth.getBalance(JSON.parse(wallet).address).then((balance) => {
      setprice(web3.utils.fromWei(balance, 'ether'));
      console.log(price)
    })
  
    // return () => {
    //   second
    // }
  }, [])
  



  const [open, setOpen] = useState(false);
  return (
    <div className=" relative flex justify-center items-center p-5 mt-5   rounded-full w-11/12">
      <div className="bg-white  absolute h-full w-full rounded-3xl"></div>
      <div className="w-full flex justify-between">
        <div className="flex items-center justify-center w-1/2 z-50">
          <FaMoneyBill size={25} color="gray-600" className="text-black " />
          <h1 className="text-gray-600 ml-2 text-md select-none w-full">
            {" "}
            {open ? "Rs." + price : "****"}{" "}
          </h1>
        </div>
        <div className="flex items-center justify-center  w-full z-50">
          {open ? (
            <AiFillEye
              onClick={() => setOpen(false)}
              size={40}
              className="text-gray-600 cursor-pointer z-50"
            />
          ) : (
            <AiFillEyeInvisible
              onClick={() => setOpen(true)}
              size={40}
              className="text-gray-600 cursor-pointer z-50"
            />
          )}
        </div>
        <div className=" flex items-center w-1/2 z-50 ">
          <BiSolidCoinStack
            size={20}
            className="text-gray-600 cursor-pointer w-full z-50 "
          />
          <h1 className=" ml-2 text-black text-sm select-none w-full">
            {" "}
            {open ? "5 SAM " : "****"}{" "}
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Pricebar;

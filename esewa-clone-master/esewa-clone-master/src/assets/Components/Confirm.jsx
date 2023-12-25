import React, { useEffect , useState } from "react";
import { Link } from "react-router-dom";
import Web3 from "web3" ; 
import { ethers, Wallet } from "ethers";


const Confirm = () => {

  const [amount , setAmount ] = useState();
  const [receiver , setreceiver ] = useState();

  
  useEffect( () => {
    const receiver =  localStorage.getItem("receiver"); 
    setreceiver(receiver);
    console.log("rECEIVER IS : " , receiver );
    if(!receiver){
      console.log("Error occured");
    }
    else{
      // setreceiver(receiver);
      // localStorage.removeItem("receiver");
  
    }
  

  }, [])

  async function finalSend()  {

    if(amount > 0){
    const old_wallet = JSON.parse(localStorage.getItem('new_wallet'));

    // const provider = new Web3.providers.HttpProvider("http://3.7.247.248:8545") ; 
    // const web3 = new Web3(provider);

    const provider = new ethers.JsonRpcProvider("http://3.7.247.248:8545");//creating a

    const wallet = new ethers.Wallet(old_wallet.privateKey, provider);
  
    const tx = { to : receiver.toString() , value: ethers.parseEther(amount.toString()) };
  
    const transaction = await wallet.sendTransaction(tx);
  
    const receipt = await transaction.wait();
  
    console.log("transaction is :" , transaction) ;
    console.log("receipt is :" , receipt) ;

    }

    
  }

  


  return (
    <div className="w-full  mt-2 flex flex-col relative h-screen overflow-y-hidden items-center ">
      <div className="z-50 flex flex-col absolute top-32 text-gray-600 font-semibold p-5 bg-white w-11/12">
        <label htmlFor="amount">Amount</label>
        <input
          type="number"
          id="amount"
          onChange={(e) => setAmount(e.target.value)}
          placeholder="Enter amount "
          className="px-2 rounded-md py-2 text-black mt-2 border-2 font-normal"
        />
        <Link to="/statement" className="w-max mx-auto">
          <button onClick={finalSend} className="z-50  py-2 w-32 px-4 bg-green-500 text-white rounded-lg hover:opacity-90 mt-5">
            Send
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Confirm;

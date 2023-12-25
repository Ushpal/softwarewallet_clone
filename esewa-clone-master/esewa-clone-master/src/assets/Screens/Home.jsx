import React from "react";
import Web3 from "web3";
import QRCode from "qrcode.react";

const Home = () => {
  let wallet = localStorage.getItem("new_wallet");

  const provider = new Web3.providers.HttpProvider("http://3.7.247.248:8545");
  const web3 = new Web3(provider);
  if (!wallet && typeof wallet != "string") {
    const my_wallet = web3.eth.wallet.create(1)[0];
    console.log(my_wallet.address);
    localStorage.setItem("new_wallet", JSON.stringify(my_wallet));
    wallet = localStorage.getItem("new_wallet");
  } else {
    console.log(JSON.parse(wallet).address);
  }

  const address = JSON.parse(wallet).address;
  if (!address) {
    console.log("no address");
  }

  const downloadQRCode = () => {
    const qrCodeURL = document
      .getElementById("qrCodeEl")
      .toDataURL("image/png")
      .replace("image/png", "image/octet-stream");
    let aEl = document.createElement("a");
    aEl.href = qrCodeURL;
    aEl.download = "QR_Code.png";
    document.body.appendChild(aEl);
    aEl.click();
    document.body.removeChild(aEl);
  };
  return (
    <div className=" bg-white h-screen overflow-y-hidden mt-5  w-11/12 flex flex-col  items-center    relative px-5    justify-center   rounded-lg">
      <div className=" absolute top-32 overflow-y-hidden w-full">
        <QRCode
          id="qrCodeEl"
          value={address}
          size={200}
          className="w-max mx-auto"
        />
        <div className="flex justify-center items-center space-x-2 mt-4 ">
          <button
            onClick={downloadQRCode}
            className="py-2 w-32 px-4 bg-green-500 text-white rounded-lg hover:opacity-90"
          >
            Download
          </button>
          <button className="py-2 w-32 px-4 bg-green-500 text-white rounded-lg hover:opacity-90">
            Share
          </button>
        </div>
      </div>
      {/* <ScrollToTop /> */}
    </div>
  );
};

export default Home;

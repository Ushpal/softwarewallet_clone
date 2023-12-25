import Web3 from "web3";
import { jsonInterface } from "./donation.js";
import Contract from "web3-eth-contract";
// const Web3 = require("web3");
// var jsonInterface = require("./donation");
var web3 = new Web3(
  Web3.givenProvider ||
    new Web3.providers.HttpProvider("https://rpc-mumbai.maticvigil.com")
);
const deployer = "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b";
const mnemonic =
  "df1e583a43f0e2c78665fcc2cbaf25864e0013d2d8ca42cffc574ad8fb87d905";
let main = async () => {
  const accounts = await web3.eth.getAccounts();
  // var Contract = require("web3-eth-contract");
  Contract.setProvider("https://rpc-mumbai.maticvigil.com");
  var contract = new Contract(
    jsonInterface.abi,
    "0xD40D1Ec7CFcAA2929eC9aCF1744A3246B8bD2C7a"
  );
  const sponsership = async () => {
    let sponsership = await contract.getPastEvents("SponsershipList", {
      fromBlock: 31275790,
      toBlock: 31276790,
    });
    (await sponsership).map((items) => {
      //console.log("SponsershipList : ", items.returnValues);
    });
    return sponsership;
  };
  const redeemList = async () => {
    let sponsership = await contract.getPastEvents("RedeemList", {
      fromBlock: 31276000,
      toBlock: 31277000,
    });
    (await sponsership).map((items) => {
      //console.log("SponsershipList : ", items.returnValues);
    });
    return sponsership;
  };
  const studentList = async () => {
    let sponsership = await contract.getPastEvents("StudentList", {
      fromBlock: 31275790,
      toBlock: 31276790,
    });
    (await sponsership).map((items) => {
      //console.log("SponsershipList : ", items.returnValues);
    });
    return sponsership;
  };
  const donationList = async () => {
    let sponsership = await contract.getPastEvents("DonationList", {
      fromBlock: 31275790,
      toBlock: 31276790,
    });
    (await sponsership).map((items) => {
      //console.log("SponsershipList : ", items.returnValues);
    });
    return sponsership;
  };
  return {
    sponsership: sponsership(),
    studentList: studentList(),
    donationList: donationList(),
    redeemList: redeemList(),
  };
  // let result = await contract.getPastEvents("RedeemList", {
  //   fromBlock: (await web3.eth.getBlockNumber()) - 900,
  //   toBlock: "latest",
  // });
  // (await result).map((items) => {
  //   //console.log("RedeemList : ", items.returnValues);
  // });

  // result = await contract.getPastEvents("StudentList", {
  //   fromBlock: (await web3.eth.getBlockNumber()) - 900,
  //   toBlock: "latest",
  // });
  // (await result).map((items) => {
  //   //console.log("StudentList : ", items.returnValues);
  // });

  // result = await contract.getPastEvents("DonationList", {
  //   fromBlock: (await web3.eth.getBlockNumber()) - 900,
  //   toBlock: "latest",
  // });
  // (await result).map((items) => {
  //   //console.log("DonationList : ", items.returnValues);
  // });

  let donation = [
    { name: "Ashika Nepal", donation: 5000, date: "7/8/2022" },
    { name: "Eshika Shrestha", donation: 60000, date: "2/1/2023" },
    { name: "Abhisek Rana, ", donation: 8000, date: "19/12/2022" },
    { name: "Aaniya Malik", donation: 120000, date: "11/11/2022" },
    { name: "Sagar Jimme, ", donation: 70000, date: "2/2/2022 " },
  ];

  let redeem = [
    {
      budgetFile:
        "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png",
      amount: 5000,
      to: "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b",
    },
    {
      budgetFile:
        "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png",
      amount: 5000,
      to: "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b",
    },
    {
      budgetFile:
        "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png",
      amount: 5000,
      to: "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b",
    },
    {
      budgetFile:
        "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png",
      amount: 5000,
      to: "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b",
    },
    {
      budgetFile:
        "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png",
      amount: 5000,
      to: "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b",
    },
  ];

  let sponser = [
    { name: "Sujan Bhandari", studentID: 5, amount: 56888 },
    { name: "Balendra Bhatta", studentID: 1, amount: 6000 },
    { name: "Sarita Dahal", studentID: 3, amount: 3000 },
    { name: "Aagya Bhattarai", studentID: 2, amount: 7000 },
  ];

  let tx;
  let signPromise;
  let sentTx;
  let i = 4;

  let student = [
    { name: "Prasanna", age: 5, acadamicLevel: "UKG" },
    { name: "Nisha, ", age: 6, acadamicLevel: "UKG" },
    { name: "Ritika, ", age: 8, acadamicLevel: "UKG" },
    { name: "Aanan", age: 12, acadamicLevel: "UKG" },
    { name: "Yuki, ", age: 7, acadamicLevel: "UKG" },
  ];

  //  tx = {
  //   from: deployer,
  //   gas: 999999,
  //   to: '0xD40D1Ec7CFcAA2929eC9aCF1744A3246B8bD2C7a',
  //   data: contract.methods.registerStudent(student[i].name , student[i].age,  student[i].acadamicLevel, "imageUrl" ).encodeABI()
  // };
  //  signPromise = web3.eth.accounts.signTransaction(tx, mnemonic);
  //  signPromise.then((signedTx) => {
  //    sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
  //   sentTx.on("receipt",async receipt => {
  //       //  //console.log(receipt);
  //   });
  //   sentTx.on("error", err => {
  //     //console.log(err);
  //   });
  // }).catch((err) => {});

  // let result = await contract.getPastEvents('StudentList', {
  //   fromBlock: await web3.eth.getBlockNumber() - 900,
  //   toBlock: 'latest'
  // });

  //     (await result).map((items) => {
  //       //console.log(items.returnValues)
  //     });

  sponser = [
    {
      name: "0x872c62aD2876B3aCF23f0E1D18279A91cC01e274",
      studentID: 5,
      amount: 56888,
    },
    {
      name: "0xbEe389596E36ba466218bd4a45a5A8fFD3C43174",
      studentID: 1,
      amount: 6000,
    },
    {
      name: "0x2C610cc9483AbC46c50Fe36414F6183591d4fd3e",
      studentID: 3,
      amount: 3000,
    },
    {
      name: "0x872c62aD2876B3aCF23f0E1D18279A91cC01e274",
      studentID: 2,
      amount: 7000,
    },
  ];

  //   i = 3 ;
  //    tx = {
  //     from: deployer,
  //     gas: 99999,
  //     to: '0xD40D1Ec7CFcAA2929eC9aCF1744A3246B8bD2C7a',
  //     data: contract.methods.sponserStudent(sponser[i].name , sponser[i].studentID, sponser[i].amount ).encodeABI()
  //   };
  //    signPromise = web3.eth.accounts.signTransaction(tx, mnemonic);
  // // //console.log(await signPromise);
  // signPromise.then((signedTx) => {
  //   let sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
  //   sentTx.on("receipt",async receipt => {
  //     // //console.log(" receipt : " , receipt)

  //   });
  //   sentTx.on("error", err => {});
  // }).catch((err) => {});

  //  result = await contract.getPastEvents('SponsershipList', {
  //   fromBlock: await web3.eth.getBlockNumber() - 900,
  //   toBlock: 'latest'
  // });
  //   (await result).map((items) => {
  //       //console.log(items.returnValues)
  //     });

  //  redeem = [
  //   { budgetFile : "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png", amount :  5000, to :  "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b" } ,
  //   { budgetFile : "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png", amount :  5000, to :  "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b" } ,
  //   { budgetFile : "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png", amount :  5000, to :  "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b" } ,
  //   { budgetFile : "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png", amount :  5000, to :  "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b" } ,
  //   { budgetFile : "https://bafybeibs22c3fgpmukczarabemrlalgsolp4xyhtrpzycyakpmshwcknya.ipfs.w3s.link/budget.png", amount :  5000, to :  "0xb3255a0173A7dBeEA62742ee0aC135aBDb82e39b" } ,

  // ]

  // i = 0 ;

  // tx = {
  //   from: deployer,
  //   gas: 99999,
  //   to: '0xD40D1Ec7CFcAA2929eC9aCF1744A3246B8bD2C7a',
  //   data: contract.methods.redeem(redeem[i].budgetFile , redeem[i].amount , redeem[i].to ).encodeABI()
  // };
  //  signPromise = web3.eth.accounts.signTransaction(tx, mnemonic);
  // // //console.log(await signPromise);
  // signPromise.then((signedTx) => {
  // let sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
  // sentTx.on("receipt",async receipt => {});
  // // //console.log(" receipt : " , receipt)
  // sentTx.on("error", err => {});
  // }).catch((err) => {});

  // result = await contract.getPastEvents('RedeemList', {
  // fromBlock: await web3.eth.getBlockNumber() - 900,
  // toBlock: 'latest'
  // });
  // // //console.log( result);

  //     (await result).map((items) => {
  //       //console.log(items.returnValues)
  //     });

  // i = 2 ;

  //      donation = [
  //       { address : "0x2C610cc9483AbC46c50Fe36414F6183591d4fd3e", donation :  5000 } ,
  //       { address : "0xbEe389596E36ba466218bd4a45a5A8fFD3C43174", donation : 60000 } ,
  //       { address : "0x872c62aD2876B3aCF23f0E1D18279A91cC01e274", donation :  8000,  } ,

  //     ]

  // tx = {
  //   from: deployer,
  //   gas: 999999,
  //   to: '0xD40D1Ec7CFcAA2929eC9aCF1744A3246B8bD2C7a',
  //   data: contract.methods.donate(donation[i].address , donation[i].donation ).encodeABI()
  // };
  //  signPromise = web3.eth.accounts.signTransaction(tx, mnemonic);
  // //console.log(await signPromise);
  // signPromise.then((signedTx) => {
  // let sentTx = web3.eth.sendSignedTransaction(signedTx.raw || signedTx.rawTransaction);
  // sentTx.on("receipt",async receipt => {});
  // // //console.log(" receipt : " , receipt)
  // sentTx.on("error", err => {});
  // }).catch((err) => {});

  // result = await contract.getPastEvents('DonationList', {
  // fromBlock: await web3.eth.getBlockNumber() - 900,
  // toBlock: 'latest'
  // });
  // // //console.log( result);

  //     (await result).map((items) => {
  //       //console.log(items.returnValues)
  // return result;
  //     });
};
export default main;
// export default res;

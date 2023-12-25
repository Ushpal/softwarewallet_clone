export const jsonInterface = {
  contractName: "Donation",
  abi: [
    {
      inputs: [],
      stateMutability: "nonpayable",
      type: "constructor",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "DonationList",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "to",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "BudgetDettail",
          type: "string",
        },
      ],
      name: "RedeemList",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "address",
          name: "from",
          type: "address",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "studentID",
          type: "uint256",
        },
      ],
      name: "SponsershipList",
      type: "event",
    },
    {
      anonymous: false,
      inputs: [
        {
          indexed: false,
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          indexed: false,
          internalType: "uint256",
          name: "age",
          type: "uint256",
        },
        {
          indexed: false,
          internalType: "string",
          name: "acadamicLevel",
          type: "string",
        },
        {
          indexed: false,
          internalType: "string",
          name: "imageURL",
          type: "string",
        },
      ],
      name: "StudentList",
      type: "event",
    },
    {
      inputs: [],
      name: "name",
      outputs: [
        {
          internalType: "string",
          name: "",
          type: "string",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [],
      name: "studentID",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "view",
      type: "function",
      constant: true,
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "by",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "donate",
      outputs: [],
      stateMutability: "payable",
      type: "function",
      payable: true,
    },
    {
      inputs: [
        {
          internalType: "address",
          name: "by",
          type: "address",
        },
        {
          internalType: "uint256",
          name: "studentID",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "sponserStudent",
      outputs: [],
      stateMutability: "payable",
      type: "function",
      payable: true,
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "budgetFile",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
        {
          internalType: "address",
          name: "to",
          type: "address",
        },
      ],
      name: "redeem",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "_name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "age",
          type: "uint256",
        },
        {
          internalType: "string",
          name: "acadamicLevel",
          type: "string",
        },
        {
          internalType: "string",
          name: "imageURL",
          type: "string",
        },
      ],
      name: "registerStudent",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [
        {
          internalType: "string",
          name: "name",
          type: "string",
        },
        {
          internalType: "uint256",
          name: "studentId",
          type: "uint256",
        },
        {
          internalType: "uint256",
          name: "amount",
          type: "uint256",
        },
      ],
      name: "registerSponserer",
      outputs: [],
      stateMutability: "nonpayable",
      type: "function",
    },
    {
      inputs: [],
      name: "OwnBalance",
      outputs: [
        {
          internalType: "uint256",
          name: "",
          type: "uint256",
        },
      ],
      stateMutability: "nonpayable",
      type: "function",
    },
  ],
  metadata:
    '{"compiler":{"version":"0.8.17+commit.8df45f5f"},"language":"Solidity","output":{"abi":[{"inputs":[],"stateMutability":"nonpayable","type":"constructor"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"}],"name":"DonationList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"to","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"string","name":"BudgetDettail","type":"string"}],"name":"RedeemList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"address","name":"from","type":"address"},{"indexed":false,"internalType":"uint256","name":"amount","type":"uint256"},{"indexed":false,"internalType":"uint256","name":"studentID","type":"uint256"}],"name":"SponsershipList","type":"event"},{"anonymous":false,"inputs":[{"indexed":false,"internalType":"string","name":"name","type":"string"},{"indexed":false,"internalType":"uint256","name":"age","type":"uint256"},{"indexed":false,"internalType":"string","name":"acadamicLevel","type":"string"},{"indexed":false,"internalType":"string","name":"imageURL","type":"string"}],"name":"StudentList","type":"event"},{"inputs":[],"name":"OwnBalance","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"by","type":"address"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"donate","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"name","outputs":[{"internalType":"string","name":"","type":"string"}],"stateMutability":"view","type":"function"},{"inputs":[{"internalType":"string","name":"budgetFile","type":"string"},{"internalType":"uint256","name":"amount","type":"uint256"},{"internalType":"address","name":"to","type":"address"}],"name":"redeem","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"name","type":"string"},{"internalType":"uint256","name":"studentId","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"registerSponserer","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"string","name":"_name","type":"string"},{"internalType":"uint256","name":"age","type":"uint256"},{"internalType":"string","name":"acadamicLevel","type":"string"},{"internalType":"string","name":"imageURL","type":"string"}],"name":"registerStudent","outputs":[],"stateMutability":"nonpayable","type":"function"},{"inputs":[{"internalType":"address","name":"by","type":"address"},{"internalType":"uint256","name":"studentID","type":"uint256"},{"internalType":"uint256","name":"amount","type":"uint256"}],"name":"sponserStudent","outputs":[],"stateMutability":"payable","type":"function"},{"inputs":[],"name":"studentID","outputs":[{"internalType":"uint256","name":"","type":"uint256"}],"stateMutability":"view","type":"function"}],"devdoc":{"kind":"dev","methods":{},"version":1},"userdoc":{"kind":"user","methods":{},"version":1}},"settings":{"compilationTarget":{"project:/src/contracts/Donation1.sol":"Donation"},"evmVersion":"london","libraries":{},"metadata":{"bytecodeHash":"ipfs"},"optimizer":{"enabled":false,"runs":200},"remappings":[]},"sources":{"project:/src/contracts/Donation1.sol":{"keccak256":"0x6be908cf6d6790ba9fc9e2cfd9a886cf1a3daf71a84492a57435f7978b683192","license":"MIT","urls":["bzz-raw://c3a740bb26777cd69289de94b86b9a3ca892d633b84264b1b0f1b0d5ec380888","dweb:/ipfs/QmZRm6TBjx8BpsvchFW8XdZ2yQNMU8NFitWUyQA95rRtXx"]}},"version":1}',
  bytecode:
    "0x60806040526040518060400160405280600881526020017f446f6e6174696f6e000000000000000000000000000000000000000000000000815250600090816200004a91906200031a565b503480156200005857600080fd5b5033600160006101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff16021790555062000401565b600081519050919050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806200012257607f821691505b602082108103620001385762000137620000da565b5b50919050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302620001a27fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8262000163565b620001ae868362000163565b95508019841693508086168417925050509392505050565b6000819050919050565b6000819050919050565b6000620001fb620001f5620001ef84620001c6565b620001d0565b620001c6565b9050919050565b6000819050919050565b6200021783620001da565b6200022f620002268262000202565b84845462000170565b825550505050565b600090565b6200024662000237565b620002538184846200020c565b505050565b5b818110156200027b576200026f6000826200023c565b60018101905062000259565b5050565b601f821115620002ca5762000294816200013e565b6200029f8462000153565b81016020851015620002af578190505b620002c7620002be8562000153565b83018262000258565b50505b505050565b600082821c905092915050565b6000620002ef60001984600802620002cf565b1980831691505092915050565b60006200030a8383620002dc565b9150826002028217905092915050565b6200032582620000a0565b67ffffffffffffffff811115620003415762000340620000ab565b5b6200034d825462000109565b6200035a8282856200027f565b600060209050601f8311600181146200039257600084156200037d578287015190505b620003898582620002fc565b865550620003f9565b601f198416620003a2866200013e565b60005b82811015620003cc57848901518255600182019150602085019450602081019050620003a5565b86831015620003ec5784890151620003e8601f891682620002dc565b8355505b6001600288020188555050505b505050505050565b610df080620004116000396000f3fe60806040526004361061007b5760003560e01c8063b7e000131161004e578063b7e0001314610119578063d325c71514610144578063d7f513821461016d578063e69d849d146101985761007b565b806306fdde031461008057806338971915146100ab5780638917d33c146100c757806397b38971146100f0575b600080fd5b34801561008c57600080fd5b506100956101b4565b6040516100a29190610509565b60405180910390f35b6100c560048036038101906100c091906105d3565b610242565b005b3480156100d357600080fd5b506100ee60048036038101906100e9919061075b565b610282565b005b3480156100fc57600080fd5b5061011760048036038101906101129190610816565b610362565b005b34801561012557600080fd5b5061012e6103a2565b60405161013b9190610894565b60405180910390f35b34801561015057600080fd5b5061016b600480360381019061016691906108af565b6103a8565b005b34801561017957600080fd5b50610182610434565b60405161018f9190610894565b60405180910390f35b6101b260048036038101906101ad919061091e565b61043c565b005b600080546101c19061098d565b80601f01602080910402602001604051908101604052809291908181526020018280546101ed9061098d565b801561023a5780601f1061020f5761010080835404028352916020019161023a565b820191906000526020600020905b81548152906001019060200180831161021d57829003601f168201915b505050505081565b7fcff1c074265994aa584fd09931da01aa4e7a201173f740d399e41e934cd0872b838383604051610275939291906109cd565b60405180910390a1505050565b60405180608001604052808581526020018481526020018381526020018281525060036000600254815260200190815260200160002060008201518160000190816102cd9190610bb0565b506020820151816001015560408201518160020190816102ed9190610bb0565b5060608201518160030190816103039190610bb0565b509050507f3719250c727a25b7f3336b524c9c73126f86a7c21eb9a2e6efde011bff8f5e698484848460405161033c9493929190610c82565b60405180910390a16002600081548092919061035790610d0b565b919050555050505050565b7f19a68ff717c2046749719cfd854e33cb4062e01472d5fdca51ddbbe801566d0a81838560405161039593929190610d53565b60405180910390a1505050565b60025481565b604051806060016040528084815260200183815260200182815250600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816104179190610bb0565b506020820151816001015560408201518160020155905050505050565b600047905090565b7f94d5e38b6d610151ce7f2d572da9e962e8c55b60140fd44be11a3a47464fd060828260405161046d929190610d91565b60405180910390a15050565b600081519050919050565b600082825260208201905092915050565b60005b838110156104b3578082015181840152602081019050610498565b60008484015250505050565b6000601f19601f8301169050919050565b60006104db82610479565b6104e58185610484565b93506104f5818560208601610495565b6104fe816104bf565b840191505092915050565b6000602082019050818103600083015261052381846104d0565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061056a8261053f565b9050919050565b61057a8161055f565b811461058557600080fd5b50565b60008135905061059781610571565b92915050565b6000819050919050565b6105b08161059d565b81146105bb57600080fd5b50565b6000813590506105cd816105a7565b92915050565b6000806000606084860312156105ec576105eb610535565b5b60006105fa86828701610588565b935050602061060b868287016105be565b925050604061061c868287016105be565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610668826104bf565b810181811067ffffffffffffffff8211171561068757610686610630565b5b80604052505050565b600061069a61052b565b90506106a6828261065f565b919050565b600067ffffffffffffffff8211156106c6576106c5610630565b5b6106cf826104bf565b9050602081019050919050565b82818337600083830152505050565b60006106fe6106f9846106ab565b610690565b90508281526020810184848401111561071a5761071961062b565b5b6107258482856106dc565b509392505050565b600082601f83011261074257610741610626565b5b81356107528482602086016106eb565b91505092915050565b6000806000806080858703121561077557610774610535565b5b600085013567ffffffffffffffff8111156107935761079261053a565b5b61079f8782880161072d565b94505060206107b0878288016105be565b935050604085013567ffffffffffffffff8111156107d1576107d061053a565b5b6107dd8782880161072d565b925050606085013567ffffffffffffffff8111156107fe576107fd61053a565b5b61080a8782880161072d565b91505092959194509250565b60008060006060848603121561082f5761082e610535565b5b600084013567ffffffffffffffff81111561084d5761084c61053a565b5b6108598682870161072d565b935050602061086a868287016105be565b925050604061087b86828701610588565b9150509250925092565b61088e8161059d565b82525050565b60006020820190506108a96000830184610885565b92915050565b6000806000606084860312156108c8576108c7610535565b5b600084013567ffffffffffffffff8111156108e6576108e561053a565b5b6108f28682870161072d565b9350506020610903868287016105be565b9250506040610914868287016105be565b9150509250925092565b6000806040838503121561093557610934610535565b5b600061094385828601610588565b9250506020610954858286016105be565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109a557607f821691505b6020821081036109b8576109b761095e565b5b50919050565b6109c78161055f565b82525050565b60006060820190506109e260008301866109be565b6109ef6020830185610885565b6109fc6040830184610885565b949350505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a667fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a29565b610a708683610a29565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610aad610aa8610aa38461059d565b610a88565b61059d565b9050919050565b6000819050919050565b610ac783610a92565b610adb610ad382610ab4565b848454610a36565b825550505050565b600090565b610af0610ae3565b610afb818484610abe565b505050565b5b81811015610b1f57610b14600082610ae8565b600181019050610b01565b5050565b601f821115610b6457610b3581610a04565b610b3e84610a19565b81016020851015610b4d578190505b610b61610b5985610a19565b830182610b00565b50505b505050565b600082821c905092915050565b6000610b8760001984600802610b69565b1980831691505092915050565b6000610ba08383610b76565b9150826002028217905092915050565b610bb982610479565b67ffffffffffffffff811115610bd257610bd1610630565b5b610bdc825461098d565b610be7828285610b23565b600060209050601f831160018114610c1a5760008415610c08578287015190505b610c128582610b94565b865550610c7a565b601f198416610c2886610a04565b60005b82811015610c5057848901518255600182019150602085019450602081019050610c2b565b86831015610c6d5784890151610c69601f891682610b76565b8355505b6001600288020188555050505b505050505050565b60006080820190508181036000830152610c9c81876104d0565b9050610cab6020830186610885565b8181036040830152610cbd81856104d0565b90508181036060830152610cd181846104d0565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d168261059d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610d4857610d47610cdc565b5b600182019050919050565b6000606082019050610d6860008301866109be565b610d756020830185610885565b8181036040830152610d8781846104d0565b9050949350505050565b6000604082019050610da660008301856109be565b610db36020830184610885565b939250505056fea264697066735822122082531f29028539d20a4f9f561f4a2bc6e6fe04e00e1e89c6aa5adfed79e1423964736f6c63430008110033",
  deployedBytecode:
    "0x60806040526004361061007b5760003560e01c8063b7e000131161004e578063b7e0001314610119578063d325c71514610144578063d7f513821461016d578063e69d849d146101985761007b565b806306fdde031461008057806338971915146100ab5780638917d33c146100c757806397b38971146100f0575b600080fd5b34801561008c57600080fd5b506100956101b4565b6040516100a29190610509565b60405180910390f35b6100c560048036038101906100c091906105d3565b610242565b005b3480156100d357600080fd5b506100ee60048036038101906100e9919061075b565b610282565b005b3480156100fc57600080fd5b5061011760048036038101906101129190610816565b610362565b005b34801561012557600080fd5b5061012e6103a2565b60405161013b9190610894565b60405180910390f35b34801561015057600080fd5b5061016b600480360381019061016691906108af565b6103a8565b005b34801561017957600080fd5b50610182610434565b60405161018f9190610894565b60405180910390f35b6101b260048036038101906101ad919061091e565b61043c565b005b600080546101c19061098d565b80601f01602080910402602001604051908101604052809291908181526020018280546101ed9061098d565b801561023a5780601f1061020f5761010080835404028352916020019161023a565b820191906000526020600020905b81548152906001019060200180831161021d57829003601f168201915b505050505081565b7fcff1c074265994aa584fd09931da01aa4e7a201173f740d399e41e934cd0872b838383604051610275939291906109cd565b60405180910390a1505050565b60405180608001604052808581526020018481526020018381526020018281525060036000600254815260200190815260200160002060008201518160000190816102cd9190610bb0565b506020820151816001015560408201518160020190816102ed9190610bb0565b5060608201518160030190816103039190610bb0565b509050507f3719250c727a25b7f3336b524c9c73126f86a7c21eb9a2e6efde011bff8f5e698484848460405161033c9493929190610c82565b60405180910390a16002600081548092919061035790610d0b565b919050555050505050565b7f19a68ff717c2046749719cfd854e33cb4062e01472d5fdca51ddbbe801566d0a81838560405161039593929190610d53565b60405180910390a1505050565b60025481565b604051806060016040528084815260200183815260200182815250600460003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008201518160000190816104179190610bb0565b506020820151816001015560408201518160020155905050505050565b600047905090565b7f94d5e38b6d610151ce7f2d572da9e962e8c55b60140fd44be11a3a47464fd060828260405161046d929190610d91565b60405180910390a15050565b600081519050919050565b600082825260208201905092915050565b60005b838110156104b3578082015181840152602081019050610498565b60008484015250505050565b6000601f19601f8301169050919050565b60006104db82610479565b6104e58185610484565b93506104f5818560208601610495565b6104fe816104bf565b840191505092915050565b6000602082019050818103600083015261052381846104d0565b905092915050565b6000604051905090565b600080fd5b600080fd5b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b600061056a8261053f565b9050919050565b61057a8161055f565b811461058557600080fd5b50565b60008135905061059781610571565b92915050565b6000819050919050565b6105b08161059d565b81146105bb57600080fd5b50565b6000813590506105cd816105a7565b92915050565b6000806000606084860312156105ec576105eb610535565b5b60006105fa86828701610588565b935050602061060b868287016105be565b925050604061061c868287016105be565b9150509250925092565b600080fd5b600080fd5b7f4e487b7100000000000000000000000000000000000000000000000000000000600052604160045260246000fd5b610668826104bf565b810181811067ffffffffffffffff8211171561068757610686610630565b5b80604052505050565b600061069a61052b565b90506106a6828261065f565b919050565b600067ffffffffffffffff8211156106c6576106c5610630565b5b6106cf826104bf565b9050602081019050919050565b82818337600083830152505050565b60006106fe6106f9846106ab565b610690565b90508281526020810184848401111561071a5761071961062b565b5b6107258482856106dc565b509392505050565b600082601f83011261074257610741610626565b5b81356107528482602086016106eb565b91505092915050565b6000806000806080858703121561077557610774610535565b5b600085013567ffffffffffffffff8111156107935761079261053a565b5b61079f8782880161072d565b94505060206107b0878288016105be565b935050604085013567ffffffffffffffff8111156107d1576107d061053a565b5b6107dd8782880161072d565b925050606085013567ffffffffffffffff8111156107fe576107fd61053a565b5b61080a8782880161072d565b91505092959194509250565b60008060006060848603121561082f5761082e610535565b5b600084013567ffffffffffffffff81111561084d5761084c61053a565b5b6108598682870161072d565b935050602061086a868287016105be565b925050604061087b86828701610588565b9150509250925092565b61088e8161059d565b82525050565b60006020820190506108a96000830184610885565b92915050565b6000806000606084860312156108c8576108c7610535565b5b600084013567ffffffffffffffff8111156108e6576108e561053a565b5b6108f28682870161072d565b9350506020610903868287016105be565b9250506040610914868287016105be565b9150509250925092565b6000806040838503121561093557610934610535565b5b600061094385828601610588565b9250506020610954858286016105be565b9150509250929050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052602260045260246000fd5b600060028204905060018216806109a557607f821691505b6020821081036109b8576109b761095e565b5b50919050565b6109c78161055f565b82525050565b60006060820190506109e260008301866109be565b6109ef6020830185610885565b6109fc6040830184610885565b949350505050565b60008190508160005260206000209050919050565b60006020601f8301049050919050565b600082821b905092915050565b600060088302610a667fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff82610a29565b610a708683610a29565b95508019841693508086168417925050509392505050565b6000819050919050565b6000610aad610aa8610aa38461059d565b610a88565b61059d565b9050919050565b6000819050919050565b610ac783610a92565b610adb610ad382610ab4565b848454610a36565b825550505050565b600090565b610af0610ae3565b610afb818484610abe565b505050565b5b81811015610b1f57610b14600082610ae8565b600181019050610b01565b5050565b601f821115610b6457610b3581610a04565b610b3e84610a19565b81016020851015610b4d578190505b610b61610b5985610a19565b830182610b00565b50505b505050565b600082821c905092915050565b6000610b8760001984600802610b69565b1980831691505092915050565b6000610ba08383610b76565b9150826002028217905092915050565b610bb982610479565b67ffffffffffffffff811115610bd257610bd1610630565b5b610bdc825461098d565b610be7828285610b23565b600060209050601f831160018114610c1a5760008415610c08578287015190505b610c128582610b94565b865550610c7a565b601f198416610c2886610a04565b60005b82811015610c5057848901518255600182019150602085019450602081019050610c2b565b86831015610c6d5784890151610c69601f891682610b76565b8355505b6001600288020188555050505b505050505050565b60006080820190508181036000830152610c9c81876104d0565b9050610cab6020830186610885565b8181036040830152610cbd81856104d0565b90508181036060830152610cd181846104d0565b905095945050505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000610d168261059d565b91507fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff8203610d4857610d47610cdc565b5b600182019050919050565b6000606082019050610d6860008301866109be565b610d756020830185610885565b8181036040830152610d8781846104d0565b9050949350505050565b6000604082019050610da660008301856109be565b610db36020830184610885565b939250505056fea264697066735822122082531f29028539d20a4f9f561f4a2bc6e6fe04e00e1e89c6aa5adfed79e1423964736f6c63430008110033",
  immutableReferences: {},
  generatedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:5231:2",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "66:40:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "77:22:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "93:5:2",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "87:5:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "87:12:2",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "77:6:2",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "49:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "59:6:2",
                type: "",
              },
            ],
            src: "7:99:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "140:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "157:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "160:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "150:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "150:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "150:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "254:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "257:4:2",
                        type: "",
                        value: "0x41",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "247:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "247:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "247:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "278:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "281:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "271:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "271:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "271:15:2",
                },
              ],
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "112:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "326:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "343:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "346:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "336:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "336:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "336:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "440:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "443:4:2",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "433:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "433:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "433:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "464:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "467:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "457:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "457:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "457:15:2",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "298:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "535:269:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "545:22:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "559:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "565:1:2",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "555:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "555:12:2",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "545:6:2",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "576:38:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "606:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "612:1:2",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "602:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "602:12:2",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "580:18:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "653:51:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "667:27:2",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "681:6:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "689:4:2",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "677:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "677:17:2",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "667:6:2",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "633:18:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "626:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "626:26:2",
                  },
                  nodeType: "YulIf",
                  src: "623:81:2",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "756:42:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "770:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "770:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "770:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "720:18:2",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "743:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "751:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "740:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "740:14:2",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "717:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "717:38:2",
                  },
                  nodeType: "YulIf",
                  src: "714:84:2",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "519:4:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "528:6:2",
                type: "",
              },
            ],
            src: "484:320:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "864:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "874:11:2",
                  value: {
                    name: "ptr",
                    nodeType: "YulIdentifier",
                    src: "882:3:2",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "874:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "902:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        name: "ptr",
                        nodeType: "YulIdentifier",
                        src: "905:3:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "895:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "895:14:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "895:14:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "918:26:2",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "936:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "939:4:2",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "keccak256",
                      nodeType: "YulIdentifier",
                      src: "926:9:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "926:18:2",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "918:4:2",
                    },
                  ],
                },
              ],
            },
            name: "array_dataslot_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "ptr",
                nodeType: "YulTypedName",
                src: "851:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "859:4:2",
                type: "",
              },
            ],
            src: "810:141:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1001:49:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1011:33:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1029:5:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1036:2:2",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1025:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1025:14:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1041:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "1021:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1021:23:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "1011:6:2",
                    },
                  ],
                },
              ],
            },
            name: "divide_by_32_ceil",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "984:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "994:6:2",
                type: "",
              },
            ],
            src: "957:93:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1109:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1119:37:2",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "1144:4:2",
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1150:5:2",
                      },
                    ],
                    functionName: {
                      name: "shl",
                      nodeType: "YulIdentifier",
                      src: "1140:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1140:16:2",
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "1119:8:2",
                    },
                  ],
                },
              ],
            },
            name: "shift_left_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "1084:4:2",
                type: "",
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1090:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "1100:8:2",
                type: "",
              },
            ],
            src: "1056:107:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1245:317:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1255:35:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBytes",
                        nodeType: "YulIdentifier",
                        src: "1276:10:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1288:1:2",
                        type: "",
                        value: "8",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "1272:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1272:18:2",
                  },
                  variables: [
                    {
                      name: "shiftBits",
                      nodeType: "YulTypedName",
                      src: "1259:9:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "1299:109:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "1330:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1341:66:2",
                        type: "",
                        value:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "1311:18:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1311:97:2",
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "1303:4:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1417:51:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "1448:9:2",
                      },
                      {
                        name: "toInsert",
                        nodeType: "YulIdentifier",
                        src: "1459:8:2",
                      },
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "1429:18:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1429:39:2",
                  },
                  variableNames: [
                    {
                      name: "toInsert",
                      nodeType: "YulIdentifier",
                      src: "1417:8:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1477:30:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1490:5:2",
                      },
                      {
                        arguments: [
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "1501:4:2",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "1497:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1497:9:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "1486:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1486:21:2",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "1477:5:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "1516:40:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1529:5:2",
                      },
                      {
                        arguments: [
                          {
                            name: "toInsert",
                            nodeType: "YulIdentifier",
                            src: "1540:8:2",
                          },
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "1550:4:2",
                          },
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "1536:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1536:19:2",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "1526:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1526:30:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "1516:6:2",
                    },
                  ],
                },
              ],
            },
            name: "update_byte_slice_dynamic32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1206:5:2",
                type: "",
              },
              {
                name: "shiftBytes",
                nodeType: "YulTypedName",
                src: "1213:10:2",
                type: "",
              },
              {
                name: "toInsert",
                nodeType: "YulTypedName",
                src: "1225:8:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "1238:6:2",
                type: "",
              },
            ],
            src: "1169:393:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1613:32:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1623:16:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1634:5:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1623:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1595:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1605:7:2",
                type: "",
              },
            ],
            src: "1568:77:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1683:28:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1693:12:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1700:5:2",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "1693:3:2",
                    },
                  ],
                },
              ],
            },
            name: "identity",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1669:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "1679:3:2",
                type: "",
              },
            ],
            src: "1651:60:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1777:82:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1787:66:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "1845:5:2",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "1827:17:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1827:24:2",
                          },
                        ],
                        functionName: {
                          name: "identity",
                          nodeType: "YulIdentifier",
                          src: "1818:8:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1818:34:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "1800:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1800:53:2",
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "1787:9:2",
                    },
                  ],
                },
              ],
            },
            name: "convert_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1757:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "1767:9:2",
                type: "",
              },
            ],
            src: "1717:142:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1912:28:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1922:12:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "1929:5:2",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "1922:3:2",
                    },
                  ],
                },
              ],
            },
            name: "prepare_store_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1898:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "1908:3:2",
                type: "",
              },
            ],
            src: "1865:75:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2022:193:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2032:63:2",
                  value: {
                    arguments: [
                      {
                        name: "value_0",
                        nodeType: "YulIdentifier",
                        src: "2087:7:2",
                      },
                    ],
                    functionName: {
                      name: "convert_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2056:30:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2056:39:2",
                  },
                  variables: [
                    {
                      name: "convertedValue_0",
                      nodeType: "YulTypedName",
                      src: "2036:16:2",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "2111:4:2",
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "slot",
                                nodeType: "YulIdentifier",
                                src: "2151:4:2",
                              },
                            ],
                            functionName: {
                              name: "sload",
                              nodeType: "YulIdentifier",
                              src: "2145:5:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2145:11:2",
                          },
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "2158:6:2",
                          },
                          {
                            arguments: [
                              {
                                name: "convertedValue_0",
                                nodeType: "YulIdentifier",
                                src: "2190:16:2",
                              },
                            ],
                            functionName: {
                              name: "prepare_store_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2166:23:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2166:41:2",
                          },
                        ],
                        functionName: {
                          name: "update_byte_slice_dynamic32",
                          nodeType: "YulIdentifier",
                          src: "2117:27:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2117:91:2",
                      },
                    ],
                    functionName: {
                      name: "sstore",
                      nodeType: "YulIdentifier",
                      src: "2104:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2104:105:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2104:105:2",
                },
              ],
            },
            name: "update_storage_value_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "1999:4:2",
                type: "",
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2005:6:2",
                type: "",
              },
              {
                name: "value_0",
                nodeType: "YulTypedName",
                src: "2013:7:2",
                type: "",
              },
            ],
            src: "1946:269:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2270:24:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2280:8:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "2287:1:2",
                    type: "",
                    value: "0",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "2280:3:2",
                    },
                  ],
                },
              ],
            },
            name: "zero_value_for_split_t_uint256",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "2266:3:2",
                type: "",
              },
            ],
            src: "2221:73:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2353:136:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "2363:46:2",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "zero_value_for_split_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2377:30:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2377:32:2",
                  },
                  variables: [
                    {
                      name: "zero_0",
                      nodeType: "YulTypedName",
                      src: "2367:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "2462:4:2",
                      },
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2468:6:2",
                      },
                      {
                        name: "zero_0",
                        nodeType: "YulIdentifier",
                        src: "2476:6:2",
                      },
                    ],
                    functionName: {
                      name: "update_storage_value_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2418:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2418:65:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2418:65:2",
                },
              ],
            },
            name: "storage_set_to_zero_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "2339:4:2",
                type: "",
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2345:6:2",
                type: "",
              },
            ],
            src: "2300:189:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2545:136:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2612:63:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "2656:5:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2663:1:2",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "storage_set_to_zero_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "2626:29:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2626:39:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2626:39:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "start",
                        nodeType: "YulIdentifier",
                        src: "2565:5:2",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "2572:3:2",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "2562:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2562:14:2",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "2577:26:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "2579:22:2",
                        value: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "2592:5:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2599:1:2",
                              type: "",
                              value: "1",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2588:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2588:13:2",
                        },
                        variableNames: [
                          {
                            name: "start",
                            nodeType: "YulIdentifier",
                            src: "2579:5:2",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "2559:2:2",
                    statements: [],
                  },
                  src: "2555:120:2",
                },
              ],
            },
            name: "clear_storage_range_t_bytes1",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "start",
                nodeType: "YulTypedName",
                src: "2533:5:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2540:3:2",
                type: "",
              },
            ],
            src: "2495:186:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2766:464:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2792:431:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2806:54:2",
                        value: {
                          arguments: [
                            {
                              name: "array",
                              nodeType: "YulIdentifier",
                              src: "2854:5:2",
                            },
                          ],
                          functionName: {
                            name: "array_dataslot_t_string_storage",
                            nodeType: "YulIdentifier",
                            src: "2822:31:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2822:38:2",
                        },
                        variables: [
                          {
                            name: "dataArea",
                            nodeType: "YulTypedName",
                            src: "2810:8:2",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "2873:63:2",
                        value: {
                          arguments: [
                            {
                              name: "dataArea",
                              nodeType: "YulIdentifier",
                              src: "2896:8:2",
                            },
                            {
                              arguments: [
                                {
                                  name: "startIndex",
                                  nodeType: "YulIdentifier",
                                  src: "2924:10:2",
                                },
                              ],
                              functionName: {
                                name: "divide_by_32_ceil",
                                nodeType: "YulIdentifier",
                                src: "2906:17:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "2906:29:2",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "2892:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2892:44:2",
                        },
                        variables: [
                          {
                            name: "deleteStart",
                            nodeType: "YulTypedName",
                            src: "2877:11:2",
                            type: "",
                          },
                        ],
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "3093:27:2",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "3095:23:2",
                              value: {
                                name: "dataArea",
                                nodeType: "YulIdentifier",
                                src: "3110:8:2",
                              },
                              variableNames: [
                                {
                                  name: "deleteStart",
                                  nodeType: "YulIdentifier",
                                  src: "3095:11:2",
                                },
                              ],
                            },
                          ],
                        },
                        condition: {
                          arguments: [
                            {
                              name: "startIndex",
                              nodeType: "YulIdentifier",
                              src: "3077:10:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "3089:2:2",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "3074:2:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3074:18:2",
                        },
                        nodeType: "YulIf",
                        src: "3071:49:2",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "deleteStart",
                              nodeType: "YulIdentifier",
                              src: "3162:11:2",
                            },
                            {
                              arguments: [
                                {
                                  name: "dataArea",
                                  nodeType: "YulIdentifier",
                                  src: "3179:8:2",
                                },
                                {
                                  arguments: [
                                    {
                                      name: "len",
                                      nodeType: "YulIdentifier",
                                      src: "3207:3:2",
                                    },
                                  ],
                                  functionName: {
                                    name: "divide_by_32_ceil",
                                    nodeType: "YulIdentifier",
                                    src: "3189:17:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "3189:22:2",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "3175:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "3175:37:2",
                            },
                          ],
                          functionName: {
                            name: "clear_storage_range_t_bytes1",
                            nodeType: "YulIdentifier",
                            src: "3133:28:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3133:80:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3133:80:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "2783:3:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2788:2:2",
                        type: "",
                        value: "31",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "2780:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2780:11:2",
                  },
                  nodeType: "YulIf",
                  src: "2777:446:2",
                },
              ],
            },
            name: "clean_up_bytearray_end_slots_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "2742:5:2",
                type: "",
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "2749:3:2",
                type: "",
              },
              {
                name: "startIndex",
                nodeType: "YulTypedName",
                src: "2754:10:2",
                type: "",
              },
            ],
            src: "2687:543:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3299:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3309:37:2",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "3334:4:2",
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "3340:5:2",
                      },
                    ],
                    functionName: {
                      name: "shr",
                      nodeType: "YulIdentifier",
                      src: "3330:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3330:16:2",
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "3309:8:2",
                    },
                  ],
                },
              ],
            },
            name: "shift_right_unsigned_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "3274:4:2",
                type: "",
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "3280:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "3290:8:2",
                type: "",
              },
            ],
            src: "3236:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3410:118:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3420:68:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3469:1:2",
                                type: "",
                                value: "8",
                              },
                              {
                                name: "bytes",
                                nodeType: "YulIdentifier",
                                src: "3472:5:2",
                              },
                            ],
                            functionName: {
                              name: "mul",
                              nodeType: "YulIdentifier",
                              src: "3465:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3465:13:2",
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "3484:1:2",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "not",
                              nodeType: "YulIdentifier",
                              src: "3480:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3480:6:2",
                          },
                        ],
                        functionName: {
                          name: "shift_right_unsigned_dynamic",
                          nodeType: "YulIdentifier",
                          src: "3436:28:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3436:51:2",
                      },
                    ],
                    functionName: {
                      name: "not",
                      nodeType: "YulIdentifier",
                      src: "3432:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3432:56:2",
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "3424:4:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3497:25:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3511:4:2",
                      },
                      {
                        name: "mask",
                        nodeType: "YulIdentifier",
                        src: "3517:4:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "3507:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3507:15:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "3497:6:2",
                    },
                  ],
                },
              ],
            },
            name: "mask_bytes_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "3387:4:2",
                type: "",
              },
              {
                name: "bytes",
                nodeType: "YulTypedName",
                src: "3393:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "3403:6:2",
                type: "",
              },
            ],
            src: "3359:169:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3614:214:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3747:37:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3774:4:2",
                      },
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "3780:3:2",
                      },
                    ],
                    functionName: {
                      name: "mask_bytes_dynamic",
                      nodeType: "YulIdentifier",
                      src: "3755:18:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3755:29:2",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "3747:4:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "3793:29:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "3804:4:2",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3814:1:2",
                            type: "",
                            value: "2",
                          },
                          {
                            name: "len",
                            nodeType: "YulIdentifier",
                            src: "3817:3:2",
                          },
                        ],
                        functionName: {
                          name: "mul",
                          nodeType: "YulIdentifier",
                          src: "3810:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3810:11:2",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "3801:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3801:21:2",
                  },
                  variableNames: [
                    {
                      name: "used",
                      nodeType: "YulIdentifier",
                      src: "3793:4:2",
                    },
                  ],
                },
              ],
            },
            name: "extract_used_part_and_set_length_of_short_byte_array",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "3595:4:2",
                type: "",
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "3601:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "used",
                nodeType: "YulTypedName",
                src: "3609:4:2",
                type: "",
              },
            ],
            src: "3533:295:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3925:1303:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3936:51:2",
                  value: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "3983:3:2",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "3950:32:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3950:37:2",
                  },
                  variables: [
                    {
                      name: "newLen",
                      nodeType: "YulTypedName",
                      src: "3940:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4072:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "4074:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4074:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4074:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "4044:6:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4052:18:2",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4041:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4041:30:2",
                  },
                  nodeType: "YulIf",
                  src: "4038:56:2",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4104:52:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "slot",
                            nodeType: "YulIdentifier",
                            src: "4150:4:2",
                          },
                        ],
                        functionName: {
                          name: "sload",
                          nodeType: "YulIdentifier",
                          src: "4144:5:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4144:11:2",
                      },
                    ],
                    functionName: {
                      name: "extract_byte_array_length",
                      nodeType: "YulIdentifier",
                      src: "4118:25:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4118:38:2",
                  },
                  variables: [
                    {
                      name: "oldLen",
                      nodeType: "YulTypedName",
                      src: "4108:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "4249:4:2",
                      },
                      {
                        name: "oldLen",
                        nodeType: "YulIdentifier",
                        src: "4255:6:2",
                      },
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "4263:6:2",
                      },
                    ],
                    functionName: {
                      name: "clean_up_bytearray_end_slots_t_string_storage",
                      nodeType: "YulIdentifier",
                      src: "4203:45:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4203:67:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4203:67:2",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4280:18:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "4297:1:2",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "srcOffset",
                      nodeType: "YulTypedName",
                      src: "4284:9:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "4308:17:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "4321:4:2",
                    type: "",
                    value: "0x20",
                  },
                  variableNames: [
                    {
                      name: "srcOffset",
                      nodeType: "YulIdentifier",
                      src: "4308:9:2",
                    },
                  ],
                },
                {
                  cases: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "4372:611:2",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "4386:37:2",
                            value: {
                              arguments: [
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "4405:6:2",
                                },
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "4417:4:2",
                                      type: "",
                                      value: "0x1f",
                                    },
                                  ],
                                  functionName: {
                                    name: "not",
                                    nodeType: "YulIdentifier",
                                    src: "4413:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4413:9:2",
                                },
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "4401:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4401:22:2",
                            },
                            variables: [
                              {
                                name: "loopEnd",
                                nodeType: "YulTypedName",
                                src: "4390:7:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "4437:51:2",
                            value: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "4483:4:2",
                                },
                              ],
                              functionName: {
                                name: "array_dataslot_t_string_storage",
                                nodeType: "YulIdentifier",
                                src: "4451:31:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4451:37:2",
                            },
                            variables: [
                              {
                                name: "dstPtr",
                                nodeType: "YulTypedName",
                                src: "4441:6:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "4501:10:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "4510:1:2",
                              type: "",
                              value: "0",
                            },
                            variables: [
                              {
                                name: "i",
                                nodeType: "YulTypedName",
                                src: "4505:1:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "4569:163:2",
                              statements: [
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "4594:6:2",
                                      },
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                name: "src",
                                                nodeType: "YulIdentifier",
                                                src: "4612:3:2",
                                              },
                                              {
                                                name: "srcOffset",
                                                nodeType: "YulIdentifier",
                                                src: "4617:9:2",
                                              },
                                            ],
                                            functionName: {
                                              name: "add",
                                              nodeType: "YulIdentifier",
                                              src: "4608:3:2",
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "4608:19:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "mload",
                                          nodeType: "YulIdentifier",
                                          src: "4602:5:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4602:26:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "4587:6:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4587:42:2",
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "4587:42:2",
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "4646:24:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "4660:6:2",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4668:1:2",
                                        type: "",
                                        value: "1",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4656:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4656:14:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "dstPtr",
                                      nodeType: "YulIdentifier",
                                      src: "4646:6:2",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "4687:31:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "srcOffset",
                                        nodeType: "YulIdentifier",
                                        src: "4704:9:2",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4715:2:2",
                                        type: "",
                                        value: "32",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4700:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4700:18:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "srcOffset",
                                      nodeType: "YulIdentifier",
                                      src: "4687:9:2",
                                    },
                                  ],
                                },
                              ],
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "4535:1:2",
                                },
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "4538:7:2",
                                },
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "4532:2:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4532:14:2",
                            },
                            nodeType: "YulForLoop",
                            post: {
                              nodeType: "YulBlock",
                              src: "4547:21:2",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "4549:17:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "4558:1:2",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "4561:4:2",
                                        type: "",
                                        value: "0x20",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "4554:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4554:12:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "4549:1:2",
                                    },
                                  ],
                                },
                              ],
                            },
                            pre: {
                              nodeType: "YulBlock",
                              src: "4528:3:2",
                              statements: [],
                            },
                            src: "4524:208:2",
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "4768:156:2",
                              statements: [
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "4786:43:2",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "4813:3:2",
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "4818:9:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "4809:3:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4809:19:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "4803:5:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4803:26:2",
                                  },
                                  variables: [
                                    {
                                      name: "lastValue",
                                      nodeType: "YulTypedName",
                                      src: "4790:9:2",
                                      type: "",
                                    },
                                  ],
                                },
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "4853:6:2",
                                      },
                                      {
                                        arguments: [
                                          {
                                            name: "lastValue",
                                            nodeType: "YulIdentifier",
                                            src: "4880:9:2",
                                          },
                                          {
                                            arguments: [
                                              {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "4895:6:2",
                                              },
                                              {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "4903:4:2",
                                                type: "",
                                                value: "0x1f",
                                              },
                                            ],
                                            functionName: {
                                              name: "and",
                                              nodeType: "YulIdentifier",
                                              src: "4891:3:2",
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "4891:17:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "mask_bytes_dynamic",
                                          nodeType: "YulIdentifier",
                                          src: "4861:18:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "4861:48:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "4846:6:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "4846:64:2",
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "4846:64:2",
                                },
                              ],
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "4751:7:2",
                                },
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "4760:6:2",
                                },
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "4748:2:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4748:19:2",
                            },
                            nodeType: "YulIf",
                            src: "4745:179:2",
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "4944:4:2",
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          name: "newLen",
                                          nodeType: "YulIdentifier",
                                          src: "4958:6:2",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "4966:1:2",
                                          type: "",
                                          value: "2",
                                        },
                                      ],
                                      functionName: {
                                        name: "mul",
                                        nodeType: "YulIdentifier",
                                        src: "4954:3:2",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "4954:14:2",
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "4970:1:2",
                                      type: "",
                                      value: "1",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "4950:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "4950:22:2",
                                },
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "4937:6:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "4937:36:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "4937:36:2",
                          },
                        ],
                      },
                      nodeType: "YulCase",
                      src: "4365:618:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4370:1:2",
                        type: "",
                        value: "1",
                      },
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "5000:222:2",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "5014:14:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "5027:1:2",
                              type: "",
                              value: "0",
                            },
                            variables: [
                              {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "5018:5:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "5051:67:2",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "5069:35:2",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "5088:3:2",
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "5093:9:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "5084:3:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "5084:19:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "5078:5:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "5078:26:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "5069:5:2",
                                    },
                                  ],
                                },
                              ],
                            },
                            condition: {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "5044:6:2",
                            },
                            nodeType: "YulIf",
                            src: "5041:77:2",
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "5138:4:2",
                                },
                                {
                                  arguments: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "5197:5:2",
                                    },
                                    {
                                      name: "newLen",
                                      nodeType: "YulIdentifier",
                                      src: "5204:6:2",
                                    },
                                  ],
                                  functionName: {
                                    name: "extract_used_part_and_set_length_of_short_byte_array",
                                    nodeType: "YulIdentifier",
                                    src: "5144:52:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "5144:67:2",
                                },
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "5131:6:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5131:81:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "5131:81:2",
                          },
                        ],
                      },
                      nodeType: "YulCase",
                      src: "4992:230:2",
                      value: "default",
                    },
                  ],
                  expression: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "4345:6:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4353:2:2",
                        type: "",
                        value: "31",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4342:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4342:14:2",
                  },
                  nodeType: "YulSwitch",
                  src: "4335:887:2",
                },
              ],
            },
            name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "3914:4:2",
                type: "",
              },
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "3920:3:2",
                type: "",
              },
            ],
            src: "3833:1395:2",
          },
        ],
      },
      contents:
        "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n}\n",
      id: 2,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  deployedGeneratedSources: [
    {
      ast: {
        nodeType: "YulBlock",
        src: "0:16584:2",
        statements: [
          {
            body: {
              nodeType: "YulBlock",
              src: "66:40:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "77:22:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "93:5:2",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "87:5:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "87:12:2",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "77:6:2",
                    },
                  ],
                },
              ],
            },
            name: "array_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "49:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "59:6:2",
                type: "",
              },
            ],
            src: "7:99:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "208:73:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "225:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "230:6:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "218:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "218:19:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "218:19:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "246:29:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "265:3:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "270:4:2",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "261:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "261:14:2",
                  },
                  variableNames: [
                    {
                      name: "updated_pos",
                      nodeType: "YulIdentifier",
                      src: "246:11:2",
                    },
                  ],
                },
              ],
            },
            name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "180:3:2",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "185:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "updated_pos",
                nodeType: "YulTypedName",
                src: "196:11:2",
                type: "",
              },
            ],
            src: "112:169:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "349:184:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "359:10:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "368:1:2",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "i",
                      nodeType: "YulTypedName",
                      src: "363:1:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "428:63:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              arguments: [
                                {
                                  name: "dst",
                                  nodeType: "YulIdentifier",
                                  src: "453:3:2",
                                },
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "458:1:2",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "449:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "449:11:2",
                            },
                            {
                              arguments: [
                                {
                                  arguments: [
                                    {
                                      name: "src",
                                      nodeType: "YulIdentifier",
                                      src: "472:3:2",
                                    },
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "477:1:2",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "468:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "468:11:2",
                                },
                              ],
                              functionName: {
                                name: "mload",
                                nodeType: "YulIdentifier",
                                src: "462:5:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "462:18:2",
                            },
                          ],
                          functionName: {
                            name: "mstore",
                            nodeType: "YulIdentifier",
                            src: "442:6:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "442:39:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "442:39:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "i",
                        nodeType: "YulIdentifier",
                        src: "389:1:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "392:6:2",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "386:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "386:13:2",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "400:19:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "402:15:2",
                        value: {
                          arguments: [
                            {
                              name: "i",
                              nodeType: "YulIdentifier",
                              src: "411:1:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "414:2:2",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "407:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "407:10:2",
                        },
                        variableNames: [
                          {
                            name: "i",
                            nodeType: "YulIdentifier",
                            src: "402:1:2",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "382:3:2",
                    statements: [],
                  },
                  src: "378:113:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "511:3:2",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "516:6:2",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "507:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "507:16:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "525:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "500:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "500:27:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "500:27:2",
                },
              ],
            },
            name: "copy_memory_to_memory_with_cleanup",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "331:3:2",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "336:3:2",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "341:6:2",
                type: "",
              },
            ],
            src: "287:246:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "587:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "597:38:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "615:5:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "622:2:2",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "611:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "611:14:2",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "631:2:2",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "627:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "627:7:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "607:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "607:28:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "597:6:2",
                    },
                  ],
                },
              ],
            },
            name: "round_up_to_mul_of_32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "570:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "580:6:2",
                type: "",
              },
            ],
            src: "539:102:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "739:285:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "749:53:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "796:5:2",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "763:32:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "763:39:2",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "753:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "811:78:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "877:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "882:6:2",
                      },
                    ],
                    functionName: {
                      name: "array_storeLengthForEncoding_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "818:58:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "818:71:2",
                  },
                  variableNames: [
                    {
                      name: "pos",
                      nodeType: "YulIdentifier",
                      src: "811:3:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "937:5:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "944:4:2",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "933:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "933:16:2",
                      },
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "951:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "956:6:2",
                      },
                    ],
                    functionName: {
                      name: "copy_memory_to_memory_with_cleanup",
                      nodeType: "YulIdentifier",
                      src: "898:34:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "898:65:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "898:65:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "972:46:2",
                  value: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "983:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "1010:6:2",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "988:21:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "988:29:2",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "979:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "979:39:2",
                  },
                  variableNames: [
                    {
                      name: "end",
                      nodeType: "YulIdentifier",
                      src: "972:3:2",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "720:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "727:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "735:3:2",
                type: "",
              },
            ],
            src: "647:377:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1148:195:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1158:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "1170:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1181:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "1166:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1166:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1158:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1205:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "1216:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "1201:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1201:17:2",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "1224:4:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "1230:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "1220:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1220:20:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "1194:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1194:47:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1194:47:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "1250:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "1322:6:2",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "1331:4:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "1258:63:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1258:78:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "1250:4:2",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "1120:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "1132:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "1143:4:2",
                type: "",
              },
            ],
            src: "1030:313:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1389:35:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1399:19:2",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1415:2:2",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "mload",
                      nodeType: "YulIdentifier",
                      src: "1409:5:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1409:9:2",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "1399:6:2",
                    },
                  ],
                },
              ],
            },
            name: "allocate_unbounded",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "1382:6:2",
                type: "",
              },
            ],
            src: "1349:75:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1519:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1536:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1539:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "1529:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1529:12:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1529:12:2",
                },
              ],
            },
            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
            nodeType: "YulFunctionDefinition",
            src: "1430:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1642:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1659:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1662:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "1652:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1652:12:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "1652:12:2",
                },
              ],
            },
            name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
            nodeType: "YulFunctionDefinition",
            src: "1553:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1721:81:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1731:65:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1746:5:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "1753:42:2",
                        type: "",
                        value: "0xffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "1742:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1742:54:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1731:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint160",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1703:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1713:7:2",
                type: "",
              },
            ],
            src: "1676:126:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1853:51:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "1863:35:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "1892:5:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint160",
                      nodeType: "YulIdentifier",
                      src: "1874:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1874:24:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "1863:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1835:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "1845:7:2",
                type: "",
              },
            ],
            src: "1808:96:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "1953:79:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2010:16:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2019:1:2",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2022:1:2",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2012:6:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2012:12:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2012:12:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "1976:5:2",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2001:5:2",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_address",
                              nodeType: "YulIdentifier",
                              src: "1983:17:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "1983:24:2",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "1973:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "1973:35:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "1966:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "1966:43:2",
                  },
                  nodeType: "YulIf",
                  src: "1963:63:2",
                },
              ],
            },
            name: "validator_revert_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "1946:5:2",
                type: "",
              },
            ],
            src: "1910:122:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2090:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2100:29:2",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2122:6:2",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2109:12:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2109:20:2",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2100:5:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2165:5:2",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_address",
                      nodeType: "YulIdentifier",
                      src: "2138:26:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2138:33:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2138:33:2",
                },
              ],
            },
            name: "abi_decode_t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2068:6:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2076:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2084:5:2",
                type: "",
              },
            ],
            src: "2038:139:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2228:32:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2238:16:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "2249:5:2",
                  },
                  variableNames: [
                    {
                      name: "cleaned",
                      nodeType: "YulIdentifier",
                      src: "2238:7:2",
                    },
                  ],
                },
              ],
            },
            name: "cleanup_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2210:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "cleaned",
                nodeType: "YulTypedName",
                src: "2220:7:2",
                type: "",
              },
            ],
            src: "2183:77:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2309:79:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2366:16:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2375:1:2",
                              type: "",
                              value: "0",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "2378:1:2",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "revert",
                            nodeType: "YulIdentifier",
                            src: "2368:6:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2368:12:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2368:12:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "2332:5:2",
                          },
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "2357:5:2",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "2339:17:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2339:24:2",
                          },
                        ],
                        functionName: {
                          name: "eq",
                          nodeType: "YulIdentifier",
                          src: "2329:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2329:35:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "2322:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2322:43:2",
                  },
                  nodeType: "YulIf",
                  src: "2319:63:2",
                },
              ],
            },
            name: "validator_revert_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2302:5:2",
                type: "",
              },
            ],
            src: "2266:122:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2446:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "2456:29:2",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "2478:6:2",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "2465:12:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2465:20:2",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "2456:5:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "2521:5:2",
                      },
                    ],
                    functionName: {
                      name: "validator_revert_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "2494:26:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2494:33:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "2494:33:2",
                },
              ],
            },
            name: "abi_decode_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "2424:6:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "2432:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "2440:5:2",
                type: "",
              },
            ],
            src: "2394:139:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "2639:519:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "2685:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "2687:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "2687:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "2687:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2660:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "2669:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "2656:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2656:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2681:2:2",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "2652:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "2652:32:2",
                  },
                  nodeType: "YulIf",
                  src: "2649:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "2778:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2793:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2807:1:2",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2797:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2822:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2857:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "2868:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2853:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2853:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "2877:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "2832:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2832:53:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "2822:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "2905:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "2920:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "2934:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "2924:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "2950:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "2985:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "2996:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "2981:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "2981:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3005:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "2960:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "2960:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "2950:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "3033:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "3048:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3062:2:2",
                        type: "",
                        value: "64",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "3052:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "3078:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "3113:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "3124:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "3109:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "3109:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "3133:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "3088:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3088:53:2",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "3078:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_uint256t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "2593:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "2604:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "2616:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "2624:6:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "2632:6:2",
                type: "",
              },
            ],
            src: "2539:619:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3253:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3270:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3273:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "3263:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3263:12:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3263:12:2",
                },
              ],
            },
            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
            nodeType: "YulFunctionDefinition",
            src: "3164:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3376:28:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3393:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3396:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "3386:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3386:12:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3386:12:2",
                },
              ],
            },
            name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
            nodeType: "YulFunctionDefinition",
            src: "3287:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3438:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3455:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3458:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3448:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3448:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3448:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3552:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3555:4:2",
                        type: "",
                        value: "0x41",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3545:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3545:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3545:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3576:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3579:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "3569:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3569:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3569:15:2",
                },
              ],
            },
            name: "panic_error_0x41",
            nodeType: "YulFunctionDefinition",
            src: "3410:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3639:238:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "3649:58:2",
                  value: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "3671:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "size",
                            nodeType: "YulIdentifier",
                            src: "3701:4:2",
                          },
                        ],
                        functionName: {
                          name: "round_up_to_mul_of_32",
                          nodeType: "YulIdentifier",
                          src: "3679:21:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3679:27:2",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "3667:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3667:40:2",
                  },
                  variables: [
                    {
                      name: "newFreePtr",
                      nodeType: "YulTypedName",
                      src: "3653:10:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "3818:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "3820:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "3820:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "3820:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "3761:10:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "3773:18:2",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "3758:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3758:34:2",
                      },
                      {
                        arguments: [
                          {
                            name: "newFreePtr",
                            nodeType: "YulIdentifier",
                            src: "3797:10:2",
                          },
                          {
                            name: "memPtr",
                            nodeType: "YulIdentifier",
                            src: "3809:6:2",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "3794:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "3794:22:2",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "3755:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3755:62:2",
                  },
                  nodeType: "YulIf",
                  src: "3752:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "3856:2:2",
                        type: "",
                        value: "64",
                      },
                      {
                        name: "newFreePtr",
                        nodeType: "YulIdentifier",
                        src: "3860:10:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "3849:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3849:22:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3849:22:2",
                },
              ],
            },
            name: "finalize_allocation",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "3625:6:2",
                type: "",
              },
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "3633:4:2",
                type: "",
              },
            ],
            src: "3596:281:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "3924:88:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "3934:30:2",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "allocate_unbounded",
                      nodeType: "YulIdentifier",
                      src: "3944:18:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3944:20:2",
                  },
                  variableNames: [
                    {
                      name: "memPtr",
                      nodeType: "YulIdentifier",
                      src: "3934:6:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "memPtr",
                        nodeType: "YulIdentifier",
                        src: "3993:6:2",
                      },
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "4001:4:2",
                      },
                    ],
                    functionName: {
                      name: "finalize_allocation",
                      nodeType: "YulIdentifier",
                      src: "3973:19:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "3973:33:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "3973:33:2",
                },
              ],
            },
            name: "allocate_memory",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "3908:4:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "memPtr",
                nodeType: "YulTypedName",
                src: "3917:6:2",
                type: "",
              },
            ],
            src: "3883:129:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4085:241:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4190:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "4192:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4192:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4192:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4162:6:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4170:18:2",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4159:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4159:30:2",
                  },
                  nodeType: "YulIf",
                  src: "4156:56:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "4222:37:2",
                  value: {
                    arguments: [
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4252:6:2",
                      },
                    ],
                    functionName: {
                      name: "round_up_to_mul_of_32",
                      nodeType: "YulIdentifier",
                      src: "4230:21:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4230:29:2",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "4222:4:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "4296:23:2",
                  value: {
                    arguments: [
                      {
                        name: "size",
                        nodeType: "YulIdentifier",
                        src: "4308:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4314:4:2",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4304:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4304:15:2",
                  },
                  variableNames: [
                    {
                      name: "size",
                      nodeType: "YulIdentifier",
                      src: "4296:4:2",
                    },
                  ],
                },
              ],
            },
            name: "array_allocation_size_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4069:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "size",
                nodeType: "YulTypedName",
                src: "4080:4:2",
                type: "",
              },
            ],
            src: "4018:308:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4396:82:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "4419:3:2",
                      },
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "4424:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4429:6:2",
                      },
                    ],
                    functionName: {
                      name: "calldatacopy",
                      nodeType: "YulIdentifier",
                      src: "4406:12:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4406:30:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4406:30:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dst",
                            nodeType: "YulIdentifier",
                            src: "4456:3:2",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4461:6:2",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4452:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4452:16:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4470:1:2",
                        type: "",
                        value: "0",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4445:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4445:27:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4445:27:2",
                },
              ],
            },
            name: "copy_calldata_to_memory_with_cleanup",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "4378:3:2",
                type: "",
              },
              {
                name: "dst",
                nodeType: "YulTypedName",
                src: "4383:3:2",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4388:6:2",
                type: "",
              },
            ],
            src: "4332:146:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4568:341:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "4578:75:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4645:6:2",
                          },
                        ],
                        functionName: {
                          name: "array_allocation_size_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "4603:41:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4603:49:2",
                      },
                    ],
                    functionName: {
                      name: "allocate_memory",
                      nodeType: "YulIdentifier",
                      src: "4587:15:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4587:66:2",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "4578:5:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "4669:5:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4676:6:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "4662:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4662:21:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4662:21:2",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "4692:27:2",
                  value: {
                    arguments: [
                      {
                        name: "array",
                        nodeType: "YulIdentifier",
                        src: "4707:5:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "4714:4:2",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "4703:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4703:16:2",
                  },
                  variables: [
                    {
                      name: "dst",
                      nodeType: "YulTypedName",
                      src: "4696:3:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "4757:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae",
                            nodeType: "YulIdentifier",
                            src: "4759:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "4759:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "4759:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "src",
                            nodeType: "YulIdentifier",
                            src: "4738:3:2",
                          },
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "4743:6:2",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "4734:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "4734:16:2",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "4752:3:2",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "4731:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4731:25:2",
                  },
                  nodeType: "YulIf",
                  src: "4728:112:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "4886:3:2",
                      },
                      {
                        name: "dst",
                        nodeType: "YulIdentifier",
                        src: "4891:3:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "4896:6:2",
                      },
                    ],
                    functionName: {
                      name: "copy_calldata_to_memory_with_cleanup",
                      nodeType: "YulIdentifier",
                      src: "4849:36:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "4849:54:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "4849:54:2",
                },
              ],
            },
            name: "abi_decode_available_length_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "4541:3:2",
                type: "",
              },
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "4546:6:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "4554:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "4562:5:2",
                type: "",
              },
            ],
            src: "4484:425:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "4991:278:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5040:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d",
                            nodeType: "YulIdentifier",
                            src: "5042:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5042:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5042:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5019:6:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5027:4:2",
                                type: "",
                                value: "0x1f",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5015:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5015:17:2",
                          },
                          {
                            name: "end",
                            nodeType: "YulIdentifier",
                            src: "5034:3:2",
                          },
                        ],
                        functionName: {
                          name: "slt",
                          nodeType: "YulIdentifier",
                          src: "5011:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5011:27:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "5004:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5004:35:2",
                  },
                  nodeType: "YulIf",
                  src: "5001:122:2",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "5132:34:2",
                  value: {
                    arguments: [
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "5159:6:2",
                      },
                    ],
                    functionName: {
                      name: "calldataload",
                      nodeType: "YulIdentifier",
                      src: "5146:12:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5146:20:2",
                  },
                  variables: [
                    {
                      name: "length",
                      nodeType: "YulTypedName",
                      src: "5136:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "5175:88:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "5236:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5244:4:2",
                            type: "",
                            value: "0x20",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "5232:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5232:17:2",
                      },
                      {
                        name: "length",
                        nodeType: "YulIdentifier",
                        src: "5251:6:2",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "5259:3:2",
                      },
                    ],
                    functionName: {
                      name: "abi_decode_available_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "5184:47:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5184:79:2",
                  },
                  variableNames: [
                    {
                      name: "array",
                      nodeType: "YulIdentifier",
                      src: "5175:5:2",
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_t_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "4969:6:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "4977:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "4985:5:2",
                type: "",
              },
            ],
            src: "4929:340:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "5422:1158:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "5469:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "5471:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "5471:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "5471:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5443:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "5452:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "5439:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5439:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5464:3:2",
                        type: "",
                        value: "128",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "5435:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "5435:33:2",
                  },
                  nodeType: "YulIf",
                  src: "5432:120:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "5562:287:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "5577:45:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5608:9:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "5619:1:2",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5604:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5604:17:2",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "5591:12:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5591:31:2",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "5581:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "5669:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "5671:77:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "5671:79:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "5671:79:2",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "5641:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "5649:18:2",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "5638:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5638:30:2",
                      },
                      nodeType: "YulIf",
                      src: "5635:117:2",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "5766:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5811:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5822:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5807:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5807:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5831:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "5776:30:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5776:63:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "5766:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "5859:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "5874:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "5888:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "5878:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "5904:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "5939:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "5950:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "5935:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "5935:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "5959:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "5914:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "5914:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "5904:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "5987:288:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "6002:46:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "6033:9:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "6044:2:2",
                                type: "",
                                value: "64",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6029:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6029:18:2",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "6016:12:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6016:32:2",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "6006:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "6095:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "6097:77:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "6097:79:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "6097:79:2",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "6067:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6075:18:2",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "6064:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6064:30:2",
                      },
                      nodeType: "YulIf",
                      src: "6061:117:2",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "6192:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "6237:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "6248:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6233:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6233:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "6257:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "6202:30:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6202:63:2",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "6192:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "6285:288:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "6300:46:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "6331:9:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "6342:2:2",
                                type: "",
                                value: "96",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6327:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6327:18:2",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "6314:12:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6314:32:2",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "6304:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "6393:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "6395:77:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "6395:79:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "6395:79:2",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "6365:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6373:18:2",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "6362:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6362:30:2",
                      },
                      nodeType: "YulIf",
                      src: "6359:117:2",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "6490:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "6535:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "6546:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6531:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6531:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "6555:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "6500:30:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6500:63:2",
                      },
                      variableNames: [
                        {
                          name: "value3",
                          nodeType: "YulIdentifier",
                          src: "6490:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_string_memory_ptrt_uint256t_string_memory_ptrt_string_memory_ptr",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "5368:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "5379:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "5391:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "5399:6:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "5407:6:2",
                type: "",
              },
              {
                name: "value3",
                nodeType: "YulTypedName",
                src: "5415:6:2",
                type: "",
              },
            ],
            src: "5275:1305:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "6696:689:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "6742:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "6744:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "6744:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "6744:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "6717:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "6726:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "6713:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6713:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "6738:2:2",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "6709:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "6709:32:2",
                  },
                  nodeType: "YulIf",
                  src: "6706:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "6835:287:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "6850:45:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "6881:9:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "6892:1:2",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "6877:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "6877:17:2",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "6864:12:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6864:31:2",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "6854:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "6942:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "6944:77:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "6944:79:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "6944:79:2",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "6914:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "6922:18:2",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "6911:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "6911:30:2",
                      },
                      nodeType: "YulIf",
                      src: "6908:117:2",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "7039:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "7084:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "7095:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "7080:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7080:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "7104:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "7049:30:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7049:63:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "7039:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "7132:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "7147:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7161:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "7151:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "7177:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "7212:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "7223:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "7208:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7208:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "7232:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "7187:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7187:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "7177:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "7260:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "7275:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7289:2:2",
                        type: "",
                        value: "64",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "7279:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "7305:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "7340:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "7351:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "7336:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "7336:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "7360:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "7315:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7315:53:2",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "7305:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_string_memory_ptrt_uint256t_address",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "6650:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "6661:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "6673:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "6681:6:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "6689:6:2",
                type: "",
              },
            ],
            src: "6586:799:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7456:53:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "7473:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "7496:5:2",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "7478:17:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7478:24:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "7466:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7466:37:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7466:37:2",
                },
              ],
            },
            name: "abi_encode_t_uint256_to_t_uint256_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "7444:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "7451:3:2",
                type: "",
              },
            ],
            src: "7391:118:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7613:124:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "7623:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "7635:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7646:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "7631:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7631:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "7623:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "7703:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "7716:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "7727:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "7712:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7712:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "7659:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7659:71:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "7659:71:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "7585:9:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "7597:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "7608:4:2",
                type: "",
              },
            ],
            src: "7515:222:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "7853:689:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "7899:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "7901:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "7901:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "7901:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "7874:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "7883:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "7870:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "7870:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "7895:2:2",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "7866:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "7866:32:2",
                  },
                  nodeType: "YulIf",
                  src: "7863:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "7992:287:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8007:45:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8038:9:2",
                              },
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "8049:1:2",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8034:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8034:17:2",
                          },
                        ],
                        functionName: {
                          name: "calldataload",
                          nodeType: "YulIdentifier",
                          src: "8021:12:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8021:31:2",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8011:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "8099:83:2",
                        statements: [
                          {
                            expression: {
                              arguments: [],
                              functionName: {
                                name: "revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db",
                                nodeType: "YulIdentifier",
                                src: "8101:77:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "8101:79:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "8101:79:2",
                          },
                        ],
                      },
                      condition: {
                        arguments: [
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "8071:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "8079:18:2",
                            type: "",
                            value: "0xffffffffffffffff",
                          },
                        ],
                        functionName: {
                          name: "gt",
                          nodeType: "YulIdentifier",
                          src: "8068:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8068:30:2",
                      },
                      nodeType: "YulIf",
                      src: "8065:117:2",
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8196:73:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8241:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8252:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8237:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8237:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8261:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_string_memory_ptr",
                          nodeType: "YulIdentifier",
                          src: "8206:30:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8206:63:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "8196:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "8289:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8304:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8318:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8308:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8334:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8369:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8380:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8365:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8365:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8389:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "8344:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8344:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "8334:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "8417:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8432:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8446:2:2",
                        type: "",
                        value: "64",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8436:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8462:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8497:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8508:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8493:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8493:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8517:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "8472:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8472:53:2",
                      },
                      variableNames: [
                        {
                          name: "value2",
                          nodeType: "YulIdentifier",
                          src: "8462:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_string_memory_ptrt_uint256t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "7807:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "7818:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "7830:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "7838:6:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "7846:6:2",
                type: "",
              },
            ],
            src: "7743:799:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "8631:391:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "8677:83:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b",
                            nodeType: "YulIdentifier",
                            src: "8679:77:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "8679:79:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "8679:79:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8652:7:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "8661:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "8648:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8648:23:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8673:2:2",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "slt",
                      nodeType: "YulIdentifier",
                      src: "8644:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "8644:32:2",
                  },
                  nodeType: "YulIf",
                  src: "8641:119:2",
                },
                {
                  nodeType: "YulBlock",
                  src: "8770:117:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8785:15:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8799:1:2",
                        type: "",
                        value: "0",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8789:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8814:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8849:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8860:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8845:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8845:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8869:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_address",
                          nodeType: "YulIdentifier",
                          src: "8824:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8824:53:2",
                      },
                      variableNames: [
                        {
                          name: "value0",
                          nodeType: "YulIdentifier",
                          src: "8814:6:2",
                        },
                      ],
                    },
                  ],
                },
                {
                  nodeType: "YulBlock",
                  src: "8897:118:2",
                  statements: [
                    {
                      nodeType: "YulVariableDeclaration",
                      src: "8912:16:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "8926:2:2",
                        type: "",
                        value: "32",
                      },
                      variables: [
                        {
                          name: "offset",
                          nodeType: "YulTypedName",
                          src: "8916:6:2",
                          type: "",
                        },
                      ],
                    },
                    {
                      nodeType: "YulAssignment",
                      src: "8942:63:2",
                      value: {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "headStart",
                                nodeType: "YulIdentifier",
                                src: "8977:9:2",
                              },
                              {
                                name: "offset",
                                nodeType: "YulIdentifier",
                                src: "8988:6:2",
                              },
                            ],
                            functionName: {
                              name: "add",
                              nodeType: "YulIdentifier",
                              src: "8973:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "8973:22:2",
                          },
                          {
                            name: "dataEnd",
                            nodeType: "YulIdentifier",
                            src: "8997:7:2",
                          },
                        ],
                        functionName: {
                          name: "abi_decode_t_uint256",
                          nodeType: "YulIdentifier",
                          src: "8952:20:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "8952:53:2",
                      },
                      variableNames: [
                        {
                          name: "value1",
                          nodeType: "YulIdentifier",
                          src: "8942:6:2",
                        },
                      ],
                    },
                  ],
                },
              ],
            },
            name: "abi_decode_tuple_t_addresst_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "8593:9:2",
                type: "",
              },
              {
                name: "dataEnd",
                nodeType: "YulTypedName",
                src: "8604:7:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "8616:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "8624:6:2",
                type: "",
              },
            ],
            src: "8548:474:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9056:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9073:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9076:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "9066:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9066:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9066:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9170:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9173:4:2",
                        type: "",
                        value: "0x22",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "9163:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9163:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9163:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9194:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9197:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "9187:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9187:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9187:15:2",
                },
              ],
            },
            name: "panic_error_0x22",
            nodeType: "YulFunctionDefinition",
            src: "9028:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9265:269:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "9275:22:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "9289:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9295:1:2",
                        type: "",
                        value: "2",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "9285:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9285:12:2",
                  },
                  variableNames: [
                    {
                      name: "length",
                      nodeType: "YulIdentifier",
                      src: "9275:6:2",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "9306:38:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "9336:4:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9342:1:2",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "9332:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9332:12:2",
                  },
                  variables: [
                    {
                      name: "outOfPlaceEncoding",
                      nodeType: "YulTypedName",
                      src: "9310:18:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "9383:51:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "9397:27:2",
                        value: {
                          arguments: [
                            {
                              name: "length",
                              nodeType: "YulIdentifier",
                              src: "9411:6:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "9419:4:2",
                              type: "",
                              value: "0x7f",
                            },
                          ],
                          functionName: {
                            name: "and",
                            nodeType: "YulIdentifier",
                            src: "9407:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "9407:17:2",
                        },
                        variableNames: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "9397:6:2",
                          },
                        ],
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "9363:18:2",
                      },
                    ],
                    functionName: {
                      name: "iszero",
                      nodeType: "YulIdentifier",
                      src: "9356:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9356:26:2",
                  },
                  nodeType: "YulIf",
                  src: "9353:81:2",
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "9486:42:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x22",
                            nodeType: "YulIdentifier",
                            src: "9500:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "9500:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "9500:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "outOfPlaceEncoding",
                        nodeType: "YulIdentifier",
                        src: "9450:18:2",
                      },
                      {
                        arguments: [
                          {
                            name: "length",
                            nodeType: "YulIdentifier",
                            src: "9473:6:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "9481:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "lt",
                          nodeType: "YulIdentifier",
                          src: "9470:2:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9470:14:2",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "9447:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9447:38:2",
                  },
                  nodeType: "YulIf",
                  src: "9444:84:2",
                },
              ],
            },
            name: "extract_byte_array_length",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "9249:4:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "length",
                nodeType: "YulTypedName",
                src: "9258:6:2",
                type: "",
              },
            ],
            src: "9214:320:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9605:53:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        name: "pos",
                        nodeType: "YulIdentifier",
                        src: "9622:3:2",
                      },
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "9645:5:2",
                          },
                        ],
                        functionName: {
                          name: "cleanup_t_address",
                          nodeType: "YulIdentifier",
                          src: "9627:17:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9627:24:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "9615:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9615:37:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9615:37:2",
                },
              ],
            },
            name: "abi_encode_t_address_to_t_address_fromStack",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "9593:5:2",
                type: "",
              },
              {
                name: "pos",
                nodeType: "YulTypedName",
                src: "9600:3:2",
                type: "",
              },
            ],
            src: "9540:118:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "9818:288:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "9828:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "9840:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "9851:2:2",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "9836:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9836:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "9828:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "9908:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "9921:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "9932:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "9917:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9917:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_fromStack",
                      nodeType: "YulIdentifier",
                      src: "9864:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9864:71:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9864:71:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "9989:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "10002:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "10013:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "9998:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "9998:18:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "9945:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "9945:72:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "9945:72:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value2",
                        nodeType: "YulIdentifier",
                        src: "10071:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "10084:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "10095:2:2",
                            type: "",
                            value: "64",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "10080:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10080:18:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "10027:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10027:72:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "10027:72:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "9774:9:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "9786:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "9794:6:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "9802:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "9813:4:2",
                type: "",
              },
            ],
            src: "9664:442:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10166:87:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "10176:11:2",
                  value: {
                    name: "ptr",
                    nodeType: "YulIdentifier",
                    src: "10184:3:2",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "10176:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10204:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        name: "ptr",
                        nodeType: "YulIdentifier",
                        src: "10207:3:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "10197:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10197:14:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "10197:14:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "10220:26:2",
                  value: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10238:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10241:4:2",
                        type: "",
                        value: "0x20",
                      },
                    ],
                    functionName: {
                      name: "keccak256",
                      nodeType: "YulIdentifier",
                      src: "10228:9:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10228:18:2",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "10220:4:2",
                    },
                  ],
                },
              ],
            },
            name: "array_dataslot_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "ptr",
                nodeType: "YulTypedName",
                src: "10153:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "10161:4:2",
                type: "",
              },
            ],
            src: "10112:141:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10303:49:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "10313:33:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "value",
                            nodeType: "YulIdentifier",
                            src: "10331:5:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "10338:2:2",
                            type: "",
                            value: "31",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "10327:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10327:14:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10343:2:2",
                        type: "",
                        value: "32",
                      },
                    ],
                    functionName: {
                      name: "div",
                      nodeType: "YulIdentifier",
                      src: "10323:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10323:23:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "10313:6:2",
                    },
                  ],
                },
              ],
            },
            name: "divide_by_32_ceil",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "10286:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "10296:6:2",
                type: "",
              },
            ],
            src: "10259:93:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10411:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "10421:37:2",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "10446:4:2",
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "10452:5:2",
                      },
                    ],
                    functionName: {
                      name: "shl",
                      nodeType: "YulIdentifier",
                      src: "10442:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10442:16:2",
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "10421:8:2",
                    },
                  ],
                },
              ],
            },
            name: "shift_left_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "10386:4:2",
                type: "",
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "10392:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "10402:8:2",
                type: "",
              },
            ],
            src: "10358:107:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10547:317:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "10557:35:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBytes",
                        nodeType: "YulIdentifier",
                        src: "10578:10:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10590:1:2",
                        type: "",
                        value: "8",
                      },
                    ],
                    functionName: {
                      name: "mul",
                      nodeType: "YulIdentifier",
                      src: "10574:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10574:18:2",
                  },
                  variables: [
                    {
                      name: "shiftBits",
                      nodeType: "YulTypedName",
                      src: "10561:9:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "10601:109:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "10632:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "10643:66:2",
                        type: "",
                        value:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "10613:18:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10613:97:2",
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "10605:4:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "10719:51:2",
                  value: {
                    arguments: [
                      {
                        name: "shiftBits",
                        nodeType: "YulIdentifier",
                        src: "10750:9:2",
                      },
                      {
                        name: "toInsert",
                        nodeType: "YulIdentifier",
                        src: "10761:8:2",
                      },
                    ],
                    functionName: {
                      name: "shift_left_dynamic",
                      nodeType: "YulIdentifier",
                      src: "10731:18:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10731:39:2",
                  },
                  variableNames: [
                    {
                      name: "toInsert",
                      nodeType: "YulIdentifier",
                      src: "10719:8:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "10779:30:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "10792:5:2",
                      },
                      {
                        arguments: [
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "10803:4:2",
                          },
                        ],
                        functionName: {
                          name: "not",
                          nodeType: "YulIdentifier",
                          src: "10799:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10799:9:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "10788:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10788:21:2",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "10779:5:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "10818:40:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "10831:5:2",
                      },
                      {
                        arguments: [
                          {
                            name: "toInsert",
                            nodeType: "YulIdentifier",
                            src: "10842:8:2",
                          },
                          {
                            name: "mask",
                            nodeType: "YulIdentifier",
                            src: "10852:4:2",
                          },
                        ],
                        functionName: {
                          name: "and",
                          nodeType: "YulIdentifier",
                          src: "10838:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "10838:19:2",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "10828:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "10828:30:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "10818:6:2",
                    },
                  ],
                },
              ],
            },
            name: "update_byte_slice_dynamic32",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "10508:5:2",
                type: "",
              },
              {
                name: "shiftBytes",
                nodeType: "YulTypedName",
                src: "10515:10:2",
                type: "",
              },
              {
                name: "toInsert",
                nodeType: "YulTypedName",
                src: "10527:8:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "10540:6:2",
                type: "",
              },
            ],
            src: "10471:393:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10902:28:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "10912:12:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "10919:5:2",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "10912:3:2",
                    },
                  ],
                },
              ],
            },
            name: "identity",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "10888:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "10898:3:2",
                type: "",
              },
            ],
            src: "10870:60:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "10996:82:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "11006:66:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "value",
                                nodeType: "YulIdentifier",
                                src: "11064:5:2",
                              },
                            ],
                            functionName: {
                              name: "cleanup_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "11046:17:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "11046:24:2",
                          },
                        ],
                        functionName: {
                          name: "identity",
                          nodeType: "YulIdentifier",
                          src: "11037:8:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "11037:34:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "11019:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11019:53:2",
                  },
                  variableNames: [
                    {
                      name: "converted",
                      nodeType: "YulIdentifier",
                      src: "11006:9:2",
                    },
                  ],
                },
              ],
            },
            name: "convert_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "10976:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "converted",
                nodeType: "YulTypedName",
                src: "10986:9:2",
                type: "",
              },
            ],
            src: "10936:142:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11131:28:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "11141:12:2",
                  value: {
                    name: "value",
                    nodeType: "YulIdentifier",
                    src: "11148:5:2",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "11141:3:2",
                    },
                  ],
                },
              ],
            },
            name: "prepare_store_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "11117:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "11127:3:2",
                type: "",
              },
            ],
            src: "11084:75:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11241:193:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "11251:63:2",
                  value: {
                    arguments: [
                      {
                        name: "value_0",
                        nodeType: "YulIdentifier",
                        src: "11306:7:2",
                      },
                    ],
                    functionName: {
                      name: "convert_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "11275:30:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11275:39:2",
                  },
                  variables: [
                    {
                      name: "convertedValue_0",
                      nodeType: "YulTypedName",
                      src: "11255:16:2",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "11330:4:2",
                      },
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                name: "slot",
                                nodeType: "YulIdentifier",
                                src: "11370:4:2",
                              },
                            ],
                            functionName: {
                              name: "sload",
                              nodeType: "YulIdentifier",
                              src: "11364:5:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "11364:11:2",
                          },
                          {
                            name: "offset",
                            nodeType: "YulIdentifier",
                            src: "11377:6:2",
                          },
                          {
                            arguments: [
                              {
                                name: "convertedValue_0",
                                nodeType: "YulIdentifier",
                                src: "11409:16:2",
                              },
                            ],
                            functionName: {
                              name: "prepare_store_t_uint256",
                              nodeType: "YulIdentifier",
                              src: "11385:23:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "11385:41:2",
                          },
                        ],
                        functionName: {
                          name: "update_byte_slice_dynamic32",
                          nodeType: "YulIdentifier",
                          src: "11336:27:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "11336:91:2",
                      },
                    ],
                    functionName: {
                      name: "sstore",
                      nodeType: "YulIdentifier",
                      src: "11323:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11323:105:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11323:105:2",
                },
              ],
            },
            name: "update_storage_value_t_uint256_to_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "11218:4:2",
                type: "",
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "11224:6:2",
                type: "",
              },
              {
                name: "value_0",
                nodeType: "YulTypedName",
                src: "11232:7:2",
                type: "",
              },
            ],
            src: "11165:269:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11489:24:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "11499:8:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "11506:1:2",
                    type: "",
                    value: "0",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "11499:3:2",
                    },
                  ],
                },
              ],
            },
            name: "zero_value_for_split_t_uint256",
            nodeType: "YulFunctionDefinition",
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "11485:3:2",
                type: "",
              },
            ],
            src: "11440:73:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11572:136:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "11582:46:2",
                  value: {
                    arguments: [],
                    functionName: {
                      name: "zero_value_for_split_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "11596:30:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11596:32:2",
                  },
                  variables: [
                    {
                      name: "zero_0",
                      nodeType: "YulTypedName",
                      src: "11586:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "11681:4:2",
                      },
                      {
                        name: "offset",
                        nodeType: "YulIdentifier",
                        src: "11687:6:2",
                      },
                      {
                        name: "zero_0",
                        nodeType: "YulIdentifier",
                        src: "11695:6:2",
                      },
                    ],
                    functionName: {
                      name: "update_storage_value_t_uint256_to_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "11637:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11637:65:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "11637:65:2",
                },
              ],
            },
            name: "storage_set_to_zero_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "11558:4:2",
                type: "",
              },
              {
                name: "offset",
                nodeType: "YulTypedName",
                src: "11564:6:2",
                type: "",
              },
            ],
            src: "11519:189:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11764:136:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "11831:63:2",
                    statements: [
                      {
                        expression: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "11875:5:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "11882:1:2",
                              type: "",
                              value: "0",
                            },
                          ],
                          functionName: {
                            name: "storage_set_to_zero_t_uint256",
                            nodeType: "YulIdentifier",
                            src: "11845:29:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "11845:39:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "11845:39:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "start",
                        nodeType: "YulIdentifier",
                        src: "11784:5:2",
                      },
                      {
                        name: "end",
                        nodeType: "YulIdentifier",
                        src: "11791:3:2",
                      },
                    ],
                    functionName: {
                      name: "lt",
                      nodeType: "YulIdentifier",
                      src: "11781:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11781:14:2",
                  },
                  nodeType: "YulForLoop",
                  post: {
                    nodeType: "YulBlock",
                    src: "11796:26:2",
                    statements: [
                      {
                        nodeType: "YulAssignment",
                        src: "11798:22:2",
                        value: {
                          arguments: [
                            {
                              name: "start",
                              nodeType: "YulIdentifier",
                              src: "11811:5:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "11818:1:2",
                              type: "",
                              value: "1",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "11807:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "11807:13:2",
                        },
                        variableNames: [
                          {
                            name: "start",
                            nodeType: "YulIdentifier",
                            src: "11798:5:2",
                          },
                        ],
                      },
                    ],
                  },
                  pre: {
                    nodeType: "YulBlock",
                    src: "11778:2:2",
                    statements: [],
                  },
                  src: "11774:120:2",
                },
              ],
            },
            name: "clear_storage_range_t_bytes1",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "start",
                nodeType: "YulTypedName",
                src: "11752:5:2",
                type: "",
              },
              {
                name: "end",
                nodeType: "YulTypedName",
                src: "11759:3:2",
                type: "",
              },
            ],
            src: "11714:186:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "11985:464:2",
              statements: [
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "12011:431:2",
                    statements: [
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "12025:54:2",
                        value: {
                          arguments: [
                            {
                              name: "array",
                              nodeType: "YulIdentifier",
                              src: "12073:5:2",
                            },
                          ],
                          functionName: {
                            name: "array_dataslot_t_string_storage",
                            nodeType: "YulIdentifier",
                            src: "12041:31:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "12041:38:2",
                        },
                        variables: [
                          {
                            name: "dataArea",
                            nodeType: "YulTypedName",
                            src: "12029:8:2",
                            type: "",
                          },
                        ],
                      },
                      {
                        nodeType: "YulVariableDeclaration",
                        src: "12092:63:2",
                        value: {
                          arguments: [
                            {
                              name: "dataArea",
                              nodeType: "YulIdentifier",
                              src: "12115:8:2",
                            },
                            {
                              arguments: [
                                {
                                  name: "startIndex",
                                  nodeType: "YulIdentifier",
                                  src: "12143:10:2",
                                },
                              ],
                              functionName: {
                                name: "divide_by_32_ceil",
                                nodeType: "YulIdentifier",
                                src: "12125:17:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "12125:29:2",
                            },
                          ],
                          functionName: {
                            name: "add",
                            nodeType: "YulIdentifier",
                            src: "12111:3:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "12111:44:2",
                        },
                        variables: [
                          {
                            name: "deleteStart",
                            nodeType: "YulTypedName",
                            src: "12096:11:2",
                            type: "",
                          },
                        ],
                      },
                      {
                        body: {
                          nodeType: "YulBlock",
                          src: "12312:27:2",
                          statements: [
                            {
                              nodeType: "YulAssignment",
                              src: "12314:23:2",
                              value: {
                                name: "dataArea",
                                nodeType: "YulIdentifier",
                                src: "12329:8:2",
                              },
                              variableNames: [
                                {
                                  name: "deleteStart",
                                  nodeType: "YulIdentifier",
                                  src: "12314:11:2",
                                },
                              ],
                            },
                          ],
                        },
                        condition: {
                          arguments: [
                            {
                              name: "startIndex",
                              nodeType: "YulIdentifier",
                              src: "12296:10:2",
                            },
                            {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "12308:2:2",
                              type: "",
                              value: "32",
                            },
                          ],
                          functionName: {
                            name: "lt",
                            nodeType: "YulIdentifier",
                            src: "12293:2:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "12293:18:2",
                        },
                        nodeType: "YulIf",
                        src: "12290:49:2",
                      },
                      {
                        expression: {
                          arguments: [
                            {
                              name: "deleteStart",
                              nodeType: "YulIdentifier",
                              src: "12381:11:2",
                            },
                            {
                              arguments: [
                                {
                                  name: "dataArea",
                                  nodeType: "YulIdentifier",
                                  src: "12398:8:2",
                                },
                                {
                                  arguments: [
                                    {
                                      name: "len",
                                      nodeType: "YulIdentifier",
                                      src: "12426:3:2",
                                    },
                                  ],
                                  functionName: {
                                    name: "divide_by_32_ceil",
                                    nodeType: "YulIdentifier",
                                    src: "12408:17:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "12408:22:2",
                                },
                              ],
                              functionName: {
                                name: "add",
                                nodeType: "YulIdentifier",
                                src: "12394:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "12394:37:2",
                            },
                          ],
                          functionName: {
                            name: "clear_storage_range_t_bytes1",
                            nodeType: "YulIdentifier",
                            src: "12352:28:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "12352:80:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "12352:80:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "12002:3:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "12007:2:2",
                        type: "",
                        value: "31",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "11999:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "11999:11:2",
                  },
                  nodeType: "YulIf",
                  src: "11996:446:2",
                },
              ],
            },
            name: "clean_up_bytearray_end_slots_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "array",
                nodeType: "YulTypedName",
                src: "11961:5:2",
                type: "",
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "11968:3:2",
                type: "",
              },
              {
                name: "startIndex",
                nodeType: "YulTypedName",
                src: "11973:10:2",
                type: "",
              },
            ],
            src: "11906:543:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12518:54:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "12528:37:2",
                  value: {
                    arguments: [
                      {
                        name: "bits",
                        nodeType: "YulIdentifier",
                        src: "12553:4:2",
                      },
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "12559:5:2",
                      },
                    ],
                    functionName: {
                      name: "shr",
                      nodeType: "YulIdentifier",
                      src: "12549:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12549:16:2",
                  },
                  variableNames: [
                    {
                      name: "newValue",
                      nodeType: "YulIdentifier",
                      src: "12528:8:2",
                    },
                  ],
                },
              ],
            },
            name: "shift_right_unsigned_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "bits",
                nodeType: "YulTypedName",
                src: "12493:4:2",
                type: "",
              },
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "12499:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "newValue",
                nodeType: "YulTypedName",
                src: "12509:8:2",
                type: "",
              },
            ],
            src: "12455:117:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12629:118:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "12639:68:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "12688:1:2",
                                type: "",
                                value: "8",
                              },
                              {
                                name: "bytes",
                                nodeType: "YulIdentifier",
                                src: "12691:5:2",
                              },
                            ],
                            functionName: {
                              name: "mul",
                              nodeType: "YulIdentifier",
                              src: "12684:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "12684:13:2",
                          },
                          {
                            arguments: [
                              {
                                kind: "number",
                                nodeType: "YulLiteral",
                                src: "12703:1:2",
                                type: "",
                                value: "0",
                              },
                            ],
                            functionName: {
                              name: "not",
                              nodeType: "YulIdentifier",
                              src: "12699:3:2",
                            },
                            nodeType: "YulFunctionCall",
                            src: "12699:6:2",
                          },
                        ],
                        functionName: {
                          name: "shift_right_unsigned_dynamic",
                          nodeType: "YulIdentifier",
                          src: "12655:28:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "12655:51:2",
                      },
                    ],
                    functionName: {
                      name: "not",
                      nodeType: "YulIdentifier",
                      src: "12651:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12651:56:2",
                  },
                  variables: [
                    {
                      name: "mask",
                      nodeType: "YulTypedName",
                      src: "12643:4:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "12716:25:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "12730:4:2",
                      },
                      {
                        name: "mask",
                        nodeType: "YulIdentifier",
                        src: "12736:4:2",
                      },
                    ],
                    functionName: {
                      name: "and",
                      nodeType: "YulIdentifier",
                      src: "12726:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12726:15:2",
                  },
                  variableNames: [
                    {
                      name: "result",
                      nodeType: "YulIdentifier",
                      src: "12716:6:2",
                    },
                  ],
                },
              ],
            },
            name: "mask_bytes_dynamic",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "12606:4:2",
                type: "",
              },
              {
                name: "bytes",
                nodeType: "YulTypedName",
                src: "12612:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "result",
                nodeType: "YulTypedName",
                src: "12622:6:2",
                type: "",
              },
            ],
            src: "12578:169:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "12833:214:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "12966:37:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "12993:4:2",
                      },
                      {
                        name: "len",
                        nodeType: "YulIdentifier",
                        src: "12999:3:2",
                      },
                    ],
                    functionName: {
                      name: "mask_bytes_dynamic",
                      nodeType: "YulIdentifier",
                      src: "12974:18:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "12974:29:2",
                  },
                  variableNames: [
                    {
                      name: "data",
                      nodeType: "YulIdentifier",
                      src: "12966:4:2",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "13012:29:2",
                  value: {
                    arguments: [
                      {
                        name: "data",
                        nodeType: "YulIdentifier",
                        src: "13023:4:2",
                      },
                      {
                        arguments: [
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "13033:1:2",
                            type: "",
                            value: "2",
                          },
                          {
                            name: "len",
                            nodeType: "YulIdentifier",
                            src: "13036:3:2",
                          },
                        ],
                        functionName: {
                          name: "mul",
                          nodeType: "YulIdentifier",
                          src: "13029:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "13029:11:2",
                      },
                    ],
                    functionName: {
                      name: "or",
                      nodeType: "YulIdentifier",
                      src: "13020:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13020:21:2",
                  },
                  variableNames: [
                    {
                      name: "used",
                      nodeType: "YulIdentifier",
                      src: "13012:4:2",
                    },
                  ],
                },
              ],
            },
            name: "extract_used_part_and_set_length_of_short_byte_array",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "data",
                nodeType: "YulTypedName",
                src: "12814:4:2",
                type: "",
              },
              {
                name: "len",
                nodeType: "YulTypedName",
                src: "12820:3:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "used",
                nodeType: "YulTypedName",
                src: "12828:4:2",
                type: "",
              },
            ],
            src: "12752:295:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "13144:1303:2",
              statements: [
                {
                  nodeType: "YulVariableDeclaration",
                  src: "13155:51:2",
                  value: {
                    arguments: [
                      {
                        name: "src",
                        nodeType: "YulIdentifier",
                        src: "13202:3:2",
                      },
                    ],
                    functionName: {
                      name: "array_length_t_string_memory_ptr",
                      nodeType: "YulIdentifier",
                      src: "13169:32:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13169:37:2",
                  },
                  variables: [
                    {
                      name: "newLen",
                      nodeType: "YulTypedName",
                      src: "13159:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "13291:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x41",
                            nodeType: "YulIdentifier",
                            src: "13293:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "13293:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "13293:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "13263:6:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13271:18:2",
                        type: "",
                        value: "0xffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "13260:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13260:30:2",
                  },
                  nodeType: "YulIf",
                  src: "13257:56:2",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "13323:52:2",
                  value: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "slot",
                            nodeType: "YulIdentifier",
                            src: "13369:4:2",
                          },
                        ],
                        functionName: {
                          name: "sload",
                          nodeType: "YulIdentifier",
                          src: "13363:5:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "13363:11:2",
                      },
                    ],
                    functionName: {
                      name: "extract_byte_array_length",
                      nodeType: "YulIdentifier",
                      src: "13337:25:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13337:38:2",
                  },
                  variables: [
                    {
                      name: "oldLen",
                      nodeType: "YulTypedName",
                      src: "13327:6:2",
                      type: "",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "slot",
                        nodeType: "YulIdentifier",
                        src: "13468:4:2",
                      },
                      {
                        name: "oldLen",
                        nodeType: "YulIdentifier",
                        src: "13474:6:2",
                      },
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "13482:6:2",
                      },
                    ],
                    functionName: {
                      name: "clean_up_bytearray_end_slots_t_string_storage",
                      nodeType: "YulIdentifier",
                      src: "13422:45:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13422:67:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "13422:67:2",
                },
                {
                  nodeType: "YulVariableDeclaration",
                  src: "13499:18:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "13516:1:2",
                    type: "",
                    value: "0",
                  },
                  variables: [
                    {
                      name: "srcOffset",
                      nodeType: "YulTypedName",
                      src: "13503:9:2",
                      type: "",
                    },
                  ],
                },
                {
                  nodeType: "YulAssignment",
                  src: "13527:17:2",
                  value: {
                    kind: "number",
                    nodeType: "YulLiteral",
                    src: "13540:4:2",
                    type: "",
                    value: "0x20",
                  },
                  variableNames: [
                    {
                      name: "srcOffset",
                      nodeType: "YulIdentifier",
                      src: "13527:9:2",
                    },
                  ],
                },
                {
                  cases: [
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "13591:611:2",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "13605:37:2",
                            value: {
                              arguments: [
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "13624:6:2",
                                },
                                {
                                  arguments: [
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "13636:4:2",
                                      type: "",
                                      value: "0x1f",
                                    },
                                  ],
                                  functionName: {
                                    name: "not",
                                    nodeType: "YulIdentifier",
                                    src: "13632:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "13632:9:2",
                                },
                              ],
                              functionName: {
                                name: "and",
                                nodeType: "YulIdentifier",
                                src: "13620:3:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "13620:22:2",
                            },
                            variables: [
                              {
                                name: "loopEnd",
                                nodeType: "YulTypedName",
                                src: "13609:7:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "13656:51:2",
                            value: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "13702:4:2",
                                },
                              ],
                              functionName: {
                                name: "array_dataslot_t_string_storage",
                                nodeType: "YulIdentifier",
                                src: "13670:31:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "13670:37:2",
                            },
                            variables: [
                              {
                                name: "dstPtr",
                                nodeType: "YulTypedName",
                                src: "13660:6:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "13720:10:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "13729:1:2",
                              type: "",
                              value: "0",
                            },
                            variables: [
                              {
                                name: "i",
                                nodeType: "YulTypedName",
                                src: "13724:1:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "13788:163:2",
                              statements: [
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "13813:6:2",
                                      },
                                      {
                                        arguments: [
                                          {
                                            arguments: [
                                              {
                                                name: "src",
                                                nodeType: "YulIdentifier",
                                                src: "13831:3:2",
                                              },
                                              {
                                                name: "srcOffset",
                                                nodeType: "YulIdentifier",
                                                src: "13836:9:2",
                                              },
                                            ],
                                            functionName: {
                                              name: "add",
                                              nodeType: "YulIdentifier",
                                              src: "13827:3:2",
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "13827:19:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "mload",
                                          nodeType: "YulIdentifier",
                                          src: "13821:5:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "13821:26:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "13806:6:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "13806:42:2",
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "13806:42:2",
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "13865:24:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "13879:6:2",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "13887:1:2",
                                        type: "",
                                        value: "1",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "13875:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "13875:14:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "dstPtr",
                                      nodeType: "YulIdentifier",
                                      src: "13865:6:2",
                                    },
                                  ],
                                },
                                {
                                  nodeType: "YulAssignment",
                                  src: "13906:31:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "srcOffset",
                                        nodeType: "YulIdentifier",
                                        src: "13923:9:2",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "13934:2:2",
                                        type: "",
                                        value: "32",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "13919:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "13919:18:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "srcOffset",
                                      nodeType: "YulIdentifier",
                                      src: "13906:9:2",
                                    },
                                  ],
                                },
                              ],
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "i",
                                  nodeType: "YulIdentifier",
                                  src: "13754:1:2",
                                },
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "13757:7:2",
                                },
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "13751:2:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "13751:14:2",
                            },
                            nodeType: "YulForLoop",
                            post: {
                              nodeType: "YulBlock",
                              src: "13766:21:2",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "13768:17:2",
                                  value: {
                                    arguments: [
                                      {
                                        name: "i",
                                        nodeType: "YulIdentifier",
                                        src: "13777:1:2",
                                      },
                                      {
                                        kind: "number",
                                        nodeType: "YulLiteral",
                                        src: "13780:4:2",
                                        type: "",
                                        value: "0x20",
                                      },
                                    ],
                                    functionName: {
                                      name: "add",
                                      nodeType: "YulIdentifier",
                                      src: "13773:3:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "13773:12:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "i",
                                      nodeType: "YulIdentifier",
                                      src: "13768:1:2",
                                    },
                                  ],
                                },
                              ],
                            },
                            pre: {
                              nodeType: "YulBlock",
                              src: "13747:3:2",
                              statements: [],
                            },
                            src: "13743:208:2",
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "13987:156:2",
                              statements: [
                                {
                                  nodeType: "YulVariableDeclaration",
                                  src: "14005:43:2",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "14032:3:2",
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "14037:9:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "14028:3:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "14028:19:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "14022:5:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "14022:26:2",
                                  },
                                  variables: [
                                    {
                                      name: "lastValue",
                                      nodeType: "YulTypedName",
                                      src: "14009:9:2",
                                      type: "",
                                    },
                                  ],
                                },
                                {
                                  expression: {
                                    arguments: [
                                      {
                                        name: "dstPtr",
                                        nodeType: "YulIdentifier",
                                        src: "14072:6:2",
                                      },
                                      {
                                        arguments: [
                                          {
                                            name: "lastValue",
                                            nodeType: "YulIdentifier",
                                            src: "14099:9:2",
                                          },
                                          {
                                            arguments: [
                                              {
                                                name: "newLen",
                                                nodeType: "YulIdentifier",
                                                src: "14114:6:2",
                                              },
                                              {
                                                kind: "number",
                                                nodeType: "YulLiteral",
                                                src: "14122:4:2",
                                                type: "",
                                                value: "0x1f",
                                              },
                                            ],
                                            functionName: {
                                              name: "and",
                                              nodeType: "YulIdentifier",
                                              src: "14110:3:2",
                                            },
                                            nodeType: "YulFunctionCall",
                                            src: "14110:17:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "mask_bytes_dynamic",
                                          nodeType: "YulIdentifier",
                                          src: "14080:18:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "14080:48:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "sstore",
                                      nodeType: "YulIdentifier",
                                      src: "14065:6:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "14065:64:2",
                                  },
                                  nodeType: "YulExpressionStatement",
                                  src: "14065:64:2",
                                },
                              ],
                            },
                            condition: {
                              arguments: [
                                {
                                  name: "loopEnd",
                                  nodeType: "YulIdentifier",
                                  src: "13970:7:2",
                                },
                                {
                                  name: "newLen",
                                  nodeType: "YulIdentifier",
                                  src: "13979:6:2",
                                },
                              ],
                              functionName: {
                                name: "lt",
                                nodeType: "YulIdentifier",
                                src: "13967:2:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "13967:19:2",
                            },
                            nodeType: "YulIf",
                            src: "13964:179:2",
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "14163:4:2",
                                },
                                {
                                  arguments: [
                                    {
                                      arguments: [
                                        {
                                          name: "newLen",
                                          nodeType: "YulIdentifier",
                                          src: "14177:6:2",
                                        },
                                        {
                                          kind: "number",
                                          nodeType: "YulLiteral",
                                          src: "14185:1:2",
                                          type: "",
                                          value: "2",
                                        },
                                      ],
                                      functionName: {
                                        name: "mul",
                                        nodeType: "YulIdentifier",
                                        src: "14173:3:2",
                                      },
                                      nodeType: "YulFunctionCall",
                                      src: "14173:14:2",
                                    },
                                    {
                                      kind: "number",
                                      nodeType: "YulLiteral",
                                      src: "14189:1:2",
                                      type: "",
                                      value: "1",
                                    },
                                  ],
                                  functionName: {
                                    name: "add",
                                    nodeType: "YulIdentifier",
                                    src: "14169:3:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "14169:22:2",
                                },
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "14156:6:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "14156:36:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "14156:36:2",
                          },
                        ],
                      },
                      nodeType: "YulCase",
                      src: "13584:618:2",
                      value: {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13589:1:2",
                        type: "",
                        value: "1",
                      },
                    },
                    {
                      body: {
                        nodeType: "YulBlock",
                        src: "14219:222:2",
                        statements: [
                          {
                            nodeType: "YulVariableDeclaration",
                            src: "14233:14:2",
                            value: {
                              kind: "number",
                              nodeType: "YulLiteral",
                              src: "14246:1:2",
                              type: "",
                              value: "0",
                            },
                            variables: [
                              {
                                name: "value",
                                nodeType: "YulTypedName",
                                src: "14237:5:2",
                                type: "",
                              },
                            ],
                          },
                          {
                            body: {
                              nodeType: "YulBlock",
                              src: "14270:67:2",
                              statements: [
                                {
                                  nodeType: "YulAssignment",
                                  src: "14288:35:2",
                                  value: {
                                    arguments: [
                                      {
                                        arguments: [
                                          {
                                            name: "src",
                                            nodeType: "YulIdentifier",
                                            src: "14307:3:2",
                                          },
                                          {
                                            name: "srcOffset",
                                            nodeType: "YulIdentifier",
                                            src: "14312:9:2",
                                          },
                                        ],
                                        functionName: {
                                          name: "add",
                                          nodeType: "YulIdentifier",
                                          src: "14303:3:2",
                                        },
                                        nodeType: "YulFunctionCall",
                                        src: "14303:19:2",
                                      },
                                    ],
                                    functionName: {
                                      name: "mload",
                                      nodeType: "YulIdentifier",
                                      src: "14297:5:2",
                                    },
                                    nodeType: "YulFunctionCall",
                                    src: "14297:26:2",
                                  },
                                  variableNames: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "14288:5:2",
                                    },
                                  ],
                                },
                              ],
                            },
                            condition: {
                              name: "newLen",
                              nodeType: "YulIdentifier",
                              src: "14263:6:2",
                            },
                            nodeType: "YulIf",
                            src: "14260:77:2",
                          },
                          {
                            expression: {
                              arguments: [
                                {
                                  name: "slot",
                                  nodeType: "YulIdentifier",
                                  src: "14357:4:2",
                                },
                                {
                                  arguments: [
                                    {
                                      name: "value",
                                      nodeType: "YulIdentifier",
                                      src: "14416:5:2",
                                    },
                                    {
                                      name: "newLen",
                                      nodeType: "YulIdentifier",
                                      src: "14423:6:2",
                                    },
                                  ],
                                  functionName: {
                                    name: "extract_used_part_and_set_length_of_short_byte_array",
                                    nodeType: "YulIdentifier",
                                    src: "14363:52:2",
                                  },
                                  nodeType: "YulFunctionCall",
                                  src: "14363:67:2",
                                },
                              ],
                              functionName: {
                                name: "sstore",
                                nodeType: "YulIdentifier",
                                src: "14350:6:2",
                              },
                              nodeType: "YulFunctionCall",
                              src: "14350:81:2",
                            },
                            nodeType: "YulExpressionStatement",
                            src: "14350:81:2",
                          },
                        ],
                      },
                      nodeType: "YulCase",
                      src: "14211:230:2",
                      value: "default",
                    },
                  ],
                  expression: {
                    arguments: [
                      {
                        name: "newLen",
                        nodeType: "YulIdentifier",
                        src: "13564:6:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "13572:2:2",
                        type: "",
                        value: "31",
                      },
                    ],
                    functionName: {
                      name: "gt",
                      nodeType: "YulIdentifier",
                      src: "13561:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "13561:14:2",
                  },
                  nodeType: "YulSwitch",
                  src: "13554:887:2",
                },
              ],
            },
            name: "copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "slot",
                nodeType: "YulTypedName",
                src: "13133:4:2",
                type: "",
              },
              {
                name: "src",
                nodeType: "YulTypedName",
                src: "13139:3:2",
                type: "",
              },
            ],
            src: "13052:1395:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "14695:584:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "14705:27:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "14717:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "14728:3:2",
                        type: "",
                        value: "128",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "14713:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14713:19:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "14705:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "14753:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "14764:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "14749:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "14749:17:2",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "14772:4:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "14778:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "14768:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "14768:20:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "14742:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14742:47:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "14742:47:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "14798:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "14870:6:2",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "14879:4:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "14806:63:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14806:78:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "14798:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "14938:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "14951:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "14962:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "14947:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "14947:18:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "14894:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14894:72:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "14894:72:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "14987:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "14998:2:2",
                            type: "",
                            value: "64",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "14983:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "14983:18:2",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "15007:4:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "15013:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "15003:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "15003:20:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "14976:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "14976:48:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "14976:48:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "15033:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value2",
                        nodeType: "YulIdentifier",
                        src: "15105:6:2",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "15114:4:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "15041:63:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15041:78:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "15033:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "15140:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "15151:2:2",
                            type: "",
                            value: "96",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "15136:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "15136:18:2",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "15160:4:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "15166:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "15156:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "15156:20:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "15129:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15129:48:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15129:48:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "15186:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value3",
                        nodeType: "YulIdentifier",
                        src: "15258:6:2",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "15267:4:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "15194:63:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15194:78:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "15186:4:2",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "14643:9:2",
                type: "",
              },
              {
                name: "value3",
                nodeType: "YulTypedName",
                src: "14655:6:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "14663:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "14671:6:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "14679:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "14690:4:2",
                type: "",
              },
            ],
            src: "14453:826:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "15313:152:2",
              statements: [
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15330:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15333:77:2",
                        type: "",
                        value:
                          "35408467139433450592217433187231851964531694900788300625387963629091585785856",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "15323:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15323:88:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15323:88:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15427:1:2",
                        type: "",
                        value: "4",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15430:4:2",
                        type: "",
                        value: "0x11",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "15420:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15420:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15420:15:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15451:1:2",
                        type: "",
                        value: "0",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15454:4:2",
                        type: "",
                        value: "0x24",
                      },
                    ],
                    functionName: {
                      name: "revert",
                      nodeType: "YulIdentifier",
                      src: "15444:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15444:15:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15444:15:2",
                },
              ],
            },
            name: "panic_error_0x11",
            nodeType: "YulFunctionDefinition",
            src: "15285:180:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "15514:190:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "15524:33:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "15551:5:2",
                      },
                    ],
                    functionName: {
                      name: "cleanup_t_uint256",
                      nodeType: "YulIdentifier",
                      src: "15533:17:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15533:24:2",
                  },
                  variableNames: [
                    {
                      name: "value",
                      nodeType: "YulIdentifier",
                      src: "15524:5:2",
                    },
                  ],
                },
                {
                  body: {
                    nodeType: "YulBlock",
                    src: "15647:22:2",
                    statements: [
                      {
                        expression: {
                          arguments: [],
                          functionName: {
                            name: "panic_error_0x11",
                            nodeType: "YulIdentifier",
                            src: "15649:16:2",
                          },
                          nodeType: "YulFunctionCall",
                          src: "15649:18:2",
                        },
                        nodeType: "YulExpressionStatement",
                        src: "15649:18:2",
                      },
                    ],
                  },
                  condition: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "15572:5:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15579:66:2",
                        type: "",
                        value:
                          "0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff",
                      },
                    ],
                    functionName: {
                      name: "eq",
                      nodeType: "YulIdentifier",
                      src: "15569:2:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15569:77:2",
                  },
                  nodeType: "YulIf",
                  src: "15566:103:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "15678:20:2",
                  value: {
                    arguments: [
                      {
                        name: "value",
                        nodeType: "YulIdentifier",
                        src: "15689:5:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15696:1:2",
                        type: "",
                        value: "1",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "15685:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15685:13:2",
                  },
                  variableNames: [
                    {
                      name: "ret",
                      nodeType: "YulIdentifier",
                      src: "15678:3:2",
                    },
                  ],
                },
              ],
            },
            name: "increment_t_uint256",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "value",
                nodeType: "YulTypedName",
                src: "15500:5:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "ret",
                nodeType: "YulTypedName",
                src: "15510:3:2",
                type: "",
              },
            ],
            src: "15471:233:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "15884:359:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "15894:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "15906:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "15917:2:2",
                        type: "",
                        value: "96",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "15902:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15902:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "15894:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "15974:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "15987:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "15998:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "15983:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "15983:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_fromStack",
                      nodeType: "YulIdentifier",
                      src: "15930:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "15930:71:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "15930:71:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "16055:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "16068:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "16079:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "16064:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16064:18:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "16011:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16011:72:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "16011:72:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "16104:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "16115:2:2",
                            type: "",
                            value: "64",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "16100:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16100:18:2",
                      },
                      {
                        arguments: [
                          {
                            name: "tail",
                            nodeType: "YulIdentifier",
                            src: "16124:4:2",
                          },
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "16130:9:2",
                          },
                        ],
                        functionName: {
                          name: "sub",
                          nodeType: "YulIdentifier",
                          src: "16120:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16120:20:2",
                      },
                    ],
                    functionName: {
                      name: "mstore",
                      nodeType: "YulIdentifier",
                      src: "16093:6:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16093:48:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "16093:48:2",
                },
                {
                  nodeType: "YulAssignment",
                  src: "16150:86:2",
                  value: {
                    arguments: [
                      {
                        name: "value2",
                        nodeType: "YulIdentifier",
                        src: "16222:6:2",
                      },
                      {
                        name: "tail",
                        nodeType: "YulIdentifier",
                        src: "16231:4:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack",
                      nodeType: "YulIdentifier",
                      src: "16158:63:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16158:78:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "16150:4:2",
                    },
                  ],
                },
              ],
            },
            name: "abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "15840:9:2",
                type: "",
              },
              {
                name: "value2",
                nodeType: "YulTypedName",
                src: "15852:6:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "15860:6:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "15868:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "15879:4:2",
                type: "",
              },
            ],
            src: "15710:533:2",
          },
          {
            body: {
              nodeType: "YulBlock",
              src: "16375:206:2",
              statements: [
                {
                  nodeType: "YulAssignment",
                  src: "16385:26:2",
                  value: {
                    arguments: [
                      {
                        name: "headStart",
                        nodeType: "YulIdentifier",
                        src: "16397:9:2",
                      },
                      {
                        kind: "number",
                        nodeType: "YulLiteral",
                        src: "16408:2:2",
                        type: "",
                        value: "64",
                      },
                    ],
                    functionName: {
                      name: "add",
                      nodeType: "YulIdentifier",
                      src: "16393:3:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16393:18:2",
                  },
                  variableNames: [
                    {
                      name: "tail",
                      nodeType: "YulIdentifier",
                      src: "16385:4:2",
                    },
                  ],
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value0",
                        nodeType: "YulIdentifier",
                        src: "16465:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "16478:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "16489:1:2",
                            type: "",
                            value: "0",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "16474:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16474:17:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_address_to_t_address_fromStack",
                      nodeType: "YulIdentifier",
                      src: "16421:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16421:71:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "16421:71:2",
                },
                {
                  expression: {
                    arguments: [
                      {
                        name: "value1",
                        nodeType: "YulIdentifier",
                        src: "16546:6:2",
                      },
                      {
                        arguments: [
                          {
                            name: "headStart",
                            nodeType: "YulIdentifier",
                            src: "16559:9:2",
                          },
                          {
                            kind: "number",
                            nodeType: "YulLiteral",
                            src: "16570:2:2",
                            type: "",
                            value: "32",
                          },
                        ],
                        functionName: {
                          name: "add",
                          nodeType: "YulIdentifier",
                          src: "16555:3:2",
                        },
                        nodeType: "YulFunctionCall",
                        src: "16555:18:2",
                      },
                    ],
                    functionName: {
                      name: "abi_encode_t_uint256_to_t_uint256_fromStack",
                      nodeType: "YulIdentifier",
                      src: "16502:43:2",
                    },
                    nodeType: "YulFunctionCall",
                    src: "16502:72:2",
                  },
                  nodeType: "YulExpressionStatement",
                  src: "16502:72:2",
                },
              ],
            },
            name: "abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed",
            nodeType: "YulFunctionDefinition",
            parameters: [
              {
                name: "headStart",
                nodeType: "YulTypedName",
                src: "16339:9:2",
                type: "",
              },
              {
                name: "value1",
                nodeType: "YulTypedName",
                src: "16351:6:2",
                type: "",
              },
              {
                name: "value0",
                nodeType: "YulTypedName",
                src: "16359:6:2",
                type: "",
              },
            ],
            returnVariables: [
              {
                name: "tail",
                nodeType: "YulTypedName",
                src: "16370:4:2",
                type: "",
              },
            ],
            src: "16249:332:2",
          },
        ],
      },
      contents:
        "{\n\n    function array_length_t_string_memory_ptr(value) -> length {\n\n        length := mload(value)\n\n    }\n\n    function array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length) -> updated_pos {\n        mstore(pos, length)\n        updated_pos := add(pos, 0x20)\n    }\n\n    function copy_memory_to_memory_with_cleanup(src, dst, length) {\n        let i := 0\n        for { } lt(i, length) { i := add(i, 32) }\n        {\n            mstore(add(dst, i), mload(add(src, i)))\n        }\n        mstore(add(dst, length), 0)\n    }\n\n    function round_up_to_mul_of_32(value) -> result {\n        result := and(add(value, 31), not(31))\n    }\n\n    function abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value, pos) -> end {\n        let length := array_length_t_string_memory_ptr(value)\n        pos := array_storeLengthForEncoding_t_string_memory_ptr_fromStack(pos, length)\n        copy_memory_to_memory_with_cleanup(add(value, 0x20), pos, length)\n        end := add(pos, round_up_to_mul_of_32(length))\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr__to_t_string_memory_ptr__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n    }\n\n    function allocate_unbounded() -> memPtr {\n        memPtr := mload(64)\n    }\n\n    function revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() {\n        revert(0, 0)\n    }\n\n    function revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() {\n        revert(0, 0)\n    }\n\n    function cleanup_t_uint160(value) -> cleaned {\n        cleaned := and(value, 0xffffffffffffffffffffffffffffffffffffffff)\n    }\n\n    function cleanup_t_address(value) -> cleaned {\n        cleaned := cleanup_t_uint160(value)\n    }\n\n    function validator_revert_t_address(value) {\n        if iszero(eq(value, cleanup_t_address(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_address(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_address(value)\n    }\n\n    function cleanup_t_uint256(value) -> cleaned {\n        cleaned := value\n    }\n\n    function validator_revert_t_uint256(value) {\n        if iszero(eq(value, cleanup_t_uint256(value))) { revert(0, 0) }\n    }\n\n    function abi_decode_t_uint256(offset, end) -> value {\n        value := calldataload(offset)\n        validator_revert_t_uint256(value)\n    }\n\n    function abi_decode_tuple_t_addresst_uint256t_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() {\n        revert(0, 0)\n    }\n\n    function revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() {\n        revert(0, 0)\n    }\n\n    function panic_error_0x41() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x41)\n        revert(0, 0x24)\n    }\n\n    function finalize_allocation(memPtr, size) {\n        let newFreePtr := add(memPtr, round_up_to_mul_of_32(size))\n        // protect against overflow\n        if or(gt(newFreePtr, 0xffffffffffffffff), lt(newFreePtr, memPtr)) { panic_error_0x41() }\n        mstore(64, newFreePtr)\n    }\n\n    function allocate_memory(size) -> memPtr {\n        memPtr := allocate_unbounded()\n        finalize_allocation(memPtr, size)\n    }\n\n    function array_allocation_size_t_string_memory_ptr(length) -> size {\n        // Make sure we can allocate memory without overflow\n        if gt(length, 0xffffffffffffffff) { panic_error_0x41() }\n\n        size := round_up_to_mul_of_32(length)\n\n        // add length slot\n        size := add(size, 0x20)\n\n    }\n\n    function copy_calldata_to_memory_with_cleanup(src, dst, length) {\n        calldatacopy(dst, src, length)\n        mstore(add(dst, length), 0)\n    }\n\n    function abi_decode_available_length_t_string_memory_ptr(src, length, end) -> array {\n        array := allocate_memory(array_allocation_size_t_string_memory_ptr(length))\n        mstore(array, length)\n        let dst := add(array, 0x20)\n        if gt(add(src, length), end) { revert_error_987264b3b1d58a9c7f8255e93e81c77d86d6299019c33110a076957a3e06e2ae() }\n        copy_calldata_to_memory_with_cleanup(src, dst, length)\n    }\n\n    // string\n    function abi_decode_t_string_memory_ptr(offset, end) -> array {\n        if iszero(slt(add(offset, 0x1f), end)) { revert_error_1b9f4a0a5773e33b91aa01db23bf8c55fce1411167c872835e7fa00a4f17d46d() }\n        let length := calldataload(offset)\n        array := abi_decode_available_length_t_string_memory_ptr(add(offset, 0x20), length, end)\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_uint256t_string_memory_ptrt_string_memory_ptr(headStart, dataEnd) -> value0, value1, value2, value3 {\n        if slt(sub(dataEnd, headStart), 128) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 64))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value2 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := calldataload(add(headStart, 96))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value3 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_uint256t_address(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_encode_t_uint256_to_t_uint256_fromStack(value, pos) {\n        mstore(pos, cleanup_t_uint256(value))\n    }\n\n    function abi_encode_tuple_t_uint256__to_t_uint256__fromStack_reversed(headStart , value0) -> tail {\n        tail := add(headStart, 32)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value0,  add(headStart, 0))\n\n    }\n\n    function abi_decode_tuple_t_string_memory_ptrt_uint256t_uint256(headStart, dataEnd) -> value0, value1, value2 {\n        if slt(sub(dataEnd, headStart), 96) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := calldataload(add(headStart, 0))\n            if gt(offset, 0xffffffffffffffff) { revert_error_c1322bf8034eace5e0b5c7295db60986aa89aae5e0ea0873e4689e076861a5db() }\n\n            value0 := abi_decode_t_string_memory_ptr(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 64\n\n            value2 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function abi_decode_tuple_t_addresst_uint256(headStart, dataEnd) -> value0, value1 {\n        if slt(sub(dataEnd, headStart), 64) { revert_error_dbdddcbe895c83990c08b3492a0e83918d802a52331272ac6fdb6a7c4aea3b1b() }\n\n        {\n\n            let offset := 0\n\n            value0 := abi_decode_t_address(add(headStart, offset), dataEnd)\n        }\n\n        {\n\n            let offset := 32\n\n            value1 := abi_decode_t_uint256(add(headStart, offset), dataEnd)\n        }\n\n    }\n\n    function panic_error_0x22() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x22)\n        revert(0, 0x24)\n    }\n\n    function extract_byte_array_length(data) -> length {\n        length := div(data, 2)\n        let outOfPlaceEncoding := and(data, 1)\n        if iszero(outOfPlaceEncoding) {\n            length := and(length, 0x7f)\n        }\n\n        if eq(outOfPlaceEncoding, lt(length, 32)) {\n            panic_error_0x22()\n        }\n    }\n\n    function abi_encode_t_address_to_t_address_fromStack(value, pos) {\n        mstore(pos, cleanup_t_address(value))\n    }\n\n    function abi_encode_tuple_t_address_t_uint256_t_uint256__to_t_address_t_uint256_t_uint256__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value2,  add(headStart, 64))\n\n    }\n\n    function array_dataslot_t_string_storage(ptr) -> data {\n        data := ptr\n\n        mstore(0, ptr)\n        data := keccak256(0, 0x20)\n\n    }\n\n    function divide_by_32_ceil(value) -> result {\n        result := div(add(value, 31), 32)\n    }\n\n    function shift_left_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shl(bits, value)\n\n    }\n\n    function update_byte_slice_dynamic32(value, shiftBytes, toInsert) -> result {\n        let shiftBits := mul(shiftBytes, 8)\n        let mask := shift_left_dynamic(shiftBits, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff)\n        toInsert := shift_left_dynamic(shiftBits, toInsert)\n        value := and(value, not(mask))\n        result := or(value, and(toInsert, mask))\n    }\n\n    function identity(value) -> ret {\n        ret := value\n    }\n\n    function convert_t_uint256_to_t_uint256(value) -> converted {\n        converted := cleanup_t_uint256(identity(cleanup_t_uint256(value)))\n    }\n\n    function prepare_store_t_uint256(value) -> ret {\n        ret := value\n    }\n\n    function update_storage_value_t_uint256_to_t_uint256(slot, offset, value_0) {\n        let convertedValue_0 := convert_t_uint256_to_t_uint256(value_0)\n        sstore(slot, update_byte_slice_dynamic32(sload(slot), offset, prepare_store_t_uint256(convertedValue_0)))\n    }\n\n    function zero_value_for_split_t_uint256() -> ret {\n        ret := 0\n    }\n\n    function storage_set_to_zero_t_uint256(slot, offset) {\n        let zero_0 := zero_value_for_split_t_uint256()\n        update_storage_value_t_uint256_to_t_uint256(slot, offset, zero_0)\n    }\n\n    function clear_storage_range_t_bytes1(start, end) {\n        for {} lt(start, end) { start := add(start, 1) }\n        {\n            storage_set_to_zero_t_uint256(start, 0)\n        }\n    }\n\n    function clean_up_bytearray_end_slots_t_string_storage(array, len, startIndex) {\n\n        if gt(len, 31) {\n            let dataArea := array_dataslot_t_string_storage(array)\n            let deleteStart := add(dataArea, divide_by_32_ceil(startIndex))\n            // If we are clearing array to be short byte array, we want to clear only data starting from array data area.\n            if lt(startIndex, 32) { deleteStart := dataArea }\n            clear_storage_range_t_bytes1(deleteStart, add(dataArea, divide_by_32_ceil(len)))\n        }\n\n    }\n\n    function shift_right_unsigned_dynamic(bits, value) -> newValue {\n        newValue :=\n\n        shr(bits, value)\n\n    }\n\n    function mask_bytes_dynamic(data, bytes) -> result {\n        let mask := not(shift_right_unsigned_dynamic(mul(8, bytes), not(0)))\n        result := and(data, mask)\n    }\n    function extract_used_part_and_set_length_of_short_byte_array(data, len) -> used {\n        // we want to save only elements that are part of the array after resizing\n        // others should be set to zero\n        data := mask_bytes_dynamic(data, len)\n        used := or(data, mul(2, len))\n    }\n    function copy_byte_array_to_storage_from_t_string_memory_ptr_to_t_string_storage(slot, src) {\n\n        let newLen := array_length_t_string_memory_ptr(src)\n        // Make sure array length is sane\n        if gt(newLen, 0xffffffffffffffff) { panic_error_0x41() }\n\n        let oldLen := extract_byte_array_length(sload(slot))\n\n        // potentially truncate data\n        clean_up_bytearray_end_slots_t_string_storage(slot, oldLen, newLen)\n\n        let srcOffset := 0\n\n        srcOffset := 0x20\n\n        switch gt(newLen, 31)\n        case 1 {\n            let loopEnd := and(newLen, not(0x1f))\n\n            let dstPtr := array_dataslot_t_string_storage(slot)\n            let i := 0\n            for { } lt(i, loopEnd) { i := add(i, 0x20) } {\n                sstore(dstPtr, mload(add(src, srcOffset)))\n                dstPtr := add(dstPtr, 1)\n                srcOffset := add(srcOffset, 32)\n            }\n            if lt(loopEnd, newLen) {\n                let lastValue := mload(add(src, srcOffset))\n                sstore(dstPtr, mask_bytes_dynamic(lastValue, and(newLen, 0x1f)))\n            }\n            sstore(slot, add(mul(newLen, 2), 1))\n        }\n        default {\n            let value := 0\n            if newLen {\n                value := mload(add(src, srcOffset))\n            }\n            sstore(slot, extract_used_part_and_set_length_of_short_byte_array(value, newLen))\n        }\n    }\n\n    function abi_encode_tuple_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr__to_t_string_memory_ptr_t_uint256_t_string_memory_ptr_t_string_memory_ptr__fromStack_reversed(headStart , value3, value2, value1, value0) -> tail {\n        tail := add(headStart, 128)\n\n        mstore(add(headStart, 0), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value0,  tail)\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n        mstore(add(headStart, 96), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value3,  tail)\n\n    }\n\n    function panic_error_0x11() {\n        mstore(0, 35408467139433450592217433187231851964531694900788300625387963629091585785856)\n        mstore(4, 0x11)\n        revert(0, 0x24)\n    }\n\n    function increment_t_uint256(value) -> ret {\n        value := cleanup_t_uint256(value)\n        if eq(value, 0xffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff) { panic_error_0x11() }\n        ret := add(value, 1)\n    }\n\n    function abi_encode_tuple_t_address_t_uint256_t_string_memory_ptr__to_t_address_t_uint256_t_string_memory_ptr__fromStack_reversed(headStart , value2, value1, value0) -> tail {\n        tail := add(headStart, 96)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n        mstore(add(headStart, 64), sub(tail, headStart))\n        tail := abi_encode_t_string_memory_ptr_to_t_string_memory_ptr_fromStack(value2,  tail)\n\n    }\n\n    function abi_encode_tuple_t_address_t_uint256__to_t_address_t_uint256__fromStack_reversed(headStart , value1, value0) -> tail {\n        tail := add(headStart, 64)\n\n        abi_encode_t_address_to_t_address_fromStack(value0,  add(headStart, 0))\n\n        abi_encode_t_uint256_to_t_uint256_fromStack(value1,  add(headStart, 32))\n\n    }\n\n}\n",
      id: 2,
      language: "Yul",
      name: "#utility.yul",
    },
  ],
  sourceMap:
    "60:1997:0:-:0;;;85:31;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;177:51;;;;;;;;;;209:10;199:7;;:20;;;;;;;;;;;;;;;;;;60:1997;;7:99:2;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:180::-;160:77;157:1;150:88;257:4;254:1;247:15;281:4;278:1;271:15;298:180;346:77;343:1;336:88;443:4;440:1;433:15;467:4;464:1;457:15;484:320;528:6;565:1;559:4;555:12;545:22;;612:1;606:4;602:12;633:18;623:81;;689:4;681:6;677:17;667:27;;623:81;751:2;743:6;740:14;720:18;717:38;714:84;;770:18;;:::i;:::-;714:84;535:269;484:320;;;:::o;810:141::-;859:4;882:3;874:11;;905:3;902:1;895:14;939:4;936:1;926:18;918:26;;810:141;;;:::o;957:93::-;994:6;1041:2;1036;1029:5;1025:14;1021:23;1011:33;;957:93;;;:::o;1056:107::-;1100:8;1150:5;1144:4;1140:16;1119:37;;1056:107;;;;:::o;1169:393::-;1238:6;1288:1;1276:10;1272:18;1311:97;1341:66;1330:9;1311:97;:::i;:::-;1429:39;1459:8;1448:9;1429:39;:::i;:::-;1417:51;;1501:4;1497:9;1490:5;1486:21;1477:30;;1550:4;1540:8;1536:19;1529:5;1526:30;1516:40;;1245:317;;1169:393;;;;;:::o;1568:77::-;1605:7;1634:5;1623:16;;1568:77;;;:::o;1651:60::-;1679:3;1700:5;1693:12;;1651:60;;;:::o;1717:142::-;1767:9;1800:53;1818:34;1827:24;1845:5;1827:24;:::i;:::-;1818:34;:::i;:::-;1800:53;:::i;:::-;1787:66;;1717:142;;;:::o;1865:75::-;1908:3;1929:5;1922:12;;1865:75;;;:::o;1946:269::-;2056:39;2087:7;2056:39;:::i;:::-;2117:91;2166:41;2190:16;2166:41;:::i;:::-;2158:6;2151:4;2145:11;2117:91;:::i;:::-;2111:4;2104:105;2022:193;1946:269;;;:::o;2221:73::-;2266:3;2221:73;:::o;2300:189::-;2377:32;;:::i;:::-;2418:65;2476:6;2468;2462:4;2418:65;:::i;:::-;2353:136;2300:189;;:::o;2495:186::-;2555:120;2572:3;2565:5;2562:14;2555:120;;;2626:39;2663:1;2656:5;2626:39;:::i;:::-;2599:1;2592:5;2588:13;2579:22;;2555:120;;;2495:186;;:::o;2687:543::-;2788:2;2783:3;2780:11;2777:446;;;2822:38;2854:5;2822:38;:::i;:::-;2906:29;2924:10;2906:29;:::i;:::-;2896:8;2892:44;3089:2;3077:10;3074:18;3071:49;;;3110:8;3095:23;;3071:49;3133:80;3189:22;3207:3;3189:22;:::i;:::-;3179:8;3175:37;3162:11;3133:80;:::i;:::-;2792:431;;2777:446;2687:543;;;:::o;3236:117::-;3290:8;3340:5;3334:4;3330:16;3309:37;;3236:117;;;;:::o;3359:169::-;3403:6;3436:51;3484:1;3480:6;3472:5;3469:1;3465:13;3436:51;:::i;:::-;3432:56;3517:4;3511;3507:15;3497:25;;3410:118;3359:169;;;;:::o;3533:295::-;3609:4;3755:29;3780:3;3774:4;3755:29;:::i;:::-;3747:37;;3817:3;3814:1;3810:11;3804:4;3801:21;3793:29;;3533:295;;;;:::o;3833:1395::-;3950:37;3983:3;3950:37;:::i;:::-;4052:18;4044:6;4041:30;4038:56;;;4074:18;;:::i;:::-;4038:56;4118:38;4150:4;4144:11;4118:38;:::i;:::-;4203:67;4263:6;4255;4249:4;4203:67;:::i;:::-;4297:1;4321:4;4308:17;;4353:2;4345:6;4342:14;4370:1;4365:618;;;;5027:1;5044:6;5041:77;;;5093:9;5088:3;5084:19;5078:26;5069:35;;5041:77;5144:67;5204:6;5197:5;5144:67;:::i;:::-;5138:4;5131:81;5000:222;4335:887;;4365:618;4417:4;4413:9;4405:6;4401:22;4451:37;4483:4;4451:37;:::i;:::-;4510:1;4524:208;4538:7;4535:1;4532:14;4524:208;;;4617:9;4612:3;4608:19;4602:26;4594:6;4587:42;4668:1;4660:6;4656:14;4646:24;;4715:2;4704:9;4700:18;4687:31;;4561:4;4558:1;4554:12;4549:17;;4524:208;;;4760:6;4751:7;4748:19;4745:179;;;4818:9;4813:3;4809:19;4803:26;4861:48;4903:4;4895:6;4891:17;4880:9;4861:48;:::i;:::-;4853:6;4846:64;4768:156;4745:179;4970:1;4966;4958:6;4954:14;4950:22;4944:4;4937:36;4372:611;;;4335:887;;3925:1303;;;3833:1395;;:::o;60:1997:0:-;;;;;;;",
  deployedSourceMap:
    "60:1997:0:-:0;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;85:31;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1095:220;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1468:305;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1320:143;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;145:24;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;1778:174;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;1959:95;;;;;;;;;;;;;:::i;:::-;;;;;;;:::i;:::-;;;;;;;;911:178;;;;;;;;;;;;;:::i;:::-;;:::i;:::-;;85:31;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;;:::o;1095:220::-;1265:41;1281:2;1286:9;1299:6;1265:41;;;;;;;;:::i;:::-;;;;;;;;1095:220;;;:::o;1468:305::-;1625:47;;;;;;;;1633:5;1625:47;;;;1641:3;1625:47;;;;1647:13;1625:47;;;;1663:8;1625:47;;;1599:11;:22;1611:9;;1599:22;;;;;;;;;;;:73;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;:::i;:::-;;;;;1689:55;1701:5;1710:3;1718:13;1735:8;1689:55;;;;;;;;;:::i;:::-;;;;;;;;1753:9;;:11;;;;;;;;;:::i;:::-;;;;;;1468:305;;;;:::o;1320:143::-;1415:39;1427:2;1433:6;1443:10;1415:39;;;;;;;;:::i;:::-;;;;;;;;1320:143;;;:::o;145:24::-;;;;:::o;1778:174::-;1907:36;;;;;;;;1917:4;1907:36;;;;1924:9;1907:36;;;;1936:6;1907:36;;;1877:14;:26;1892:10;1877:26;;;;;;;;;;;;;;;:66;;;;;;;;;;;;;:::i;:::-;;;;;;;;;;;;;;;;;;;;;1778:174;;;:::o;1959:95::-;1997:7;2022:21;2015:28;;1959:95;:::o;911:178::-;1055:25;1068:2;1073:6;1055:25;;;;;;;:::i;:::-;;;;;;;;911:178;;:::o;7:99:2:-;59:6;93:5;87:12;77:22;;7:99;;;:::o;112:169::-;196:11;230:6;225:3;218:19;270:4;265:3;261:14;246:29;;112:169;;;;:::o;287:246::-;368:1;378:113;392:6;389:1;386:13;378:113;;;477:1;472:3;468:11;462:18;458:1;453:3;449:11;442:39;414:2;411:1;407:10;402:15;;378:113;;;525:1;516:6;511:3;507:16;500:27;349:184;287:246;;;:::o;539:102::-;580:6;631:2;627:7;622:2;615:5;611:14;607:28;597:38;;539:102;;;:::o;647:377::-;735:3;763:39;796:5;763:39;:::i;:::-;818:71;882:6;877:3;818:71;:::i;:::-;811:78;;898:65;956:6;951:3;944:4;937:5;933:16;898:65;:::i;:::-;988:29;1010:6;988:29;:::i;:::-;983:3;979:39;972:46;;739:285;647:377;;;;:::o;1030:313::-;1143:4;1181:2;1170:9;1166:18;1158:26;;1230:9;1224:4;1220:20;1216:1;1205:9;1201:17;1194:47;1258:78;1331:4;1322:6;1258:78;:::i;:::-;1250:86;;1030:313;;;;:::o;1349:75::-;1382:6;1415:2;1409:9;1399:19;;1349:75;:::o;1430:117::-;1539:1;1536;1529:12;1553:117;1662:1;1659;1652:12;1676:126;1713:7;1753:42;1746:5;1742:54;1731:65;;1676:126;;;:::o;1808:96::-;1845:7;1874:24;1892:5;1874:24;:::i;:::-;1863:35;;1808:96;;;:::o;1910:122::-;1983:24;2001:5;1983:24;:::i;:::-;1976:5;1973:35;1963:63;;2022:1;2019;2012:12;1963:63;1910:122;:::o;2038:139::-;2084:5;2122:6;2109:20;2100:29;;2138:33;2165:5;2138:33;:::i;:::-;2038:139;;;;:::o;2183:77::-;2220:7;2249:5;2238:16;;2183:77;;;:::o;2266:122::-;2339:24;2357:5;2339:24;:::i;:::-;2332:5;2329:35;2319:63;;2378:1;2375;2368:12;2319:63;2266:122;:::o;2394:139::-;2440:5;2478:6;2465:20;2456:29;;2494:33;2521:5;2494:33;:::i;:::-;2394:139;;;;:::o;2539:619::-;2616:6;2624;2632;2681:2;2669:9;2660:7;2656:23;2652:32;2649:119;;;2687:79;;:::i;:::-;2649:119;2807:1;2832:53;2877:7;2868:6;2857:9;2853:22;2832:53;:::i;:::-;2822:63;;2778:117;2934:2;2960:53;3005:7;2996:6;2985:9;2981:22;2960:53;:::i;:::-;2950:63;;2905:118;3062:2;3088:53;3133:7;3124:6;3113:9;3109:22;3088:53;:::i;:::-;3078:63;;3033:118;2539:619;;;;;:::o;3164:117::-;3273:1;3270;3263:12;3287:117;3396:1;3393;3386:12;3410:180;3458:77;3455:1;3448:88;3555:4;3552:1;3545:15;3579:4;3576:1;3569:15;3596:281;3679:27;3701:4;3679:27;:::i;:::-;3671:6;3667:40;3809:6;3797:10;3794:22;3773:18;3761:10;3758:34;3755:62;3752:88;;;3820:18;;:::i;:::-;3752:88;3860:10;3856:2;3849:22;3639:238;3596:281;;:::o;3883:129::-;3917:6;3944:20;;:::i;:::-;3934:30;;3973:33;4001:4;3993:6;3973:33;:::i;:::-;3883:129;;;:::o;4018:308::-;4080:4;4170:18;4162:6;4159:30;4156:56;;;4192:18;;:::i;:::-;4156:56;4230:29;4252:6;4230:29;:::i;:::-;4222:37;;4314:4;4308;4304:15;4296:23;;4018:308;;;:::o;4332:146::-;4429:6;4424:3;4419;4406:30;4470:1;4461:6;4456:3;4452:16;4445:27;4332:146;;;:::o;4484:425::-;4562:5;4587:66;4603:49;4645:6;4603:49;:::i;:::-;4587:66;:::i;:::-;4578:75;;4676:6;4669:5;4662:21;4714:4;4707:5;4703:16;4752:3;4743:6;4738:3;4734:16;4731:25;4728:112;;;4759:79;;:::i;:::-;4728:112;4849:54;4896:6;4891:3;4886;4849:54;:::i;:::-;4568:341;4484:425;;;;;:::o;4929:340::-;4985:5;5034:3;5027:4;5019:6;5015:17;5011:27;5001:122;;5042:79;;:::i;:::-;5001:122;5159:6;5146:20;5184:79;5259:3;5251:6;5244:4;5236:6;5232:17;5184:79;:::i;:::-;5175:88;;4991:278;4929:340;;;;:::o;5275:1305::-;5391:6;5399;5407;5415;5464:3;5452:9;5443:7;5439:23;5435:33;5432:120;;;5471:79;;:::i;:::-;5432:120;5619:1;5608:9;5604:17;5591:31;5649:18;5641:6;5638:30;5635:117;;;5671:79;;:::i;:::-;5635:117;5776:63;5831:7;5822:6;5811:9;5807:22;5776:63;:::i;:::-;5766:73;;5562:287;5888:2;5914:53;5959:7;5950:6;5939:9;5935:22;5914:53;:::i;:::-;5904:63;;5859:118;6044:2;6033:9;6029:18;6016:32;6075:18;6067:6;6064:30;6061:117;;;6097:79;;:::i;:::-;6061:117;6202:63;6257:7;6248:6;6237:9;6233:22;6202:63;:::i;:::-;6192:73;;5987:288;6342:2;6331:9;6327:18;6314:32;6373:18;6365:6;6362:30;6359:117;;;6395:79;;:::i;:::-;6359:117;6500:63;6555:7;6546:6;6535:9;6531:22;6500:63;:::i;:::-;6490:73;;6285:288;5275:1305;;;;;;;:::o;6586:799::-;6673:6;6681;6689;6738:2;6726:9;6717:7;6713:23;6709:32;6706:119;;;6744:79;;:::i;:::-;6706:119;6892:1;6881:9;6877:17;6864:31;6922:18;6914:6;6911:30;6908:117;;;6944:79;;:::i;:::-;6908:117;7049:63;7104:7;7095:6;7084:9;7080:22;7049:63;:::i;:::-;7039:73;;6835:287;7161:2;7187:53;7232:7;7223:6;7212:9;7208:22;7187:53;:::i;:::-;7177:63;;7132:118;7289:2;7315:53;7360:7;7351:6;7340:9;7336:22;7315:53;:::i;:::-;7305:63;;7260:118;6586:799;;;;;:::o;7391:118::-;7478:24;7496:5;7478:24;:::i;:::-;7473:3;7466:37;7391:118;;:::o;7515:222::-;7608:4;7646:2;7635:9;7631:18;7623:26;;7659:71;7727:1;7716:9;7712:17;7703:6;7659:71;:::i;:::-;7515:222;;;;:::o;7743:799::-;7830:6;7838;7846;7895:2;7883:9;7874:7;7870:23;7866:32;7863:119;;;7901:79;;:::i;:::-;7863:119;8049:1;8038:9;8034:17;8021:31;8079:18;8071:6;8068:30;8065:117;;;8101:79;;:::i;:::-;8065:117;8206:63;8261:7;8252:6;8241:9;8237:22;8206:63;:::i;:::-;8196:73;;7992:287;8318:2;8344:53;8389:7;8380:6;8369:9;8365:22;8344:53;:::i;:::-;8334:63;;8289:118;8446:2;8472:53;8517:7;8508:6;8497:9;8493:22;8472:53;:::i;:::-;8462:63;;8417:118;7743:799;;;;;:::o;8548:474::-;8616:6;8624;8673:2;8661:9;8652:7;8648:23;8644:32;8641:119;;;8679:79;;:::i;:::-;8641:119;8799:1;8824:53;8869:7;8860:6;8849:9;8845:22;8824:53;:::i;:::-;8814:63;;8770:117;8926:2;8952:53;8997:7;8988:6;8977:9;8973:22;8952:53;:::i;:::-;8942:63;;8897:118;8548:474;;;;;:::o;9028:180::-;9076:77;9073:1;9066:88;9173:4;9170:1;9163:15;9197:4;9194:1;9187:15;9214:320;9258:6;9295:1;9289:4;9285:12;9275:22;;9342:1;9336:4;9332:12;9363:18;9353:81;;9419:4;9411:6;9407:17;9397:27;;9353:81;9481:2;9473:6;9470:14;9450:18;9447:38;9444:84;;9500:18;;:::i;:::-;9444:84;9265:269;9214:320;;;:::o;9540:118::-;9627:24;9645:5;9627:24;:::i;:::-;9622:3;9615:37;9540:118;;:::o;9664:442::-;9813:4;9851:2;9840:9;9836:18;9828:26;;9864:71;9932:1;9921:9;9917:17;9908:6;9864:71;:::i;:::-;9945:72;10013:2;10002:9;9998:18;9989:6;9945:72;:::i;:::-;10027;10095:2;10084:9;10080:18;10071:6;10027:72;:::i;:::-;9664:442;;;;;;:::o;10112:141::-;10161:4;10184:3;10176:11;;10207:3;10204:1;10197:14;10241:4;10238:1;10228:18;10220:26;;10112:141;;;:::o;10259:93::-;10296:6;10343:2;10338;10331:5;10327:14;10323:23;10313:33;;10259:93;;;:::o;10358:107::-;10402:8;10452:5;10446:4;10442:16;10421:37;;10358:107;;;;:::o;10471:393::-;10540:6;10590:1;10578:10;10574:18;10613:97;10643:66;10632:9;10613:97;:::i;:::-;10731:39;10761:8;10750:9;10731:39;:::i;:::-;10719:51;;10803:4;10799:9;10792:5;10788:21;10779:30;;10852:4;10842:8;10838:19;10831:5;10828:30;10818:40;;10547:317;;10471:393;;;;;:::o;10870:60::-;10898:3;10919:5;10912:12;;10870:60;;;:::o;10936:142::-;10986:9;11019:53;11037:34;11046:24;11064:5;11046:24;:::i;:::-;11037:34;:::i;:::-;11019:53;:::i;:::-;11006:66;;10936:142;;;:::o;11084:75::-;11127:3;11148:5;11141:12;;11084:75;;;:::o;11165:269::-;11275:39;11306:7;11275:39;:::i;:::-;11336:91;11385:41;11409:16;11385:41;:::i;:::-;11377:6;11370:4;11364:11;11336:91;:::i;:::-;11330:4;11323:105;11241:193;11165:269;;;:::o;11440:73::-;11485:3;11440:73;:::o;11519:189::-;11596:32;;:::i;:::-;11637:65;11695:6;11687;11681:4;11637:65;:::i;:::-;11572:136;11519:189;;:::o;11714:186::-;11774:120;11791:3;11784:5;11781:14;11774:120;;;11845:39;11882:1;11875:5;11845:39;:::i;:::-;11818:1;11811:5;11807:13;11798:22;;11774:120;;;11714:186;;:::o;11906:543::-;12007:2;12002:3;11999:11;11996:446;;;12041:38;12073:5;12041:38;:::i;:::-;12125:29;12143:10;12125:29;:::i;:::-;12115:8;12111:44;12308:2;12296:10;12293:18;12290:49;;;12329:8;12314:23;;12290:49;12352:80;12408:22;12426:3;12408:22;:::i;:::-;12398:8;12394:37;12381:11;12352:80;:::i;:::-;12011:431;;11996:446;11906:543;;;:::o;12455:117::-;12509:8;12559:5;12553:4;12549:16;12528:37;;12455:117;;;;:::o;12578:169::-;12622:6;12655:51;12703:1;12699:6;12691:5;12688:1;12684:13;12655:51;:::i;:::-;12651:56;12736:4;12730;12726:15;12716:25;;12629:118;12578:169;;;;:::o;12752:295::-;12828:4;12974:29;12999:3;12993:4;12974:29;:::i;:::-;12966:37;;13036:3;13033:1;13029:11;13023:4;13020:21;13012:29;;12752:295;;;;:::o;13052:1395::-;13169:37;13202:3;13169:37;:::i;:::-;13271:18;13263:6;13260:30;13257:56;;;13293:18;;:::i;:::-;13257:56;13337:38;13369:4;13363:11;13337:38;:::i;:::-;13422:67;13482:6;13474;13468:4;13422:67;:::i;:::-;13516:1;13540:4;13527:17;;13572:2;13564:6;13561:14;13589:1;13584:618;;;;14246:1;14263:6;14260:77;;;14312:9;14307:3;14303:19;14297:26;14288:35;;14260:77;14363:67;14423:6;14416:5;14363:67;:::i;:::-;14357:4;14350:81;14219:222;13554:887;;13584:618;13636:4;13632:9;13624:6;13620:22;13670:37;13702:4;13670:37;:::i;:::-;13729:1;13743:208;13757:7;13754:1;13751:14;13743:208;;;13836:9;13831:3;13827:19;13821:26;13813:6;13806:42;13887:1;13879:6;13875:14;13865:24;;13934:2;13923:9;13919:18;13906:31;;13780:4;13777:1;13773:12;13768:17;;13743:208;;;13979:6;13970:7;13967:19;13964:179;;;14037:9;14032:3;14028:19;14022:26;14080:48;14122:4;14114:6;14110:17;14099:9;14080:48;:::i;:::-;14072:6;14065:64;13987:156;13964:179;14189:1;14185;14177:6;14173:14;14169:22;14163:4;14156:36;13591:611;;;13554:887;;13144:1303;;;13052:1395;;:::o;14453:826::-;14690:4;14728:3;14717:9;14713:19;14705:27;;14778:9;14772:4;14768:20;14764:1;14753:9;14749:17;14742:47;14806:78;14879:4;14870:6;14806:78;:::i;:::-;14798:86;;14894:72;14962:2;14951:9;14947:18;14938:6;14894:72;:::i;:::-;15013:9;15007:4;15003:20;14998:2;14987:9;14983:18;14976:48;15041:78;15114:4;15105:6;15041:78;:::i;:::-;15033:86;;15166:9;15160:4;15156:20;15151:2;15140:9;15136:18;15129:48;15194:78;15267:4;15258:6;15194:78;:::i;:::-;15186:86;;14453:826;;;;;;;:::o;15285:180::-;15333:77;15330:1;15323:88;15430:4;15427:1;15420:15;15454:4;15451:1;15444:15;15471:233;15510:3;15533:24;15551:5;15533:24;:::i;:::-;15524:33;;15579:66;15572:5;15569:77;15566:103;;15649:18;;:::i;:::-;15566:103;15696:1;15689:5;15685:13;15678:20;;15471:233;;;:::o;15710:533::-;15879:4;15917:2;15906:9;15902:18;15894:26;;15930:71;15998:1;15987:9;15983:17;15974:6;15930:71;:::i;:::-;16011:72;16079:2;16068:9;16064:18;16055:6;16011:72;:::i;:::-;16130:9;16124:4;16120:20;16115:2;16104:9;16100:18;16093:48;16158:78;16231:4;16222:6;16158:78;:::i;:::-;16150:86;;15710:533;;;;;;:::o;16249:332::-;16370:4;16408:2;16397:9;16393:18;16385:26;;16421:71;16489:1;16478:9;16474:17;16465:6;16421:71;:::i;:::-;16502:72;16570:2;16559:9;16555:18;16546:6;16502:72;:::i;:::-;16249:332;;;;;:::o",
  source:
    '// SPDX-License-Identifier: MIT\r\npragma solidity^0.8.17 ; \r\ncontract Donation { \r\n   string public name = "Donation";\r\n   address manager ; \r\n   uint256 public studentID ; \r\n   constructor(){\r\n      manager = msg.sender ; \r\n   }\r\n   struct Student { \r\n      string name ; \r\n      uint256 age ; \r\n      string acadamicLevel ; \r\n      string imageURL ; \r\n   }\r\n   mapping(uint256  => Student ) studentList ; \r\n  \r\n   struct Sponserer { \r\n      string name ;\r\n      uint256 studentId ; \r\n      uint256 amount ; \r\n   }\r\n   mapping(address  => Sponserer ) sponserserList ; \r\n   // address of sponser => sponserer\r\n   event DonationList(address from , uint256 amount);\r\n   event StudentList(string name , uint256 age ,  string acadamicLevel , string imageURL);\r\n   event SponsershipList(address from , uint256 amount , uint256 studentID);\r\n   event RedeemList(address to , uint256 amount , string BudgetDettail);\r\n   function donate( address by , uint256 amount ) public payable { \r\n      // require(msg.value > .001 ether , "No sufficient ether");\r\n      emit DonationList(by , amount) ; \r\n   } \r\n   function sponserStudent(address by ,uint256 studentID ,uint256 amount ) public payable  { \r\n      // require(msg.value > .001 ether , "No sufficient ether");\r\n      emit SponsershipList(by , studentID ,  amount) ; \r\n   }\r\n   function redeem( string memory budgetFile ,uint256 amount ,  address to) public{\r\n        emit RedeemList( to ,  amount ,  budgetFile);\r\n\r\n   }\r\n   function registerStudent( string memory _name, uint256 age, string memory acadamicLevel , string memory imageURL ) public {\r\n      studentList[studentID]  = Student(_name , age , acadamicLevel , imageURL)  ; \r\n      emit StudentList(_name ,  age ,   acadamicLevel ,  imageURL);\r\n      studentID++ ; \r\n   }\r\n   function registerSponserer( string memory name, uint256 studentId, uint256 amount) public {\r\n      sponserserList[msg.sender]  = Sponserer(name , studentId , amount) ; \r\n   }\r\n\r\n   function OwnBalance() public returns (uint256) {\r\n      return address(this).balance ; \r\n\r\n   }\r\n}',
  sourcePath:
    "C:\\Users\\9165p\\OneDrive\\Desktop\\vertex\\dAppEduSponser\\src\\contracts\\Donation1.sol",
  ast: {
    absolutePath: "project:/src/contracts/Donation1.sol",
    exportedSymbols: {
      Donation: [187],
    },
    id: 188,
    license: "MIT",
    nodeType: "SourceUnit",
    nodes: [
      {
        id: 1,
        literals: ["solidity", "^", "0.8", ".17"],
        nodeType: "PragmaDirective",
        src: "33:24:0",
      },
      {
        abstract: false,
        baseContracts: [],
        canonicalName: "Donation",
        contractDependencies: [],
        contractKind: "contract",
        fullyImplemented: true,
        id: 187,
        linearizedBaseContracts: [187],
        name: "Donation",
        nameLocation: "69:8:0",
        nodeType: "ContractDefinition",
        nodes: [
          {
            constant: false,
            functionSelector: "06fdde03",
            id: 4,
            mutability: "mutable",
            name: "name",
            nameLocation: "99:4:0",
            nodeType: "VariableDeclaration",
            scope: 187,
            src: "85:31:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_string_storage",
              typeString: "string",
            },
            typeName: {
              id: 2,
              name: "string",
              nodeType: "ElementaryTypeName",
              src: "85:6:0",
              typeDescriptions: {
                typeIdentifier: "t_string_storage_ptr",
                typeString: "string",
              },
            },
            value: {
              hexValue: "446f6e6174696f6e",
              id: 3,
              isConstant: false,
              isLValue: false,
              isPure: true,
              kind: "string",
              lValueRequested: false,
              nodeType: "Literal",
              src: "106:10:0",
              typeDescriptions: {
                typeIdentifier:
                  "t_stringliteral_9110fba7994c407f7a7d5f87d295ce8219b88c0ff2e5817e2c71cfdd79bfebea",
                typeString: 'literal_string "Donation"',
              },
              value: "Donation",
            },
            visibility: "public",
          },
          {
            constant: false,
            id: 6,
            mutability: "mutable",
            name: "manager",
            nameLocation: "130:7:0",
            nodeType: "VariableDeclaration",
            scope: 187,
            src: "122:15:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_address",
              typeString: "address",
            },
            typeName: {
              id: 5,
              name: "address",
              nodeType: "ElementaryTypeName",
              src: "122:7:0",
              stateMutability: "nonpayable",
              typeDescriptions: {
                typeIdentifier: "t_address",
                typeString: "address",
              },
            },
            visibility: "internal",
          },
          {
            constant: false,
            functionSelector: "b7e00013",
            id: 8,
            mutability: "mutable",
            name: "studentID",
            nameLocation: "160:9:0",
            nodeType: "VariableDeclaration",
            scope: 187,
            src: "145:24:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier: "t_uint256",
              typeString: "uint256",
            },
            typeName: {
              id: 7,
              name: "uint256",
              nodeType: "ElementaryTypeName",
              src: "145:7:0",
              typeDescriptions: {
                typeIdentifier: "t_uint256",
                typeString: "uint256",
              },
            },
            visibility: "public",
          },
          {
            body: {
              id: 16,
              nodeType: "Block",
              src: "190:38:0",
              statements: [
                {
                  expression: {
                    id: 14,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      id: 11,
                      name: "manager",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 6,
                      src: "199:7:0",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      expression: {
                        id: 12,
                        name: "msg",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 4294967281,
                        src: "209:3:0",
                        typeDescriptions: {
                          typeIdentifier: "t_magic_message",
                          typeString: "msg",
                        },
                      },
                      id: 13,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      lValueRequested: false,
                      memberLocation: "213:6:0",
                      memberName: "sender",
                      nodeType: "MemberAccess",
                      src: "209:10:0",
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    src: "199:20:0",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  id: 15,
                  nodeType: "ExpressionStatement",
                  src: "199:20:0",
                },
              ],
            },
            id: 17,
            implemented: true,
            kind: "constructor",
            modifiers: [],
            name: "",
            nameLocation: "-1:-1:-1",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 9,
              nodeType: "ParameterList",
              parameters: [],
              src: "188:2:0",
            },
            returnParameters: {
              id: 10,
              nodeType: "ParameterList",
              parameters: [],
              src: "190:0:0",
            },
            scope: 187,
            src: "177:51:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            canonicalName: "Donation.Student",
            id: 26,
            members: [
              {
                constant: false,
                id: 19,
                mutability: "mutable",
                name: "name",
                nameLocation: "265:4:0",
                nodeType: "VariableDeclaration",
                scope: 26,
                src: "258:11:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 18,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "258:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 21,
                mutability: "mutable",
                name: "age",
                nameLocation: "288:3:0",
                nodeType: "VariableDeclaration",
                scope: 26,
                src: "280:11:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
                typeName: {
                  id: 20,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "280:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 23,
                mutability: "mutable",
                name: "acadamicLevel",
                nameLocation: "309:13:0",
                nodeType: "VariableDeclaration",
                scope: 26,
                src: "302:20:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 22,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "302:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 25,
                mutability: "mutable",
                name: "imageURL",
                nameLocation: "340:8:0",
                nodeType: "VariableDeclaration",
                scope: 26,
                src: "333:15:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 24,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "333:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
            ],
            name: "Student",
            nameLocation: "240:7:0",
            nodeType: "StructDefinition",
            scope: 187,
            src: "233:124:0",
            visibility: "public",
          },
          {
            constant: false,
            id: 31,
            mutability: "mutable",
            name: "studentList",
            nameLocation: "392:11:0",
            nodeType: "VariableDeclaration",
            scope: 187,
            src: "362:41:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_uint256_$_t_struct$_Student_$26_storage_$",
              typeString: "mapping(uint256 => struct Donation.Student)",
            },
            typeName: {
              id: 30,
              keyType: {
                id: 27,
                name: "uint256",
                nodeType: "ElementaryTypeName",
                src: "370:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
              },
              nodeType: "Mapping",
              src: "362:29:0",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_uint256_$_t_struct$_Student_$26_storage_$",
                typeString: "mapping(uint256 => struct Donation.Student)",
              },
              valueType: {
                id: 29,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 28,
                  name: "Student",
                  nameLocations: ["382:7:0"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 26,
                  src: "382:7:0",
                },
                referencedDeclaration: 26,
                src: "382:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_struct$_Student_$26_storage_ptr",
                  typeString: "struct Donation.Student",
                },
              },
            },
            visibility: "internal",
          },
          {
            canonicalName: "Donation.Sponserer",
            id: 38,
            members: [
              {
                constant: false,
                id: 33,
                mutability: "mutable",
                name: "name",
                nameLocation: "449:4:0",
                nodeType: "VariableDeclaration",
                scope: 38,
                src: "442:11:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_string_storage_ptr",
                  typeString: "string",
                },
                typeName: {
                  id: 32,
                  name: "string",
                  nodeType: "ElementaryTypeName",
                  src: "442:6:0",
                  typeDescriptions: {
                    typeIdentifier: "t_string_storage_ptr",
                    typeString: "string",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 35,
                mutability: "mutable",
                name: "studentId",
                nameLocation: "471:9:0",
                nodeType: "VariableDeclaration",
                scope: 38,
                src: "463:17:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
                typeName: {
                  id: 34,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "463:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
                visibility: "internal",
              },
              {
                constant: false,
                id: 37,
                mutability: "mutable",
                name: "amount",
                nameLocation: "499:6:0",
                nodeType: "VariableDeclaration",
                scope: 38,
                src: "491:14:0",
                stateVariable: false,
                storageLocation: "default",
                typeDescriptions: {
                  typeIdentifier: "t_uint256",
                  typeString: "uint256",
                },
                typeName: {
                  id: 36,
                  name: "uint256",
                  nodeType: "ElementaryTypeName",
                  src: "491:7:0",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                },
                visibility: "internal",
              },
            ],
            name: "Sponserer",
            nameLocation: "422:9:0",
            nodeType: "StructDefinition",
            scope: 187,
            src: "415:99:0",
            visibility: "public",
          },
          {
            constant: false,
            id: 43,
            mutability: "mutable",
            name: "sponserserList",
            nameLocation: "551:14:0",
            nodeType: "VariableDeclaration",
            scope: 187,
            src: "519:46:0",
            stateVariable: true,
            storageLocation: "default",
            typeDescriptions: {
              typeIdentifier:
                "t_mapping$_t_address_$_t_struct$_Sponserer_$38_storage_$",
              typeString: "mapping(address => struct Donation.Sponserer)",
            },
            typeName: {
              id: 42,
              keyType: {
                id: 39,
                name: "address",
                nodeType: "ElementaryTypeName",
                src: "527:7:0",
                typeDescriptions: {
                  typeIdentifier: "t_address",
                  typeString: "address",
                },
              },
              nodeType: "Mapping",
              src: "519:31:0",
              typeDescriptions: {
                typeIdentifier:
                  "t_mapping$_t_address_$_t_struct$_Sponserer_$38_storage_$",
                typeString: "mapping(address => struct Donation.Sponserer)",
              },
              valueType: {
                id: 41,
                nodeType: "UserDefinedTypeName",
                pathNode: {
                  id: 40,
                  name: "Sponserer",
                  nameLocations: ["539:9:0"],
                  nodeType: "IdentifierPath",
                  referencedDeclaration: 38,
                  src: "539:9:0",
                },
                referencedDeclaration: 38,
                src: "539:9:0",
                typeDescriptions: {
                  typeIdentifier: "t_struct$_Sponserer_$38_storage_ptr",
                  typeString: "struct Donation.Sponserer",
                },
              },
            },
            visibility: "internal",
          },
          {
            anonymous: false,
            eventSelector:
              "94d5e38b6d610151ce7f2d572da9e962e8c55b60140fd44be11a3a47464fd060",
            id: 49,
            name: "DonationList",
            nameLocation: "618:12:0",
            nodeType: "EventDefinition",
            parameters: {
              id: 48,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 45,
                  indexed: false,
                  mutability: "mutable",
                  name: "from",
                  nameLocation: "639:4:0",
                  nodeType: "VariableDeclaration",
                  scope: 49,
                  src: "631:12:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 44,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "631:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 47,
                  indexed: false,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "654:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 49,
                  src: "646:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 46,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "646:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "630:31:0",
            },
            src: "612:50:0",
          },
          {
            anonymous: false,
            eventSelector:
              "3719250c727a25b7f3336b524c9c73126f86a7c21eb9a2e6efde011bff8f5e69",
            id: 59,
            name: "StudentList",
            nameLocation: "673:11:0",
            nodeType: "EventDefinition",
            parameters: {
              id: 58,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 51,
                  indexed: false,
                  mutability: "mutable",
                  name: "name",
                  nameLocation: "692:4:0",
                  nodeType: "VariableDeclaration",
                  scope: 59,
                  src: "685:11:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 50,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "685:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 53,
                  indexed: false,
                  mutability: "mutable",
                  name: "age",
                  nameLocation: "707:3:0",
                  nodeType: "VariableDeclaration",
                  scope: 59,
                  src: "699:11:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 52,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "699:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 55,
                  indexed: false,
                  mutability: "mutable",
                  name: "acadamicLevel",
                  nameLocation: "721:13:0",
                  nodeType: "VariableDeclaration",
                  scope: 59,
                  src: "714:20:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 54,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "714:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 57,
                  indexed: false,
                  mutability: "mutable",
                  name: "imageURL",
                  nameLocation: "744:8:0",
                  nodeType: "VariableDeclaration",
                  scope: 59,
                  src: "737:15:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 56,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "737:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "684:69:0",
            },
            src: "667:87:0",
          },
          {
            anonymous: false,
            eventSelector:
              "cff1c074265994aa584fd09931da01aa4e7a201173f740d399e41e934cd0872b",
            id: 67,
            name: "SponsershipList",
            nameLocation: "765:15:0",
            nodeType: "EventDefinition",
            parameters: {
              id: 66,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 61,
                  indexed: false,
                  mutability: "mutable",
                  name: "from",
                  nameLocation: "789:4:0",
                  nodeType: "VariableDeclaration",
                  scope: 67,
                  src: "781:12:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 60,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "781:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 63,
                  indexed: false,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "804:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 67,
                  src: "796:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 62,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "796:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 65,
                  indexed: false,
                  mutability: "mutable",
                  name: "studentID",
                  nameLocation: "821:9:0",
                  nodeType: "VariableDeclaration",
                  scope: 67,
                  src: "813:17:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 64,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "813:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "780:51:0",
            },
            src: "759:73:0",
          },
          {
            anonymous: false,
            eventSelector:
              "19a68ff717c2046749719cfd854e33cb4062e01472d5fdca51ddbbe801566d0a",
            id: 75,
            name: "RedeemList",
            nameLocation: "843:10:0",
            nodeType: "EventDefinition",
            parameters: {
              id: 74,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 69,
                  indexed: false,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "862:2:0",
                  nodeType: "VariableDeclaration",
                  scope: 75,
                  src: "854:10:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 68,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "854:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 71,
                  indexed: false,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "875:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 75,
                  src: "867:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 70,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "867:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 73,
                  indexed: false,
                  mutability: "mutable",
                  name: "BudgetDettail",
                  nameLocation: "891:13:0",
                  nodeType: "VariableDeclaration",
                  scope: 75,
                  src: "884:20:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 72,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "884:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "853:52:0",
            },
            src: "837:69:0",
          },
          {
            body: {
              id: 87,
              nodeType: "Block",
              src: "973:116:0",
              statements: [
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 83,
                        name: "by",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 77,
                        src: "1068:2:0",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 84,
                        name: "amount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 79,
                        src: "1073:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 82,
                      name: "DonationList",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 49,
                      src: "1055:12:0",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_uint256_$returns$__$",
                        typeString: "function (address,uint256)",
                      },
                    },
                    id: 85,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1055:25:0",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 86,
                  nodeType: "EmitStatement",
                  src: "1050:30:0",
                },
              ],
            },
            functionSelector: "e69d849d",
            id: 88,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "donate",
            nameLocation: "920:6:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 80,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 77,
                  mutability: "mutable",
                  name: "by",
                  nameLocation: "936:2:0",
                  nodeType: "VariableDeclaration",
                  scope: 88,
                  src: "928:10:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 76,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "928:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 79,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "949:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 88,
                  src: "941:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 78,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "941:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "926:31:0",
            },
            returnParameters: {
              id: 81,
              nodeType: "ParameterList",
              parameters: [],
              src: "973:0:0",
            },
            scope: 187,
            src: "911:178:0",
            stateMutability: "payable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 103,
              nodeType: "Block",
              src: "1183:132:0",
              statements: [
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 98,
                        name: "by",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 90,
                        src: "1281:2:0",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 99,
                        name: "studentID",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 92,
                        src: "1286:9:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 100,
                        name: "amount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 94,
                        src: "1299:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      ],
                      id: 97,
                      name: "SponsershipList",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 67,
                      src: "1265:15:0",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_uint256_$returns$__$",
                        typeString: "function (address,uint256,uint256)",
                      },
                    },
                    id: 101,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1265:41:0",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 102,
                  nodeType: "EmitStatement",
                  src: "1260:46:0",
                },
              ],
            },
            functionSelector: "38971915",
            id: 104,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "sponserStudent",
            nameLocation: "1104:14:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 95,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 90,
                  mutability: "mutable",
                  name: "by",
                  nameLocation: "1127:2:0",
                  nodeType: "VariableDeclaration",
                  scope: 104,
                  src: "1119:10:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 89,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1119:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 92,
                  mutability: "mutable",
                  name: "studentID",
                  nameLocation: "1139:9:0",
                  nodeType: "VariableDeclaration",
                  scope: 104,
                  src: "1131:17:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 91,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1131:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 94,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "1158:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 104,
                  src: "1150:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 93,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1150:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1118:48:0",
            },
            returnParameters: {
              id: 96,
              nodeType: "ParameterList",
              parameters: [],
              src: "1183:0:0",
            },
            scope: 187,
            src: "1095:220:0",
            stateMutability: "payable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 119,
              nodeType: "Block",
              src: "1399:64:0",
              statements: [
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 114,
                        name: "to",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 110,
                        src: "1427:2:0",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      {
                        id: 115,
                        name: "amount",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 108,
                        src: "1433:6:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 116,
                        name: "budgetFile",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 106,
                        src: "1443:10:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      id: 113,
                      name: "RedeemList",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 75,
                      src: "1415:10:0",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_address_$_t_uint256_$_t_string_memory_ptr_$returns$__$",
                        typeString: "function (address,uint256,string memory)",
                      },
                    },
                    id: 117,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1415:39:0",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 118,
                  nodeType: "EmitStatement",
                  src: "1410:44:0",
                },
              ],
            },
            functionSelector: "97b38971",
            id: 120,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "redeem",
            nameLocation: "1329:6:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 111,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 106,
                  mutability: "mutable",
                  name: "budgetFile",
                  nameLocation: "1351:10:0",
                  nodeType: "VariableDeclaration",
                  scope: 120,
                  src: "1337:24:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 105,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1337:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 108,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "1371:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 120,
                  src: "1363:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 107,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1363:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 110,
                  mutability: "mutable",
                  name: "to",
                  nameLocation: "1389:2:0",
                  nodeType: "VariableDeclaration",
                  scope: 120,
                  src: "1381:10:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_address",
                    typeString: "address",
                  },
                  typeName: {
                    id: 109,
                    name: "address",
                    nodeType: "ElementaryTypeName",
                    src: "1381:7:0",
                    stateMutability: "nonpayable",
                    typeDescriptions: {
                      typeIdentifier: "t_address",
                      typeString: "address",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1335:57:0",
            },
            returnParameters: {
              id: 112,
              nodeType: "ParameterList",
              parameters: [],
              src: "1399:0:0",
            },
            scope: 187,
            src: "1320:143:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 152,
              nodeType: "Block",
              src: "1590:183:0",
              statements: [
                {
                  expression: {
                    id: 140,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 131,
                        name: "studentList",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 31,
                        src: "1599:11:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_uint256_$_t_struct$_Student_$26_storage_$",
                          typeString:
                            "mapping(uint256 => struct Donation.Student storage ref)",
                        },
                      },
                      id: 133,
                      indexExpression: {
                        id: 132,
                        name: "studentID",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 8,
                        src: "1611:9:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "1599:22:0",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Student_$26_storage",
                        typeString: "struct Donation.Student storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          id: 135,
                          name: "_name",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 122,
                          src: "1633:5:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          id: 136,
                          name: "age",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 124,
                          src: "1641:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 137,
                          name: "acadamicLevel",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 126,
                          src: "1647:13:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          id: 138,
                          name: "imageURL",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 128,
                          src: "1663:8:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        ],
                        id: 134,
                        name: "Student",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 26,
                        src: "1625:7:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_struct$_Student_$26_storage_ptr_$",
                          typeString:
                            "type(struct Donation.Student storage pointer)",
                        },
                      },
                      id: 139,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "structConstructorCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1625:47:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Student_$26_memory_ptr",
                        typeString: "struct Donation.Student memory",
                      },
                    },
                    src: "1599:73:0",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Student_$26_storage",
                      typeString: "struct Donation.Student storage ref",
                    },
                  },
                  id: 141,
                  nodeType: "ExpressionStatement",
                  src: "1599:73:0",
                },
                {
                  eventCall: {
                    arguments: [
                      {
                        id: 143,
                        name: "_name",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 122,
                        src: "1701:5:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        id: 144,
                        name: "age",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 124,
                        src: "1710:3:0",
                        typeDescriptions: {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                      },
                      {
                        id: 145,
                        name: "acadamicLevel",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 126,
                        src: "1718:13:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                      {
                        id: 146,
                        name: "imageURL",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 128,
                        src: "1735:8:0",
                        typeDescriptions: {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      },
                    ],
                    expression: {
                      argumentTypes: [
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                        {
                          typeIdentifier: "t_uint256",
                          typeString: "uint256",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                        {
                          typeIdentifier: "t_string_memory_ptr",
                          typeString: "string memory",
                        },
                      ],
                      id: 142,
                      name: "StudentList",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 59,
                      src: "1689:11:0",
                      typeDescriptions: {
                        typeIdentifier:
                          "t_function_event_nonpayable$_t_string_memory_ptr_$_t_uint256_$_t_string_memory_ptr_$_t_string_memory_ptr_$returns$__$",
                        typeString:
                          "function (string memory,uint256,string memory,string memory)",
                      },
                    },
                    id: 147,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    kind: "functionCall",
                    lValueRequested: false,
                    nameLocations: [],
                    names: [],
                    nodeType: "FunctionCall",
                    src: "1689:55:0",
                    tryCall: false,
                    typeDescriptions: {
                      typeIdentifier: "t_tuple$__$",
                      typeString: "tuple()",
                    },
                  },
                  id: 148,
                  nodeType: "EmitStatement",
                  src: "1684:60:0",
                },
                {
                  expression: {
                    id: 150,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    nodeType: "UnaryOperation",
                    operator: "++",
                    prefix: false,
                    src: "1753:11:0",
                    subExpression: {
                      id: 149,
                      name: "studentID",
                      nodeType: "Identifier",
                      overloadedDeclarations: [],
                      referencedDeclaration: 8,
                      src: "1753:9:0",
                      typeDescriptions: {
                        typeIdentifier: "t_uint256",
                        typeString: "uint256",
                      },
                    },
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  id: 151,
                  nodeType: "ExpressionStatement",
                  src: "1753:11:0",
                },
              ],
            },
            functionSelector: "8917d33c",
            id: 153,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "registerStudent",
            nameLocation: "1477:15:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 129,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 122,
                  mutability: "mutable",
                  name: "_name",
                  nameLocation: "1508:5:0",
                  nodeType: "VariableDeclaration",
                  scope: 153,
                  src: "1494:19:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 121,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1494:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 124,
                  mutability: "mutable",
                  name: "age",
                  nameLocation: "1523:3:0",
                  nodeType: "VariableDeclaration",
                  scope: 153,
                  src: "1515:11:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 123,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1515:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 126,
                  mutability: "mutable",
                  name: "acadamicLevel",
                  nameLocation: "1542:13:0",
                  nodeType: "VariableDeclaration",
                  scope: 153,
                  src: "1528:27:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 125,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1528:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 128,
                  mutability: "mutable",
                  name: "imageURL",
                  nameLocation: "1572:8:0",
                  nodeType: "VariableDeclaration",
                  scope: 153,
                  src: "1558:22:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 127,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1558:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1492:90:0",
            },
            returnParameters: {
              id: 130,
              nodeType: "ParameterList",
              parameters: [],
              src: "1590:0:0",
            },
            scope: 187,
            src: "1468:305:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 173,
              nodeType: "Block",
              src: "1868:84:0",
              statements: [
                {
                  expression: {
                    id: 171,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    leftHandSide: {
                      baseExpression: {
                        id: 162,
                        name: "sponserserList",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 43,
                        src: "1877:14:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_mapping$_t_address_$_t_struct$_Sponserer_$38_storage_$",
                          typeString:
                            "mapping(address => struct Donation.Sponserer storage ref)",
                        },
                      },
                      id: 165,
                      indexExpression: {
                        expression: {
                          id: 163,
                          name: "msg",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967281,
                          src: "1892:3:0",
                          typeDescriptions: {
                            typeIdentifier: "t_magic_message",
                            typeString: "msg",
                          },
                        },
                        id: 164,
                        isConstant: false,
                        isLValue: false,
                        isPure: false,
                        lValueRequested: false,
                        memberLocation: "1896:6:0",
                        memberName: "sender",
                        nodeType: "MemberAccess",
                        src: "1892:10:0",
                        typeDescriptions: {
                          typeIdentifier: "t_address",
                          typeString: "address",
                        },
                      },
                      isConstant: false,
                      isLValue: true,
                      isPure: false,
                      lValueRequested: true,
                      nodeType: "IndexAccess",
                      src: "1877:26:0",
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Sponserer_$38_storage",
                        typeString: "struct Donation.Sponserer storage ref",
                      },
                    },
                    nodeType: "Assignment",
                    operator: "=",
                    rightHandSide: {
                      arguments: [
                        {
                          id: 167,
                          name: "name",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 155,
                          src: "1917:4:0",
                          typeDescriptions: {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                        },
                        {
                          id: 168,
                          name: "studentId",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 157,
                          src: "1924:9:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                        {
                          id: 169,
                          name: "amount",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 159,
                          src: "1936:6:0",
                          typeDescriptions: {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_string_memory_ptr",
                            typeString: "string memory",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                          {
                            typeIdentifier: "t_uint256",
                            typeString: "uint256",
                          },
                        ],
                        id: 166,
                        name: "Sponserer",
                        nodeType: "Identifier",
                        overloadedDeclarations: [],
                        referencedDeclaration: 38,
                        src: "1907:9:0",
                        typeDescriptions: {
                          typeIdentifier:
                            "t_type$_t_struct$_Sponserer_$38_storage_ptr_$",
                          typeString:
                            "type(struct Donation.Sponserer storage pointer)",
                        },
                      },
                      id: 170,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "structConstructorCall",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "1907:36:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_struct$_Sponserer_$38_memory_ptr",
                        typeString: "struct Donation.Sponserer memory",
                      },
                    },
                    src: "1877:66:0",
                    typeDescriptions: {
                      typeIdentifier: "t_struct$_Sponserer_$38_storage",
                      typeString: "struct Donation.Sponserer storage ref",
                    },
                  },
                  id: 172,
                  nodeType: "ExpressionStatement",
                  src: "1877:66:0",
                },
              ],
            },
            functionSelector: "d325c715",
            id: 174,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "registerSponserer",
            nameLocation: "1787:17:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 160,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 155,
                  mutability: "mutable",
                  name: "name",
                  nameLocation: "1820:4:0",
                  nodeType: "VariableDeclaration",
                  scope: 174,
                  src: "1806:18:0",
                  stateVariable: false,
                  storageLocation: "memory",
                  typeDescriptions: {
                    typeIdentifier: "t_string_memory_ptr",
                    typeString: "string",
                  },
                  typeName: {
                    id: 154,
                    name: "string",
                    nodeType: "ElementaryTypeName",
                    src: "1806:6:0",
                    typeDescriptions: {
                      typeIdentifier: "t_string_storage_ptr",
                      typeString: "string",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 157,
                  mutability: "mutable",
                  name: "studentId",
                  nameLocation: "1834:9:0",
                  nodeType: "VariableDeclaration",
                  scope: 174,
                  src: "1826:17:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 156,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1826:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
                {
                  constant: false,
                  id: 159,
                  mutability: "mutable",
                  name: "amount",
                  nameLocation: "1853:6:0",
                  nodeType: "VariableDeclaration",
                  scope: 174,
                  src: "1845:14:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 158,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1845:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1804:56:0",
            },
            returnParameters: {
              id: 161,
              nodeType: "ParameterList",
              parameters: [],
              src: "1868:0:0",
            },
            scope: 187,
            src: "1778:174:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
          {
            body: {
              id: 185,
              nodeType: "Block",
              src: "2006:48:0",
              statements: [
                {
                  expression: {
                    expression: {
                      arguments: [
                        {
                          id: 181,
                          name: "this",
                          nodeType: "Identifier",
                          overloadedDeclarations: [],
                          referencedDeclaration: 4294967268,
                          src: "2030:4:0",
                          typeDescriptions: {
                            typeIdentifier: "t_contract$_Donation_$187",
                            typeString: "contract Donation",
                          },
                        },
                      ],
                      expression: {
                        argumentTypes: [
                          {
                            typeIdentifier: "t_contract$_Donation_$187",
                            typeString: "contract Donation",
                          },
                        ],
                        id: 180,
                        isConstant: false,
                        isLValue: false,
                        isPure: true,
                        lValueRequested: false,
                        nodeType: "ElementaryTypeNameExpression",
                        src: "2022:7:0",
                        typeDescriptions: {
                          typeIdentifier: "t_type$_t_address_$",
                          typeString: "type(address)",
                        },
                        typeName: {
                          id: 179,
                          name: "address",
                          nodeType: "ElementaryTypeName",
                          src: "2022:7:0",
                          typeDescriptions: {},
                        },
                      },
                      id: 182,
                      isConstant: false,
                      isLValue: false,
                      isPure: false,
                      kind: "typeConversion",
                      lValueRequested: false,
                      nameLocations: [],
                      names: [],
                      nodeType: "FunctionCall",
                      src: "2022:13:0",
                      tryCall: false,
                      typeDescriptions: {
                        typeIdentifier: "t_address",
                        typeString: "address",
                      },
                    },
                    id: 183,
                    isConstant: false,
                    isLValue: false,
                    isPure: false,
                    lValueRequested: false,
                    memberLocation: "2036:7:0",
                    memberName: "balance",
                    nodeType: "MemberAccess",
                    src: "2022:21:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  functionReturnParameters: 178,
                  id: 184,
                  nodeType: "Return",
                  src: "2015:28:0",
                },
              ],
            },
            functionSelector: "d7f51382",
            id: 186,
            implemented: true,
            kind: "function",
            modifiers: [],
            name: "OwnBalance",
            nameLocation: "1968:10:0",
            nodeType: "FunctionDefinition",
            parameters: {
              id: 175,
              nodeType: "ParameterList",
              parameters: [],
              src: "1978:2:0",
            },
            returnParameters: {
              id: 178,
              nodeType: "ParameterList",
              parameters: [
                {
                  constant: false,
                  id: 177,
                  mutability: "mutable",
                  name: "",
                  nameLocation: "-1:-1:-1",
                  nodeType: "VariableDeclaration",
                  scope: 186,
                  src: "1997:7:0",
                  stateVariable: false,
                  storageLocation: "default",
                  typeDescriptions: {
                    typeIdentifier: "t_uint256",
                    typeString: "uint256",
                  },
                  typeName: {
                    id: 176,
                    name: "uint256",
                    nodeType: "ElementaryTypeName",
                    src: "1997:7:0",
                    typeDescriptions: {
                      typeIdentifier: "t_uint256",
                      typeString: "uint256",
                    },
                  },
                  visibility: "internal",
                },
              ],
              src: "1996:9:0",
            },
            scope: 187,
            src: "1959:95:0",
            stateMutability: "nonpayable",
            virtual: false,
            visibility: "public",
          },
        ],
        scope: 188,
        src: "60:1997:0",
        usedErrors: [],
      },
    ],
    src: "33:2024:0",
  },
  compiler: {
    name: "solc",
    version: "0.8.17+commit.8df45f5f.Emscripten.clang",
  },
  networks: {
    5777: {
      events: {},
      links: {},
      address: "0x5563A1Bb9C8222DAe1fba4eE56513161Ba7038c6",
      transactionHash:
        "0x415901ff15e9f7f49a0cdba2c04fe84455a48e72792a57ef803082fb24c68f44",
    },
    80001: {
      events: {
        "0x94d5e38b6d610151ce7f2d572da9e962e8c55b60140fd44be11a3a47464fd060": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
          ],
          name: "DonationList",
          type: "event",
        },
        "0x19a68ff717c2046749719cfd854e33cb4062e01472d5fdca51ddbbe801566d0a": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "to",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "BudgetDettail",
              type: "string",
            },
          ],
          name: "RedeemList",
          type: "event",
        },
        "0xcff1c074265994aa584fd09931da01aa4e7a201173f740d399e41e934cd0872b": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "address",
              name: "from",
              type: "address",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "amount",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "studentID",
              type: "uint256",
            },
          ],
          name: "SponsershipList",
          type: "event",
        },
        "0x3719250c727a25b7f3336b524c9c73126f86a7c21eb9a2e6efde011bff8f5e69": {
          anonymous: false,
          inputs: [
            {
              indexed: false,
              internalType: "string",
              name: "name",
              type: "string",
            },
            {
              indexed: false,
              internalType: "uint256",
              name: "age",
              type: "uint256",
            },
            {
              indexed: false,
              internalType: "string",
              name: "acadamicLevel",
              type: "string",
            },
            {
              indexed: false,
              internalType: "string",
              name: "imageURL",
              type: "string",
            },
          ],
          name: "StudentList",
          type: "event",
        },
      },
      links: {},
      address: "0xD40D1Ec7CFcAA2929eC9aCF1744A3246B8bD2C7a",
      transactionHash:
        "0x4bef2de8b200087a357aa254ef35458e844bab7bddc9b9d18d3372c60d64648f",
    },
  },
  schemaVersion: "3.4.10",
  updatedAt: "2023-01-22T17:31:22.603Z",
  networkType: "ethereum",
  devdoc: {
    kind: "dev",
    methods: {},
    version: 1,
  },
  userdoc: {
    kind: "user",
    methods: {},
    version: 1,
  },
};

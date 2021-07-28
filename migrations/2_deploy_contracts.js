const Factory = artifacts.require("EnochV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");
const EnochV2Pair = artifacts.require("EnochV2ERC20.sol");
const WETH = artifacts.require("WETH.sol");
const BN = require("bn.js");

module.exports = async function (deployer, network, addresses) {

  await deployer.deploy(Factory, addresses[0]); //send transaction
  const factory = await Factory.deployed(); //gets mined

  await deployer.deploy(EnochV2Pair);
  const EnochV2pair = await EnochV2Pair.deployed();

  let token1Address, token2Address;
  if(network === 'mainnet'){
      token1Address = '';
      token2Address = '';

  } else {

      await deployer.deploy(Token1);
      await deployer.deploy(Token2);
      await deployer.deploy(WETH);
      const token1 = await Token1.deployed();
      const token2 = await Token2.deployed();
      const Weth = await WETH.deployed();
      token1Address = token1.address;
      token2Address = token2.address;


      console.log("Token 1 address", token1Address)
      console.log("Token 2 address", token2Address)
      console.log("Factory address", factory.address)
      console.log("WETH address:", Weth.address);
    //  await factory.createPair(token1Address, token2Address);
    //   console.log("Pair address: ", await factory.getPair(token1Address, token2Address));
    //   console.log("Creation Code", await factory.getCreationCode())
      // console.log("Enoch V2 Pair Contract address for ERC20 Functionailities:", EnochV2pair.address);

     
      

  }
};
// .getCreationCode().call()

















// TOKEN_A_AMOUNT = pow(10, 18);
      // a.pow(b) = 10.pow(18)
      // amount = 100 * (10**18);
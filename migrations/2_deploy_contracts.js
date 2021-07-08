const Factory = artifacts.require("EnochV2Factory.sol");
const Token1 = artifacts.require("Token1.sol");
const Token2 = artifacts.require("Token2.sol");

const BN = require("bn.js");

module.exports = async function (deployer, network, addresses) {
  await deployer.deploy(Factory, addresses[0]); //send transaction
  const factory = await Factory.deployed(); //gets mined

  let token1Address, token2Address;
  if(network === 'mainnet'){
      token1Address = '';
      token2Address = '';

  } else {

      await deployer.deploy(Token1);
      await deployer.deploy(Token2);
      const token1 = await Token1.deployed();
      const token2 = await Token2.deployed();
      token1Address = token1.address;
      token2Address = token2.address;
      
      await token1.transfer("0xb9B62EaE8BaDe74880C5B2C622a3ccAeF28769D6",100);
      // approve Router address
      await token1.approve("0xEb83b4a419F2e9e70321897A438f67C0275ba349",10)
      await token2.approve("0xEb83b4a419F2e9e70321897A438f67C0275ba349",10)


      await factory.createPair(token1Address, token2Address);

      

  }
};

















// TOKEN_A_AMOUNT = pow(10, 18);
      // a.pow(b) = 10.pow(18)
      // amount = 100 * (10**18);
const { ethers } = require("hardhat");

async function main() {
  const [deployer] = await ethers.getSigners();

  const Factory = await ethers.getContractFactory("EnochV2Factory");
  const Token1 = await ethers.getContractFactory("Token1");
  const Token2 = await ethers.getContractFactory("Token2");
  const WETH = await ethers.getContractFactory("WETH");

  const factory = await Factory.deploy(deployer.address);
  const token1 = await Token1.deploy();
  const token2 = await Token2.deploy();
  const Weth = await WETH.deploy();

  await factory.deployed();
  await token1.deployed();
  await token2.deployed();
  await Weth.deployed();

  const token1Token2Pair = await factory.createPair(token1.address, token2.address);
  const factoryReceipt1 = await token1Token2Pair.wait();

  const wethToken2Pair = await factory.createPair(Weth.address, token2.address);
  const factoryReceipt2 = await wethToken2Pair.wait();

  console.log("")
  console.log("factory address:", factory.address);
  console.log("token1 address:", token1.address);
  console.log("token2 address:", token2.address);
  console.log("Weth address :", Weth.address);
  console.log("token1-token2 pair address:", factoryReceipt1.events[0].args.pair);
  console.log("Weth-token2 pair address:", factoryReceipt2.events[0].args.pair);
  console.log("Creation Code:", await factory.getCreationCode())
  console.log("")
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

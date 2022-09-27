const { ethers, upgrades } = require('hardhat');

const main = async () => {
  const Box = await ethers.getContractFactory("Box");
  console.log("Deploying Box...");
  const box = await upgrades.deployProxy(Box, [42], {initializer: "store"});
  await box.deployed();
  console.log("Box deployed to:", box.address);
}

main();

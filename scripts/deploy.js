const hre = require("hardhat");

async function main() {
  const candidates = ["Alice", "Bob", "Charlie"];

  const Voting = await hre.ethers.getContractFactory("Voting");

  const voting = await Voting.deploy(candidates); //传入构造函数参数

  console.log("正在部署中...");
  await voting.waitForDeployment(); //等待部署完成 

  const address = await voting.getAddress(); //ethers v6 获取地址

  console.log("Voting 合约已部署到：", address);
}

main().catch((error) => {
  console.error("部署出错:", error);
  process.exitCode = 1;
});

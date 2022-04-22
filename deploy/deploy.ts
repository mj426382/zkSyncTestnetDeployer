import { Wallet } from "zksync-web3"
import { HardhatRuntimeEnvironment } from "hardhat/types"
import { Deployer } from "@matterlabs/hardhat-zksync-deploy"

export default async function (hre: HardhatRuntimeEnvironment) {

  const wallet = new Wallet(process.env.PRIVATE_KEY)

  const deployer = new Deployer(hre, wallet);
  const artifact = await deployer.loadArtifact('Multicall') //paste contract name here

  const greeterContract = await deployer.deploy(artifact, [])

  const contractAddress = greeterContract.address
  console.log(`${artifact.contractName} was deployed to ${contractAddress}`)
}

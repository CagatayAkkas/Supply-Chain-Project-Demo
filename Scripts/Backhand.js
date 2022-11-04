const { base58 } = require("ethers/lib/utils")
const { ethers, run, network } = require("hardhat")
async function Backhand() {
  const factory = await ethers.getContractFactory("Backhand")

  console.log("Deploying contracto")
  const Backhand = await factory.deploy()

  await Backhand.deployed()
  console.log(`Deployed contract to: ${Backhand.address}`)
  if (network.config.chainId === 4 && process.env.ETHERSCAN_API_KEY) {
    console.log("Waiting for block confirmations...")
    await Backhand.deployTransaction.wait(6)
    await verify(Backhand.address, [])
  }

  console.log("gamo already hajimejyo")

  await addAllProducts()
}

async function addAllProducts() {
  var mainProductArray = new Array()

  const factory = await ethers.getContractFactory("Backhand")

  const Backhand = await factory.deploy()

  await Backhand.deployed()

  await Backhand.addProduct(0, "0001", "sugar", 14, 20, "000001")
  const mainProduct = Backhand.addProduct(1, "0002", "cake", 80, 100, "000002")
  await Backhand.addProduct(0, "0003", "cacao", 14, 20, "000003")
  await Backhand.addProduct(0, "0004", "milk", 14, 20, "000004")

  const myProduct = await Backhand.printProduct("0002")
  //TRAİNİNG FOR İS MAİN

  //await Backhand.isProductMain()

  /////////////////////

  console.log("watashiwu producto isu " + myProduct)
  console.log("inner info is :" + mainProduct)
  const address = await Backhand.getAddress()
  console.log("contract address is : " + address)
}

async function verify(contractAddress, args) {
  console.log("Verifying contract...")
  try {
    await run("verify:verify", {
      address: contractAddress,
      constructorArguments: args,
    })
  } catch (e) {
    if (e.message.toLowerCase().includes("already verified")) {
      console.log("Already Verified!")
    } else {
      console.log(e)
    }
  }
}

Backhand()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error)
    process.exit(1)
  })

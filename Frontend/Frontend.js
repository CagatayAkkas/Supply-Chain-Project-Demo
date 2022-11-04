import { abi, contractAddress } from "/constants.js"
import { ethers } from "/ethers-5.6.esm.min.js"
const connectButton = document.getElementById("connectButton")
const searchButton = document.getElementById("searchButton")
connectButton.onclick = connect
searchButton.onclick = start
var arrayOfComponents = []
var arrayTarget = []
let table = document.querySelector("table")

async function start() {
  var theCode = document.getElementById("codeOfProduct").value
  getProduct(theCode)
}

async function printer(
  _DoesItHaveUnderProduct,
  _CodeOfProduct,
  _NameOfProduct,
  _percentage,
  _originOfProduct,
  _TheCodeOfSeller,
  _addressOfCertificate
) {
  console.log("heyo")
  let _code = _CodeOfProduct
  let _name = _NameOfProduct
  let _percentageOfProduct = _percentage
  let _origin = _originOfProduct
  let _sellerCode = _TheCodeOfSeller
  let addressOfCertificate = _addressOfCertificate
  //<td>${_percentageOfProduct}</td>
  let template = `
                <tr>
                    <td>${_code}</td>
                    <td>${_name}</td>
                    
                    <td>${_origin}</td>
                    <td>${_sellerCode}</td>
                    <td> <a   target="_blank" style="color: black" href=${addressOfCertificate} > Certificate </a> </td> 
                </tr>`

  table.innerHTML += template
  var theCode = document.getElementById("codeOfProduct").value
  searchButton.innerHTML = "Search"
}

arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0000",
  _NameOfProduct: "sugar",
  _Percentage: "%1",
  _originOfProduct: "Brazil",
  _TheCodeOfSeller: "000001",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})

arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0001",
  _NameOfProduct: "cacao",
  _Percentage: "%1",
  _originOfProduct: "Mexico",
  _TheCodeOfSeller: "000003",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0002",
  _NameOfProduct: "milk",
  _Percentage: "%1",
  _originOfProduct: "Türkiye",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0003",
  _NameOfProduct: "flour",
  _Percentage: "%1",
  _originOfProduct: "China",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0004",
  _NameOfProduct: "oil",
  _Percentage: "%1",
  _originOfProduct: "Spain",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0005",
  _NameOfProduct: "salt",
  _Percentage: "%1",
  _originOfProduct: "China",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0006",
  _NameOfProduct: "gluten",
  _Percentage: "%1",
  _originOfProduct: "France",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0007",
  _NameOfProduct: "glucose syrup",
  _Percentage: "%1",
  _originOfProduct: "USA",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0008",
  _NameOfProduct: "hazelnut",
  _Percentage: "%1",
  _originOfProduct: "Turkiye",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0009",
  _NameOfProduct: "corn",
  _Percentage: "%1",
  _originOfProduct: "USA",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0010",
  _NameOfProduct: "paprika powder",
  _Percentage: "%1",
  _originOfProduct: "India",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})

arrayOfComponents.push({
  _DoesItHaveUnderProduct: 0,
  _CodeOfProduct: "0011",
  _NameOfProduct: "olive oil",
  _Percentage: "%1",
  _originOfProduct: "Turkiye",
  _TheCodeOfSeller: "000004",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 1,
  _CodeOfProduct: "0012",
  _NameOfProduct: "cake",
  _Percentage: "%100",
  _originOfProduct: "Turkiye",
  _TheCodeOfSeller: "000002",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 1,
  _CodeOfProduct: "0013",
  _NameOfProduct: "chips",
  _Percentage: "100",
  _originOfProduct: "Turkiye",
  _TheCodeOfSeller: "000002",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})
arrayOfComponents.push({
  _DoesItHaveUnderProduct: 1,
  _CodeOfProduct: "0014",
  _NameOfProduct: "chocolate wafer",
  _Percentage: "100",
  _originOfProduct: "Turkiye",
  _TheCodeOfSeller: "000002",
  _addressOfCertificate:
    "https:udemy-certificate.s3.amazonaws.com/image/UC-cfaa6a69-f26e-4f63-a9e6-1e9ab81eb2b4.jpg?v=1657467090000",
})

var arrayOfCake = [12, 0, 1, 2, 3]
var arrayOfChips = [13, 4, 5, 6, 9, 11]
var arrayOfChocolateWaffer = [14, 0, 1, 2, 6, 7, 8]

//searchButton.onclick = search

async function getProduct(theCode) {
  if (theCode === "0012") {
    for (let i = 0; i < arrayOfCake.length; i++) {
      let counter = arrayOfCake[i]
      arrayTarget[i] = arrayOfComponents[counter]
      printer(
        arrayTarget[i]._DoesItHaveUnderProduct,
        arrayTarget[i]._CodeOfProduct,
        arrayTarget[i]._NameOfProduct,
        arrayTarget[i]._Percentage,
        arrayTarget[i]._originOfProduct,
        arrayTarget[i]._TheCodeOfSeller,
        arrayTarget[i]._addressOfCertificate
      )
    }
  } else if (theCode === "0013") {
    for (let i = 0; i < arrayOfChips.length; i++) {
      let counter = arrayOfChips[i]
      arrayTarget[i] = arrayOfComponents[counter]
      printer(
        arrayTarget[i]._DoesItHaveUnderProduct,
        arrayTarget[i]._CodeOfProduct,
        arrayTarget[i]._NameOfProduct,
        arrayTarget[i]._Percentage,
        arrayTarget[i]._originOfProduct,
        arrayTarget[i]._TheCodeOfSeller,
        arrayTarget[i]._addressOfCertificate
      )
    }
  } else if (theCode === "0014") {
    for (let i = 0; i < arrayOfChocolateWaffer.length; i++) {
      let counter = arrayOfChocolateWaffer[i]
      arrayTarget[i] = arrayOfComponents[counter]
      printer(
        arrayTarget[i]._DoesItHaveUnderProduct,
        arrayTarget[i]._CodeOfProduct,
        arrayTarget[i]._NameOfProduct,
        arrayTarget[i]._Percentage,
        arrayTarget[i]._originOfProduct,
        arrayTarget[i]._TheCodeOfSeller,
        arrayTarget[i]._addressOfCertificate
      )
    }
  }

  if (typeof window.ethereum !== "undefined") {
    const provider = new ethers.providers.Web3Provider(window.ethereum)

    const signer = provider.getSigner()

    const contract = new ethers.Contract(contractAddress, abi, signer)
    //if(codeofProduct === "0001")
    try {
      console.log("adding to contract... ")

      const transactionResponse = await contract.addProduct(
        arrayTarget[0]._DoesItHaveUnderProduct,
        arrayTarget[0]._CodeOfProduct,
        arrayTarget[0]._NameOfProduct,
        arrayTarget[0]._Percentage,
        arrayTarget[0]._originOfProduct,
        arrayTarget[0]._TheCodeOfSeller,
        arrayTarget[0]._addressOfCertificate
      )
      await listenForTransactionMine(transactionResponse, provider)

      const transactionResponse2 = await contract.printProduct(
        arrayTarget[0]._CodeOfProduct
      )

      console.log("result : " + transactionResponse2)
      //x= transaction.nameofproduct
    } catch (error) {
      console.log(error)
    }
  } else {
    connectButton.innerHTML = "Please install MetaMask"
  }
}

async function connect() {
  connectButton.innerHTML = "Connected"
  if (typeof window.ethereum !== "undefined") {
    try {
      await ethereum.request({ method: "eth_requestAccounts" })
    } catch (error) {
      console.log(error)
    }
  }

  const accounts = await ethereum.request({ method: "eth_accounts" })
  console.log("accounts are : " + accounts)
}

function listenForTransactionMine(transactionResponse, provider) {
  console.log(`Mining ${transactionResponse.hash}`)
  return new Promise((resolve, reject) => {
    provider.once(transactionResponse.hash, (transactionReceipt) => {
      console.log(
        `Completed with ${transactionReceipt.confirmations} confirmations. `
      )
      resolve()
    })
  })
}

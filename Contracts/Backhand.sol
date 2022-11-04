// SPDX-License-Identifier: MIT

pragma solidity ^0.8.9;

contract Backhand {
  uint256 numberOfRows;
  string CodeOfProduct;
  uint256 ProductCount;
  uint256 ProductCount2;

  struct ProductFeatures {
    uint256 doesItHaveUnderProduct;
    string CodeOfProduct;
    string NameOfProduct;
    string Percentage;
    string OriginOfProduct;
    string TheCodeOfSeller;
    string AddressOfCertificate;
  }

  struct UnderProductFeatures {
    uint256 codeOrUnderProduct;
    uint256 quantityOfProduct;
  }

  mapping(string => ProductFeatures) public stringToProductFeatures;

  ProductFeatures[] features;

  constructor() {}

  function addProduct(
    uint256 _DoesItHaveUnderProduct,
    string memory _CodeOfProduct,
    string memory _NameOfProduct,
    string memory _percentage,
    string memory _originOfProduct,
    string memory _TheCodeOfSeller,
    string memory _addressOfCertificate
  ) public {
    stringToProductFeatures[_CodeOfProduct] = ProductFeatures(
      _DoesItHaveUnderProduct,
      _CodeOfProduct,
      _NameOfProduct,
      _percentage,
      _originOfProduct,
      _TheCodeOfSeller,
      _addressOfCertificate
    );
  }

  // function isProductMain(
  //   uint256 _DoesItHaveUnderProduct,
  //   string memory _CodeOfProduct,
  //   string memory _NameOfProduct,
  //   uint256 _BuyingCost,
  //   uint256 _AverageCost,
  //   string memory _TheCodeOfSeller
  // ) public view returns (uint256) {
  //   if (_DoesItHaveUnderProduct == 1) {
  //     return 1;
  //   } else {
  //     return 0;
  //   }
  // }

  function getAddress() public view returns (address) {
    return address(this);
  }

  function printProduct(string memory _codeOfProduct)
    public
    view
    returns (ProductFeatures memory)
  {
    return stringToProductFeatures[_codeOfProduct];
  }
}

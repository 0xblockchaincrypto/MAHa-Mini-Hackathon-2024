const {
  fetchContractSourceCode,
  generateWallet,
  getERC20Balance,
  getNFTsForOwner,
  getUnixTimestamp,
  weiToEther,
  etherToWei,
} = require("../blockchain/index");
const availableFunctions = {
  fetchContractSourceCode: fetchContractSourceCode,
  generateWallet: generateWallet,
  getERC20Balance: getERC20Balance,
  getNFTsForOwner: getNFTsForOwner,
  getUnixTimestamp: getUnixTimestamp,
  weiToEther: weiToEther,
  etherToWei: etherToWei,
};

module.exports = availableFunctions;

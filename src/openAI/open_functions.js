const {fetchContractSourceCode, generateWallet, getERC20Balance, getNFTsForOwner} = require('../blockchain/index')
const availableFunctions = {
    fetchContractSourceCode: fetchContractSourceCode,
    generateWallet:generateWallet,
    getERC20Balance:getERC20Balance,
    getNFTsForOwner:getNFTsForOwner
  };

module.exports = availableFunctions
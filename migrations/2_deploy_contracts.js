const shahToken = artifacts.require("./shahToken.sol");

module.exports = function (deployer) {
  deployer.deploy(shahToken);
};

var ConvertLib = artifacts.require("./ConvertLib.sol");
var MetaCoin = artifacts.require("./MetaCoin.sol");
var WasHere = artifacts.require("./WasHere.sol");
var DropNotice = artifacts.require("./DropNotice.sol");
var SecurityDeposit = artifacts.require("./SecurityDeposit.sol");
var DataStore = artifacts.require("./DataStore.sol");

module.exports = function(deployer) {
  deployer.deploy(ConvertLib);
  deployer.link(ConvertLib, MetaCoin);
  deployer.deploy(MetaCoin);
  deployer.deploy(WasHere);
  deployer.deploy(DropNotice);
  deployer.deploy(SecurityDeposit);
  deployer.deploy(DataStore);
};

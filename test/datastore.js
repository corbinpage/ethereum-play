var DataStore = artifacts.require("./DataStore.sol");

contract('DataStore', function(accounts) {
  it("should start with no data", function() {
    return DataStore.deployed().then(function(instance) {
      return instance.getData.call(accounts[0]);
    }).then(function(data) {
      console.log(data);
      assert.equal(data, "", "incorrect data returned");
    });
  });

  it("should receive and store data", function() {
    let testData = "Testing";

    console.log("test1");

    return DataStore.new(testData).then(function(instance) {
      console.log("test2");
      return instance.getData.call();
    })
  // .then(function(data) {
  //   assert.equal(data, testData, "incorrect data returned");
  // });
  });

  // MetaCoin.new().then(function(instance) {
  //   // `instance` is a new instance of the abstraction.
  //   // If this callback is called, the deployment was successful.
  //   console.log(instance.address);
  // }).catch(function(e) {
  //   // There was an error! Handle it.
  // });

  // contract('DataStore', function(accounts) {
  //   it("should receive and store data", function() {
  //     return DataStore.deployed().then(function(instance) {
  //       return instance.getBalance.call(accounts[0]);
  //     }).then(function(balance) {
  //       assert.equal(balance.valueOf(), 10000, "10000 wasn't in the first account");
  //     });
  //   });

});

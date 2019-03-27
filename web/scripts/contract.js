if ( typeof web3 != 'undefined') {
    web3 = new Web3(web3.currentProvider);
  } else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
  }

  var version = web3.version;
  console.log("using web3 version: " + version);
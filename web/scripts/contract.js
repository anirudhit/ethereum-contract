if ( typeof web3 != 'undefined') {
    web3 = new Web3(web3.currentProvider);
} else {
    web3 = new Web3(new Web3.providers.HttpProvider("http://localhost:9545"));
}

var version = web3.version;
console.log("using web3 version: " + version);

$('#contract-form').submit(function() {
    event.preventDefault();
    var fromAddress = $('#fromAddress').val();
    var toAddress = $('#toAddress').val();
    var amount = $('#amount').val();
    if (web3.utils.isAddress(fromAddress) != true) {
        alert('You did not enter a correct ethereum address for the sender address.');
        return;
    }
    if (web3.utils.isAddress(toAddress) != true) {
        alert('You did not enter a correct ethereum address for the recipient address.');
        return;
    }
    if (amount == 0) {
        alert('You must send more than 0 ETH.');
        return;
    }
});
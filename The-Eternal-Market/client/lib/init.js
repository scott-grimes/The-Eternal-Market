
if(typeof web3 === 'undefined')
	    web3 = new Web3(new Web3.providers.HttpProvider('http://localhost:8545'));


//the eternal address
var em_base = '0x01ffCdAb342481309a4768061b04fEc8A5C1dE0B';

//ABI's for our contracts
var em_base_contract = web3.eth.contract([{"constant":false,"inputs":[{"name":"newMessage","type":"string"}],"name":"changeMessage","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"currentVersion","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newKey","type":"string"}],"name":"changePublicKey","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"message_to_users","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"public_key","outputs":[{"name":"","type":"string"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"new_address","type":"address"}],"name":"changeAddressOfMarket","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"}]);
var eternalmarketContract = web3.eth.contract([{"constant":false,"inputs":[{"name":"new_rate","type":"uint256"}],"name":"updateUSD","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_title","type":"string"},{"name":"_description","type":"string"},{"name":"_publicKey","type":"string"},{"name":"_price","type":"uint256"}],"name":"addListing","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"USD","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"},{"name":"shippingAddress","type":"string"}],"name":"addOrder","outputs":[{"name":"","type":"bool"}],"payable":true,"type":"function"},{"constant":true,"inputs":[],"name":"listing_rate","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"abortOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"removeListing","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"toggleMarketFreeze","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"original_price","type":"uint256"}],"name":"getListingFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"new_num","type":"uint256"}],"name":"change_bad_seller_threshold","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"database","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[],"name":"recover_funds","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"disputeOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"new_rate","type":"uint256"}],"name":"changeListingRate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextListingID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"_id","type":"uint256"}],"name":"isBadListing","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newAddress","type":"address"}],"name":"changeDatabaseAddress","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"databaseAddress","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"confirmShipment","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"new_rate","type":"uint256"}],"name":"changeOrderRate","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"original_price","type":"uint256"}],"name":"buildOrderFee","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextOrderID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"index","type":"uint256"}],"name":"confirmDelivery","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"inputs":[{"name":"_databaseAddress","type":"address"}],"payable":false,"type":"constructor"}]);
var database_contract = web3.eth.contract([{"constant":true,"inputs":[],"name":"nextFreeOrderID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getListing","outputs":[{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"string"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getNextFreeListingID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"abortOrder","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"removeListing","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newMarket","type":"address"}],"name":"changeMarket","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_buyer","type":"address"},{"name":"_seller","type":"address"},{"name":"_shippingAddress","type":"string"},{"name":"_contractAddress","type":"address"},{"name":"_listingID","type":"uint256"}],"name":"addOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"market","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"isValidListing","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"_seller","type":"address"},{"name":"_title","type":"string"},{"name":"_description","type":"string"},{"name":"_publicKey","type":"string"},{"name":"_price","type":"uint256"}],"name":"addListing","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"owner","outputs":[{"name":"","type":"address"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"disputeOrder","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"orders","outputs":[{"name":"buyer","type":"address"},{"name":"seller","type":"address"},{"name":"shippingAddress","type":"string"},{"name":"contractAddress","type":"address"},{"name":"listingID","type":"uint256"},{"name":"orderStatus","type":"uint256"},{"name":"timeListed","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"isValidOrder","outputs":[{"name":"","type":"bool"}],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"getNextFreeOrderID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"id","type":"uint256"}],"name":"getOrder","outputs":[{"name":"","type":"address"},{"name":"","type":"address"},{"name":"","type":"string"},{"name":"","type":"address"},{"name":"","type":"uint256"},{"name":"","type":"uint256"},{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":true,"inputs":[{"name":"","type":"uint256"}],"name":"listings","outputs":[{"name":"seller","type":"address"},{"name":"title","type":"string"},{"name":"listingDescription","type":"string"},{"name":"publicKey","type":"string"},{"name":"price","type":"uint256"},{"name":"timeListed","type":"uint256"},{"name":"salesSuccessful","type":"uint256"},{"name":"salesDisputed","type":"uint256"},{"name":"lastsuccessfulSale","type":"uint256"},{"name":"enabled","type":"bool"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"confirmShipment","outputs":[],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"newOwner","type":"address"}],"name":"transferOwnership","outputs":[],"payable":false,"type":"function"},{"constant":true,"inputs":[],"name":"nextFreeListingID","outputs":[{"name":"","type":"uint256"}],"payable":false,"type":"function"},{"constant":false,"inputs":[{"name":"id","type":"uint256"}],"name":"confirmDelivery","outputs":[],"payable":false,"type":"function"}]);


//load the most recent version of the market
var EM_base = em_base_contract.at(em_base);
var em_cv = EM_base.currentVersion();

//connect to our contract on the ethereum network
EV = eternalmarketContract.at(em_cv);

//load the current database of listings and orders
var db = EV.databaseAddress();
DB = database_contract.at(db);



accounts = web3.eth.accounts;
    if(accounts.length>0){
        //user has an account loaded, display address and balance
        //document.getElementById("coinbase").innerHTML = 'Your Address: ' + accounts[0] + ', Balance: '+ web3.fromWei(web3.eth.getBalance(accounts[0]), "ether");
    }
    else{
        //user does not have an account loaded
    //document.getElementById("coinbase").innerHTML = 'Your Address: NaN - Connect an Ethereum address to buy or sell on the market!';
    }
//returns the state of an order as a string, given the int value of the state of the purchase contract
function getOrderState(state){
	
	if(state == 0){ return  "Confirm Shipment";}
	if(state == 1){ return  "Awaiting Delivery Confirmation";}
    if(state == 2){ return  "Delivered Successfully";}
    if(state == 3){ return  "Disputed";}
	return -1;
}


Template.buy.helpers({
	ListingsDB: function (){
		return ListingsDB;
}
});

loadDatabases();


      

